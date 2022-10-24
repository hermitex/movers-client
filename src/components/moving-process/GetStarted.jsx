import { CalendarMonth, House, PinDrop } from '@mui/icons-material';
import { Button, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

import MovingProcessNavBar from './MovingProcessNavBar';

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
      height: 700, 
      width: 800, 
      margin: '100px auto'
    }
  };

  const formInput = [
    {
      label: "from",
      name: "from",
      placeholder: "From: Address, city or zip",
      icon: <PinDrop />,
      type: "text",
    },
    {
      label: "to",
      name: "to",
      placeholder: "To: Address, city or zip",
      icon: <PinDrop />,
      type: "text",
    },
    {
      label: "house-type",
      name: "house-type",
      placeholder: "House type",
      icon: <House />,
      type: "select",
      options: [
        "1 Bedroom, small(600 - 800 sqf)",
        "1 Bedroom, small(600 - 800 sqf)",
        "1 Bedroom, small(600 - 800 sqf)",
        "1 Bedroom, small(600 - 800 sqf)",
        "1 Bedroom, small(600 - 800 sqf)",
        "1 Bedroom, small(600 - 800 sqf)",
      ],
    },
    {
      label: "move-date",
      name: "move-date",
      placeholder: "Moving date",
      icon: <CalendarMonth />,
      type: "date",
    },
  ];

  const handleChange = () => {}

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
                <MovingProcessNavBar size="large" color="error"/>
                <Container>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      textAlign: "center",
                      height: "60vh",
                      gap: 5,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="p"                        
                        sx={{
                          fontWeight: "bolder",
                          letterSpacing: 0.5,
                          color: "#000",
                        }}
                      >
                        Compare guaranteed moving quotes from the best moving companies
                        <br />
                        Book with Mooove and save 45% on your moving costs!
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant='h4'
                        sx={{
                          fontWeight: "bold",
                          letterSpacing: 0.5,
                          color: "#2f2f2f",
                        }}
                      >
                        Guess what Denis! No hidden Fees
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      autoComplete="off"
                      sx={{
                        display: "flex",
                        flexFlow: "row wrap",
                        justifyContent: "center",
                        gap: 7,
                      }}
                    >
                      {formInput.map((input) =>
                        input.type === "select" ? (                         
                          <TextField
                            id={input.label}
                            key={input.name}
                            select
                            label={input.placeholder}
                            value={input.icon}
                            onChange={handleChange}
                            SelectProps={{
                              native: true,
                            }}
                            variant="filled"
                            sx={{
                              bgcolor: "#fff",
                              borderRadius: "0.1rem",
                              // width: "40%",
                            }}
                          >
                            {input.options.map((option) => (
                              <option
                                key={option}
                                value={option}
                              >
                                {option}
                              </option>
                            ))}
                          </TextField>
                        ) : (
                          <TextField
                            key={input.name}
                            id={input.label}
                            label={input.placeholder}
                            type={input.type}
                            variant="filled"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  {input.icon}
                                </InputAdornment>
                              ),
                            }}
                            onChange={handleChange}
                            sx={{
                              bgcolor: "#fff",
                              borderRadius: "0.1rem",
                            }}
                          />
                        )
                      )}      
                    </Box>
                    <br />
                    <Box>
                      <Button
                          variant="contained"
                          color="error"
                          style={{
                            fontSize: "20px",
                            textTransform: "capitalize",
                            padding: 0,
                            margin: 0,
                          }}
                          fullWidth
                        >
                          Get prices and compare movers
                        </Button>
                    </Box>
                  </Box>
                </Container>                
              </Paper>
            </Box>            
          </Box>
        </Container>
      </Paper>      
    </Box>
  )
}

export default GetStarted