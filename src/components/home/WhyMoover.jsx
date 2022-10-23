import { Box, Checkbox, Paper, Typography } from "@mui/material";
import React from "react";
import userGroup from "../../assets/icons/user-group.png";
import doubleDroppin from "../../assets/icons/double-droppin.png";
import truckIcon from "../../assets/icons/truck-timer.png";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const data = [
  {
    id: 1,
    icon: userGroup,
    value: 40,
    isMoney: true,
    description: "Used Moover.com",
  },
  {
    id: 2,
    icon: truckIcon,
    value: 200,
    isMoney: false,
    description: "Moovers",
  },
  {
    id: 3,
    icon: doubleDroppin,
    value: 30,
    isMoney: false,
    description: "Cities",
  },
];
const reasons = [
  {
    id: 1,
    reason: "Price Guarantee",
  },
  {
    id: 2,
    reason: "Satisfaction Guarantee",
  },
  {
    id: 3,
    reason: "Huge Savings",
  },
  {
    id: 4,
    reason: "Smooth & Easy experience",
  },
  {
    id: 5,
    reason: "Service Guarantee",
  },
  {
    id: 6,
    reason: "All inclusive Package",
  },
  {
    id: 7,
    reason: "Avoid Move-day Surprises",
  },
  {
    id: 78,
    reason: "LIve Customer support",
  },
];
function WhyMoover() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
      }}
    >
      <>
        <Paper
          sx={{
            width: "100%",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: 0,
            my: 2,
            py: "2rem",
          }}
        >
          <Box
            sx={{
              height: "100%",
            }}
          >
            {data.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignContent: "center",
                  bgcolor: "#F7F7F7",
                  width: "17vw",
                  height: "15vh",
                  textAlign: "left",
                  padding: "0.5rem",
                }}
              >
                <Box sx={{ width: "3rem" }}>
                  <img
                    width="100%"
                    src={item.icon}
                    alt="truck"
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    color="#FF515E"
                  >
                    {item.value}
                    {item.isMoney ? "K" : null}+
                  </Typography>
                  <Typography
                    variant="p"
                    color="#2F2F2F"
                    fontSize="0.7rem"
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <>
            <Box
              sx={{
                width: "50vw",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bolder"
                borderBottom="0.1rem solid grey"
                paddingBottom={1}
              >
                Why the Mooove way?
              </Typography>
              <Box sx={{ textAlign: "center", padding: 2 }}>
                <Typography
                  variant="p"
                  textAlign="center"
                  fontWeight="bolder"
                >
                  We ensure & strive to deliver the best services to our
                  clients. Let us help you prepare for a smooth & successful
                  move.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  {reasons.slice(4, 8).map((reason) => (
                    <Box
                      key={reason.id}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "100%",
                      }}
                    >
                      <Typography
                        fontSize="0.7rem"
                        textAlign="left"
                      >
                        <Checkbox
                          {...label}
                          checked
                          readOnly
                          color="default"
                        />
                        {reason.reason}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                  }}
                >
                  {reasons.slice(4, 8).map((reason) => (
                    <Box
                      key={reason.id}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "100%",
                      }}
                    >
                      <Typography
                        fontSize="0.7rem"
                        textAlign="left"
                      >
                        <Checkbox
                          {...label}
                          checked
                          readOnly
                          color="default"
                        />
                        {reason.reason}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </>
        </Paper>
      </>
    </Box>
  );
}

export default WhyMoover;
