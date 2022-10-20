import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Singnup() {

  return(
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <form>
          <h1>Sign up here</h1>
          <input type="text" className="field" placeholder="firstName"/>
          <input type="text" className="field" placeholder="lastName"/>
          <input type="text" className="field" placeholder="email"/>
          <input type="text" className="field" placeholder="phone-number"/>
          <input type="text" className="field" placeholder="password"/>
          <input type="text" className="field" placeholder="password confirmation"/>
          <button className="btn">REGISTER</button>

          </form>
        </div>
      </div>
    </div>

  return (
    <Button variant="outlined">
      <Box
        sx={{
          display: "inline-block",
          padding: "0.5",
          color: "#FF515E",
        }}
      >
        Signup
      </Box>
    </Button>

  );
}

export default Singnup;
