import { Box } from "@mui/material";

import React from "react";

import MyItemsFeedCard from "./MyItemsFeedCard";

function MyItemsFeed() {
  return (
    <Box
      flex={4}
      textAlign="left"
      height="auto"
      sx={{
        display: "flex",
        flexFlow: "column",
        gap: 2,
      }}
    >
      <MyItemsFeedCard title="My Living Room Items" />
      <MyItemsFeedCard title="My Bedroom Items" />
      <MyItemsFeedCard title="My Dining Room Items" />
      <MyItemsFeedCard title="My Kitchen Items" />
      <MyItemsFeedCard title="My Office Items" />
      <MyItemsFeedCard title="My Outdoor Items" />
      <MyItemsFeedCard title="My Boxes" />
      <MyItemsFeedCard title="Other Items" />
    </Box>
  );
}

export default MyItemsFeed;
