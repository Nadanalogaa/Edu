import { Request, Response } from 'express';
import { Users, createUser, findUserByEmail, comparePassword } from '../models/User';
import { Schools } from '../models/School';
import { generateToken } from '../utils/jwt';
import { AuthRequest } from '../middleware/auth';

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role, schoolId, grade, phone } = req.body;

    // Check if user already exists
    const userExists = await findUserByEmail(email);

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email',
      });
    }

    // Create user
    const user = await createUser({
      name,
      email,
      password,
      role,
      schoolId,
      grade,
      phone,
    });

    // Generate token
    const token = generateToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          schoolId: user.schoolId,
          grade: user.grade,
          language: user.language,
          theme: user.theme,
        },
        token,
      },
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message || 'Error registering user',
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    // Check for user (include password for comparison)
    let user = await findUserByEmail(email, { withPassword: true });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Your account has been deactivated',
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
      user.schoolId = await Schools.findById(user.schoolId);
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
