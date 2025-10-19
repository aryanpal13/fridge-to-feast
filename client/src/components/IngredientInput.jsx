import React, { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Chip,
  Typography,
  Fade,
  Grow,
  Box,
  Stack,
} from '@mui/material';
import { ChefHat, Sparkles, Plus, X, UtensilsCrossed } from 'lucide-react';

const IngredientInput = ({ ingredients, setIngredients }) => {
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [animateTitle, setAnimateTitle] = useState(false);
  const inputRef = useRef(null); // Ref to control the input element

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  const handleAddIngredient = () => {
    const trimmedIngredient = currentIngredient.trim();
    if (trimmedIngredient && !ingredients.includes(trimmedIngredient)) {
      setIngredients([...ingredients, trimmedIngredient]);
      setCurrentIngredient('');
      // Focus the input field after adding an ingredient for quick entry
      inputRef.current?.focus(); 
    }
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter((ing) => ing !== ingredientToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddIngredient();
    }
  };

  return (
    <Box sx={{ maxWidth: '1024px', width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
      {/* Header */}
      <Fade in={animateTitle} timeout={1000}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Box sx={{ display: 'inline-block', position: 'relative', mb: 2 }}>
            <ChefHat size={64} className="text-primary-600 animate-float" />
            <Sparkles size={24} className="text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 1.5,
              // Requires custom CSS for gradient text
              background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Fridge-to-Feast
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 300 }}>
            Transform your ingredients into culinary masterpieces ✨
          </Typography>
        </Box>
      </Fade>

      {/* Main Input Card */}
      <Grow in={true} timeout={800}>
        <Card
          sx={{
            borderRadius: 4,
            // Custom glass effect styles
            bgcolor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 8px 32px 0 rgba(147, 51, 234, 0.2)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
              <UtensilsCrossed size={24} className="text-primary-600" />
              <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                What's in your kitchen?
              </Typography>
            </Stack>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 3 }}>
              <TextField
                inputRef={inputRef}
                fullWidth
                value={currentIngredient}
                onChange={(e) => setCurrentIngredient(e.target.value)}
                onKeyPress={handleKeyPress}
                label="Add an ingredient"
                placeholder="e.g., chicken breast, tomatoes, garlic..."
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    transition: 'border-color 0.2s ease',
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                      borderWidth: '2px',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                onClick={handleAddIngredient}
                disabled={!currentIngredient.trim()}
                aria-label="Add ingredient"
                sx={{
                  minWidth: { sm: 56 },
                  height: 56,
                  borderRadius: 3,
                  color: 'white',
                  background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
                  transition: 'transform 0.2s ease, background 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    background: 'linear-gradient(135deg, #7e22ce 0%, #db2777 100%)',
                  },
                }}
              >
                <Plus size={24} />
              </Button>
            </Stack>

            {/* Ingredient Chips */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: 48, alignItems: 'center' }}>
              {ingredients.length === 0 ? (
                <Typography variant="body2" sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
                  Your ingredients will appear here...
                </Typography>
              ) : (
                ingredients.map((ing) => (
                  <Grow in={true} key={ing} timeout={300}>
                    <Chip
                      label={ing}
                      onDelete={() => handleRemoveIngredient(ing)}
                      deleteIcon={<X size={16} />}
                      sx={{
                        background: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%)',
                        color: 'primary.dark',
                        fontWeight: 600,
                        height: 36,
                        fontSize: '0.9rem',
                        borderRadius: 2,
                        transition: 'transform 0.2s ease, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          background: 'linear-gradient(135deg, #e9d5ff 0%, #fbcfe8 100%)',
                        },
                      }}
                    />
                  </Grow>
                ))
              )}
            </Box>
          </CardContent>
        </Card>
      </Grow>
    </Box>
  );
};

export default IngredientInput;

/* Add this to your global CSS file (e.g., index.css)
  for the animations and custom effects.
*/
/*
@keyframes float {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-10px);
	}
	100% {
		transform: translateY(0px);
	}
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
*/