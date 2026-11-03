import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { Schools } from '../models/School';
import { Users, createUser, findUserByEmail, hashPassword } from '../models/User';
import { isBoard } from '../models/Syllabus';
import { query, withTransaction } from '../config/database';
import { HttpError } from '../utils/tenancy';
import { randomInt } from 'crypto';

// The owner (platform owner) manages schools as customers: approves them, sets
// their board, paid student limit and subscription end date.

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({ success: false, message: error.message });
  }
  if (error.code === '23505') {
    const message = String(error.constraint).includes('code')
      ? 'This school code is already used'
      : 'This email is already registered';
    return res.status(400).json({ success: false, message });
  }
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const SCHOOL_USAGE_SQL = `
  SELECT s.*,
    (SELECT count(*)::int FROM users u WHERE u.school_id = s.id AND u.role = 'student' AND u.is_active) AS active_students,
    (SELECT count(*)::int FROM users u WHERE u.school_id = s.id AND u.role = 'student' AND NOT u.is_active) AS pending_students,
    (SELECT count(*)::int FROM users u WHERE u.school_id = s.id AND u.role = 'teacher' AND u.is_active) AS active_teachers,
    (SELECT json_agg(json_build_object('_id', u.id, 'name', u.name, 'email', u.email) ORDER BY u.created_at)
       FROM users u WHERE u.school_id = s.id AND u.role = 'admin') AS admins
  FROM schools s`;

/** Validates the commercial fields the owner can set on a school. */
const schoolSettings = (body: any) => {
  const settings: Record<string, any> = {};
  if (body.board !== undefined) {
    if (!isBoard(body.board)) throw new HttpError(400, 'Board must be state_board or cbse');
    settings.board = body.board;
  }
  if (body.studentLimit !== undefined) {
    const limit = Number(body.studentLimit);
    if (!Number.isInteger(limit) || limit < 0) throw new HttpError(400, 'Student limit must be a whole number');
    settings.studentLimit = limit;
  }
  if (body.subscriptionExpiresAt !== undefined) {
    const value = body.subscriptionExpiresAt || null;
    if (value && !DATE_RE.test(value)) throw new HttpError(400, 'Expiry date must be YYYY-MM-DD');
    settings.subscriptionExpiresAt = value;
  }
  if (body.registrationStatus !== undefined) {
    if (!['pending', 'approved', 'rejected'].includes(body.registrationStatus)) {
      throw new HttpError(400, 'Status must be pending, approved or rejected');
    }
    settings.registrationStatus = body.registrationStatus;
  }
  if (body.isActive !== undefined) settings.isActive = Boolean(body.isActive);
  for (const field of ['name', 'notes', 'city', 'phone', 'email', 'principal']) {
    if (body[field] !== undefined) settings[field] = body[field];
  }
  return settings;
};

// @desc    Totals across all schools
// @route   GET /api/owner/overview
export const getOverview = async (req: AuthRequest, res: Response) => {
  try {
    const [totals] = await query(`
      SELECT
        count(*)::int AS schools,
        count(*) FILTER (WHERE registration_status = 'approved' AND is_active
          AND (subscription_expires_at IS NULL OR subscription_expires_at >= current_date))::int AS active_schools,
        count(*) FILTER (WHERE registration_status = 'pending')::int AS pending_schools,
        count(*) FILTER (WHERE subscription_expires_at < current_date)::int AS expired_schools,
        COALESCE(sum(student_limit) FILTER (WHERE registration_status = 'approved'), 0)::int AS licensed_seats
      FROM schools`);
    const [people] = await query(`
      SELECT
        count(*) FILTER (WHERE role = 'student' AND is_active)::int AS active_students,
        count(*) FILTER (WHERE role = 'teacher' AND is_active)::int AS active_teachers
      FROM users WHERE school_id IS NOT NULL`);
    const [content] = await query(
      `SELECT count(*)::int AS shared_questions FROM questions WHERE school_id IS NULL AND is_active`
    );

    res.status(200).json({
      success: true,
      data: {
        schools: totals.schools,
        activeSchools: totals.active_schools,
        pendingSchools: totals.pending_schools,
        expiredSchools: totals.expired_schools,
        licensedSeats: totals.licensed_seats,
        activeStudents: people.active_students,
        activeTeachers: people.active_teachers,
        sharedQuestions: content.shared_questions,
      },
    });
  } catch (error: any) {
    sendError(res, error, 'Owner overview');
  }
};

// @desc    All schools with their usage
// @route   GET /api/owner/schools
export const listSchools = async (req: AuthRequest, res: Response) => {
  try {
    const { status, search } = req.query;
    const params: any[] = [];
    const where: string[] = [];
    if (status) {
      params.push(status);
      where.push(`s.registration_status = $${params.length}`);
    }
    if (search) {
      params.push(`%${String(search).trim()}%`);
      where.push(`(s.name ILIKE $${params.length} OR s.code ILIKE $${params.length} OR s.city ILIKE $${params.length})`);
    }

    const schools = await Schools.select(
      `${SCHOOL_USAGE_SQL} ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
       ORDER BY (s.registration_status = 'pending') DESC, s.created_at DESC`,
      params
    );
    res.status(200).json({ success: true, count: schools.length, data: schools });
  } catch (error: any) {
    sendError(res, error, 'List schools');
  }
};

// @desc    Create a school and its admin login (approved immediately)
// @route   POST /api/owner/schools
export const createSchool = async (req: AuthRequest, res: Response) => {
  try {
    const { name, code, city, address, state, pincode, phone, email, principal, adminName, adminEmail, adminPassword } =
      req.body;

    if (!name || !code) throw new HttpError(400, 'School name and code are required');
    if (!isBoard(req.body.board)) throw new HttpError(400, 'Please choose the board');
    if (!adminEmail || !EMAIL_RE.test(String(adminEmail))) throw new HttpError(400, 'A valid admin email is required');
    if (!adminPassword || String(adminPassword).length < 6) {
      throw new HttpError(400, 'Admin password must be at least 6 characters');
    }
    if (await findUserByEmail(adminEmail)) throw new HttpError(400, 'This admin email is already registered');

    const school = await withTransaction(async (client) => {
      const school = await Schools.insert(
        {
          name: String(name).trim(),
          code: String(code).trim().toUpperCase(),
          address: address || city || '-',
          city: city || '-',
          state: state || 'Tamil Nadu',
          pincode: pincode || '-',
          phone: phone || '-',
          email: String(email || adminEmail).trim().toLowerCase(),
          principal,
          registrationStatus: 'approved',
          ...schoolSettings(req.body),
        },
        client
      );
      await createUser(
        {
          name: adminName || principal || `${school.name} Admin`,
          email: adminEmail,
          password: adminPassword,
          role: 'admin',
          schoolId: school._id,
          isActive: true,
        },
        client
      );
      return school;
    });

    res.status(201).json({ success: true, message: `${school.name} created`, data: school });
  } catch (error: any) {
    sendError(res, error, 'Create school');
  }
};

// @desc    Approve/reject a school, set its board, student limit, expiry, active
// @route   PATCH /api/owner/schools/:id
export const updateSchool = async (req: AuthRequest, res: Response) => {
  try {
    const school = await Schools.updateById(req.params.id, schoolSettings(req.body));
    if (!school) throw new HttpError(404, 'School not found');
    res.status(200).json({ success: true, message: 'School saved', data: school });
  } catch (error: any) {
    sendError(res, error, 'Update school');
  }
};

// @desc    Set a new password for a school admin
// @route   POST /api/owner/schools/:id/reset-admin-password
export const resetSchoolAdminPassword = async (req: AuthRequest, res: Response) => {
  try {
    const { adminId } = req.body;
    let password = String(req.body.password || '').trim();
    if (password && password.length < 6) throw new HttpError(400, 'Password must be at least 6 characters');
    const generated = !password;
    if (generated) {
      const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
      password = Array.from({ length: 10 }, () => chars[randomInt(chars.length)]).join('');
    }

    const admin = adminId ? await Users.findById(adminId) : null;
    if (!admin || admin.role !== 'admin' || admin.schoolId !== req.params.id) {
      throw new HttpError(404, 'School admin not found');
    }

    await Users.updateById(admin._id, { password: await hashPassword(password) });
    res.status(200).json({
      success: true,
      message: `Password reset for ${admin.email}`,
      ...(generated && { generatedPassword: password }),
    });
  } catch (error: any) {
    sendError(res, error, 'Reset school admin password');
  }
};
