import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { errorHandler, notFound } from './middleware/errorHandler';

// Import routes
import authRoutes from './routes/authRoutes';
import questionRoutes from './routes/questionRoutes';
import studentRoutes from './routes/studentRoutes';
import registrationRoutes from './routes/registration';
import adminRoutes from './routes/admin';
import schoolRoutes from './routes/school';
import ownerRoutes from './routes/owner';
import syllabusRoutes from './routes/syllabus';

// Load environment variables (before modules that read them, e.g. the database pool)
dotenv.config();

import connectDB from './config/database';
import { seedIfEmpty } from './utils/seed';
import { ensureOwner } from './utils/owner';

// Initialize Express app
const app: Application = express();

// Middleware
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  process.env.FRONTEND_URL || '',
].filter(Boolean);

// Cross-site browser requests are allowed only from the frontend URLs above.
// Same-site requests (the app served by this server, on any host name) and
// non-browser clients are always allowed; other sites just get no CORS headers.
app.use(
  cors((req, callback) => {
    const origin = req.headers.origin;
    let sameSite = false;
    try {
      sameSite = Boolean(origin) && new URL(origin as string).host === req.headers.host;
    } catch {
      // Origin "null" (sandboxed pages) is not same-site
    }
    callback(null, {
      origin: !origin || sameSite || allowedOrigins.includes(origin),
      credentials: true,
    });
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory (backend/uploads, also used by multer)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Request logger (development)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Routes
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'EduCore API',
    version: '1.0.0',
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'ok',
    message: 'Server is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/registration', registrationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/school', schoolRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/syllabus', syllabusRoutes);

// In the Docker image the built frontend sits next to the backend and is served
// from the same origin, so the app needs no separate frontend host.
const frontendDist = process.env.FRONTEND_DIST || path.join(__dirname, '../../dist');
if (fs.existsSync(path.join(frontendDist, 'index.html'))) {
  app.use(express.static(frontendDist));
  app.get(/^\/(?!api\/|uploads\/).*/, (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
  console.log(`Serving frontend from ${frontendDist}`);
}

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server once the database is ready
const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  if (process.env.SEED_DEMO_DATA === 'true') {
    await seedIfEmpty();
  }
  await ensureOwner();

  app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
};

start().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

export default app;
