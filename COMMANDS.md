# 📋 Command Reference

Complete list of all commands for Fridge-to-Feast development.

---

## 🏁 Initial Setup Commands

### Clone Repository
```bash
git clone <your-repo-url>
cd fridge-to-feast
```

### Automated Setup
```bash
# macOS/Linux
chmod +x setup.sh
./setup.sh

# Windows
setup.bat
```

### Manual Setup
```bash
# Install all dependencies at once
npm run install:all

# OR install individually
npm install                    # Root dependencies
cd server && npm install      # Server dependencies
cd ../client && npm install   # Client dependencies
```

---

## 🚀 Development Commands

### Run Both Servers (Recommended)
```bash
npm run dev
```
Runs both frontend (port 3000) and backend (port 5000) concurrently.

### Run Servers Individually

**Backend Only:**
```bash
npm run dev:server
# OR
cd server && npm run dev
```

**Frontend Only:**
```bash
npm run dev:client
# OR
cd client && npm run dev
```

---

## 🏗️ Build Commands

### Build Frontend for Production
```bash
npm run build:client
# OR
cd client && npm run build
```

Output: `client/dist/`

### Preview Production Build
```bash
cd client
npm run preview
```

---

## 🧹 Cleanup Commands

### Clean All node_modules and Build Files
```bash
npm run clean
```

### Clean Specific Directories
```bash
# Frontend only
rm -rf client/node_modules client/dist

# Backend only
rm -rf server/node_modules

# Vite cache
rm -rf client/.vite
```

### Reset Everything
```bash
npm run clean
npm run install:all
```

---

## 📦 Package Management

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update all dependencies (root)
npm update

# Update server dependencies
cd server && npm update

# Update client dependencies
cd client && npm update
```

### Install New Package

**Frontend:**
```bash
cd client
npm install package-name
npm install -D package-name  # Dev dependency
```

**Backend:**
```bash
cd server
npm install package-name
```

---

## 🧪 Testing & Linting

### Lint Frontend Code
```bash
cd client
npm run lint
```

### Fix Linting Issues
```bash
cd client
npx eslint . --fix
```

---

## 🐛 Debugging Commands

### Check Port Usage
```bash
# macOS/Linux
lsof -ti:3000  # Frontend
lsof -ti:5000  # Backend

# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :5000
```

### Kill Process on Port
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9

# Windows
taskkill /PID <PID> /F
```

### View Server Logs
```bash
cd server
npm run dev

# With more detailed logs
NODE_ENV=development npm run dev
```

### Clear Node Cache
```bash
npm cache clean --force
```

---

## 🔐 Environment Variables

### Create .env Files
```bash
# Server
cd server
cp .env.example .env

# Client (optional)
cd client
cp .env.example .env
```

### Check Environment Variables
```bash
# Server
cd server
cat .env

# Print specific variable
echo $GEMINI_API_KEY  # macOS/Linux
echo %GEMINI_API_KEY%  # Windows
```

---

## 🚢 Deployment Commands

### Build for Production
```bash
# Frontend
cd client
npm run build

# Backend (no build needed)
cd server
npm start
```

### Deploy to Vercel (Frontend)
```bash
cd client
npm install -g vercel
vercel
```

### Deploy to Railway (Backend)
```bash
# Using Railway CLI
npm install -g railway
railway login
railway init
railway up
```

### Deploy to Heroku (Backend)
```bash
cd server
heroku create your-app-name
git push heroku main
```

---

## 📊 Performance & Analysis

### Analyze Bundle Size
```bash
cd client
npm run build
npx vite-bundle-visualizer
```

### Check Lighthouse Score
```bash
# Install lighthouse globally
npm install -g lighthouse

# Run lighthouse
lighthouse http://localhost:3000
```

---

## 🔄 Git Commands

### Initialize Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### Create GitHub Repository
```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/yourusername/fridge-to-feast.git
git branch -M main
git push -u origin main
```

### Common Git Workflow
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

### Create Feature Branch
```bash
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature"
git push -u origin feature/new-feature
```

---

## 🔍 Useful Diagnostic Commands

### Check Node & npm Versions
```bash
node -v
npm -v
```

### Check Project Dependencies
```bash
# List all dependencies
npm list

# List only top-level dependencies
npm list --depth=0

# Check for security vulnerabilities
npm audit
npm audit fix
```

### Verify Installation
```bash
# Check if packages are installed correctly
cd client && npm ls react
cd server && npm ls express
```

### Test Backend Endpoint
```bash
# Health check
curl http://localhost:5000/health

# Test recipe generation (with jq for pretty output)
curl -X POST http://localhost:5000/api/generate-recipe \
  -H "Content-Type: application/json" \
  -d '{"ingredients":["chicken","tomato"],"cuisine":"Italian"}' \
  | jq
```

---

## 📝 Documentation Commands

### Generate API Documentation
```bash
cd server
npm install -g apidoc
apidoc -i ./ -o docs/
```

### View README
```bash
# macOS
open README.md

# Linux
xdg-open README.md

# Windows
start README.md
```

---

## 🎨 Customization Commands

### Add New Component (Frontend)
```bash
cd client/src/components
touch NewComponent.jsx
```

### Add New Route (Backend)
```bash
cd server/routes
touch newRoutes.js
cd ../controllers
touch newController.js
```

### Install UI Library
```bash
cd client
npm install @mui/icons-material  # More Material-UI icons
npm install framer-motion        # Advanced animations
npm install react-hot-toast      # Toast notifications
```

---

## 🧰 Development Tools

### Start with Different Port
```bash
# Frontend
cd client
PORT=3001 npm run dev

# Backend
cd server
PORT=5001 npm run dev
```

### Run with Environment Variables
```bash
# macOS/Linux
NODE_ENV=production npm start

# Windows
set NODE_ENV=production && npm start
```

### Watch for File Changes
```bash
# Frontend (Vite does this automatically)
cd client
npm run dev

# Backend (nodemon does this)
cd server
npm run dev
```

---

## 🔧 Troubleshooting Commands

### Fix Common Issues

**Issue: Port already in use**
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows
```

**Issue: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue: Vite cache issues**
```bash
cd client
rm -rf .vite
npm run dev
```

**Issue: Permission denied**
```bash
# macOS/Linux
sudo npm install
chmod +x setup.sh

# Windows (run as administrator)
```

**Issue: CORS errors**
```bash
# Check backend CORS settings
cd server
cat .env | grep CORS_ORIGIN
```

---

## 📦 Production Commands

### Start Production Server
```bash
cd server
NODE_ENV=production npm start
```

### Serve Built Frontend
```bash
cd client
npm run build
npm run preview
```

### Docker Commands (if using Docker)
```bash
# Build image
docker build -t fridge-to-feast .

# Run container
docker run -p 3000:3000 -p 5000:5000 fridge-to-feast

# Stop container
docker stop <container_id>
```

---

## 🎯 Quick Reference

### Most Used Commands
```bash
# Development
npm run dev              # Start both servers
npm run dev:server       # Backend only
npm run dev:client       # Frontend only

# Build
npm run build:client     # Build for production

# Clean
npm run clean            # Remove all dependencies

# Install
npm run install:all      # Install everything
```

### Keyboard Shortcuts (in terminal)
```bash
Ctrl + C                 # Stop running server
Ctrl + D                 # Exit terminal
Ctrl + L                 # Clear terminal
Ctrl + R                 # Search command history
```

---

## 🔗 API Endpoints Reference

### Backend Endpoints

**Health Check:**
```bash
GET http://localhost:5000/health
```

**Generate Recipe:**
```bash
POST http://localhost:5000/api/generate-recipe
Content-Type: application/json

{
  "ingredients": ["chicken", "tomatoes"],
  "cuisine": "Italian",
  "mealType": "Dinner",
  "timeLimit": "30",
  "dietary": "Gluten-Free"
}
```

---

## 💾 Backup Commands

### Backup Current State
```bash
# Create backup
tar -czf fridge-to-feast-backup-$(date +%Y%m%d).tar.gz .

# Restore from backup
tar -xzf fridge-to-feast-backup-20241018.tar.gz
```

### Export Dependencies
```bash
# Export exact dependency versions
cd client && npm list --json > dependencies-client.json
cd server && npm list --json > dependencies-server.json
```

---

## 🎓 Learning Commands

### View Package Documentation
```bash
npm docs package-name    # Opens package documentation
npm home package-name    # Opens package homepage
npm repo package-name    # Opens package repository
```

### Check Package Info
```bash
npm info package-name           # View package details
npm view package-name versions  # View all versions
```

---

## 🚨 Emergency Commands

### Something Broke? Try This
```bash
# 1. Stop all servers (Ctrl+C)

# 2. Clean everything
npm run clean

# 3. Reinstall everything
npm run install:all

# 4. Check environment variables
cat server/.env

# 5. Restart development
npm run dev
```

### Nuclear Option (Full Reset)
```bash
# WARNING: This deletes everything and starts fresh
git clean -fdx
npm run install:all
# Reconfigure .env files
```

---

## 📱 Mobile Development Commands

### Test on Mobile Device
```bash
# Get your local IP
# macOS/Linux:
ifconfig | grep "inet "

# Windows:
ipconfig

# Then access from mobile:
# http://YOUR_IP:3000
```

### Enable Network Access (Vite)
```bash
cd client
npm run dev -- --host
```

---

## 🎉 Celebration Commands

### Project Statistics
```bash
# Count lines of code
find . -name '*.jsx' -o -name '*.js' | xargs wc -l

# Count files
find . -name '*.jsx' -o -name '*.js' | wc -l

# Project size
du -sh .
```

---

## 📞 Getting Help

```bash
# View available npm scripts
npm run

# View package help
npm help install
npm help run-script

# Check Vite CLI options
cd client
npx vite --help

# Check Node options
node --help
```

---

**Bookmark this page for quick reference! 📌**