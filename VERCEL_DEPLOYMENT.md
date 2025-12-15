# Vercel Deployment Guide

## Issues Fixed

### 1. ✅ Tailwind CDN Removed
- **Problem**: Using Tailwind CDN in production (not recommended)
- **Solution**: Removed CDN script from `index.html`, using PostCSS setup instead
- **Result**: Better performance, smaller bundle size, production-ready

### 2. ✅ API Configuration Improved
- **Problem**: API requests timing out because backend URL not configured
- **Solution**: Added helpful error messages when `VITE_API_URL` is missing
- **Result**: Clear instructions for developers

## Setting Up Environment Variables in Vercel

### Step 1: Deploy Backend First
Before deploying the frontend, make sure your backend is deployed and accessible. Popular options:
- **Railway**: https://railway.app
- **Render**: https://render.com
- **Heroku**: https://heroku.com
- **DigitalOcean App Platform**: https://www.digitalocean.com/products/app-platform

### Step 2: Configure Vercel Environment Variables

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project

2. **Navigate to Settings**
   - Click on "Settings" tab
   - Go to "Environment Variables" section

3. **Add Required Variables**

   | Variable Name | Value | Environment |
   |--------------|-------|-------------|
   | `VITE_API_URL` | `https://your-backend-url.com/api` | Production |
   | `VITE_GEMINI_API_KEY` | `your_api_key` (optional) | Production |

   **Example backend URLs:**
   - Railway: `https://your-app.railway.app/api`
   - Render: `https://your-app.onrender.com/api`
   - Heroku: `https://your-app.herokuapp.com/api`

4. **Important Notes**
   - ⚠️ All frontend environment variables **MUST** start with `VITE_`
   - 🔄 After adding variables, you **MUST redeploy** for changes to take effect
   - 🔒 Never commit sensitive API keys to git
   - 📦 Variables are injected at **BUILD time**, not runtime

### Step 3: Redeploy

After setting environment variables:

```bash
# Option 1: Redeploy via Git
git commit --allow-empty -m "Trigger Vercel rebuild"
git push

# Option 2: Redeploy via Vercel Dashboard
# Click "Redeploy" button in Deployments tab
```

## Troubleshooting

### "Network error: Please check your connection"
- ❌ **Cause**: `VITE_API_URL` not set in Vercel
- ✅ **Fix**: Add `VITE_API_URL` in Vercel environment variables and redeploy

### Backend URL returns 404
- ❌ **Cause**: Wrong API endpoint
- ✅ **Fix**: Ensure backend URL ends with `/api` (e.g., `https://your-app.com/api`)

### Backend URL returns CORS error
- ❌ **Cause**: Backend not configured to allow your Vercel domain
- ✅ **Fix**: Add your Vercel URL to backend CORS whitelist

### Changes not reflecting after deploy
- ❌ **Cause**: Environment variables not redeployed
- ✅ **Fix**: Trigger a new deployment after changing env vars

## Local Development

For local development, use `.env.local`:

```bash
# .env.local
VITE_API_URL=http://localhost:5001/api
VITE_GEMINI_API_KEY=your_local_api_key
```

## Production Checklist

- [ ] Backend deployed and accessible
- [ ] `VITE_API_URL` set in Vercel
- [ ] Tailwind CDN removed (✅ Done)
- [ ] Application redeployed after env var changes
- [ ] Test login functionality
- [ ] Check browser console for errors
- [ ] Verify API requests are hitting correct backend URL

## Need Help?

If you're still experiencing issues:

1. Check browser console (F12) for detailed error messages
2. Verify backend is accessible: `curl https://your-backend-url.com/api/health`
3. Check Vercel deployment logs for build errors
4. Ensure environment variables are set for "Production" environment
