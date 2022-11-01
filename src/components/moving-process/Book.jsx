import { Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/system";
import React from "react";

import MovingProcessNavBar from "./MovingProcessNavBar";

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
      width: 800,
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
              <Paper
                elevation={7}
                style={styles.paperStyle}
              >
                <MovingProcessNavBar
                  size="large"
                  color="error"
                />
                <Box>
                  <div>
                    <h1>Book your Mooove! today ...</h1>
                    <p>Secured payment - No extra charges</p>
                  </div>
                </Box>
                <Box>
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
