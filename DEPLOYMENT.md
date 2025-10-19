# 🚀 Deployment Guide

This guide covers deploying your Fridge-to-Feast app to production.

## 📋 Pre-Deployment Checklist

- [ ] Gemini API key obtained
- [ ] Code tested locally
- [ ] Environment variables documented
- [ ] Git repository created
- [ ] Production URLs planned

---

## 🎯 Recommended Deployment Stack

### **Backend: Railway** (Easiest + Free Tier)
### **Frontend: Vercel** (Fastest + Free)

---

## 1️⃣ Deploy Backend to Railway

### Step 1: Prepare Backend
```bash
cd server
```

### Step 2: Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub

### Step 3: Deploy
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Select your repository
4. Railway auto-detects Node.js

### Step 4: Set Environment Variables
In Railway dashboard:
- Click your service
- Go to **"Variables"** tab
- Add these variables:

```env
GEMINI_API_KEY=your_gemini_key_here
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

### Step 5: Get Backend URL
- Railway provides a URL like: `https://your-app.railway.app`
- Copy this URL for frontend configuration

---

## 2️⃣ Deploy Frontend to Vercel

### Step 1: Prepare Frontend
```bash
cd client
```

Update `vite.config.js` for production:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
```

Update `src/components/RecipeGenerator.jsx`:
```javascript
// Replace the API URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// In handleGenerateRecipe:
const response = await axios.post(`${API_URL}/api/generate-recipe`, {
  ingredients,
  ...preferences
});
```

### Step 2: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### Step 3: Deploy
1. Click **"Add New Project"**
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 4: Set Environment Variables
In Vercel dashboard:
- Go to **"Settings"** > **"Environment Variables"**
- Add:

```env
VITE_API_URL=https://your-backend.railway.app
```

### Step 5: Update CORS
Go back to Railway and update `CORS_ORIGIN`:
```env
CORS_ORIGIN=https://your-app.vercel.app
```

---

## 🔄 Alternative Deployment Options

### Backend Alternatives

#### **Render** (Free Tier)
1. Create account at [render.com](https://render.com)
2. New Web Service → Connect GitHub
3. Environment: Node
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add environment variables

#### **Heroku**
```bash
# Install Heroku CLI
cd server
heroku create your-app-name
heroku config:set GEMINI_API_KEY=your_key
git push heroku main
```

#### **DigitalOcean App Platform**
1. Create account
2. Create App → GitHub repo
3. Detect Node.js
4. Add environment variables
5. Deploy

### Frontend Alternatives

#### **Netlify**
1. Create account at [netlify.com](https://netlify.com)
2. New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables

#### **GitHub Pages**
```bash
cd client
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/fridge-to-feast",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy:
```bash
npm run deploy
```

---

## 🔒 Security Best Practices

### 1. Environment Variables
- ✅ Never commit `.env` files
- ✅ Use different API keys for dev/prod
- ✅ Rotate keys periodically

### 2. CORS Configuration
```javascript
// Production CORS (server/server.js)
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.CORS_ORIGIN 
    : 'http://localhost:3000',
  credentials: true
}));
```

### 3. Rate Limiting (Optional)
```bash
cd server
npm install express-rate-limit
```

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## 📊 Monitoring & Analytics

### Backend Monitoring
- **Railway**: Built-in metrics
- **Render**: Built-in logging
- **External**: Sentry, LogRocket

### Frontend Analytics
```bash
cd client
npm install @vercel/analytics
```

```javascript
// In main.jsx
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <Analytics />
    </ThemeProvider>
  </React.StrictMode>,
);
```

---

## 🐛 Troubleshooting

### Issue: CORS Error in Production
**Solution**: Ensure `CORS_ORIGIN` in backend matches frontend URL exactly

### Issue: API Key Not Working
**Solution**: Verify environment variables are set in hosting platform

### Issue: Build Fails
**Solution**: 
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: 404 on Routes
**Solution**: Configure SPA fallback
- **Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

- **Netlify**: Create `_redirects` in `public/`:
```
/*    /index.html   200
```

---

## 🎉 Post-Deployment

### 1. Test Everything
- [ ] Can add ingredients
- [ ] Preferences work
- [ ] Recipe generation works
- [ ] Mobile responsive
- [ ] Error handling works

### 2. Set Up Custom Domain (Optional)
- **Vercel**: Dashboard → Settings → Domains
- **Railway**: Dashboard → Settings → Domain

### 3. Enable HTTPS
- Both Vercel and Railway provide automatic HTTPS

### 4. Monitor Performance
- Check Lighthouse score
- Test on multiple devices
- Monitor API usage

---

## 📈 Scaling Tips

### Backend Optimization
1. **Add caching** for frequently used recipes
2. **Implement request queuing** for high traffic
3. **Use CDN** for static assets

### Frontend Optimization
1. **Code splitting** (Vite does this automatically)
2. **Image optimization**
3. **Lazy loading** for components

---

## 💰 Cost Estimates

### Free Tier (Suitable for portfolios)
- **Railway**: $5 credit/month free
- **Vercel**: Unlimited for personal projects
- **Gemini API**: Free tier available

### Paid Tier (For production apps)
- **Railway**: ~$5-20/month
- **Vercel Pro**: $20/month
- **Gemini API**: Pay per use

---

## 🔗 Useful Links

- [Railway Docs](https://docs.railway.app/)
- [Vercel Docs](https://vercel.com/docs)
- [Gemini API Docs](https://ai.google.dev/docs)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

---

Happy Deploying! 🚀