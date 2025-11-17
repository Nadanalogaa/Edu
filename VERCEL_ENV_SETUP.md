# 🔐 Vercel Environment Variables Setup Guide

## Quick Reference: Adding Environment Variables in Vercel

### Step-by-Step Instructions

#### 1. Go to Vercel Dashboard
- Login to [vercel.com](https://vercel.com)
- Select your project: `Edu` or `edu-neetjee`

#### 2. Navigate to Settings
- Click **"Settings"** tab (top navigation)
- Click **"Environment Variables"** in left sidebar

#### 3. Add Environment Variables

**Add Variable #1:**
```
Name:         VITE_API_URL
Value:        https://edu-neetjee-backend.onrender.com/api
Environments: ✅ Production  ✅ Preview  ✅ Development
```

**Add Variable #2 (Optional - AI Features):**
```
Name:         VITE_GEMINI_API_KEY
Value:        (leave empty or add your API key)
Environments: ✅ Production  ✅ Preview  ✅ Development
```

#### 4. Save & Redeploy
- Click **"Save"** after adding each variable
- Go to **"Deployments"** tab
- Click **"..."** menu → **"Redeploy"**
- Select **"Use existing Build Cache"** → **"Redeploy"**

---

## ⚠️ Important Notes

### VITE_ Prefix is Required
- All Vite environment variables MUST start with `VITE_`
- ❌ Wrong: `API_URL`
- ✅ Correct: `VITE_API_URL`

### Backend URL Format
```
✅ Correct:   https://edu-neetjee-backend.onrender.com/api
❌ Wrong:     https://edu-neetjee-backend.onrender.com/api/
❌ Wrong:     http://localhost:5001/api
```

**Note:** No trailing slash!

### All Environment Types
Select all three for each variable:
- ✅ **Production** - Live site (your-app.vercel.app)
- ✅ **Preview** - Branch deployments (git push preview)
- ✅ **Development** - Local development (vercel dev)

---

## 🔄 How to Update Environment Variables

### If you need to change backend URL later:

1. **Vercel Dashboard** → **Settings** → **Environment Variables**
2. Find `VITE_API_URL`
3. Click **"..."** → **"Edit"**
4. Update value → **"Save"**
5. **Deployments** → **"Redeploy"** latest deployment

---

## 🧪 Testing Environment Variables

### Check if Variables are Loaded:

Add this to your frontend code temporarily:

```typescript
// src/test-env.ts
console.log('API URL:', import.meta.env.VITE_API_URL);
console.log('All env vars:', import.meta.env);
```

**Expected Output in Browser Console:**
```
API URL: https://edu-neetjee-backend.onrender.com/api
```

⚠️ **Remove test code before production!**

---

## 🐛 Common Issues

### Issue 1: "VITE_API_URL is undefined"

**Solutions:**
1. Check variable name has `VITE_` prefix
2. Redeploy after adding variables
3. Clear browser cache
4. Check Vercel build logs for errors

### Issue 2: CORS Errors

**Check:**
1. Backend `FRONTEND_URL` matches Vercel URL exactly
2. Backend CORS middleware allows your domain
3. No trailing slash in URLs

### Issue 3: "Cannot connect to API"

**Verify:**
1. Backend is deployed and running on Render
2. `VITE_API_URL` has `/api` at the end
3. Test backend directly: `curl https://your-backend.onrender.com/api/health`

---

## 📋 Complete Environment Variables Checklist

Before deploying, verify you have:

### Frontend (Vercel):
- [ ] `VITE_API_URL` = Your Render backend URL + `/api`
- [ ] `VITE_GEMINI_API_KEY` = (optional)
- [ ] All variables selected for: Production, Preview, Development

### Backend (Render):
- [ ] `MONGODB_URI` = Your MongoDB Atlas connection string
- [ ] `PORT` = `5001`
- [ ] `JWT_SECRET` = Strong random secret (32+ chars)
- [ ] `NODE_ENV` = `production`
- [ ] `FRONTEND_URL` = Your Vercel app URL

---

## ✅ Final Verification

After deployment:

1. **Open Vercel app** → Check browser console
2. **Test login** → Should work without CORS errors
3. **Check API calls** → Network tab should show 200 status
4. **No errors** → ✅ All set!

---

## 🎯 Quick Copy-Paste Values

**For Render (Backend):**
```bash
MONGODB_URI=mongodb+srv://edu_neetjee:edu123@cluster0.clknaq9.mongodb.net/education-intelligence?retryWrites=true&w=majority
PORT=5001
JWT_SECRET=neet_jee_super_secret_jwt_key_2025_change_this_in_production_minimum_32_characters
NODE_ENV=production
FRONTEND_URL=https://your-vercel-app.vercel.app
```

**For Vercel (Frontend):**
```bash
VITE_API_URL=https://edu-neetjee-backend.onrender.com/api
VITE_GEMINI_API_KEY=
```

---

*Remember: Update URLs with your actual deployment URLs!*
