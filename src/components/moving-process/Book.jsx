import { Button, Divider, IconButton, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/system";
import React from "react";
import truckIcon from "../../assets/icons/truck-timer.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MovingProcessNavBar from "./MovingProcessNavBar";
import { ArrowRight } from "@mui/icons-material";
import Link from "@mui/material/Link";
import Paypal from "../payment/Paypal";

function Book() {
  const styles = {
    paperContainer: {
      backgroundImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url('https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      height: "auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: 0,
    },
    paperStyle: {
      backgroundColor: "#F2F2F2",
      padding: 20,
      height: 800,
      width: 900,
      margin: "100px auto",
    },
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
              <Paper elevation={7} style={styles.paperStyle}>
                <MovingProcessNavBar size="large" color="error" />
                <Container>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                      alignContent: "left",
                      padding: "1rem 0rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignContent: "left",
                      }}
                    >
                      <Box sx={{ width: "3rem" }}>
                        <img width="100%" src={truckIcon} alt="truck" />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          paddingLeft: 1,
                        }}
                      >
                        <Typography variant="p" fontWeight="bolder">
                          Book your Mooove today...
                        </Typography>
                        <Typography variant="p">
                          Secured Payment - No extra charges
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Container>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    padding: "20px 0px",
                  }}
                >
                  <Box                  
                    sx={{
                      flex: 1.3,                     
                    }}
                   
                  >
                    <Box
                      component="form"
                      sx={{                        
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                    <h3>Contact information</h3>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                    />
                    <br />
                    <br />
                    <h3>Billing</h3>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Card Number"
                      variant="outlined"
                    />
                    <br />
                    <br />
                    <h3>Expiration Date</h3>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Card Number"
                      variant="outlined"
                    />
                    </Box>
                    <Paypal />
                  </Box>
                  
                  <Box
                    sx={{
                      display: "flex",
                      flexFlow: "column",
                      padding: "10px 0px",
                      gap: 2,
                      flex: 1,
                      textAlign: "center",
                      // #FF515E
                      // "& > :not(style)": { m: 1, width: "25ch" }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#FF515E",
                        textDecoration: "underline",
                      }}
                    >
                      REVIEW YOUR MOVE PLAN
                    </Typography>

                    <Box
                      sx={{
                        bgcolor: "#fff",
                        height: "100%",
                        textAlign: "left",
                        padding: "10px",
                      }}
                    >
                      <Typography variant="h6">Moving Company</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 4,
                          alignItems: "center",
                          alignContent: "left",
                          padding: "1rem 0rem",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            alignContent: "left",
                          }}
                        >
                          <Box sx={{ width: "3rem" }}>
                            <IconButton sx={{ bgcolor: "white" }} size="large">
                              <AccountCircleIcon />
                            </IconButton>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              paddingLeft: 1,
                            }}
                          >
                            <Typography variant="h6" fontWeight="bolder">
                              Pyramid Moovers
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexFlow: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">Details</Typography>
                        <Typography variant="p" sx={{ color: "#FF515E" }}></Typography>
                        <Link href="#" underline="always" >
                          Edit my Details
                        </Link>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Move Date
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Friday, Oct 30, 2022
                          </Typography>
                        </Box>
                        <Divider />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Mover Arrival Time
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            8:00-10:00am
                          </Typography>
                        </Box>
                        <Divider />
                        <br />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexFlow: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">Pricing</Typography>
                        <Typography variant="p" sx={{ color: "#FF515E" }}></Typography>
                        <Link href="#" underline="always" >
                          See detailed pricing
                        </Link>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Items
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            KES 4,999
                          </Typography>
                        </Box>
                        <Divider />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Distance
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            KES 1,299
                          </Typography>
                        </Box>
                        <Divider />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            VAT
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            KES 999
                          </Typography>
                        </Box>
                        <Divider />
                        <br />
                      </Box>
                      <br />
                      <br />                      
                    </Box>
                    <Box
                        sx={{
                          padding: "10px",                          
                          bgcolor: "#2a2a2a",
                          color: "#fff",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            Grand Total
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            KES 6,999
                          </Typography>
                        </Box>
                      </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default Book;
