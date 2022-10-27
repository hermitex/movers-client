import { CalendarMonth, House, PinDrop } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";

import MovingProcessNavBar from "./MovingProcessNavBar";

import { accessToken } from "mapbox-gl";
import { useNavigate } from "react-router-dom";

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
    name: "move_date",
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

function GetStarted({ user }) {
  const styles = {
    paperContainer: {
      backgroundImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url('https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      height: "auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: 0,
    },
    paperStyle: {
      backgroundColor: "#F2F2F2",
      padding: 20,
      height: "90vh",
      width: "55vw",
      margin: "100px auto",
    },
  };

  accessToken = process.env.REACT_APP_MAPBOX_KEY;
  const [suggestions, setSuggestions] = useState([]);

  const [value, setValue] = useState(" ");
  const [acValue, setAcValue] = useState(" ");

  const [data, setData] = useState({
    house_type: "",
    moving_from: "",
    moving_to: "",
    moving_date: "",
  });

  console.log(suggestions);

  const handleChange = async (event, value, name) => {
    console.log(name);
    setValue(event.target.value);

    // const value = event.target.value;

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

  console.log(data);

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
            }}
          >
            <Box>
              <Typography
                variant="h3"
                textAlign="center"
                sx={{
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                Book your move now!!
              </Typography>
            </Box>
            <Box>
              <Paper
                elevation={7}
                style={styles.paperStyle}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <MovingProcessNavBar
                  size="large"
                  color="error"
                />
                <Container>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      textAlign: "center",
                      height: "60vh",
                      gap: 5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                        textAlign: "center",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="p"
                          sx={{
                            fontWeight: "bolder",
                            letterSpacing: 0.5,
                            color: "#000",
                          }}
                        >
                          Compare guaranteed moving quotes from the best moving
                          companies
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="p"
                          sx={{
                            fontWeight: "bolder",
                            letterSpacing: 0.5,
                            color: "#000",
                          }}
                        >
                          Book with Mooove and save 45% on your moving costs!
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: "bold",
                            letterSpacing: 0.5,
                            color: "#2f2f2f",
                          }}
                        >
                          Guess what {user?.full_name}! No hidden Fees
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      component="form"
                      noValidate
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
                              input.option === "house"
                                ? houseOptions
                                : suggestions
                            }
                            id="disable-close-on-select"
                            name={input.name}
                            value={
                              input.name === "moving_to"
                                ? data.moving_to
                                : data.moving_from
                            }
                            getOptionLabel={(option) => {
                              return input.option === "house"
                                ? option.house
                                : option.place_name;
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
                                onChange={handleChange}
                              />
                            )}
                          />
                        ) : (
                          <TextField
                            key={input.name}
                            id={input.label}
                            name={input.name}
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
                        onClick={handleClick}
                        color="error"
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

                    <br />
                  </Box>
                </Container>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default GetStarted;
