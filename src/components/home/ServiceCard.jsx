import * as React from "react";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

function ServiceCard({ description, service }) {
  return (
    <Paper
      sx={{
        height: 140,
        width: "20vw",
        padding: "2rem",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          variant="p"
          textAlign="left"
        >
          {description}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          color="error"
          style={{ width: "100%", color: "#000" }}
        >
          {service}
        </Button>
      </Box>
    </Paper>
  );
}

export default ServiceCard;
