import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function Pricing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        padding: "0.5rem 5rem",
        gap: 2,
      }}
    >
      <Typography
        variant="h5"
        textTransform="capitalize"
      >
        Guaranteed Pricing
      </Typography>
      <Box
        sx={{
          width: "60vw",
          textAlign: "center",
          borderBottom: "0.1rem solid grey",
          my: 1,
          py: 1,
        }}
      >
        <Typography
          variant="p"
          fontWeight="bolder"
        >
          It’s simple math. First, each moving company determines their cost per
          unit of stuff. Then we use a standard formula to get exact prices for
          you.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "50vw",
          height: "5rem",
        }}
      >
        <Box>
          <Typography
            variant="p"
            fontWeight="bolder"
          >
            How much stuff you have
          </Typography>
        </Box>
        <Box>
          <Typography
            color="#FF515E"
            fontSize="1.2rem"
            fontWeight="bold"
          >
            x
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="p"
            fontWeight="bolder"
          >
            How far you're going
          </Typography>
        </Box>
        <Box>
          <Typography
            color="#FF515E"
            fontSize="1.2rem"
            fontWeight="bold"
          >
            +
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="p"
            fontWeight="bolder"
          >
            Additional services
          </Typography>
        </Box>
        <Box>
          <Typography
            color="#FF515E"
            fontSize="1.2rem"
            fontWeight="bold"
          >
            =
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="p"
            fontWeight="bolder"
          >
            Guaranteed price
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Pricing;
