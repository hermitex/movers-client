import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import heroBg from "../../assets/homepage/home-hero.png";

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52),
rgba(0, 0, 0, 0.73)),url(${heroBg})`,
    height: "60vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 0,
  },
};

function Home() {
  return (
    <Paper style={styles.paperContainer}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            height: "60vh",
            gap: 3,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              looking to move?
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="p"
              textAlign="center"
              sx={{
                color: "#fff",
              }}
            >
              Get a free quote and let the proffesionals do all the work
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="error"
            >
              read more
            </Button>
            <Button variant="contained">get started</Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default Home;
