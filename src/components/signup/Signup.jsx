import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../utils/Sucess";

function Signup({ onLogin }) {
  const [fullName, setFullName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // USING JWT
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    const baseUrl = process.env.REACT_APP_BASE_URL;
    fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // user: {
        full_name: fullName,
        phone,
        email,
        account_type: accountType.toLocaleLowerCase(),
        type: accountType,
        password,
        password_confirmation: passwordConfirmation,
        location_id: 1,
        // }
      }),
    }).then((res) => {
      if (res.ok) {
        setSuccess("Signup successful!");
        setErrors([]);
        res.json().then((data) => {
          localStorage.setItem("jwt", data.jwt);
          setUser(data.user);
          onLogin(data.user);
        });
      } else {
        setSuccess(null);
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  setTimeout(() => {
    if (user && user.account_type === "mover") {
      navigate("/dashboard");
    } else if (user && user.account_type === "customer") {
      navigate("/home");
    }
  }, 1100);
  const textFieldStyle = { margin: "10px auto" };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      {success ? <Success success={success} /> : null}

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
        <Typography
          fontSize="0.7rem"
          color="red"
        >
          {errors?.full_name}
        </Typography>
      )}

      <TextField
        size="small"
        id="outlined-basic"
        value={phone}
        label="Phone"
        placeholder="enter full name"
        onChange={(e) => setPhone(e.target.value)}
        variant="outlined"
        style={textFieldStyle}
        fullWidth
        required
      />
      {errors && errors && (
        <Typography
          fontSize="0.7rem"
          color="red"
        >
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
        <Typography
          fontSize="0.7rem"
          color="red"
        >
          {errors?.email}
        </Typography>
      )}
      <TextField
        select
        size="small"
        id="outlined-basic"
        value={accountType}
        label="Account Type"
        placeholder="enter account type"
        onChange={(e) => setAccountType(e.target.value)}
        variant="outlined"
        style={textFieldStyle}
        fullWidth
        required
      >
        <MenuItem value="Customer">
          <option value="Customer">Customer</option>
        </MenuItem>
        <MenuItem value="Mover">
          <option value="Mover">Mover</option>
        </MenuItem>
        <MenuItem value="Admin">
          <option value="Admin">Admin</option>
        </MenuItem>
      </TextField>
      {errors && errors && (
        <Typography
          fontSize="0.7rem"
          color="red"
        >
          {errors?.type}
        </Typography>
      )}
      <TextField
        size="small"
        id="outlined-basic"
        value={password}
        label="Password"
        placeholder="enter password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        style={textFieldStyle}
        fullWidth
        required
      />
      {errors && errors && (
        <Typography
          fontSize="0.7rem"
          color="red"
        >
          {errors?.password}
        </Typography>
      )}
      <TextField
        size="small"
        id="outlined-basic"
        value={passwordConfirmation}
        label="Password Confirmation"
        placeholder="enter password"
        type="password"
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        variant="outlined"
        style={textFieldStyle}
        fullWidth
        required
      />
      {errors && errors && (
        <Typography
          fontSize="0.7rem"
          color="red"
        >
          {errors?.password_confirmation}
        </Typography>
      )}
      <br />
      <br />
      <Button
        variant="contained"
        color="error"
        type="submit"
        fullWidth
      >
        Sign Up
      </Button>
    </form>
  );
}

export default Signup;
