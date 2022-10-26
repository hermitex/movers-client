import { AppBar, Button, Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const isActiveStyle = {
  backgroundColor: "#FF515E",
  borderRadius: "0.3rem",
  color: "#FFF",
};

function MovingProcessNavBar({ size, color }) {
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
            }}
          >
            <NavLink
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="/get-started"
              sx={{ flexGrow: 0 }}
            >
              <Button
                size={size}
                variant="outlined"
              >
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
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
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
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
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
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
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
            </NavLink>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}

export default MovingProcessNavBar;
