import { Box } from "@mui/material";
import React from "react";
import CompareFeedCard from "./CompareFeedCard";

function CompareFeed({ nextStep }) {
  return (
    <Box
      flex={4}
      textAlign="left"
      height="auto"
      sx={{
        display: "flex",
        flexFlow: "column",
        gap: 1,
      }}
    >
      <CompareFeedCard nextStep={nextStep} />
      <CompareFeedCard nextStep={nextStep} />
      <CompareFeedCard nextStep={nextStep} />
      <CompareFeedCard nextStep={nextStep} />
      <CompareFeedCard nextStep={nextStep} />
      <CompareFeedCard nextStep={nextStep} />
      <CompareFeedCard nextStep={nextStep} />
    </Box>
  );
}

export default CompareFeed;
