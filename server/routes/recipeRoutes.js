import express from 'express';
import { generateRecipe } from '../controllers/recipeController.js';

const router = express.Router();

// POST /api/generate-recipe
router.post('/generate-recipe', generateRecipe);

export default router;