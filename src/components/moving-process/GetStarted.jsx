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
import React, { useEffect, useState } from "react";

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

function GetStarted({ user, nextStep, values, setGetStartedData, stepper }) {
  console.log(values);
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
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [data, setData] = useState({
    ...values.getStartedData,
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

    if (
      data.house_type !== "" ||
      data.moving_date !== "" ||
      data.moving_from !== "" ||
      data.moving_to !== ""
    ) {
      setIsButtonDisabled((isButtonDisabled) => !isButtonDisabled);
    }
  };

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
      moving_date: data.moving_date,
    };

    setGetStartedData(getStartedData);
  };
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    setCurrentUser(user);
  }, [user, currentUser]);

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
                {stepper}
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
                          Guess what {currentUser?.full_name}! No hidden Fees
                        </Typography>
                      </Box>
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
                              input?.name === "house_type"
                                ? houseOptions
                                : suggestions
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
                                  handleChange(
                                    event,
                                    event.target.value,
                                    input.name
                                  )
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
                        // disabled={isButtonDisabled}
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
                        onClick={nextStep}
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
