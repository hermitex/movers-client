import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";

import heroBg from "../../assets/homepage/home-hero.png";
import { NavLink } from "react-router-dom";

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

const pages = [
  { description: "What is Moove.com?", link: "about" },
  { description: "What is included?", link: "services" },
  { description: "How it works?", link: "how-it-works" },
  { dscription: "Get in touch", link: "contact" },
];

function Hero() {
  return (
    <Box>
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
                  letterSpacing: 1,
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

      <Box
        sx={{
          height: "100%",
          bgcolor: "#2F2F2F",
          display: "flex",
        }}
      >
        <Box
          sx={{
            bgcolor: "#fff",
            padding: "0.3rem",
            height: "30vh",
          }}
        >
          {pages.map((page) => (
            <NavLink
              key={page}
              to={`/${page.link.toLocaleLowerCase()}`}
            >
              <Typography
                textAlign="left"
                sx={{
                  my: 2,
                  display: "block",
                  color: "#9C9292",
                  fontSize: "0.7rem",
                }}
              >
                {page.description}
              </Typography>
            </NavLink>
          ))}
        </Box>
        <Box
          sx={{
            height: "30vh",
          }}
        >
          <Typography variant="h6">
            We’re Changing the Way People Move!
          </Typography>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
