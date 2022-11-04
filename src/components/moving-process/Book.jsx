import { Button, Divider, IconButton, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import truckIcon from "../../assets/icons/truck-timer.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MovingProcessNavBar from "./MovingProcessNavBar";
import { ArrowRight } from "@mui/icons-material";
import Link from "@mui/material/Link";
import PaypalPayment from "../payment/PaypalPayment";
import numberFormatter from "../utils/numberFormatter";

function Book({ user, getPayData, prevStep, stepper, selectedQuote }) {
  const [bookingId, setBookingId] = useState(null);
  const [inventoryId, setInventoryId] = useState(null);
  console.log(selectedQuote);

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
      height: 800,
      width: 900,
      margin: "100px auto",
    },
  };

  const token = localStorage.getItem("jwt");
  // console.log(selectedQuote.vat);
  useEffect(() => {
    const inventoryChecklistData = [
      {
        user_id: 1, //selectedQuote.customer_id.user.id,
        customer_id: 1, //selectedQuote.customer_id.user.id,
        ...selectedQuote.data.mover_quotes,
        // item_name: "cabinet",
        // category: "living room",
        // count: 2,
        // image_url: "",
      },
    ];
    const moveBookingData = {
      inventory_checklist_id: "",
      mover_id: 2, //selectedQuote.data.mover_details.id
      customer_id: selectedQuote.customer_id.user.id,
      moving_from: selectedQuote.getStartedData.moving_from.place_name,
      moving_to: selectedQuote.getStartedData.moving_to.place_name,
      moving_date: "12-30-2022",
      status: "pending",
    };
    const paymentData = {
      payment_date: "2022-11-02T22:28:34Z",
      amount: 20.0,
      customer_id: 1,
      mover_id: 2,
      move_booking_id: bookingId,
      status: "completed",
    };
    fetch("http://127.0.0.1:4000/inventory_checklists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(inventoryChecklistData),
    }).then((response) => {
      const inventory = response.json();
      if (response.ok) {
        setInventoryId(inventory.id);
      }
    });

    fetch("http://127.0.0.1:4000/move_bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...moveBookingData,
        inventory_checklist_id: inventoryId,
      }),
    }).then((response) => {
      const booking = response.json();
      if (response.ok) {
        setBookingId(booking.id);
      }
    });

    fetch("http://127.0.0.1:4000/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...paymentData, move_booking_id: 1 }),
    }).then((response) => {
      const booking = response.json();
      if (response.ok) {
        console.log(booking);
      }
    });
  }, [
    bookingId,
    inventoryId,
    selectedQuote?.customer_id.user.id,
    selectedQuote?.data.mover_details.id,
    selectedQuote?.data.mover_quotes,
    selectedQuote?.getStartedData.moving_from.place_name,
    selectedQuote?.getStartedData.moving_to.place_name,
    token,
  ]);
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
              >
                {/* <MovingProcessNavBar
                  size="large"
                  color="error"
                /> */}
                {stepper}
                <Container>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                      alignContent: "left",
                      padding: "1rem 0rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                        justifyContent: "space-between",
                        alignItems: "center",
                        alignContent: "left",
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
                          Book your Mooove today...
                        </Typography>
                        <Typography variant="p">
                          Secured Payment - No extra charges
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Container>
                <Divider
                  sx={{
                    borderBottomWidth: 2,

                    borderColor: "grey",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    padding: "20px 0px",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1.3,
                    }}
                  >
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <h3>Contact information</h3>
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                      />
                      <br />
                      <br />
                      <h3>Billing</h3>
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Card Number"
                        variant="outlined"
                      />
                      <br />
                      <br />
                      <h3>Expiration Date</h3>
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Card Number"
                        variant="outlined"
                      />
                    </Box> 
                    <br />
                    <PaypalPayment
                      getPayData={getPayData}
                      amount={selectedQuote?.data.total}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexFlow: "column",
                      padding: "10px 0px",
                      gap: 2,
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#FF515E",
                        textDecoration: "underline",
                      }}
                    >
                      REVIEW YOUR MOVE PLAN
                    </Typography>

                    <Box
                      sx={{
                        bgcolor: "#fff",
                        height: "100%",
                        textAlign: "left",
                        padding: "10px",
                      }}
                    >
                      <Typography variant="h6">Moving Company</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: 4,
                          alignItems: "center",
                          alignContent: "left",
                          padding: "1rem 0rem",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            alignContent: "left",
                          }}
                        >
                          <Box sx={{ width: "3rem" }}>
                            <IconButton
                              sx={{ bgcolor: "white" }}
                              size="large"
                            >
                              <AccountCircleIcon />
                            </IconButton>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              paddingLeft: 1,
                            }}
                          >
                            <Typography
                              variant="h6"
                              fontWeight="bolder"
                            >
                              Pyramid Moovers
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexFlow: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">Details</Typography>
                        <Typography
                          variant="p"
                          sx={{ color: "#FF515E" }}
                        ></Typography>
                        <Link
                          onClick={prevStep}
                          to="#"
                          underline="always"
                        >
                          Edit my Details
                        </Link>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Move Date
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Friday, Oct 30, 2022
                          </Typography>
                        </Box>
                        <Divider
                          sx={{
                            borderBottomWidth: 2,
                            borderStyle: "dotted",
                            borderColor: "#c4c4c4",
                            mb: 0.2,
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Mover Arrival Time
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            8:00-10:00am
                          </Typography>
                        </Box>
                        <Divider
                          sx={{
                            borderBottomWidth: 2,
                            borderStyle: "dotted",
                            borderColor: "#c4c4c4",
                            mb: 0.2,
                          }}
                        />
                        <br />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexFlow: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">Pricing</Typography>
                        <Typography
                          variant="p"
                          sx={{ color: "#FF515E" }}
                        ></Typography>
                        <Link
                          href="#"
                          underline="always"
                        >
                          See detailed pricing
                        </Link>
                      </Box>
                      {selectedQuote?.data.mover_quotes.length}
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Items
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            {numberFormatter(selectedQuote?.data.items, {
                              style: "currency",
                              currency: "KES",
                            })}
                          </Typography>
                        </Box>
                        <Divider
                          sx={{
                            borderBottomWidth: 2,
                            borderStyle: "dotted",
                            borderColor: "#c4c4c4",
                            mb: 0.2,
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Flat price
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            {/* KES 1,299 */}
                            {numberFormatter(selectedQuote?.data.flat_price, {
                              style: "currency",
                              currency: "KES",
                            })}
                          </Typography>
                        </Box>
                        <Divider
                          sx={{
                            borderBottomWidth: 2,
                            borderStyle: "dotted",
                            borderColor: "#c4c4c4",
                            mb: 0.2,
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            VAT
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            {numberFormatter(selectedQuote?.data.vat, {
                              style: "currency",
                              currency: "KES",
                            })}
                            {/* KES 999 */}
                          </Typography>
                        </Box>
                        <Divider
                          sx={{
                            borderBottomWidth: 2,
                            borderStyle: "dotted",
                            borderColor: "#c4c4c4",
                            mb: 0.2,
                          }}
                        />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            Discount
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              lineHeight: 2,
                            }}
                          >
                            <span
                              style={{
                                color: "red",
                                width: "2",
                              }}
                            >
                              -{" "}
                              {numberFormatter(selectedQuote?.data.discount, {
                                style: "currency",
                                currency: "KES",
                              })}
                            </span>
                          </Typography>
                        </Box>
                        <Divider
                          sx={{
                            borderBottomWidth: 2,
                            borderStyle: "dotted",
                            borderColor: "#c4c4c4",
                            mb: 0.2,
                          }}
                        />
                        <br />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        padding: "10px",
                        bgcolor: "#2a2a2a",
                        color: "#fff",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="p"
                          sx={{
                            lineHeight: 2,
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Grand Total
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{
                            lineHeight: 2,
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          {/* KES 6,999 */}
                          {numberFormatter(selectedQuote?.data.total, {
                            style: "currency",
                            currency: "KES",
                          })}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default Book;
