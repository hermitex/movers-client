import { Box } from "@mui/material";
import React from "react";
import CompareFeedCard from "./CompareFeedCard";

function CompareFeed() {
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
      <CompareFeedCard />
      <CompareFeedCard />
      <CompareFeedCard />
      <CompareFeedCard />
      <CompareFeedCard />
      <CompareFeedCard />
      <CompareFeedCard />
    </Box>
  );
}

export default CompareFeed;
