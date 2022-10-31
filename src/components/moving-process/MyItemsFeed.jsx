import { Box } from "@mui/material";

import React from "react";

import MyItemsFeedCard from "./MyItemsFeedCard";
import SingleItemCard from "./SingleItemCard";

const data = [
  {
    title: "My Living Room Items",
  },
  { title: "My Bedroom Items" },
  {
    title: "My Dining Room Items",
  },
  {
    title: "My Kitchen Items",
  },
  {},
];

function MyItemsFeed({ onAddItem }) {
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
      <MyItemsFeedCard
        onAddItem={onAddItem}
        title="My Living Room Items"
      />
      <MyItemsFeedCard
        onAddItem={onAddItem}
        title="My Bedroom Items"
      />
      <MyItemsFeedCard
        onAddItem={onAddItem}
        title="My Dining Room Items"
      />
      <MyItemsFeedCard
        onAddItem={onAddItem}
        title="My Kitchen Items"
      />
      <MyItemsFeedCard
        onAddItem={onAddItem}
        title="My Office Items"
      />
      <MyItemsFeedCard
        onAddItem={onAddItem}
        title="My Outdoor Items"
      />
      <MyItemsFeedCard
        onAddItem={onAddItem}
        title="My Boxes"
      />
      <MyItemsFeedCard
        onAddItem={onAddItem}
        title="Other Items"
      />
    </Box>
  );
}

export default MyItemsFeed;
