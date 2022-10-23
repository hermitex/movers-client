import { Box } from "@mui/material";
import React from "react";
import partners from "../../assets/homepage/moove-partners.png";

function Partners() {
  return (
    <Box
      sx={{
        height: "8rem",
        margin: "0 auto",
      }}
    >
      <img
        width="100%"
        height="100%"
        src={partners}
        alt="partners"
      />
    </Box>
  );
}

export default Partners;
