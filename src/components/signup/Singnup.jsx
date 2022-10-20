import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Singnup() {
  return (
    <Button variant="outlined">
      <Box
        sx={{
          display: "inline-block",
          padding: "0.5",
          color: "#FF515E",
        }}
      >
        Signup
      </Box>
    </Button>
  );
}

export default Singnup;
