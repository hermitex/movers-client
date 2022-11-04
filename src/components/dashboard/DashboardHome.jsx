import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Featured from "../chart/Featured";
import ItemTable from "../table/ItemTable";
import DashHomeWidget from "./DashHomeWidget";

function DashboardHome({ widgetData, user }) {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <DashHomeWidget
          widgetData={widgetData}
          user={user}
        />
      </Box>
      {/* <Box sx={{ width: "100%", mb: 2 }}>
        <Featured />
      </Box> */}
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            justifyItems: "center",
            alignItems: "center",
            p: 2,
            bgcolor: "#FFF",
            boxShadow: 1,
            borderRadius: 1,
            mb: 1,
          }}
        >
          <Typography
            fontWeight={500}
            fontSize="2rem"
            textTransform="capitalize"
            color="GrayText"
          >
            Latest transactions
          </Typography>
        </Box>
        <ItemTable />
      </Box>
    </>
  );
}

export default DashboardHome;
