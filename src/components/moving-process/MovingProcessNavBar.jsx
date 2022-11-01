import { AppBar, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MovingProcessNavBar({ size, color, nextStep }) {
  const isActiveStyle = {
    backgroundColor: "#FF515E",
    borderRadius: "0.3rem",
    color: () =>
      setButtonStyle({
        variant: "container",
        color: "error",
      }),
  };
  const [buttonStyle, setButtonStyle] = useState({
    variant: "outlined",
    color: "error",
  });
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

              p: 2,
            }}
          >
            <Button
              // component={NavLink}
              // style={({ isActive }) => (isActive ? isActiveStyle : null)}
              variant="outlined"
              color="error"
              sx={{ flexGrow: 0, my: 1, px: 3 }}
              onClick={nextStep}
            >
              Get Started
            </Button>
            <Button
              // component={NavLink}
              // style={({ isActive }) => (isActive ? isActiveStyle : null)}
              variant="outlined"
              color="error"
              sx={{ flexGrow: 0, my: 1, px: 3 }}
              onClick={nextStep}
            >
              My Items
            </Button>
            <Button
              // component={NavLink}
              // style={({ isActive }) => (isActive ? isActiveStyle : null)}
              variant="outlined"
              color="error"
              sx={{ flexGrow: 0, my: 1, px: 3 }}
              onClick={nextStep}
            >
              Compare
            </Button>
            <Button
              // component={NavLink}
              // style={({ isActive }) => (isActive ? isActiveStyle : null)}
              variant="outlined"
              color="error"
              sx={{ flexGrow: 0, my: 1, px: 3 }}
              onClick={nextStep}
            >
              book
            </Button>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MovingProcessNavBar;
