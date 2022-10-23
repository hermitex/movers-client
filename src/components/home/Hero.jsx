import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  Paper,
  Typography,
} from "@mui/material";

import TextField from "@mui/material/TextField";

import heroBg from "../../assets/homepage/home-hero.png";
import { NavLink } from "react-router-dom";
import { CalendarMonth, House, PinDrop } from "@mui/icons-material";

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
  {
    id: 1,
    description: "What is Moove.com?",
    link: "about",
    divider: <Divider />,
  },
  {
    id: 2,
    description: "What is included?",
    link: "services",
    divider: <Divider />,
  },
  {
    id: 3,
    description: "How it works?",
    link: "how-it-works",
    divider: <Divider />,
  },
  { id: 4, description: "Get in touch", link: "contact", divider: "" },
];

const formInput = [
  {
    label: "from",
    name: "from",
    placeholder: "From: Address, city or zip",
    icon: <PinDrop />,
    type: "text",
  },
  {
    label: "to",
    name: "from",
    placeholder: "To: Address, city or zip",
    icon: <PinDrop />,
    type: "text",
  },
  {
    label: "house-type",
    name: "house-type",
    placeholder: "House type",
    icon: <House />,
    type: "select",
    options: [
      "1 Bedroom, small(600 - 800 sqf)",
      "1 Bedroom, small(600 - 800 sqf)",
      "1 Bedroom, small(600 - 800 sqf)",
      "1 Bedroom, small(600 - 800 sqf)",
      "1 Bedroom, small(600 - 800 sqf)",
      "1 Bedroom, small(600 - 800 sqf)",
    ],
  },
  {
    label: "move-date",
    name: "move-date",
    placeholder: "Moving date",
    icon: <CalendarMonth />,
    type: "date",
  },
];

function Hero() {
  const handleChange = () => {};
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

          gap: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "inherit",
            padding: "0.3rem",
            height: "30vh",
            width: "3rem",
          }}
        ></Box>
        <Box
          sx={{
            bgcolor: "#fff",
            padding: "0.3rem",
            height: "34vh",
          }}
        >
          {pages.map((page, i) => (
            <NavLink
              key={page}
              to={
                page.id === 3
                  ? `#how-it-works`
                  : `/${page.link.toLocaleLowerCase()}`
              }
            >
              <Typography
                textAlign="left"
                sx={{
                  my: 1,
                  display: "block",
                  color: "#9C9292",
                  fontSize: "0.7rem",
                }}
              >
                {page.description}
              </Typography>
              {page.divider}
            </NavLink>
          ))}
        </Box>
        <Box
          sx={{
            height: "30vh",
            color: "#fff",
            fontSize: "3.5rem",
            fontWeight: "bolder",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem 0",
            gap: 3,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.8rem",
              }}
            >
              We’re Changing the Way <br />
              People Move!
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                fontSize: "0.7rem",
              }}
            >
              <Typography variant="p">
                Compare Prices and Movers Now!
              </Typography>
            </Box>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                gap: 0.5,
              }}
            >
              {formInput.map((input) =>
                input.type === "select" ? (
                  <TextField
                    id={input.label}
                    key={input.name}
                    select
                    label={input.placeholder}
                    value={input.icon}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    variant="filled"
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "0.1rem",
                      // width: "40%",
                    }}
                  >
                    {input.options.map((option) => (
                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                    key={input.label}
                    id={input.label}
                    label={input.placeholder}
                    type={input.type}
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {input.icon}
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChange}
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "0.1rem",
                    }}
                  />
                )
              )}
              <Button
                variant="contained"
                color="error"
                style={{
                  fontSize: "0.7rem",
                  padding: 0,
                  margin: 0,
                  width: "10%",
                }}
              >
                start
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
