import { Button, Paper, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

import MovingProcessNavBar from './MovingProcessNavBar';
import MyItemsSidebar from './MyItemsSidebar';
import MyItemsFeed from './MyItemsFeed';

function MyItems() {
  const styles = {
    paperContainer: {
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url('https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      height: "auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: 0,
    },
    paperStyle: {
      backgroundColor: "#F2F2F2", 
      padding :20, 
      height: 800, 
      width: 800, 
      margin: '100px auto'
    }
  };
  


  return (
    <Box>
      <Paper style={styles.paperContainer}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              height: "auto",
            }}
          >
            <Box>
              <Typography
                variant="h3"
                textAlign="center"
                sx={{
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                Book your move now!!
              </Typography>
            </Box>
            <Box>
              <Paper elevation={7} style={styles.paperStyle} >
                <MovingProcessNavBar size="large" color="error" />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px",
                    justifyContent: "space-between",
                    height: "6vh",                    
                  }}
                >
                  <Typography
                    variant="p"                        
                    sx={{                                           
                      fontWeight: "bolder",
                      fontSize: "20px",
                      letterSpacing: 0.5,
                      color: "#000",
                    }}
                  >
                    Are these all that you are moving?
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    style={{
                      fontSize: "18px"
                    }}
                    
                  >
                    Continue
                  </Button>                  
                </Box>
                <Container>
                  <Stack 
                    direction="row" 
                    spacing={1.5} 
                    
                    padding="10px 10px"
                    gap={2}                    
                    justifyContent="space-between"
                  >
                    <MyItemsSidebar />
                    <MyItemsFeed />
                  </Stack>
                </Container>
              </Paper>
            </Box>            
          </Box>
        </Container>
      </Paper>      
    </Box>
  )
}

export default MyItems