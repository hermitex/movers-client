import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Success from "../utils/Sucess";

function Login({ onLogin }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // USING JWT
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      setSuccess("Login successful!");
      setErrors([]);
      if (r.ok) {
        r.json().then((data) => {
          localStorage.setItem("jwt", data.jwt)
          onLogin(data.user);
          setUser(data.user);
        });
      } else {
        setSuccess(null);
        r.json().then((errors) => setErrors(errors));
      }
    });
  }
    

  // // USING FETCH

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   fetch("http://127.0.0.1:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   }).then((r) => {
  //     setIsLoading(false);
  //     setSuccess("Login successful!");
  //     setErrors([]);
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         onLogin(user);
  //         setUser(user);
  //       });
  //     } else {
  //       setSuccess(null);
  //       r.json().then((errors) => setErrors(errors));
  //     }
  //   });
  // }
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
      <h1>Log in here</h1>

      <Box
        sx={{
          pt: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {success ? <Success success={success} /> : null}
        {errors && errors && (
          <Typography
            fontSize="0.7rem"
            color="red"
          >
            {errors?.error}
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

        <FormControlLabel
          control={<Checkbox defaultUnChecked />}
          label="Are you a mover?"
          onClick={() => setChecked(!checked)}
        />
        <FormControlLabel
          control={<Checkbox defaultUnChecked />}
          label="Remember me"
          onClick={() => setChecked(!checked)}
        />

        <Button
          variant="contained"
          color="error"
          type="submit"
          fullWidth
        >
          Log In
        </Button>
      </Box>
      <Typography>
        <Link href="a">Forgot Password</Link>
      </Typography>
    </form>
  );
}

export default Login;
