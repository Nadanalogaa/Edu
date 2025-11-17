# 🚀 Deployment Guide - NEET/JEE Education Platform

## Architecture Overview

This is a **full-stack MERN application**:
- **Frontend**: Vite + React + TypeScript
- **Backend**: Node.js + Express + MongoDB
- **Database**: MongoDB Atlas

---

## 📋 Pre-Deployment Checklist

### 1. Prepare MongoDB Database

✅ **MongoDB Atlas Setup**:
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Ensure your cluster is created: `cluster0.clknaq9.mongodb.net`
3. **Whitelist IPs**:
   - Go to Network Access → Add IP Address
   - Add `0.0.0.0/0` (Allow from anywhere) for Render/Vercel
4. **Database User**: `edu_neetjee` (already created)
5. **Connection String**:
   ```
   mongodb+srv://edu_neetjee:edu123@cluster0.clknaq9.mongodb.net/education-intelligence?retryWrites=true&w=majority
   ```

⚠️ **Security Recommendation**: Change password from `edu123` to a stronger password!

---

## 🔧 Deployment Steps

### **STEP 1: Deploy Backend to Render.com** (Free)

#### 1.1 Sign Up & Create Web Service

1. Go to [render.com](https://render.com) and sign up with GitHub
2. Click **"New +"** → **"Web Service"**
3. Select your repository: `Nadanalogaa/Edu`
4. Configure:
   - **Name**: `edu-neetjee-backend`
   - **Region**: Choose closest to your users
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**:
     ```bash
     npm install && npm run build
     ```
   - **Start Command**:
     ```bash
     npm start
     ```
   - **Instance Type**: `Free`

#### 1.2 Add Environment Variables in Render

Click **"Environment"** tab and add these variables:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://edu_neetjee:edu123@cluster0.clknaq9.mongodb.net/education-intelligence?retryWrites=true&w=majority` |
| `PORT` | `5001` |
| `JWT_SECRET` | `neet_jee_super_secret_jwt_key_2025_change_in_production_min_32_chars` |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://your-app-name.vercel.app` (update later) |

#### 1.3 Deploy Backend

1. Click **"Create Web Service"**
2. Wait 3-5 minutes for build & deployment
3. **Copy your backend URL**: `https://edu-neetjee-backend.onrender.com`

⚠️ **Important**: Free tier sleeps after 15 minutes of inactivity. First request may take 30-60 seconds.

---

### **STEP 2: Deploy Frontend to Vercel**

#### 2.1 Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"Add New..."** → **"Project"**
3. Import `Nadanalogaa/Edu` repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### 2.2 Add Environment Variables in Vercel

Click **"Environment Variables"** and add:

| Name | Value | Environments |
|------|-------|--------------|
| `VITE_API_URL` | `https://edu-neetjee-backend.onrender.com/api` | Production, Preview, Development |
| `VITE_GEMINI_API_KEY` | (optional - leave empty for now) | Production, Preview, Development |

**Important**:
- All frontend env vars MUST have `VITE_` prefix
- Replace backend URL with YOUR actual Render URL from Step 1.3

#### 2.3 Deploy Frontend

1. Click **"Deploy"**
2. Wait 2-3 minutes for build
3. **Your app is live!** 🎉
4. Copy your Vercel URL: `https://your-app-name.vercel.app`

#### 2.4 Update Backend CORS Settings

Go back to **Render** → **Environment Variables** → Update:
- `FRONTEND_URL` = Your Vercel URL (e.g., `https://edu-neetjee.vercel.app`)

Click **"Save Changes"** → Backend will redeploy automatically

---

## ✅ Verify Deployment

### Test Backend API
```bash
curl https://edu-neetjee-backend.onrender.com/api/health
```
Should return: `{"status":"ok","message":"Server is running"}`

### Test Frontend
1. Open your Vercel URL in browser
2. Try logging in with test credentials
3. Check browser console for any API errors

---

## 🔐 Security Best Practices

### Change These Before Production:

1. **MongoDB Password**:
   ```
   Current: edu123
   Change to: Strong_P@ssw0rd_2025!
   ```

2. **JWT Secret** (use random generator):
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. **Add to .gitignore** (already done):
   ```
   .env
   .env.local
   ```

4. **MongoDB Network Access**:
   - Initially: `0.0.0.0/0` (allow all)
   - Later: Whitelist only Render IP addresses

---

## 🔄 Continuous Deployment

Both platforms auto-deploy on git push:

1. **Make code changes locally**
2. **Commit & push to GitHub**:
   ```bash
   git add .
   git commit -m "Update feature"
   git push origin main
   ```
3. **Automatic deployment**:
   - Vercel: Deploys frontend automatically
   - Render: Deploys backend automatically

---

## 🐛 Troubleshooting

### Frontend can't connect to Backend

**Check:**
1. `VITE_API_URL` in Vercel matches your Render URL
2. Backend `FRONTEND_URL` matches your Vercel URL
3. MongoDB IP whitelist includes `0.0.0.0/0`

### Backend Returns 500 Error

**Check Render Logs:**
1. Go to Render Dashboard → Your Service
2. Click **"Logs"** tab
3. Look for MongoDB connection errors

### Render Free Tier Sleep

- First request takes 30-60 seconds (cold start)
- Consider upgrading to paid plan ($7/month) for 24/7 uptime

---

## 💰 Cost Summary

| Service | Plan | Cost |
|---------|------|------|
| MongoDB Atlas | M0 Free Tier | $0/month |
| Render | Free | $0/month |
| Vercel | Hobby | $0/month |
| **Total** | | **$0/month** |

### Upgrade Options (Optional):
- **Render**: $7/month (no sleep, faster)
- **MongoDB Atlas**: $9/month (shared M2, more storage)
- **Vercel Pro**: $20/month (more bandwidth, analytics)

---

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check Render deployment logs
3. Test MongoDB connection from Render logs
4. Check browser console for frontend errors

---

## 🎯 Next Steps

1. ✅ Deploy backend to Render
2. ✅ Deploy frontend to Vercel
3. ✅ Test login and features
4. 🔐 Change production secrets
5. 📧 Set up custom domain (optional)
6. 📊 Add analytics (optional)
7. 🚀 Share with students!

---

**Deployed URLs:**
- Frontend: `https://your-app-name.vercel.app`
- Backend API: `https://edu-neetjee-backend.onrender.com/api`
- Database: MongoDB Atlas (cloud.mongodb.com)

**Repository:** https://github.com/Nadanalogaa/Edu.git

---

*Last Updated: January 2025*
