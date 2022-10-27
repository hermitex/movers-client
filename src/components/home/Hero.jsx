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
    name: "moving_from",
    placeholder: "From: Address, city or zip",
    icon: <PinDrop />,
    type: "autocomplete",
    option: "",
  },
  {
    label: "to",
    name: "moving_to",
    placeholder: "To: Address, city or zip",
    icon: <PinDrop />,
    type: "autocomplete",
    option: "",
  },
  {
    label: "house-type",
    name: "house_type",
    placeholder: "House type",
    icon: <House />,
    type: "autocomplete",
    option: "house",
  },
  {
    label: "move-date",
    name: "moving_date",
    placeholder: "Moving date",
    icon: <CalendarMonth />,
    type: "date",
    option: "",
  },
];

const houseOptions = [
  { id: 1, house: "1 Bedroom, small(600 - 800 sqf)" },
  { id: 2, house: "2 Bedroom, small(600 - 800 sqf)" },
  { id: 3, house: "3 Bedroom, small(600 - 800 sqf)" },
  { id: 4, house: "4 Bedroom, small(600 - 800 sqf)" },
  { id: 5, house: "5 Bedroom, small(600 - 800 sqf)" },
  { id: 6, house: "6 Bedroom, small(600 - 800 sqf)" },
];

function Hero() {
  accessToken = process.env.REACT_APP_MAPBOX_KEY;
  const [suggestions, setSuggestions] = useState([]);

  accessToken = process.env.REACT_APP_MAPBOX_KEY;

  const [data, setData] = useState({
    house_type: "",
    moving_from: "",
    moving_to: "",
    moving_date: "",
  });

  const handleChange = async (event, value, name) => {
    if (name === "moving_date") {
      value = event.target.value;
    }

    const endPoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?$autocomplete=true&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${accessToken}`;
    try {
      const response = await fetch(endPoint);
      const results = await response.json();

      setSuggestions(results?.features);
    } catch (error) {
      console.log(error);
    }

    setData({ ...data, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const getStartedData = {
      house_type: data.house_type.house,
      moving_from: {
        place_name: data.moving_from.place_name,
        latitude: data.moving_from.geometry.coordinates[0],
        longitude: data.moving_from.geometry.coordinates[1],
      },
      moving_to: {
        place_name: data.moving_to.place_name,
        latitude: data.moving_to.geometry.coordinates[0],
        longitude: data.moving_to.geometry.coordinates[1],
      },
    };
    setTimeout(() => {
      navigate("/my-items");
    }, 1500);

    console.log(getStartedData);
  };

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
              // noValidate
              onSubmit={handleSubmit}
              autoComplete="off"
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {formInput.map((input) =>
                input.type === "autocomplete" ? (
                  <Autocomplete
                    onChange={(event, value) =>
                      handleChange(event, value, input.name)
                    }
                    options={
                      input?.name === "house_type" ? houseOptions : suggestions
                    }
                    id="disable-close-on-select"
                    name={input.name}
                    getOptionLabel={(option) => {
                      return input.name === "house_type"
                        ? option.house
                        : option.place_name
                        ? option.place_name
                        : input.name === "moving_date"
                        ? data.moving_date
                        : "";
                    }}
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
                        value={
                          input.name === "house_type"
                            ? data.house_type
                            : data.place_name
                            ? data.place_name
                            : input.name === "moving_date"
                            ? data.moving_date
                            : ""
                        }
                        required
                        onChange={(event) =>
                          handleChange(event, event.target.value, input.name)
                        }
                      />
                    )}
                  />
                ) : (
                  <TextField
                    key={input.name}
                    id={input.label}
                    name={input.name}
                    value={data.moving_date}
                    label={input.placeholder}
                    type={input.type}
                    variant="filled"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {input.icon}
                        </InputAdornment>
                      ),
                    }}
                    onChange={(event, value) =>
                      handleChange(event, value, input.name)
                    }
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "0.1rem",
                      width: "17vw",
                    }}
                  />
                )
              )}
              <Button
                variant="contained"
                color="error"
                type="submit"
                style={{
                  fontSize: "1.2rem",
                  padding: 10,
                  margin: 0,
                  width: "70%",
                  display: "block",
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
