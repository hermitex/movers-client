import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

function ReadMore() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 3,
      }}
    >
      <Box>
        <Typography
          variant="p"
          fontWeight="bold"
          textAlign="center"
        >
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
          <Button
            sx={{ my: 1 }}
            variant="outlined"
            color="error"
          >
            Read more <ArrowRight />
          </Button>
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
          <Button
            sx={{ my: 1 }}
            variant="outlined"
            color="error"
          >
            Read more <ArrowRight />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ReadMore;
