import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Fade,
  Box,
  Stack,
  Divider,
} from '@mui/material';
import { X, Timer, Users, UtensilsCrossed, ChefHat } from 'lucide-react';

// Reusable component for the styled info chips
const InfoChip = ({ icon, label }) => (
  <Stack 
    direction="row" 
    alignItems="center" 
    spacing={1} 
    sx={{
      bgcolor: 'rgba(255, 255, 255, 0.2)',
      px: 2,
      py: 1,
      borderRadius: '9999px',
      backdropFilter: 'blur(4px)',
    }}
  >
    {icon}
    <Typography variant="body2" sx={{ fontWeight: 500, color: 'white', letterSpacing: '0.5px' }}>
      {label}
    </Typography>
  </Stack>
);

// Main Component
const RecipeDisplay = ({ recipe, onReset }) => {
  if (!recipe) return null;

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, display: 'flex', justifyContent: 'center' }}>
      <Fade in={true} timeout={1000}>
        <Card
          sx={{
            maxWidth: '1024px',
            width: '100%',
            borderRadius: 6,
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            // The glass effect background
            bgcolor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              color: 'white',
              background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #f97316 100%)',
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} sx={{ mb: 3 }}>
              <Box>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                  {recipe.name}
                </Typography>
                {recipe.description && (
                  <Typography sx={{ opacity: 0.9, mt: 1, fontSize: { xs: '1rem', md: '1.125rem' } }}>
                    {recipe.description}
                  </Typography>
                )}
              </Box>
              <IconButton
                onClick={onReset}
                aria-label="Close recipe"
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
                }}
              >
                <X size={24} />
              </IconButton>
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {recipe.prepTime && <InfoChip icon={<Timer size={18} />} label={recipe.prepTime} />}
              {recipe.cookTime && <InfoChip icon={<ChefHat size={18} />} label={`${recipe.cookTime} cook`} />}
              {recipe.servings && <InfoChip icon={<Users size={18} />} label={`${recipe.servings} servings`} />}
              {recipe.difficulty && <InfoChip icon={'🎯'} label={recipe.difficulty} />}
            </Stack>
          </Box>
          
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={{ xs: 4, md: 5 }} divider={<Divider flexItem />}>
              
              {/* Ingredients Section */}
              <Box>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                  <UtensilsCrossed size={24} className="text-primary-600" />
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Ingredients
                  </Typography>
                </Stack>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
                  {recipe.ingredients?.map((ingredient, index) => (
                    <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                       <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>•</Typography>
                       <Typography variant="body1">{ingredient}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Instructions Section */}
              <Box>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
                  <ChefHat size={24} className="text-pink-600" />
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Instructions
                  </Typography>
                </Stack>
                <Stack spacing={2.5}>
                  {recipe.instructions?.map((instruction, index) => (
                    <Stack direction="row" key={index} spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography variant="body1" sx={{ pt: 0.5, lineHeight: 1.7 }}>
                        {instruction}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              {/* Tips Section */}
              {recipe.tips?.length > 0 && (
                <Box>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    💡 Chef's Tips
                  </Typography>
                  <Box sx={{ bgcolor: '#fefce8', border: '1px solid #fde047', borderRadius: 4, p: 3 }}>
                    <Stack component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }} spacing={1.5}>
                      {recipe.tips.map((tip, index) => (
                        <Stack component="li" key={index} direction="row" spacing={1.5} alignItems="flex-start">
                          <Typography sx={{ mt: '2px' }}>✨</Typography>
                          <Typography variant="body1">{tip}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              )}
            </Stack>

            {/* Action Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5 }}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                onClick={onReset}
                sx={{ borderRadius: 3, height: 52, fontWeight: 'bold' }}
              >
                Create Another
              </Button>
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={() => window.print()}
                sx={{ 
                  borderRadius: 3, 
                  height: 52, 
                  fontWeight: 'bold',
                  color: 'white',
                  background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7e22ce 0%, #db2777 100%)',
                  }
                }}
              >
                Print Recipe
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
};

export default RecipeDisplay;