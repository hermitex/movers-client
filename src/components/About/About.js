import { Button, CardMedia, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52),
rgba(0, 0, 0, 0.73)),url('https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
    height: "30vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 0,
  },
};

const steps = [
  {
    title: "Tiberius Mairura",
    subtitle: "{Scrum Master}",
    content:
      'https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    title: "Elijah Bundi",
    subtitle: "{Team Lead}",
    content:
    "https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Denis Maina",
    subtitle: "{Frontend Dev}",
    content:
    'https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    title: "Festus Kiprop",
    subtitle: "{Backend Dev}",
    content:
    "https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Jackline Jebet",
    subtitle: "{Backend Dev}",
    content:
    "https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
];

function About() {
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
              height: "30vh",
              gap: 3,
            }}
          >
            <Box>
              <Typography
                variant="h2"
                textAlign="center"
                sx={{
                  textTransform: "uppercase",
                  color: "#fff",
                  letterSpacing: 1,
                  fontWeight: "bolder"
                }}
              >
                ABOUT US
              </Typography>
            </Box> 
                                 
          </Box>
        </Container>
      </Paper>
      <Box
        sx={{

          textAlign: "center",
          height: "100%",
          width: "100%",        
          display: "flex",
          flexFlow: "column",
          padding: "1rem ",
          justifyContent: "center",          
          gap: 2,
        }}
      >
        <Box
          sx={{
            height: "5vh",
            color: "#000",
            fontSize: "3.5rem",
            fontWeight: "bolder",           
            padding: "1rem 0",            
          }}
        >
          <Box>
            <Typography
              variant="h6"
              textAlign="center"
              sx={{
                fontSize: "1.8rem",
                fontWeight: "bolder",
              }}
            >
              THE TEAM
            </Typography>
          </Box>  
          <Divider />        
        </Box>
        <Grid
          sx={{ flexGrow: 1, my: 1 }}
          container
          spacing={2}
        >
          <Grid
            container
            justifyContent="center"
            spacing={10}
          >
            {steps.map(({ title, content, subtitle }) => (
              <Grid
                key={title}                
                item sm={8} md={4}
                
              >
                <Paper
                  sx={{
                    height: 250,                   
                    Maxwidth: "30vw",
                    padding: "0.5rem",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    display: "flex",
                    flexDirection: "column",                    
                    // justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      
                    }}
                  >
                     <CardMedia
                      component="img"
                      height="170"
                      image={content}
                      alt="Paella dish"
                    />
                    <Typography
                      variant="h6"
                      textAlign="center"
                      color="#FF515E"
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="p"
                      fontSize="1rem"
                    >
                      {subtitle}
                    </Typography>
                    
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      
    </Box>
  )
}

export default About