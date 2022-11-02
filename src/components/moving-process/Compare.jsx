import {
  Autocomplete,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import MovingProcessNavBar from "./MovingProcessNavBar";
import CompareSideBar from "./CompareSideBar";
import CompareFeed from "./CompareFeed";
import quoteGenerator from "../hooks/quoteGenerator";
import useFetch from "../hooks/useFetch";
import ProgressIndicator from "../utils/ProgressIndicator";

function Compare({ user, stepper, nextStep, values }) {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  let rates = useFetch(`${baseUrl}/rates`);
  console.log(rates);

  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    if (rates) {
      setQuotes(quoteGenerator(values, rates));
    }
  }, [rates]);
  console.log(quotes);

  const [value, setValue] = useState("");
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
      height: "100vh",
      width: 900,
      margin: "100px auto",
    },
  };

  const handleChange = async (event) => {
    setValue(event.target.value);
  };

  const sortOptions = [
    { id: 1, sort_by: "Price: High to Low" },
    { id: 2, sort_by: "Price: Low to High" },
  ];

  const sortTypes = {
    options: sortOptions,
    getOptionLabel: (option) => option.sort_by,
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
              height: "auto",
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
                  overflowY: "auto",
                }}
              >
                {/* <MovingProcessNavBar
                  size="large"
                  color="error"
                  nextStep={nextStep}
                /> */}
                {stepper}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px",
                    justifyContent: "space-between",
                    height: "6vh",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "20px",
                      letterSpacing: 0.5,
                      color: "#000",
                    }}
                  >
                    EXACT PRICES, 5 movers found.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexFlow: "row wrap",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bolder",
                      }}
                    >
                      SORT by:
                    </Typography>
                    <Autocomplete
                      {...sortTypes}
                      id="disable-close-on-select"
                      disableCloseOnSelect
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Price: low to high"
                          variant="filled"
                          sx={{
                            bgcolor: "#fff",
                            borderRadius: "0.1rem",
                            width: "11vw",
                          }}
                          onChange={handleChange}
                        />
                      )}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    padding: "20px 50px",
                    alignItems: "left",
                  }}
                >
                  <Container
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.5}
                      padding="10px 10px"
                      gap={2}
                    >
                      <CompareSideBar />
                      {!quotes ? (
                        <ProgressIndicator />
                      ) : (
                        <CompareFeed
                          nextStep={nextStep}
                          quotes={quotes}
                        />
                      )}
                    </Stack>
                  </Container>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default Compare;
