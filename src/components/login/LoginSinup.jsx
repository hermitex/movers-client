import React, { useState } from "react";
import Signup from "../signup/Signup";
import { Grid, Paper, Tabs, Tab, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

import { useNavigate } from "react-router-dom";
import Login from "./Login";
import ProgressIndicator from "../utils/ProgressIndicator";
import Carousel from "./Carousel";

function LoginSignup({ onLogin }) {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const paperStyle = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.73)), url('https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundPosition: "center",
    backgroundSize: "cover",

    padding: 20,
    height: 600,
    width: 400,
    margin: "100px 0px",
  };
  const paperStyleInner = {
    padding: 20,
    margin: "100px 0px",
    height: 600,
    width: 400,
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 0,
      }}
    >
      {isLoading ? <ProgressIndicator /> : null}
      <Paper elevation={10} style={paperStyle} >
        <Carousel />
      </Paper>
      <Paper
        style={paperStyleInner}
        sx={{ display: { xs: "flex", sm: "block" } }}
      >
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="inherit"
          >
            <Tab label="LOG IN" />
            <Tab label="SIGN UP" />
          </Tabs>
        </Box>
        {value === 0 ? (
          <Login setLoading={setIsLoading} onLogin={onLogin} />
        ) : (
          <Signup setLoading={setIsLoading} onLogin={onLogin} />
        )}
      </Paper>
    </Container>
  );
}

export default LoginSignup;
