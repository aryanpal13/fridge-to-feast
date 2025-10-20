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
  Box,
  Grid
} from '@mui/material';
import { Lightbulb } from 'lucide-react';

const PreferencesForm = ({ preferences, setPreferences, onGenerate, loading, disabled }) => {
  const handleChange = (field) => (event) => {
    setPreferences({
      ...preferences,
      [field]: event.target.value
    });
  };

  return (
    <Box className="w-full max-w-5xl mx-auto px-4 mt-8 inline-flex justify-center">
      <Grow in={true} timeout={1000}>
        <Card 
          className="glass-effect shadow-2xl border border-white/20 hover:shadow-purple-200/50 transition-all duration-300"
          sx={{ 
            borderRadius: '24px',
            marginTop: { xs: 2, md: 4 },
            overflow: 'visible'
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            {/* Preferences Grid */}
            <Grid container spacing={{ xs: 2.5, sm: 3 }} sx={{ mb: { xs: 3, md: 4 } }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel 
                    shrink
                    sx={{ 
                      '&.Mui-focused': { color: '#9333ea' },
                      backgroundColor: 'white',
                      paddingX: 1,
                      fontSize: '1rem',
                    }}
                  >
                    Cuisine Type
                  </InputLabel>
                  <Select
                    value={preferences.cuisine}
                    onChange={handleChange('cuisine')}
                    displayEmpty
                    sx={{
                      borderRadius: '12px',
                      '& .MuiSelect-select': {
                        paddingY: '16px',
                        paddingX: '14px',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#9333ea',
                        borderWidth: '2px',
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>Any Cuisine</em>
                    </MenuItem>
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

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel 
                    shrink
                    sx={{ 
                      '&.Mui-focused': { color: '#9333ea' },
                      backgroundColor: 'white',
                      paddingX: 1,
                      fontSize: '1rem',
                    }}
                  >
                    Meal Type
                  </InputLabel>
                  <Select
                    value={preferences.mealType}
                    onChange={handleChange('mealType')}
                    displayEmpty
                    sx={{
                      borderRadius: '12px',
                      '& .MuiSelect-select': {
                        paddingY: '16px',
                        paddingX: '14px',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#9333ea',
                        borderWidth: '2px',
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>Any Meal Type</em>
                    </MenuItem>
                    <MenuItem value="Breakfast">🌅 Breakfast</MenuItem>
                    <MenuItem value="Lunch">☀️ Lunch</MenuItem>
                    <MenuItem value="Dinner">🌙 Dinner</MenuItem>
                    <MenuItem value="Snack">🍿 Snack</MenuItem>
                    <MenuItem value="Dessert">🍰 Dessert</MenuItem>
                    <MenuItem value="Appetizer">🥗 Appetizer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel 
                    shrink
                    sx={{ 
                      '&.Mui-focused': { color: '#9333ea' },
                      backgroundColor: 'white',
                      paddingX: 1,
                      fontSize: '1rem',
                    }}
                  >
                    Time Limit
                  </InputLabel>
                  <Select
                    value={preferences.timeLimit}
                    onChange={handleChange('timeLimit')}
                    displayEmpty
                    sx={{
                      borderRadius: '12px',
                      '& .MuiSelect-select': {
                        paddingY: '16px',
                        paddingX: '14px',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#9333ea',
                        borderWidth: '2px',
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>No time limit</em>
                    </MenuItem>
                    <MenuItem value="15">⚡ 15 minutes</MenuItem>
                    <MenuItem value="30">⏱️ 30 minutes</MenuItem>
                    <MenuItem value="45">🕐 45 minutes</MenuItem>
                    <MenuItem value="60">⏰ 1 hour</MenuItem>
                    <MenuItem value="90">🕰️ 1.5 hours</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel 
                    shrink
                    sx={{ 
                      '&.Mui-focused': { color: '#9333ea' },
                      backgroundColor: 'white',
                      paddingX: 1,
                      fontSize: '1rem',
                    }}
                  >
                    Dietary Preference
                  </InputLabel>
                  <Select
                    value={preferences.dietary}
                    onChange={handleChange('dietary')}
                    displayEmpty
                    sx={{
                      borderRadius: '12px',
                      '& .MuiSelect-select': {
                        paddingY: '16px',
                        paddingX: '14px',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#9333ea',
                        borderWidth: '2px',
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>No dietary restrictions</em>
                    </MenuItem>
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
                height: '56px',
                borderRadius: '12px',
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 600,
                background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #f97316 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7e22ce 0%, #db2777 50%, #ea580c 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 24px -8px rgba(147, 51, 234, 0.4)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
                '&:disabled': {
                  background: '#e5e7eb',
                  color: '#9ca3af',
                },
                transition: 'all 0.3s ease',
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
                      '@keyframes spin': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' }
                      }
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