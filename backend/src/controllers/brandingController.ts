import { Response, Request } from 'express';
import fs from 'fs';
import path from 'path';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { isUuid } from '../db/table';
import { HttpError } from '../utils/tenancy';

// School branding: a logo and a main colour. The owner sets it for any school,
// a school admin for their own. Students, teachers and the school's sign-in page
// (/s/<school code>) then show the school's logo and colours.

const HEX = /^#[0-9a-fA-F]{6}$/;

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) return res.status(error.status).json({ success: false, message: error.message });
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const view = (s: any) => ({ _id: s.id, name: s.name, code: s.code, board: s.board, logoUrl: s.logo_url, brandColor: s.brand_color });

/** The school the request may brand: the owner names it, an admin brands their own. */
const schoolFor = async (req: AuthRequest) => {
  const id = req.user.role === 'owner' ? req.params.id : req.user.schoolId;
  if (!isUuid(id)) throw new HttpError(404, 'School not found');
  const [school] = await query('SELECT * FROM schools WHERE id = $1', [id]);
  if (!school) throw new HttpError(404, 'School not found');
  return school;
};

const removeFile = (url?: string | null) => {
  if (!url || !url.startsWith('/uploads/logos/')) return;
  fs.unlink(path.join(__dirname, '../../uploads/logos', path.basename(url)), () => undefined);
};

// @route   GET /api/school/branding  |  GET /api/owner/schools/:id/branding
export const getBranding = async (req: AuthRequest, res: Response) => {
  try {
    res.status(200).json({ success: true, data: view(await schoolFor(req)) });
  } catch (error: any) {
    sendError(res, error, 'Branding');
  }
};

// @route   PUT /api/school/branding  |  PUT /api/owner/schools/:id/branding   { brandColor: '#rrggbb' | null }
export const setBrandColor = async (req: AuthRequest, res: Response) => {
  try {
    const school = await schoolFor(req);
    const color = req.body?.brandColor;
    if (color !== null && !(typeof color === 'string' && HEX.test(color))) throw new HttpError(400, 'Choose a colour like #8b1e3f');
    const [row] = await query('UPDATE schools SET brand_color = $2, updated_at = now() WHERE id = $1 RETURNING *', [school.id, color ? color.toLowerCase() : null]);
    res.status(200).json({ success: true, message: 'Colour saved', data: view(row) });
  } catch (error: any) {
    sendError(res, error, 'Save colour');
  }
};

// @route   POST /api/school/branding/logo  |  POST /api/owner/schools/:id/logo   (multipart field "logo")
export const uploadSchoolLogo = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) throw new HttpError(400, 'Choose a logo picture');
    const school = await schoolFor(req);
    const url = `/uploads/logos/${req.file.filename}`;
    const [row] = await query('UPDATE schools SET logo_url = $2, updated_at = now() WHERE id = $1 RETURNING *', [school.id, url]);
    removeFile(school.logo_url);
    res.status(200).json({ success: true, message: 'Logo saved', data: view(row) });
  } catch (error: any) {
    if (req.file) fs.unlink(req.file.path, () => undefined);
    sendError(res, error, 'Upload logo');
  }
};

// @route   DELETE /api/school/branding/logo  |  DELETE /api/owner/schools/:id/logo
export const removeSchoolLogo = async (req: AuthRequest, res: Response) => {
  try {
    const school = await schoolFor(req);
    const [row] = await query('UPDATE schools SET logo_url = NULL, updated_at = now() WHERE id = $1 RETURNING *', [school.id]);
    removeFile(school.logo_url);
    res.status(200).json({ success: true, message: 'Logo removed', data: view(row) });
  } catch (error: any) {
    sendError(res, error, 'Remove logo');
  }
};

// @desc    Name, logo and colour for a school's own sign-in page (no login needed)
// @route   GET /api/public/school/:code
export const publicSchool = async (req: Request, res: Response) => {
  try {
    const code = String(req.params.code || '').trim().toUpperCase();
    if (!/^[A-Z0-9_-]{2,20}$/.test(code)) throw new HttpError(404, 'School not found');
    const [school] = await query(
      `SELECT * FROM schools WHERE upper(code) = $1 AND is_active AND registration_status = 'approved'`,
      [code]
    );
    if (!school) throw new HttpError(404, 'School not found');
    res.status(200).json({ success: true, data: { name: school.name, code: school.code, logoUrl: school.logo_url, brandColor: school.brand_color } });
  } catch (error: any) {
    sendError(res, error, 'School');
  }
};
