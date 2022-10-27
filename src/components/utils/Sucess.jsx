import { Box, Typography } from "@mui/material";
import React from "react";

function Success({ success }) {
  return (
    <Box
      sx={{
        height: "1rem",
        bgcolor: "#90eebf",
        textAlign: "center",
        p: 1,
        borderRadius: "0.1rem",
      }}
    >
      <Typography
        variant="p"
        color="#006400"
        textAlign="center"
      >
        {success}
      </Typography>
    </Box>
  );
}

export default Success;
