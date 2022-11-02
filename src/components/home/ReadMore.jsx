import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ReadMore() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "#f7f7f7",
        padding: "1.5rem 0.5rem",
        alignItems: "center",
        width: "100%",
        gap: 3,
      }}
    >
      <Box>
        <Typography variant="p" fontWeight="bold" textAlign="center">
          Want to read more about moooving?
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="p"
            fontWeight="bolder"
            textTransform="capitalize"
          >
            What is Moove.com
          </Typography>
          <small>What Moove provides</small>
          <Link to="/services" sx={{ flexGrow: 0 }}>
            <Button sx={{ my: 1 }} variant="outlined" color="error">
              Read more <ArrowRight />
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Divider orientation="vertical" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            fontWeight="bolder"
            variant="p"
            textTransform="capitalize"
          >
            The Moove package
          </Typography>
          <small>Learn more about Mooove.com</small>
          <Link to="/mooove-package" sx={{ flexGrow: 0 }}>
            <Button sx={{ my: 1 }} variant="outlined" color="error">
              Read more <ArrowRight />
            </Button>
          </Link>
        </Box>
      </Box>
      </Box>
  );
}

export default ReadMore;
