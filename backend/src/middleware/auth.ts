import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { Users } from '../models/User';
import { Schools } from '../models/School';
import { schoolBlockReason } from '../utils/tenancy';

export interface AuthRequest extends Request {
  user?: any;
  school?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    let token: string | undefined;

    // Get token from Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route',
      });
    }

    try {
      // Verify token
      const decoded = verifyToken(token);

      // Get user from database
      const user = await Users.findById(decoded.id);

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'User not found',
        });
      }

      if (!user.isActive) {
        return res.status(401).json({
          success: false,
          message: 'User account is deactivated',
        });
      }

      // A school that is pending, inactive or expired locks out all its users
      const school = user.schoolId ? await Schools.findById(user.schoolId) : null;
      const blocked = user.role === 'owner' ? null : schoolBlockReason(school);
      if (blocked) {
        return res.status(403).json({
          success: false,
          message: blocked,
        });
      }

      // Attach user to request
      req.user = user;
      req.school = school;
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error during authentication',
    });
  }
};

// Middleware to authorize specific roles
export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized',
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Role ${req.user.role} is not authorized to access this route`,
      });
    }

    next();
  };
};
