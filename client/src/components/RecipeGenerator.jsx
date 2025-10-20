import React, { useState } from 'react';
import IngredientInput from './IngredientInput';
import PreferencesForm from './PreferencesForm';
import RecipeDisplay from './RecipeDisplay';
import AnimatedBackground from './AnimatedBackground';
import axios from 'axios';
import { Alert, Snackbar, Box, Container } from '@mui/material';

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState([]);
  const [preferences, setPreferences] = useState({
    cuisine: '',
    mealType: '',
    timeLimit: '',
    dietary: ''
  });
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const handleGenerateRecipe = async () => {
    if (ingredients.length === 0) {
      setError('Please add at least one ingredient');
      setShowError(true);
      return;
    }

    setLoading(true);
    setError('');
    setRecipe(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const response = await axios.post(`${API_URL}/api/generate-recipe`, {
  ingredients,
  ...preferences
});


      setRecipe(response.data.recipe);
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'Failed to generate recipe. Please try again.';
      setError(errorMessage);
      setShowError(true);
      console.error('Recipe generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setIngredients([]);
    setPreferences({
      cuisine: '',
      mealType: '',
      timeLimit: '',
      dietary: ''
    });
    setRecipe(null);
    setError('');
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <Box className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <Container 
        maxWidth={false}
        className="relative z-10"
        sx={{ 
          py: { xs: 4, md: 8 },
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {!recipe ? (
          <Box className="space-y-6">
            <IngredientInput 
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
            <PreferencesForm 
              preferences={preferences}
              setPreferences={setPreferences}
              onGenerate={handleGenerateRecipe}
              loading={loading}
              disabled={ingredients.length === 0}
            />
          </Box>
        ) : (
          <RecipeDisplay 
            recipe={recipe}
            onReset={handleReset}
          />
        )}
      </Container>

      <Snackbar 
        open={showError} 
        autoHideDuration={6000} 
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseError} 
          severity="error" 
          sx={{ 
            width: '100%',
            borderRadius: '12px',
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RecipeGenerator;