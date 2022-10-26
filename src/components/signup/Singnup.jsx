import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Singnup({ onLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    fetch("http://127.0.0.1:3000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="signup-container">
      <div className="signup-contact-box">
        <div className="signup-left"></div>
        <div className="signup-right">
          <form onSubmit={handleSubmit}>
            <h1>Sign up here</h1>
            <input
              type="text"
              value={firstName}
              className="signup-field"
              placeholder="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={lastName}
              className="signup-field"
              placeholder="lastName"
              onChange={(e) => setlastName(e.target.value)}
            />
            <input
              type="text"
              value={email}
              className="signup-field"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={phoneNumber}
              className="signup-field"
              placeholder="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              value={password}
              className="signup-field"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              value={passwordConfirmation}
              className="signup-field"
              placeholder="passwordConfirmation"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <input
              className="signup-btn"
              type="submit"
              value="REGISTER"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singnup;
