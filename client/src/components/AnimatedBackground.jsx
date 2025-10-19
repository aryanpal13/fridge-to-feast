import React from 'react';
import { Box } from '@mui/material';

const AnimatedBackground = () => {
  return (
    <>
      <Box 
        className="fixed top-0 left-0 w-full h-full -z-10"
        sx={{
          background: 'linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #fff7ed 100%)',
        }}
      />
      
      <Box className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <Box 
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          sx={{
            top: { xs: '10%', md: '20%' },
            left: { xs: '5%', md: '10%' },
            width: { xs: '200px', md: '288px' },
            height: { xs: '200px', md: '288px' },
            backgroundColor: '#d8b4fe',
          }}
        />
        <Box 
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          sx={{
            top: { xs: '20%', md: '40%' },
            right: { xs: '5%', md: '10%' },
            width: { xs: '200px', md: '288px' },
            height: { xs: '200px', md: '288px' },
            backgroundColor: '#fde047',
          }}
        />
        <Box 
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          sx={{
            bottom: { xs: '-5%', md: '-32px' },
            left: { xs: '10%', md: '20%' },
            width: { xs: '200px', md: '288px' },
            height: { xs: '200px', md: '288px' },
            backgroundColor: '#fbcfe8',
          }}
        />
      </Box>
    </>
  );
};

export default AnimatedBackground;