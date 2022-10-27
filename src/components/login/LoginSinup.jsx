import React, { useState } from "react";
import Singnup from "../signup/Singnup";
import { Grid, Paper, Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";

import { useNavigate } from "react-router-dom";
import Login from "./Login";

function LoginSignup({ onLogin }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const paperStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: 20,
    height: 600,
    width: 600,
    margin: "100px auto",
  };
  const paperStyleInner = {
    padding: 20,
    height: 600,
    width: 300,
    position: "relative",
    top: "-20px",
    left: "280px",
  };

  return (
    <Grid>
      <Paper
        elevation={10}
        style={paperStyle}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
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
            <Login onLogin={onLogin} />
          ) : (
            <Singnup onLogin={onLogin} />
          )}
        </Paper>
      </Paper>
    </Grid>
  );
}

export default LoginSignup;
