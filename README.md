# 🍳 Fridge-to-Feast - AI Recipe Generator

Transform your fridge ingredients into culinary masterpieces with AI-powered recipe generation!

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![React](https://img.shields.io/badge/react-18.3.1-blue)

## ✨ Features

- 🤖 **AI-Powered**: Uses Google Gemini AI to generate creative recipes
- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations
- ⚡ **Fast**: Built with Vite for lightning-fast development and build times
- 🎯 **Smart Filtering**: Customize by cuisine, meal type, time limit, and dietary preferences
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 🎭 **Glassmorphism**: Modern design with backdrop blur effects
- 🌈 **Animated**: Smooth transitions and engaging user interactions

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gemini API key ([Get it here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd fridge-to-feast
```

2. **Install Backend Dependencies**
```bash
cd server
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../client
npm install
```

4. **Configure Environment Variables**

Create a `.env` file in the `server` directory:
```bash
cd ../server
cp .env.example .env
```

Edit `.env` and add your Gemini API key:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Running the Application

1. **Start the Backend Server**
```bash
cd server
npm run dev
```

The server will start on `http://localhost:5000`

2. **Start the Frontend (in a new terminal)**
```bash
cd client
npm run dev
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
fridge-to-feast/
├── client/                     # Frontend (React + Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── IngredientInput.jsx
│   │   │   ├── PreferencesForm.jsx
│   │   │   ├── RecipeDisplay.jsx
│   │   │   └── RecipeGenerator.jsx
│   │   ├── App.jsx           # Main app component
│   │   ├── main.jsx          # App entry point
│   │   └── index.css         # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                     # Backend (Node.js + Express)
│   ├── controllers/
│   │   └── recipeController.js  # Recipe generation logic
│   ├── routes/
│   │   └── recipeRoutes.js      # API routes
│   ├── server.js               # Server entry point
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## 🎯 Usage

1. **Add Ingredients**: Type in the ingredients you have and press Enter or click the + button
2. **Set Preferences** (Optional):
   - Choose a cuisine type
   - Select meal type
   - Set a time limit
   - Specify dietary restrictions
3. **Generate Recipe**: Click the "Generate Recipe" button
4. **Enjoy**: Get a complete recipe with ingredients, instructions, and tips!

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Material-UI** - Component library
- **Tailwind CSS v4** - Utility-first CSS framework (new CSS-first config!)
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Google Generative AI** - Gemini API for recipe generation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Build for Production

### Frontend
```bash
cd client
npm run build
```

The production-ready files will be in `client/dist/`

### Backend
```bash
cd server
npm start
```

## 🌐 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `cd client && npm run build`
2. Deploy the `client/dist` folder
3. Set environment variables in your hosting platform

### Backend (Railway/Render/Heroku)
1. Deploy the `server` folder
2. Set environment variables:
   - `GEMINI_API_KEY`
   - `PORT`
   - `NODE_ENV=production`
   - `CORS_ORIGIN=<your-frontend-url>`

## 🔑 API Endpoints

### `POST /api/generate-recipe`
Generate a recipe based on ingredients and preferences.

**Request Body:**
```json
{
  "ingredients": ["chicken", "tomatoes", "garlic"],
  "cuisine": "Italian",
  "mealType": "Dinner",
  "timeLimit": "30",
  "dietary": "Gluten-Free"
}
```

**Response:**
```json
{
  "recipe": {
    "name": "Garlic Chicken Pomodoro",
    "description": "A quick and delicious Italian-inspired dish",
    "prepTime": "10 minutes",
    "cookTime": "20 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": [...],
    "instructions": [...],
    "tips": [...]
  }
}
```

### `GET /health`
Health check endpoint.

## 🎨 Customization

### Colors
Edit `client/src/index.css` to customize the color scheme (Tailwind v4 uses CSS variables):
```css
@theme {
  --color-primary-600: #9333ea; /* Change this */
  --color-primary-700: #7e22ce;
}
```

### AI Model
Edit `server/controllers/recipeController.js` to use different Gemini models:
```javascript
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
// Or "gemini-pro-vision" for image support
```

## 🐛 Troubleshooting

### API Key Issues
- Ensure your Gemini API key is valid
- Check that `.env` file is in the `server` directory
- Verify the key starts with `AIza...`

### CORS Errors
- Update `CORS_ORIGIN` in server `.env`
- Restart the backend server after changes

### Build Errors
- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Clear Vite cache: `rm -rf client/.vite`

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

Made with ❤️ and AI