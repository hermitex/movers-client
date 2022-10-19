import Button from "@mui/material/Button";
import { Login as LoginIcon } from "@mui/icons-material";
import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";

function Login() {
  return (
    <Container>
      <Button variant="outlined">
        <Box
          sx={{
            display: "inline-block",
            padding: "0.5",
          }}
        >
          Login
        </Box>
        <LoginIcon />
      </Button>
    </Container>
  );
}

export default Login;
