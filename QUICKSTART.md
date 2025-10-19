# ⚡ Quick Start Guide

Get your Fridge-to-Feast app running in **5 minutes**!

---

## 🎯 Prerequisites

- **Node.js 18+** → [Download here](https://nodejs.org/)
- **Gemini API Key** → [Get it free here](https://makersuite.google.com/app/apikey)

---

## 🚀 Option 1: Automated Setup (Recommended)

### For macOS/Linux:
```bash
# Clone the repository
git clone <your-repo-url>
cd fridge-to-feast

# Make setup script executable
chmod +x setup.sh

# Run setup
./setup.sh
```

### For Windows:
```bash
# Clone the repository
git clone <your-repo-url>
cd fridge-to-feast

# Run setup
setup.bat
```

### Then:
1. Edit `server/.env` and add your Gemini API key
2. Run: `npm run dev`
3. Open: http://localhost:3000

---

## 🔧 Option 2: Manual Setup

### Step 1: Clone & Install
```bash
git clone <your-repo-url>
cd fridge-to-feast

# Install all dependencies
npm run install:all
```

### Step 2: Configure Backend
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Step 3: Start Development Servers

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```

### Step 4: Open App
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 📱 First Usage

1. **Add Ingredients**
   - Type: "chicken breast"
   - Press Enter or click +
   - Add more: "tomatoes", "garlic", "olive oil"

2. **Set Preferences** (Optional)
   - Cuisine: Italian
   - Meal Type: Dinner
   - Time Limit: 30 minutes
   - Dietary: None

3. **Generate Recipe**
   - Click "Generate Recipe"
   - Wait 5-10 seconds
   - Enjoy your custom recipe!

---

## 🐛 Troubleshooting

### ❌ "API key not configured"
**Fix:** Add your Gemini API key to `server/.env`

### ❌ Port 3000 already in use
**Fix:** 
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9  # macOS/Linux
# OR change port in client/vite.config.js
```

### ❌ CORS Error
**Fix:** Ensure backend is running on port 5000

### ❌ Module not found
**Fix:**
```bash
# Clear and reinstall
npm run clean
npm run install:all
```

---

## 🎨 What's Included?

✅ Beautiful gradient UI with animations  
✅ Glassmorphism effects  
✅ Fully responsive design  
✅ Dark mode ready  
✅ Error handling  
✅ Loading states  
✅ Print recipe functionality  

---

## 📝 Project Structure

```
fridge-to-feast/
├── client/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── IngredientInput.jsx
│   │   │   ├── PreferencesForm.jsx
│   │   │   ├── RecipeDisplay.jsx
│   │   │   └── RecipeGenerator.jsx
│   │   └── App.jsx
│   └── package.json
│
└── server/          # Node.js + Express backend
    ├── controllers/
    │   └── recipeController.js
    ├── routes/
    │   └── recipeRoutes.js
    └── server.js
```

---

## 🔑 Getting Your Gemini API Key

1. Go to https://makersuite.google.com/app/apikey
2. Click **"Get API Key"**
3. Click **"Create API key in new project"**
4. Copy the key (starts with `AIza...`)
5. Paste it in `server/.env`:
   ```env
   GEMINI_API_KEY=AIzaYourKeyHere
   ```

---

## 🎯 Common Commands

```bash
# Run both servers together
npm run dev

# Run servers separately
npm run dev:server    # Backend only
npm run dev:client    # Frontend only

# Build for production
npm run build:client

# Clean everything
npm run clean

# Reinstall everything
npm run install:all
```

---

## 🚢 Ready to Deploy?

See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Railway (Backend)
- Vercel (Frontend)
- Custom domains
- Environment variables
- Monitoring

---

## 💡 Tips

### Add More Cuisines
Edit `client/src/components/PreferencesForm.jsx`:
```javascript
<MenuItem value="Spanish">🇪🇸 Spanish</MenuItem>
```

### Change Color Scheme
Edit `client/src/index.css` (Tailwind v4 uses CSS variables):
```css
@theme {
  --color-primary-600: #ff6b6b; /* Change this! */
}
```

### Adjust AI Creativity
Edit `server/controllers/recipeController.js`:
```javascript
const model = genAI.getGenerativeModel({ 
  model: "gemini-pro",
  generationConfig: {
    temperature: 0.9, // Higher = more creative
  }
});
```

---

## 📚 Learn More

- [Full README](README.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Gemini API Docs](https://ai.google.dev/docs)
- [Vite Docs](https://vitejs.dev/)
- [Material-UI Docs](https://mui.com/)

---

## 🆘 Need Help?

1. Check [Troubleshooting](#-troubleshooting) above
2. Read the [full README](README.md)
3. Open an issue on GitHub
4. Check your console for errors

---

## ✨ You're All Set!

Your app should now be running at:
- 🎨 Frontend: http://localhost:3000
- ⚙️ Backend: http://localhost:5000

**Start cooking with AI!** 🍳✨