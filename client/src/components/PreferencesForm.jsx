'use client';

import React from 'react';
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grow,
  Fade,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { Lightbulb, Sparkles, SlidersHorizontal } from 'lucide-react';

const PreferencesForm = ({ preferences, setPreferences, onGenerate, loading, disabled }) => {
  const handleChange = (field) => (event) => {
    setPreferences({
      ...preferences,
      [field]: event.target.value,
    });
  };

  const selectSx = {
    borderRadius: 3,
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#9333ea',
      borderWidth: '2px',
    },
  };

  return (
    <Box sx={{ maxWidth: '1024px', width: '100%', mx: 'auto', px: { xs: 2, sm: 3 }, mt: 6 }}>
    
      {/* Preferences Card */}
      <Grow in={true} timeout={800}>
        <Card
          sx={{
            borderRadius: 4,
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
            <Grid container spacing={3} sx={{ mb: 3 }}>
              {/* Cuisine */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ '&.Mui-focused': { color: '#9333ea' } }}>Cuisine Type</InputLabel>
                  <Select
                    value={preferences.cuisine}
                    onChange={handleChange('cuisine')}
                    label="Cuisine Type"
                    sx={selectSx}
                  >
                    <MenuItem value="">Any</MenuItem>
                    <MenuItem value="Italian">🇮🇹 Italian</MenuItem>
                    <MenuItem value="Indian">🇮🇳 Indian</MenuItem>
                    <MenuItem value="Chinese">🇨🇳 Chinese</MenuItem>
                    <MenuItem value="Mexican">🇲🇽 Mexican</MenuItem>
                    <MenuItem value="Japanese">🇯🇵 Japanese</MenuItem>
                    <MenuItem value="Mediterranean">🌊 Mediterranean</MenuItem>
                    <MenuItem value="American">🇺🇸 American</MenuItem>
                    <MenuItem value="Thai">🇹🇭 Thai</MenuItem>
                    <MenuItem value="French">🇫🇷 French</MenuItem>
                    <MenuItem value="Korean">🇰🇷 Korean</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Meal Type */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ '&.Mui-focused': { color: '#9333ea' } }}>Meal Type</InputLabel>
                  <Select
                    value={preferences.mealType}
                    onChange={handleChange('mealType')}
                    label="Meal Type"
                    sx={selectSx}
                  >
                    <MenuItem value="">Any</MenuItem>
                    <MenuItem value="Breakfast">🌅 Breakfast</MenuItem>
                    <MenuItem value="Lunch">☀️ Lunch</MenuItem>
                    <MenuItem value="Dinner">🌙 Dinner</MenuItem>
                    <MenuItem value="Snack">🍿 Snack</MenuItem>
                    <MenuItem value="Dessert">🍰 Dessert</MenuItem>
                    <MenuItem value="Appetizer">🥗 Appetizer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Time Limit */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ '&.Mui-focused': { color: '#9333ea' } }}>Time Limit</InputLabel>
                  <Select
                    value={preferences.timeLimit}
                    onChange={handleChange('timeLimit')}
                    label="Time Limit"
                    sx={selectSx}
                  >
                    <MenuItem value="">No limit</MenuItem>
                    <MenuItem value="15">⚡ 15 minutes</MenuItem>
                    <MenuItem value="30">⏱️ 30 minutes</MenuItem>
                    <MenuItem value="45">🕐 45 minutes</MenuItem>
                    <MenuItem value="60">⏰ 1 hour</MenuItem>
                    <MenuItem value="90">🕰️ 1.5 hours</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Dietary */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ '&.Mui-focused': { color: '#9333ea' } }}>Dietary Preference</InputLabel>
                  <Select
                    value={preferences.dietary}
                    onChange={handleChange('dietary')}
                    label="Dietary Preference"
                    sx={selectSx}
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="Vegetarian">🥗 Vegetarian</MenuItem>
                    <MenuItem value="Vegan">🌱 Vegan</MenuItem>
                    <MenuItem value="Gluten-Free">🌾 Gluten-Free</MenuItem>
                    <MenuItem value="Keto">🥑 Keto</MenuItem>
                    <MenuItem value="Low-Carb">🥩 Low-Carb</MenuItem>
                    <MenuItem value="Paleo">🦴 Paleo</MenuItem>
                    <MenuItem value="Dairy-Free">🥛 Dairy-Free</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Generate Button */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={onGenerate}
              disabled={loading || disabled}
              sx={{
                height: 56,
                borderRadius: 3,
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 600,
                background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #f97316 100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7e22ce 0%, #db2777 50%, #ea580c 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 24px -8px rgba(147, 51, 234, 0.4)',
                },
                '&:active': { transform: 'translateY(0)' },
                '&:disabled': {
                  background: '#e5e7eb',
                  color: '#9ca3af',
                },
              }}
            >
              {loading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      border: '3px solid white',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                    }}
                  />
                  <span>Creating Your Recipe...</span>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Lightbulb size={20} />
                  <span>Generate Recipe</span>
                </Box>
              )}
            </Button>
          </CardContent>
        </Card>
      </Grow>
    </Box>
  );
};

export default PreferencesForm;

/* Add this to global CSS:
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/
