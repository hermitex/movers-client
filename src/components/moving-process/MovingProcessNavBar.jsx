import { AppBar, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MovingProcessNavBar({ size, color }) {
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
            <NavLink
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="/moving-process"
              sx={{ flexGrow: 0, my: 1, p: 3 }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  p: 2,
                }}
              >
                Get Started
              </Box>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="/my-items"
              sx={{ flexGrow: 0, my: 1, p: 3 }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  p: 2,
                }}
              >
                My Items
              </Box>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="/compare"
              sx={{ flexGrow: 0, my: 1, p: 3 }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  p: 2,
                }}
              >
                Compare
              </Box>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="/book"
              sx={{ flexGrow: 0, my: 1, p: 3 }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  p: 2,
                }}
              >
                book
              </Box>
            </NavLink>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MovingProcessNavBar;
