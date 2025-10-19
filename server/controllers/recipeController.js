import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateRecipe = async (req, res) => {
  try {
    const { ingredients, cuisine, mealType, timeLimit, dietary } = req.body;

    // Validation
    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({ 
        error: 'Please provide at least one ingredient' 
      });
    }

    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      console.error('❌ GEMINI_API_KEY is not set in .env file');
      return res.status(500).json({ 
        error: 'Server configuration error: API key not configured' 
      });
    }

    console.log('🔍 Generating recipe for:', ingredients.join(', '));

    // Build the prompt
    const prompt = buildPrompt(ingredients, cuisine, mealType, timeLimit, dietary);

    console.log('📩 Sending request to Gemini AI...');

    // Call Gemini API with correct method
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log('✅ Recipe generated successfully');

    // Parse the response
    const recipe = parseRecipeResponse(text);

    res.status(200).json({ recipe });
  } catch (error) {
    console.error('❌ Recipe generation error:', error);
    
    // Specific error handling
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('invalid API key')) {
      return res.status(401).json({ 
        error: 'Invalid Gemini API key. Please check your .env file.' 
      });
    }

    if (error.message?.includes('quota')) {
      return res.status(429).json({ 
        error: 'API quota exceeded. Please try again later.' 
      });
    }

    if (error.message?.includes('network') || error.message?.includes('fetch')) {
      return res.status(503).json({ 
        error: 'Network error. Please check your internet connection.' 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to generate recipe. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Helper function to build the prompt
function buildPrompt(ingredients, cuisine, mealType, timeLimit, dietary) {
  let prompt = `Create a detailed, creative recipe using the following ingredients: ${ingredients.join(', ')}.

`;

  if (cuisine) prompt += `The recipe should be ${cuisine} cuisine. `;
  if (mealType) prompt += `It should be suitable for ${mealType}. `;
  if (timeLimit) prompt += `The total cooking time should be under ${timeLimit} minutes. `;
  if (dietary) prompt += `The recipe must be ${dietary}. `;

  prompt += `

Please provide the recipe in the following JSON format (respond ONLY with valid JSON, no other text):

{
  "name": "Creative Recipe Name",
  "description": "Brief appetizing description",
  "prepTime": "X minutes",
  "cookTime": "Y minutes",
  "servings": "Z servings",
  "difficulty": "Easy/Medium/Hard",
  "ingredients": [
    "ingredient with quantity",
    "another ingredient with quantity"
  ],
  "instructions": [
    "Step 1 instruction",
    "Step 2 instruction"
  ],
  "tips": [
    "Helpful tip 1",
    "Helpful tip 2"
  ]
}

Make the recipe creative, practical, and delicious. Include specific measurements and clear instructions.`;

  return prompt;
}

// Helper function to parse the AI response
function parseRecipeResponse(text) {
  try {
    // Remove markdown code blocks if present
    let cleanedText = text.trim();
    cleanedText = cleanedText.replace(/```json\s*/g, '');
    cleanedText = cleanedText.replace(/```\s*/g, '');
    cleanedText = cleanedText.trim();

    // Parse JSON
    const recipe = JSON.parse(cleanedText);

    // Validate required fields
    if (!recipe.name || !recipe.ingredients || !recipe.instructions) {
      throw new Error('Invalid recipe format');
    }

    console.log('✅ Recipe parsed successfully:', recipe.name);

    return recipe;
  } catch (error) {
    console.error('❌ Parse error:', error);
    console.error('Raw text received:', text.substring(0, 200) + '...');
    
    // Fallback: try to extract basic info
    return {
      name: "Delicious Recipe",
      description: "A wonderful dish made with your ingredients",
      prepTime: "15 minutes",
      cookTime: "20 minutes",
      servings: "2-4 servings",
      difficulty: "Easy",
      ingredients: ["Use the ingredients you provided in appropriate quantities"],
      instructions: [
        "Prepare your ingredients as needed",
        "Follow standard cooking methods for your dish",
        "Cook until done and adjust seasonings to taste"
      ],
      tips: ["The AI response could not be parsed properly. Please try again with different ingredients."]
    };
  }
}