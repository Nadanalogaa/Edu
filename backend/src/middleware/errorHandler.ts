import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let error = { ...err };
  error.message = err.message;

  // Log error for debugging
  console.error(err);

  // PostgreSQL: malformed id or value (e.g. "abc" for a UUID column)
  if (err.code === '22P02') {
    const message = 'Resource not found';
    error = { message, statusCode: 404 };
  }

  // PostgreSQL: unique violation
  if (err.code === '23505') {
    const message = 'Duplicate field value entered';
    error = { message, statusCode: 400 };
  }

  // PostgreSQL: missing required value / value outside the allowed list
  if (err.code === '23502' || err.code === '23514') {
    const message = `Invalid or missing field${err.column ? `: ${err.column}` : ''}`;
    error = { message, statusCode: 400 };
  }

  // Upload problems (file too large, wrong field) are the user's to fix
  if (err.name === 'MulterError') {
    const message = err.code === 'LIMIT_FILE_SIZE' ? 'The file is too large (5 MB at most)' : err.message;
    error = { message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
};
