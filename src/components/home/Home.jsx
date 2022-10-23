import React from "react";
import Hero from "./Hero";
import Grid from "@mui/material/Grid";
import ServiceCard from "./ServiceCard";
import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import truckIcon from "../../assets/icons/truck-timer.png";
import WhyMoover from "./WhyMoover";
import HowitWorks from "./HowitWorks";
import Pricing from "./Pricing";

function Home() {
  return (
    <>
      <Hero />
      <Grid
        sx={{ flexGrow: 1, my: 1 }}
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
        >
          <Grid
            container
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <ServiceCard
                description="Moving within the same state or within a short distance?"
                service="local moving"
              />
            </Grid>
            <Grid item>
              <ServiceCard
                description="Does your move take you across state lines?"
                service="long-distance moving"
              />
            </Grid>
            <Grid item>
              <ServiceCard
                description="Moving your business to a new address?"
                service="corporate moving"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            padding: "0.5rem 5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Box sx={{ width: "3rem" }}>
              <img
                width="100%"
                src={truckIcon}
                alt="truck"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 1,
              }}
            >
              <Typography
                variant="p"
                fontWeight="bolder"
              >
                Get moooving today!!
              </Typography>
              <Typography variant="p">
                We have a team of dedicated moving specialists waiting to help.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="error"
            >
              view all services
            </Button>
          </Box>
        </Box>
      </Container>
      <WhyMoover />
      <HowitWorks />
      <Pricing />
    </>
  );
}

export default Home;
