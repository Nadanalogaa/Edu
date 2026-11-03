import { Request, Response } from 'express';
import { Users, findUserByEmail, findStudentByAdmission, findUserWithPassword, comparePassword, hashPassword } from '../models/User';
import { Schools } from '../models/School';
import { schoolBlockReason } from '../utils/tenancy';
import { generateToken } from '../utils/jwt';
import { AuthRequest } from '../middleware/auth';

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, schoolCode, admissionNumber } = req.body;
    const byAdmission = Boolean(schoolCode || admissionNumber);

    // Validate input: staff sign in with email, students with school code + admission number
    if (!password || (byAdmission ? !schoolCode || !admissionNumber : !email)) {
      return res.status(400).json({
        success: false,
        message: byAdmission
          ? 'Please provide school code, admission number and password'
          : 'Please provide email and password',
      });
    }

    // Check for user (include password for comparison)
    let user = byAdmission
      ? await findStudentByAdmission(schoolCode, admissionNumber, { withPassword: true })
      : await findUserByEmail(email, { withPassword: true });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Check password
    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Check if user is active (self-registered users wait for their school's approval)
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Your account is not active yet. Please ask your school to approve it.',
      });
    }

    // Check the school is approved, active and paid up
    const school = user.schoolId ? await Schools.findById(user.schoolId) : null;
    const blocked = user.role === 'owner' ? null : schoolBlockReason(school);
    if (blocked) {
      return res.status(403).json({
        success: false,
        message: blocked,
      });
    }

    // Update last activity for students (for streak calculation)
    if (user.role === 'student') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const lastActivity = user.lastActivityDate ? new Date(user.lastActivityDate) : null;
      if (lastActivity) {
        lastActivity.setHours(0, 0, 0, 0);
      }

      const daysDiff = lastActivity
        ? Math.floor((today.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24))
        : 0;

      let streak = user.streak || 0;
      if (daysDiff === 1) {
        // Consecutive day - increment streak
        streak += 1;
      } else if (daysDiff > 1) {
        // Streak broken
        streak = 1;
      }
      // If daysDiff === 0, same day - don't change streak

      user = (await Users.updateById(user._id, { streak, lastActivityDate: new Date() }))!;
    }

    // Generate token
    const token = generateToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          schoolId: user.schoolId,
          grade: user.grade,
          classGrade: user.classGrade,
          section: user.section,
          admissionNumber: user.admissionNumber,
          board: school?.board,
          schoolName: school?.name,
          language: user.language,
          theme: user.theme,
          coins: user.coins,
          streak: user.streak,
          totalPoints: user.totalPoints,
        },
        token,
      },
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error logging in',
    });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    const user = await Users.findById(req.user._id);
    if (user?.schoolId) {
      const school = await Schools.findById(user.schoolId);
      user.schoolId = school;
      user.board = school?.board;
      user.schoolName = school?.name;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    console.error('Get me error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching user data',
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const { name, phone, language, theme, grade } = req.body;

    const updates: Record<string, any> = {};
    if (name) updates.name = name;
    if (phone) updates.phone = phone;
    if (language) updates.language = language;
    if (theme) updates.theme = theme;
    if (grade) updates.grade = grade;

    const user = await Users.updateById(req.user._id, updates);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: user,
    });
  } catch (error: any) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating profile',
    });
  }
};

// @desc    Change own password
// @route   PUT /api/auth/password
// @access  Private
export const changePassword = async (req: AuthRequest, res: Response) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Please provide your current and new password',
      });
    }
    if (String(newPassword).length < 6) {
      return res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters',
      });
    }

    const user = await findUserWithPassword(req.user._id);
    if (!user || !(await comparePassword(currentPassword, user.password))) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect',
      });
    }

    await Users.updateById(user._id, { password: await hashPassword(newPassword) });

    res.status(200).json({
      success: true,
      message: 'Password changed successfully',
    });
  } catch (error: any) {
    console.error('Change password error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error changing password',
    });
  }
};
