# Education Intelligence - Backend API

Backend API for the NEET & JEE Learning Platform built with Node.js, Express, TypeScript, and MongoDB.

## Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control (Admin, Teacher, Student)
- **User Management**: CRUD operations for students, teachers, and admins
- **Question Bank**: Manage questions with multi-language support (English & Tamil)
- **Test Management**: Create and manage practice tests and exams
- **Performance Tracking**: Track student attempts, scores, and analytics
- **Mistake Book**: Automatically track incorrect answers for review
- **Gamification**: Coins, streaks, and points system for students
- **Live Classes**: Schedule and manage live classes

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn

## Installation

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already configured with your MongoDB URI):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

## Running the Application

### Development Mode
```bash
npm run dev
```
Server will start on http://localhost:5000

### Production Mode
```bash
npm run build
npm start
```

### Seed Database
Populate the database with demo data:
```bash
npm run seed
```

This will create:
- 1 Demo School
- 3 Users (Admin, Teacher, Student)
- 8 Sample Questions across Physics, Chemistry, Biology, and Maths

## Demo Credentials

After seeding the database, use these credentials:

- **Admin**: admin@school.com / admin123
- **Teacher**: teacher@school.com / teacher123
- **Student**: student@school.com / student123

## API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `GET /me` - Get current user (Protected)
- `PUT /profile` - Update user profile (Protected)

### Questions (`/api/questions`)
- `GET /` - Get all questions with filters
- `GET /random` - Get random questions for practice/test
- `GET /topics/:subject` - Get topics by subject
- `GET /:id` - Get question by ID
- `POST /` - Create question (Teacher/Admin only)
- `PUT /:id` - Update question (Teacher/Admin only)
- `DELETE /:id` - Delete question (Admin only)

### Student Operations (`/api/student`)
- `POST /attempts/start` - Start a new test attempt
- `POST /attempts/:id/submit` - Submit test attempt
- `GET /attempts` - Get student's attempts
- `GET /analytics` - Get performance analytics
- `GET /mistakes` - Get mistake book entries
- `PUT /mistakes/:id/review` - Mark mistake as reviewed

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.ts    # Authentication logic
│   │   ├── questionController.ts # Question CRUD
│   │   └── studentController.ts # Student operations
│   ├── middleware/
│   │   ├── auth.ts              # JWT authentication
│   │   └── errorHandler.ts     # Error handling
│   ├── models/
│   │   ├── User.ts              # User schema
│   │   ├── School.ts            # School schema
│   │   ├── Question.ts          # Question schema
│   │   ├── Test.ts              # Test schema
│   │   ├── StudentAttempt.ts    # Attempt schema
│   │   ├── MistakeBook.ts       # Mistake tracking
│   │   ├── LiveClass.ts         # Live class schema
│   │   └── DailyChallenge.ts    # Daily challenge schema
│   ├── routes/
│   │   ├── authRoutes.ts        # Auth routes
│   │   ├── questionRoutes.ts    # Question routes
│   │   └── studentRoutes.ts     # Student routes
│   ├── utils/
│   │   ├── jwt.ts               # JWT utilities
│   │   └── seed.ts              # Database seeding
│   └── server.ts                # Express app entry point
├── .env                         # Environment variables
├── .gitignore                   # Git ignore file
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
└── nodemon.json                 # Nodemon config
```

## Database Models

### User
- Students, Teachers, and Admins
- Includes gamification fields (coins, streak, points)
- Password hashing with bcrypt

### School
- School information and management

### Question
- Multi-language support (English & Tamil)
- Subject categorization
- Difficulty levels
- Video explanations

### StudentAttempt
- Track test attempts
- Store answers and results
- Performance metrics

### MistakeBook
- Automatically populated with wrong answers
- Review tracking

## Development Notes

- All routes (except auth) require JWT authentication
- Role-based authorization implemented via middleware
- Passwords are automatically hashed before saving
- Student streaks are automatically updated on login
- Coins are awarded based on performance (1 coin per 4 marks)

## Future Enhancements

- Teacher dashboard endpoints
- Admin management endpoints
- Test creation and management endpoints
- Live class endpoints
- Daily challenge endpoints
- File upload for profile images
- Email notifications
- Real-time features with Socket.io

## License

MIT
