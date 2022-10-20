import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Singnup() {
  return (
    <div className="signup-container">
      <div className="signup-contact-box">
        <div className="signup-left"></div>
        <div className="signup-right">
          <form>
            <h1>Sign up here</h1>
            <input
              type="text"
              className="signup-field"
              placeholder="firstName"
            />
            <input
              type="text"
              className="signup-field"
              placeholder="lastName"
            />
            <input
              type="text"
              className="field"
              placeholder="email"
            />
            <input
              type="text"
              className="field"
              placeholder="phone-number"
            />
            <input
              type="text"
              className="field"
              placeholder="password"
            />
            <input
              type="text"
              className="field"
              placeholder="password confirmation"
            />
            <button className="btn">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singnup;
