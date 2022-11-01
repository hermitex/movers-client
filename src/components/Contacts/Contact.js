import { ArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

const textFieldStyle = { margin: "10px auto" };

function Contact() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  return (
    <Box>
      <Paper>
        <Container
          sx={{
            // height: "150vh",
            width: "75%",
            display: "flex",
            flexFlow: "column",
            gap: 1,
            padding: "100px",
            // justifyContent: "center",
          }}
        >
          <Typography variant="h5" textAlign="left">
            Contact Us
          </Typography>
          <Divider />
          <Typography variant="p" textAlign="left" lineHeight="1.4">
            We’re here to help. Send us a request and we’ll respond as quickly
            as we can. Whether you're a consumer trying to save time and money
            by comparing guaranteed prices, or a company looking to become a
            part of the best market place for moving resources, Mooove is here
            for you. Please feel free to reach out and contact us via phone,
            email or the contact form below.
          </Typography>
          <Box>
            <form>
              <TextField
                size="small"
                id="outlined-basic"
                value={fullName}
                label="Full Name"
                placeholder="enter full name"
                onChange={(e) => setFullName(e.target.value)}
                variant="outlined"
                style={textFieldStyle}
                fullWidth
                required
              />
              {errors && errors && (
                <Typography fontSize="0.7rem" color="red">
                  {errors?.full_name}
                </Typography>
              )}

              <TextField
                size="small"
                id="outlined-basic"
                value={phone}
                label="Phone"
                placeholder="enter phone"
                onChange={(e) => setPhone(e.target.value)}
                variant="outlined"
                style={textFieldStyle}
                fullWidth
                required
              />
              {errors && errors && (
                <Typography fontSize="0.7rem" color="red">
                  {errors?.phone}
                </Typography>
              )}
              <TextField
                size="small"
                id="outlined-basic"
                value={email}
                label="Email"
                placeholder="enter email"
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                style={textFieldStyle}
                fullWidth
                required
              />
              {errors && errors && (
                <Typography fontSize="0.7rem" color="red">
                  {errors?.email}
                </Typography>
              )}
              <TextField
                select
                size="small"
                id="outlined-basic"
                value={subject}
                label="Subject (Please Select)"
                placeholder="enter subject"
                onChange={(e) => setSubject(e.target.value)}
                variant="outlined"
                style={textFieldStyle}
                fullWidth
                required
              >
                <MenuItem value="Booking a move">
                  <option value="Booking a move">Booking a move</option>
                </MenuItem>
                <MenuItem value="Billing process">
                  <option value="Billing process">Billing process</option>
                </MenuItem>
                <MenuItem value="other">
                  <option value="other">other</option>
                </MenuItem>
              </TextField>
              {errors && errors && (
                <Typography fontSize="0.7rem" color="red">
                  {errors?.type}
                </Typography>
              )}
              <TextField
                size="small"
                id="outlined-multiline-static"
                value={description}
                label="Description"
                multiline
                rows={4}
                placeholder="enter description"
                type="description"
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
                style={textFieldStyle}
                fullWidth
                required
              />
              {errors && errors && (
                <Typography fontSize="0.7rem" color="red">
                  {errors?.description}
                </Typography>
              )}
              <Button variant="contained" color="error" type="submit" fullWidth>
                SUBMIT
              </Button>
            </form>
          </Box>
          <br />
          <Container>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                letterSpacing: 0.5,
                color: "#000",
              }}
            >
              FAQ
            </Typography>
            <Typography
              variant="p"
              sx={{
                lineHeight: 2,
                letterSpacing: 0.5,
                color: "#000",
              }}
            >
              Need help or just looking to learn more about Mooove?
            </Typography>
            <Button sx={{ my: 1 }} variant="text" color="error">
              Read more <ArrowRight />
            </Button>
          </Container>
          <Divider />
          <Box
            sx={{   
              width: "100%",       
              display: "flex",
              flexFlow: { sm: "column", md: "row" },
              gap: 4,
              padding: "20px",
              justifyContent: "center"
              
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "red"}}>Hours of Availability</Typography>
                <Divider /><br />
                <Typography
                  variant="p"
                  sx={{
                    lineHeight: 2,
                    letterSpacing: 0.3,
                    color: "#000",
                  }}
                >
                  Mon - Fri: 9am - 6pm EAT
                  <br />
                  Weekends: 9am - 3pm EAT
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "red"}}>Headquarters</Typography>
                <Divider /><br />
                <Typography
                  variant="p"
                  sx={{
                    lineHeight: 2,
                    letterSpacing: 0.3,
                    color: "#000",
                  }}
                >
                  787 14-Street
                  <br />
                  P.O.BOX 14, 00100, 
                  NAIROBI
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "red"}}>Email</Typography>
                <Divider /><br />
                <Typography
                  variant="p"
                  sx={{
                    lineHeight: 2,
                    letterSpacing: 0.3,
                    color: "#000",
                  }}
                >
                  support@mooove.com
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "red"}}>Telephone</Typography>
                <Divider /><br />
                <Typography
                  variant="p"
                  sx={{
                    lineHeight: 2,
                    letterSpacing: 0.5,
                    color: "#000",
                  }}
                >
                  +254-710121212
                  <br />
                  +254-735121212
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Divider />
        </Container>
      </Paper>
    </Box>
  );
}

export default Contact;

// body {
//   margin: 30px;
//   background-color: #E9E9E9;
// }

// div.polaroid {
//   width: 284px;
//   padding: 10px 10px 20px 10px;
//   border: 1px solid #BFBFBF;
//   background-color: white;
//   box-shadow: 10px 10px 5px #aaaaaa;
// }

// div.rotate_right {
//   float: left;
//   -ms-transform: rotate(7deg); /* IE 9 */
//   -webkit-transform: rotate(7deg); /* Safari */
//   transform: rotate(7deg);
// }

// div.rotate_left {
//   float: left;
//   -ms-transform: rotate(-8deg); /* IE 9 */
//   -webkit-transform: rotate(-8deg); /* Safari */
//   transform: rotate(-8deg);
// }
// </style>
// </head>
// <body>

// <div class="polaroid rotate_right">
//   <img src="pulpitrock.jpg" alt="Pulpit rock" width="284" height="213">
//   <p class="caption">The pulpit rock in Lysefjorden, Norway.</p>
// </div>

// <div class="polaroid rotate_left">
//   <img src="cinqueterre.jpg" alt="Monterosso al Mare" width="284" height="213">
//   <p class="caption">Monterosso al Mare. One of the five villages in Cinque Terre, Italy.</p>
// </div>
