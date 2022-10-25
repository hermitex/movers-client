import React, { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  Paper,
  Typography,
} from "@mui/material";
import { accessToken } from "mapbox-gl";

import TextField from "@mui/material/TextField";

import heroBg from "../../assets/homepage/home-hero.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
    type: "autocomplete",
    option: "",
  },
  {
    label: "to",
    name: "from",
    placeholder: "To: Address, city or zip",
    icon: <PinDrop />,
    type: "autocomplete",
    option: "",
  },
  {
    label: "house-type",
    name: "house-type",
    placeholder: "House type",
    icon: <House />,
    type: "autocomplete",
    option: "house",
  },
  {
    label: "move-date",
    name: "move-date",
    placeholder: "Moving date",
    icon: <CalendarMonth />,
    type: "date",
    option: "",
  },
];

const houseOptions = [
  { id: 1, house: "1 Bedroom, small(600 - 800 sqf)" },
  { id: 2, house: "1 Bedroom, small(600 - 800 sqf)" },
  { id: 3, house: "1 Bedroom, small(600 - 800 sqf)" },
  { id: 4, house: "1 Bedroom, small(600 - 800 sqf)" },
  { id: 5, house: "1 Bedroom, small(600 - 800 sqf)" },
  { id: 6, house: "1 Bedroom, small(600 - 800 sqf)" },
];

function Hero() {
  accessToken = process.env.REACT_APP_MAPBOX_KEY;
  const [suggestions, setSuggestions] = useState([]);

  const [value, setValue] = useState("");

  const [data, setData] = useState({
    houseType: "",
    movingFrom: {
      name: "",
      latitude: "",
      longitude: "",
    },
    movingTo: {
      name: "",
      latitude: "",
      longitude: "",
    },
  });

  console.log(suggestions);

  const handleChange = async (event) => {
    setValue(event.target.value);

    const endPoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?$autocomplete=true&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${accessToken}`;
    try {
      const response = await fetch(endPoint);
      const results = await response.json();

      setSuggestions(results?.features);
    } catch (error) {
      console.log(error);
    }

    setData({ ...data });
  };
  console.log(suggestions);
  const locations = {
    options: suggestions,
    getOptionLabel: (option) => option.place_name,
  };

  const houseTypes = {
    options: houseOptions,
    getOptionLabel: (option) => option.house,
  };

  const navigate = useNavigate();

  const handleClick = (event) => navigate("/my-items");

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
              <Link
                to="/"
                sx={{ flexGrow: 0 }}
              >
                <Button
                  variant="contained"
                  color="error"
                >
                  read more
                </Button>
              </Link>
              <Link
                to="/get-started"
                sx={{ flexGrow: 0 }}
              >
                <Button variant="contained">Get Started</Button>
              </Link>
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
              key={page.id}
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
                input.type === "autocomplete" ? (
                  <Autocomplete
                    {...(input.option === "house" ? houseTypes : locations)}
                    id="disable-close-on-select"
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={input.placeholder}
                        variant="filled"
                        sx={{
                          bgcolor: "#fff",
                          borderRadius: "0.1rem",
                          width: "17vw",
                        }}
                        onChange={handleChange}
                      />
                    )}
                  />
                ) : (
                  <TextField
                    id={input.label}
                    key={input.name}
                    type={input.type}
                    value={input.icon}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    variant="filled"
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "0.1rem",
                      width: "20vw",
                    }}
                  >
                    <option></option>
                  </TextField>
                )
              )}

              <Button
                variant="contained"
                onClick={handleClick}
                color="error"
                style={{
                  fontSize: "0.7rem",
                  padding: 0,
                  margin: 0,
                  width: "10%",
                }}
              >
                next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
