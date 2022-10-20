import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";

function Login() {
  return (
    <Button variant="outlined">
      <Box
        sx={{
          display: "inline-block",
          padding: "0.5",
          color: "#FF515E",
        }}
      >
        Login
      </Box>
    </Button>
  );
}

export default Login;
