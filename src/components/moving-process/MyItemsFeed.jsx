import { Box } from '@mui/material';

import React from 'react';

import MyItemsFeedCard from './MyItemsFeedCard';


function MyItemsFeed() {

  return (
    <Box bgcolor="#fff" flex={4} textAlign="center" height="auto" >
      <MyItemsFeedCard />
    </Box>
  )
}

export default MyItemsFeed