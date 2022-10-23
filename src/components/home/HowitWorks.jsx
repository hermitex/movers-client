import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import howitWorks from "../../assets/homepage/how-moove-works.png";
import HowitworksCardList from "./HowitworksCardList";

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52),
  rgba(0, 0, 0, 0.73)),url(${howitWorks})`,
    height: "80vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 0,
  },
};

function HowitWorks() {
  return (
    <Paper
      style={styles.paperContainer}
      id="#how-it-works"
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignContent: "center",
            height: "60vh",
            gap: 10,
            py: 2,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              textAlign="center"
              fontSize="2rem"
              sx={{
                textTransform: "capitalize",
                color: "#fff",
              }}
            >
              How Mooove Works?
            </Typography>
          </Box>
          <Box
            sx={{
              width: "60vw",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Typography
              variant="p"
              textAlign="center"
              fontSize="1rem"
              sx={{
                color: "#fff",
              }}
            >
              It’s simple: Just enter your move details, compare prices and
              reviews, get moving company quotes, and book online. We instantly
              show exact prices based on how much stuff you have—no ballpark
              estimates or hourly rates. In short, you’re in control of your
              move.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <HowitworksCardList />
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default HowitWorks;
