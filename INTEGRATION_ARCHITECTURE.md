# Full-Stack Integration Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React + Vite)                   │
│                      http://localhost:3000                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌───────────────┐  ┌────────────────┐  ┌───────────────┐      │
│  │  Admin Module │  │ Teacher Module │  │ Student Module│      │
│  └───────┬───────┘  └────────┬───────┘  └───────┬───────┘      │
│          │                   │                   │              │
│          └───────────────────┼───────────────────┘              │
│                              │                                  │
│                    ┌─────────▼─────────┐                        │
│                    │   API Service     │ (Axios)                │
│                    │   Layer           │                        │
│                    └─────────┬─────────┘                        │
└──────────────────────────────┼──────────────────────────────────┘
                               │
                               │ HTTP/REST + JWT
                               │
┌──────────────────────────────▼──────────────────────────────────┐
│                   BACKEND (Node.js + Express)                    │
│                      http://localhost:5001                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │   Auth   │  │  Admin   │  │ Teacher  │  │ Student  │        │
│  │  Routes  │  │  Routes  │  │  Routes  │  │  Routes  │        │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘        │
│       │             │              │             │              │
│  ┌────▼─────────────▼──────────────▼─────────────▼─────┐        │
│  │           Controllers & Middleware                   │        │
│  │   (JWT Auth, Role-Based Access Control)             │        │
│  └────────────────────────┬─────────────────────────────┘        │
│                           │                                      │
│  ┌────────────────────────▼─────────────────────────────┐        │
│  │              Mongoose Models (ODM)                   │        │
│  └────────────────────────┬─────────────────────────────┘        │
└───────────────────────────┼──────────────────────────────────────┘
                            │
┌───────────────────────────▼──────────────────────────────────────┐
│                   MongoDB Atlas Database                         │
│               mongodb+srv://cluster0.clknaq9.mongodb.net         │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌────────┐ ┌─────────┐ ┌──────────┐ ┌─────────────┐           │
│  │ Users  │ │ Schools │ │Questions │ │StudentAttempt│           │
│  └────────┘ └─────────┘ └──────────┘ └─────────────┘           │
│  ┌────────┐ ┌─────────┐ ┌──────────┐ ┌─────────────┐           │
│  │ Tests  │ │LiveClass│ │MistakeBook│ │DailyChallenge│          │
│  └────────┘ └─────────┘ └──────────┘ └─────────────┘           │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

## Module-to-Backend Mapping

### 🎯 What's Already Built (Backend)

#### ✅ Completed APIs:

**Authentication** (`/api/auth`)
- ✅ POST `/register` - Create new user
- ✅ POST `/login` - Authenticate user (returns JWT)
- ✅ GET `/me` - Get current user info
- ✅ PUT `/profile` - Update user profile

**Questions** (`/api/questions`)
- ✅ GET `/` - Get questions with filters (subject, topic, difficulty)
- ✅ GET `/random` - Get random questions for practice
- ✅ GET `/topics/:subject` - Get topics for a subject
- ✅ GET `/:id` - Get single question
- ✅ POST `/` - Create question (Teacher/Admin)
- ✅ PUT `/:id` - Update question (Teacher/Admin)
- ✅ DELETE `/:id` - Delete question (Admin)

**Student Operations** (`/api/student`)
- ✅ POST `/attempts/start` - Start test attempt
- ✅ POST `/attempts/:id/submit` - Submit test with answers
- ✅ GET `/attempts` - Get exam history
- ✅ GET `/analytics` - Get performance analytics
- ✅ GET `/mistakes` - Get mistake book
- ✅ PUT `/mistakes/:id/review` - Mark mistake reviewed

### 🔨 What Needs to Be Built (Backend)

**Admin Operations** (`/api/admin`) - NEW
- ⏳ GET `/stats` - Dashboard metrics
- ⏳ GET `/schools` - List all schools with performance
- ⏳ GET `/schools/:id` - Get single school
- ⏳ POST `/schools` - Create school
- ⏳ PUT `/schools/:id` - Update school
- ⏳ DELETE `/schools/:id` - Delete school
- ⏳ GET `/teachers` - List all teachers
- ⏳ GET `/students/at-risk` - Low-performing students
- ⏳ GET `/performance-trend` - State-wide trends
- ⏳ GET `/reports` - Generate reports

**Teacher Operations** (`/api/teacher`) - NEW
- ⏳ GET `/stats` - Class overview metrics
- ⏳ GET `/students` - My students list
- ⏳ GET `/students/at-risk` - Struggling students
- ⏳ GET `/performance-trend` - Class performance over time
- ⏳ GET `/topics-heatmap` - Topic understanding map
- ⏳ POST `/tests` - Create new test
- ⏳ GET `/tests` - My created tests
- ⏳ GET `/analytics` - Detailed analytics

**Student Enhancements** (Extend `/api/student`) - NEW
- ⏳ GET `/focus-areas` - Weak topics identification
- ⏳ GET `/daily-challenge` - Get today's challenge
- ⏳ POST `/daily-challenge/complete` - Complete challenge
- ⏳ GET `/gamification` - Get coins, streak, achievements
- ⏳ PUT `/gamification/update` - Update coins/streak

**Live Classes** (`/api/live-classes`) - NEW
- ⏳ GET `/` - List available classes
- ⏳ GET `/:id` - Get class details
- ⏳ POST `/` - Create class (Teacher)
- ⏳ POST `/:id/enroll` - Enroll in class (Student)
- ⏳ GET `/my-classes` - My enrolled classes (Student)

---

## Detailed Integration Plan by Module

### 1️⃣ STUDENT MODULE INTEGRATION

**Current State:** Most feature-complete, uses localStorage

**Components to Update:**
```
components/student/
├── ExamMode.tsx          → Connect to /api/student/attempts
├── PracticeMode.tsx      → Connect to /api/questions/random
├── MistakeBook.tsx       → Connect to /api/student/mistakes
└── StudentDashboard.tsx  → Connect to /api/student/analytics
```

#### Integration Steps:

**A. Authentication Flow**
```
Login → POST /api/auth/login → Get JWT token → Store in localStorage
↓
All API calls include: Authorization: Bearer {token}
```

**B. Practice Mode Flow**
```javascript
// OLD: Static import
import { questionsByTopic } from '../data/questions'

// NEW: API call
const response = await api.get('/questions/random', {
  params: { subject, topic, count: 10 }
})

// Save mistakes
await api.post('/student/mistakes', {
  questionId, selectedAnswer, correctAnswer
})
```

**C. Exam Mode Flow**
```javascript
// 1. Start Exam
const attempt = await api.post('/student/attempts/start', {
  testId: 'practice',
  questionIds: questions.map(q => q._id),
  totalMarks: questions.length * 4
})

// 2. Submit Exam
await api.post(`/student/attempts/${attemptId}/submit`, {
  answers: [
    { questionId, selectedAnswer, timeTaken }
  ],
  timeTaken: totalTime
})
// Backend auto-grades and returns results
```

**D. Dashboard Data**
```javascript
// Get analytics
const analytics = await api.get('/student/analytics')
// Returns: subject-wise performance, overall stats

// Get exam history
const attempts = await api.get('/student/attempts')

// Get mistakes
const mistakes = await api.get('/student/mistakes')

// Get gamification stats
const gamification = await api.get('/student/gamification')
```

**Data Migration:**
- Convert localStorage.examHistory → Backend database
- Convert localStorage.mistakeBook → Backend database
- Coins/Streak → Backend managed

---

### 2️⃣ TEACHER MODULE INTEGRATION

**Current State:** Only dashboard with static data

**Components to Create/Update:**
```
components/teacher/
├── TeacherDashboard.tsx  → Connect to /api/teacher/stats
├── MyStudents.tsx        → NEW: /api/teacher/students
├── CreateTest.tsx        → NEW: /api/teacher/tests + /api/questions
├── QuestionBank.tsx      → NEW: /api/questions (teacher can create)
└── Analytics.tsx         → NEW: /api/teacher/analytics
```

#### New APIs Needed:

**Teacher Stats Endpoint**
```javascript
GET /api/teacher/stats
Response: {
  totalStudents: 45,
  classAverage: 74,
  pendingReviews: 8,
  topPerformer: { name, score },
  performanceTrend: [{ week, avgScore }],
  topicsHeatmap: [{ topic, subject, avgScore, color }],
  studentsAtRisk: [{ name, score, trend }]
}
```

**My Students Endpoint**
```javascript
GET /api/teacher/students
Response: [
  {
    id, name, grade, school,
    overallScore, attemptRate,
    performanceTrend, riskLevel
  }
]
```

**Create Test Workflow**
```javascript
// 1. Get questions
const questions = await api.get('/questions', {
  params: { subject, topic, difficulty }
})

// 2. Create test
await api.post('/teacher/tests', {
  title, description, subjects,
  questionIds: selectedQuestions,
  duration, totalMarks, startTime, endTime
})

// 3. Assign to students (future)
await api.post('/teacher/tests/:id/assign', {
  studentIds: [...]
})
```

---

### 3️⃣ ADMIN MODULE INTEGRATION

**Current State:** Only dashboard with static data

**Components to Create/Update:**
```
components/admin/
├── AdminDashboard.tsx     → Connect to /api/admin/stats
├── ManageSchools.tsx      → NEW: /api/admin/schools (CRUD)
├── ManageTeachers.tsx     → NEW: /api/admin/teachers (CRUD)
├── ManageStudents.tsx     → NEW: /api/admin/students (CRUD)
└── Reports.tsx            → NEW: /api/admin/reports
```

#### New APIs Needed:

**Admin Stats Endpoint**
```javascript
GET /api/admin/stats
Response: {
  totalStudents: 12540,
  activeTeachers: 850,
  totalSchools: 45,
  testsConducted: 2120,
  avgPerformance: 72,
  performanceTrend: [{ month, score }],
  topSchools: [{ name, avgScore, topStudent }],
  studentsAtRisk: [{ name, school, score }]
}
```

**School Management**
```javascript
// List schools
GET /api/admin/schools
Response: [{ id, name, code, city, avgScore, studentCount }]

// CRUD operations
POST /api/admin/schools - Create
PUT /api/admin/schools/:id - Update
DELETE /api/admin/schools/:id - Delete (soft delete)
```

**User Management**
```javascript
// List teachers
GET /api/admin/teachers
Response: [{ id, name, email, school, studentCount }]

// List students
GET /api/admin/students
Response: [{ id, name, email, school, grade, performance }]

// Create users
POST /api/admin/users
Body: { name, email, password, role, schoolId, grade }
```

---

## Implementation Roadmap

### 🚀 Phase 1: Foundation (Week 1)

**Backend:**
1. ✅ Authentication & JWT (DONE)
2. ✅ Basic student endpoints (DONE)
3. ✅ Question endpoints (DONE)
4. ⏳ Create admin routes/controllers
5. ⏳ Create teacher routes/controllers
6. ⏳ Add missing student endpoints (gamification, focus areas)

**Frontend:**
1. ⏳ Install axios
2. ⏳ Create API service layer
3. ⏳ Implement token management
4. ⏳ Update Login component
5. ⏳ Create AuthContext for global state

### 🎓 Phase 2: Student Module (Week 2)

**Backend:**
1. ⏳ Migrate existing questions to database
2. ⏳ Implement gamification endpoints
3. ⏳ Implement daily challenge logic
4. ⏳ Add focus areas calculation

**Frontend:**
1. ⏳ Update ExamMode → API integration
2. ⏳ Update PracticeMode → API integration
3. ⏳ Update MistakeBook → API integration
4. ⏳ Update StudentDashboard → Real-time data
5. ⏳ Add loading states & error handling

### 👨‍🏫 Phase 3: Teacher Module (Week 3)

**Backend:**
1. ⏳ Teacher stats aggregation
2. ⏳ Student-teacher relationship
3. ⏳ Test creation endpoints
4. ⏳ Analytics computation

**Frontend:**
1. ⏳ Build MyStudents component
2. ⏳ Build CreateTest component
3. ⏳ Build QuestionBank interface
4. ⏳ Build Analytics dashboard
5. ⏳ Update TeacherDashboard with real data

### 👨‍💼 Phase 4: Admin Module (Week 4)

**Backend:**
1. ⏳ School CRUD operations
2. ⏳ User management endpoints
3. ⏳ System-wide analytics
4. ⏳ Reports generation

**Frontend:**
1. ⏳ Build ManageSchools component (DataTable + Forms)
2. ⏳ Build ManageTeachers component
3. ⏳ Build ManageStudents component
4. ⏳ Build Reports component
5. ⏳ Update AdminDashboard with real data

### 🎨 Phase 5: Polish & Features (Week 5)

1. ⏳ Live Classes full implementation
2. ⏳ File upload (profile images, documents)
3. ⏳ Email notifications
4. ⏳ Real-time updates (Socket.io)
5. ⏳ Mobile responsiveness
6. ⏳ Performance optimization

---

## API Service Layer Architecture

### Frontend Services Structure

```typescript
// services/api.ts - Base configuration
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  headers: { 'Content-Type': 'application/json' }
})

// Add token to all requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle 401 errors (logout on token expiry)
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
```

```typescript
// services/authService.ts
export const authService = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (data) => api.post('/auth/register', data),
  getMe: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data)
}

// services/studentService.ts
export const studentService = {
  getAnalytics: () => api.get('/student/analytics'),
  getAttempts: (params) => api.get('/student/attempts', { params }),
  startAttempt: (data) => api.post('/student/attempts/start', data),
  submitAttempt: (id, data) => api.post(`/student/attempts/${id}/submit`, data),
  getMistakes: (params) => api.get('/student/mistakes', { params }),
  markMistakeReviewed: (id, notes) => api.put(`/student/mistakes/${id}/review`, { notes })
}

// services/questionService.ts
export const questionService = {
  getQuestions: (params) => api.get('/questions', { params }),
  getRandomQuestions: (params) => api.get('/questions/random', { params }),
  getTopics: (subject) => api.get(`/questions/topics/${subject}`),
  createQuestion: (data) => api.post('/questions', data)
}

// services/teacherService.ts (TO CREATE)
export const teacherService = {
  getStats: () => api.get('/teacher/stats'),
  getStudents: () => api.get('/teacher/students'),
  createTest: (data) => api.post('/teacher/tests', data),
  getAnalytics: () => api.get('/teacher/analytics')
}

// services/adminService.ts (TO CREATE)
export const adminService = {
  getStats: () => api.get('/admin/stats'),
  getSchools: () => api.get('/admin/schools'),
  createSchool: (data) => api.post('/admin/schools', data),
  getTeachers: () => api.get('/admin/teachers'),
  getStudents: () => api.get('/admin/students')
}
```

---

## Data Flow Examples

### Example 1: Student Takes Exam

```
Frontend                          Backend                    Database
────────                          ───────                    ────────

1. Select Subject (Physics)
2. Click "Start Exam"
                              →   POST /student/attempts/start
                                  {
                                    testId: 'practice',
                                    questionIds: [...],
                                    totalMarks: 40
                                  }
                                                           →  Insert to StudentAttempt
                                                              Set status: 'in-progress'
                              ←   { attemptId, startTime }

3. Display Questions
4. Answer Questions
5. Click "Submit"
                              →   POST /student/attempts/:id/submit
                                  {
                                    answers: [
                                      { questionId, selectedAnswer, timeTaken }
                                    ],
                                    timeTaken: 300
                                  }
                                                           →  For each answer:
                                                              - Compare with correct answer
                                                              - Calculate marks
                                                              - If wrong, add to MistakeBook

                                                              Update StudentAttempt:
                                                              - correctAnswers count
                                                              - marks obtained
                                                              - percentage
                                                              - status: 'completed'

                                                              Update User:
                                                              - totalPoints += marks
                                                              - coins += marks/4
                              ←   {
                                    marksObtained: 32,
                                    percentage: 80,
                                    correctAnswers: 8,
                                    wrongAnswers: 2,
                                    coinsEarned: 8
                                  }

6. Display Results
7. Update Dashboard
                              →   GET /student/analytics
                                                           →  Aggregate all attempts
                                                              Calculate subject-wise %
                              ←   {
                                    overall: { accuracy: 78% },
                                    subjectPerformance: [...]
                                  }
```

### Example 2: Teacher Creates Test

```
Frontend                          Backend                    Database
────────                          ───────                    ────────

1. Navigate to "Create Test"
2. Click "Add Questions"
                              →   GET /questions?subject=Physics
                                                           →  Query Question collection
                              ←   [ { id, question, topic, ... } ]

3. Select Questions
4. Set Test Details
   - Title: "Physics Mid-term"
   - Duration: 60 mins
   - Start/End time

5. Click "Create Test"
                              →   POST /teacher/tests
                                  {
                                    title, description,
                                    questionIds: [...],
                                    duration: 60,
                                    totalMarks: 100
                                  }
                                                           →  Insert to Test collection
                                                              {
                                                                createdBy: teacherId,
                                                                questions: [...],
                                                                isPublished: false
                                                              }
                              ←   { testId, message: "Test created" }

6. Display Success Message
```

### Example 3: Admin Views Dashboard

```
Frontend                          Backend                    Database
────────                          ───────                    ────────

1. Login as Admin
2. Navigate to Dashboard
                              →   GET /admin/stats
                                                           →  Aggregate queries:
                                                              - Count all users by role
                                                              - Count schools
                                                              - Count test attempts
                                                              - Calculate avg performance
                                                              - Get top schools
                                                              - Get at-risk students
                              ←   {
                                    totalStudents: 12540,
                                    activeTeachers: 850,
                                    testsConducted: 2120,
                                    performanceTrend: [...],
                                    topSchools: [...],
                                    studentsAtRisk: [...]
                                  }

3. Display Dashboard
4. Click "Manage Schools"
                              →   GET /admin/schools
                                                           →  Query School collection
                                                              Join with User counts
                                                              Calculate avg scores
                              ←   [
                                    {
                                      id, name, city,
                                      studentCount: 280,
                                      avgScore: 74
                                    }
                                  ]

5. Display Schools Table
```

---

## Security & Authorization

### Role-Based Access Control (RBAC)

**Already Implemented in Backend:**
```javascript
// Protect all routes
router.use(protect)

// Authorize specific roles
router.get('/stats', authorize('admin'), getAdminStats)
router.post('/tests', authorize('teacher', 'admin'), createTest)
```

**Frontend Route Protection:**
```javascript
// In App.tsx or routing logic
if (currentUser.role !== 'admin' && path === '/admin') {
  return <Redirect to="/dashboard" />
}

// Or using React Router
<PrivateRoute path="/admin" roles={['admin']}>
  <AdminDashboard />
</PrivateRoute>
```

### Token Management

**Storage:**
- JWT stored in localStorage as `token`
- Automatically attached to all API requests
- Expires after 7 days (configurable)

**Refresh:**
```javascript
// Auto-refresh on app load
useEffect(() => {
  const token = localStorage.getItem('token')
  if (token) {
    authService.getMe()
      .then(user => setCurrentUser(user))
      .catch(() => {
        localStorage.removeItem('token')
        navigate('/login')
      })
  }
}, [])
```

---

## Database Relationships

```
User
├── role: 'student' | 'teacher' | 'admin'
├── schoolId → School
└── For students:
    ├── StudentAttempt[] ← attempts
    ├── MistakeBook[] ← mistakes
    └── coins, streak, totalPoints

School
├── _id
├── name, code, address
└── Has many Users

Question
├── _id
├── subject, topic, difficulty
├── question, options, correctAnswer
├── explanation, videoUrl
└── Used in StudentAttempt.answers[]

StudentAttempt
├── _id
├── studentId → User
├── testId → Test (optional)
├── answers[] → questionId references
├── marksObtained, percentage
└── status: 'in-progress' | 'completed'

MistakeBook
├── _id
├── studentId → User
├── questionId → Question
├── attemptId → StudentAttempt
├── selectedAnswer, correctAnswer
└── isReviewed, reviewedAt

Test (Future)
├── _id
├── createdBy → User (teacher)
├── questions[] → Question IDs
├── duration, totalMarks
└── assignedTo[] → User IDs (students)

LiveClass
├── _id
├── teacherId → User
├── subject, topic
├── scheduledTime, duration
├── attendees[] → User IDs
└── status: 'scheduled' | 'live' | 'completed'

DailyChallenge
├── _id
├── date
├── questionIds[] → Question IDs
├── reward (coins)
└── completedBy[] → User IDs
```

---

## Next Immediate Steps

### Step 1: Create API Service Layer (Frontend)
```bash
mkdir src/services
touch src/services/api.ts
touch src/services/authService.ts
touch src/services/studentService.ts
touch src/services/questionService.ts
```

### Step 2: Install Dependencies (Frontend)
```bash
npm install axios
npm install @types/node --save-dev
```

### Step 3: Create Missing Backend Endpoints
```bash
cd backend/src
touch controllers/adminController.ts
touch controllers/teacherController.ts
touch routes/adminRoutes.ts
touch routes/teacherRoutes.ts
```

### Step 4: Update App.tsx for Token Management
- Add useEffect to check for existing token
- Implement auto-login on refresh
- Add token expiry handling

### Step 5: Test Integration
- Test login flow with real backend
- Test student exam flow end-to-end
- Verify data persistence across sessions

---

## Success Criteria

✅ **Phase 1 Complete When:**
- User can login and receive JWT token
- Token persists across page refresh
- Protected routes reject unauthorized access
- Student can take exam and see results in database

✅ **Phase 2 Complete When:**
- All student features work with real backend
- No more localStorage for critical data
- Performance analytics show real data
- Mistake book syncs with backend

✅ **Phase 3 Complete When:**
- Teacher can view real student data
- Teacher can create tests
- Teacher analytics show accurate data

✅ **Phase 4 Complete When:**
- Admin can manage all entities (CRUD)
- System-wide analytics are accurate
- All modules fully integrated

---

## Summary

**Current Status:**
- ✅ Backend: 60% complete (Auth, Questions, Student APIs done)
- ⏳ Frontend: Ready for integration (needs API layer)
- ⏳ Admin/Teacher Backend: 0% (needs to be built)

**Next Priority:**
1. Create frontend API service layer
2. Integrate student module first (highest ROI)
3. Build remaining backend endpoints for Teacher/Admin
4. Integrate Teacher and Admin modules

**Timeline:** 4-5 weeks for full integration with all features

Would you like me to start implementing any specific part? I can:
1. Create the frontend API service layer now
2. Build the missing backend controllers (Admin/Teacher)
3. Integrate the Student module end-to-end
4. Or focus on a specific feature you want to prioritize
