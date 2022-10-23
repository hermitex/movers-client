import { Grid } from "@mui/material";
import React from "react";
import HowitWorksCard from "./HowitWorksCard";

const steps = [
  {
    title: "1. Plan",
    content:
      "Create your inventory list using our easy planner. You can make changes anytime and see exactly how much it will cost to move each item.",
  },
  {
    title: "2. Compare",
    content:
      "Instantly compare guaranteed prices from multiple movers. Read real customer reviews and select the mover of your choice.",
  },
  {
    title: "3. Book",
    content:
      "Book your move to lock your price. Don't worry! You can make changes anytime or cancel free of charge. ",
  },
  {
    title: "4. Move",
    content:
      "Move and relax. We will handle payments so you don't need to worry about surprises on your move day. All bookings include a full service moving package.",
  },
];

function HowitworksCardList() {
  return (
    <Grid
      sx={{ flexGrow: 1, my: 1 }}
      container
      spacing={2}
    >
      <Grid
        container
        justifyContent="center"
        spacing={2}
      >
        {steps.map(({ title, content }) => (
          <Grid
            key={title}
            item
          >
            <HowitWorksCard
              title={title}
              content={content}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default HowitworksCardList;
