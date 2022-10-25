import { Box } from '@mui/material';

import React from 'react';

import MyItemsFeedCard from './MyItemsFeedCard';


function MyItemsFeed() {

  return (
    <Box 
      flex={4} 
      textAlign="center" 
      height="auto" 
      sx={{  
        display: "flex",
        flexFlow: "column",     
        gap: 2
      }} 
    >
      <MyItemsFeedCard />
      <MyItemsFeedCard />
    </Box>
  )
}

export default MyItemsFeed