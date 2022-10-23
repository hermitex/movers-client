import { Box, Paper, Typography } from "@mui/material";
import React from "react";

function HowitWorksCard({ title, content }) {
  return (
    <div>
      <Paper
        sx={{
          height: 140,
          width: "20vw",
          padding: "0.5rem",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            textAlign="center"
            color="#FF515E"
          >
            {title}
          </Typography>

          <Typography
            variant="p"
            fontSize="0.9rem"
          >
            {content}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}

export default HowitWorksCard;
