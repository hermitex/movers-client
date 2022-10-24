import { AppBar, Button, Grid, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react';
import { Link } from 'react-router-dom';


function MovingProcessNavBar({ size, color }) {
  
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#fff",
          color: "#000",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Link
              to="/get-started"
              sx={{ flexGrow: 0 }}
            >
              <Button size={size} variant="contained" color={color}>
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "0.5",
                    color: "#fff",
                  }}
                >
                  Get Started
                </Box>
              </Button>
            </Link>
            <Link
              to="/my-items"
              sx={{ flexGrow: 0 }}
            >
              <Button variant="outlined">
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "0.5",
                    color: "#FF515E",
                  }}
                >
                  My Items
                </Box>
              </Button>
            </Link>
            <Link
              to="/compare"
              sx={{ flexGrow: 0 }}
            >
              <Button variant="outlined">
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "0.5",
                    color: "#FF515E",
                  }}
                >
                  Compare 
                </Box>
              </Button>
            </Link>
            <Link
              to="/book"
              sx={{ flexGrow: 0 }}
            >
              <Button variant="outlined">
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "0.5",
                    color: "#FF515E",
                  }}
                >
                  book
                </Box>
              </Button>
            </Link>
          </Box>
        </Container>
      </AppBar>
    </Box>
  )
}

export default MovingProcessNavBar