# 🌱 Seed Production Database Guide

## Why Seed?

Your production database is empty. You need to run the seed script to create:
- 1 Demo School
- 3 Demo Users (Admin, Teacher, Student)
- Sample Questions for practice

---

## Method 1: Seed from Local Machine (Recommended)

### Step 1: Create Temporary .env in Backend Folder

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. Create a temporary `.env.production` file:
   ```bash
   # backend/.env.production
   MONGODB_URI=mongodb+srv://edu_neetjee:edu123@cluster0.clknaq9.mongodb.net/education-intelligence?retryWrites=true&w=majority
   PORT=5001
   JWT_SECRET=neet_jee_super_secret_jwt_key_2025_change_in_production_min_32_chars
   NODE_ENV=production
   FRONTEND_URL=https://edu-omega-two.vercel.app
   ```

### Step 2: Run Seed Script

```bash
cd backend
npm run seed
```

### Step 3: Verify Output

You should see:
```
✅ Database seeded successfully!

📊 Summary:
- Schools: 1
- Users: 3
  - Admin: 1
  - Teachers: 1
  - Students: 1
- Questions: 10+

🔑 Demo Credentials:
Admin: admin@school.com / admin123
Teacher: teacher@school.com / teacher123
Student: student@school.com / student123
```

### Step 4: Delete .env.production File

**IMPORTANT**: Delete the temporary file after seeding:
```bash
rm backend/.env.production
```

---

## Method 2: Seed via Render Shell (Alternative)

1. Go to [render.com](https://render.com) → Your Backend Service
2. Click **"Shell"** tab (top navigation)
3. Wait for shell to connect
4. Run:
   ```bash
   npm run seed
   ```

---

## Test Login

After seeding, test these credentials at `https://edu-omega-two.vercel.app`:

### Student Login:
- **Email:** `student@school.com`
- **Password:** `student123`

### Teacher Login:
- **Email:** `teacher@school.com`
- **Password:** `teacher123`

### Admin Login:
- **Email:** `admin@school.com`
- **Password:** `admin123`

---

## Troubleshooting

### "MongoServerError: IP not whitelisted"

**Fix:**
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Click **"Network Access"** (left sidebar)
3. Click **"Add IP Address"**
4. Select **"Allow Access from Anywhere"** (`0.0.0.0/0`)
5. Click **"Confirm"**
6. Wait 1-2 minutes, then retry seed

### "Connection timeout"

**Fix:**
- Check MongoDB Atlas cluster is running (not paused)
- Verify connection string is correct
- Check network access settings

---

## Security Note

⚠️ The `.env.production` file contains sensitive credentials. Make sure to:
1. Never commit it to git
2. Delete it after seeding
3. Use strong passwords in production

---

*After seeding, your app will be fully functional!*
