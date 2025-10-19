# 📁 Complete Folder Structure

Visual representation of the entire Fridge-to-Feast project structure.

---

## 🌳 Full Project Tree

```
fridge-to-feast/
│
├── 📄 README.md                    # Main documentation
├── 📄 QUICKSTART.md                # Quick start guide
├── 📄 DEPLOYMENT.md                # Deployment instructions
├── 📄 COMMANDS.md                  # Command reference
├── 📄 FOLDER_STRUCTURE.md          # This file
├── 📄 .gitignore                   # Git ignore rules
├── 📄 package.json                 # Root package config
├── 🔧 setup.sh                     # Linux/macOS setup script
├── 🔧 setup.bat                    # Windows setup script
│
├── 📂 client/                      # Frontend (React + Vite)
│   │
│   ├── 📂 public/                  # Static assets
│   │   └── 🖼️ chef-hat.svg        # Favicon
│   │
│   ├── 📂 src/                     # Source code
│   │   │
│   │   ├── 📂 components/          # React components
│   │   │   ├── 🎨 AnimatedBackground.jsx
│   │   │   ├── 🎨 IngredientInput.jsx
│   │   │   ├── 🎨 PreferencesForm.jsx
│   │   │   ├── 🎨 RecipeDisplay.jsx
│   │   │   └── 🎨 RecipeGenerator.jsx
│   │   │
│   │   ├── 📄 App.jsx              # Main app component
│   │   ├── 📄 main.jsx             # Entry point
│   │   └── 🎨 index.css            # Global styles
│   │
│   ├── 📄 index.html               # HTML template
│   ├── 📄 package.json             # Frontend dependencies
│   ├── 📄 vite.config.js           # Vite configuration
│   ├── 📄 tailwind.config.js       # Tailwind CSS config (v4 - minimal)
│   ├── 📄 .eslintrc.cjs            # ESLint config
│   ├── 📄 .env.example             # Environment variables template
│   └── 📄 .gitignore               # Git ignore rules
│
└── 📂 server/                      # Backend (Node.js + Express)
    │
    ├── 📂 controllers/             # Business logic
    │   └── 📄 recipeController.js  # Recipe generation logic
    │
    ├── 📂 routes/                  # API routes
    │   └── 📄 recipeRoutes.js      # Recipe endpoints
    │
    ├── 📄 server.js                # Server entry point
    ├── 📄 package.json             # Backend dependencies
    ├── 📄 .env.example             # Environment variables template
    └── 📄 .gitignore               # Git ignore rules
```

---

## 📋 File Descriptions

### Root Level Files

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation with overview, features, and setup |
| `QUICKSTART.md` | Fast 5-minute setup guide |
| `DEPLOYMENT.md` | Production deployment instructions |
| `COMMANDS.md` | Complete command reference |
| `FOLDER_STRUCTURE.md` | This file - project structure reference |
| `.gitignore` | Specifies files Git should ignore |
| `package.json` | Root package config with convenience scripts |
| `setup.sh` | Automated setup script for Unix systems |
| `setup.bat` | Automated setup script for Windows |

### Client (Frontend) Files

#### `/client/public/`
- Static files served directly
- Contains favicon and other assets

#### `/client/src/components/`

| Component | Purpose |
|-----------|---------|
| `AnimatedBackground.jsx` | Animated gradient background with blob effects |
| `IngredientInput.jsx` | Input field and chip display for ingredients |
| `PreferencesForm.jsx` | Form for cuisine, meal type, dietary preferences |
| `RecipeDisplay.jsx` | Beautiful recipe display with ingredients and steps |
| `RecipeGenerator.jsx` | Main container component managing state |

#### `/client/src/` Root Files

| File | Purpose |
|------|---------|
| `App.jsx` | Root React component |
| `main.jsx` | React entry point with theme provider |
| `index.css` | Global styles and Tailwind directives |

#### `/client/` Configuration Files

| File | Purpose |
|------|---------|
| `index.html` | HTML template with meta tags |
| `vite.config.js` | Vite build tool configuration with Tailwind v4 PostCSS |
| `tailwind.config.js` | Tailwind CSS v4 configuration (minimal - uses CSS @theme) |
| `.eslintrc.cjs` | ESLint linting rules |
| `.env.example` | Environment variables template |
| `package.json` | Frontend dependencies and scripts |

### Server (Backend) Files

#### `/server/controllers/`
- `recipeController.js`: Contains AI recipe generation logic

#### `/server/routes/`
- `recipeRoutes.js`: Defines API endpoints

#### `/server/` Root Files

| File | Purpose |
|------|---------|
| `server.js` | Express server setup and configuration |
| `package.json` | Backend dependencies and scripts |
| `.env.example` | Environment variables template |

---

## 🗂️ Generated Folders (Not in Git)

These folders are created during development/build:

```
📂 node_modules/            # All project dependencies
│   ├── client/node_modules/
│   ├── server/node_modules/
│   └── (root)/node_modules/
│
📂 dist/                    # Production build output
│   └── client/dist/
│
📂 .vite/                   # Vite cache
│   └── client/.vite/
```

---

## 📦 Key Dependencies by Location

### Root
```json
{
  "concurrently": "Run multiple commands simultaneously"
}
```

### Client
```json
{
  "react": "UI library",
  "vite": "Build tool",
  "@mui/material": "Material-UI components",
  "tailwindcss": "v4 - Utility-first CSS (CSS-based config)",
  "lucide-react": "Icon library",
  "axios": "HTTP client"
}
```

### Server
```json
{
  "express": "Web framework",
  "@google/generative-ai": "Gemini AI SDK",
  "cors": "Cross-origin requests",
  "dotenv": "Environment variables",
  "nodemon": "Auto-restart during development"
}
```

---

## 🎯 Important Paths

### Development URLs
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- Health Check: `http://localhost:5000/health`

### API Endpoints
- POST `/api/generate-recipe` - Generate recipe
- GET `/health` - Health check

### Configuration Files
- Frontend env: `client/.env`
- Backend env: `server/.env`
- Frontend config: `client/vite.config.js`
- Tailwind config: `client/tailwind.config.js` (minimal in v4)
- Tailwind theme: `client/src/index.css` (@theme block)

### Build Output
- Production build: `client/dist/`
- Source maps: `client/dist/*.map` (if enabled)

---

## 🔍 How to Navigate

### Adding New Features

**Frontend Component:**
```bash
client/src/components/NewFeature.jsx
```

**Backend Endpoint:**
```bash
server/routes/newRoutes.js
server/controllers/newController.js
```

**Styling:**
```bash
client/src/index.css                    # Global styles + @theme block
client/tailwind.config.js               # Tailwind v4 (minimal)
client/src/components/Component.jsx     # Component-specific inline styles
```

### Configuration Changes

**Environment Variables:**
```bash
server/.env                 # Backend secrets
client/.env                 # Frontend variables (optional)
```

**Build Configuration:**
```bash
client/vite.config.js       # Vite settings + Tailwind v4 PostCSS
client/tailwind.config.js   # Minimal Tailwind config
server/package.json         # Server scripts
```

---

## 📊 Project Size Breakdown

### Typical Sizes (Development)
```
📂 client/node_modules/    ~300-500 MB
📂 server/node_modules/    ~50-100 MB
📂 client/src/             ~50-100 KB
📂 server/                 ~20-50 KB
📄 Configuration files     ~10-20 KB
```

### Production Build
```
📂 client/dist/            ~500 KB - 2 MB (optimized)
```

---

## 🎨 Component Hierarchy

```
App
└── RecipeGenerator
    ├── AnimatedBackground
    ├── IngredientInput
    ├── PreferencesForm
    └── RecipeDisplay
```

---

## 🔄 Data Flow

```
User Input (IngredientInput)
    ↓
State Management (RecipeGenerator)
    ↓
API Request (axios)
    ↓
Express Routes (recipeRoutes.js)
    ↓
Controller Logic (recipeController.js)
    ↓
Gemini AI (Google API)
    ↓
Response Processing
    ↓
Frontend Display (RecipeDisplay)
```

---

## 📝 Notes

- **DO commit:** Source code, configuration files, documentation
- **DON'T commit:** node_modules/, .env, dist/, .vite/
- **Structure is scalable:** Easy to add new components/routes
- **Separation of concerns:** Frontend and backend are independent
- **Modern best practices:** ESM modules, Vite for fast builds

---

**Quick Navigation:**
- [📖 Main README](README.md)
- [⚡ Quick Start](QUICKSTART.md)
- [🚀 Deployment](DEPLOYMENT.md)
- [📋 Commands](COMMANDS.md)