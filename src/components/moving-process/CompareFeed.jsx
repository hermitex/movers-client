import { Box } from "@mui/material";
import React from "react";
import ProgressIndicator from "../utils/ProgressIndicator";
import CompareFeedCard from "./CompareFeedCard";

function CompareFeed({ prevStep, onSelect, nextStep, quotes }) {
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
      {!quotes ? (
        <ProgressIndicator />
      ) : (
        <CompareFeedCard
          nextStep={nextStep}
          prevStep={prevStep}
          onSelect={onSelect}
          quotes={quotes}
        />
      )}
    </Box>
  );
}

export default CompareFeed;
