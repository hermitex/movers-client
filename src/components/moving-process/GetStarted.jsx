import { AppBar, Button, Grid, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';

function GetStarted() {

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
                        <Button size='large' variant="contained" color='error'>
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
              </Paper>
            </Box>            
          </Box>
        </Container>
      </Paper>      
    </Box>
  )
}

export default GetStarted