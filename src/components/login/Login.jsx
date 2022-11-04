import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Success from "../utils/Sucess";

function Login({ onLogin, setLoading }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // USING JWT
  const baseUrl = process.env.REACT_APP_BASE_URL;
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      // setLoading(false);
      setErrors([]);
      if (r.ok) {
        r.json().then((data) => {
          // setLoading((isLoading) => !isLoading);
          setSuccess("Login successful!");
          localStorage.setItem("jwt", data.jwt);
          onLogin(data.user);
          setUser(data.user);
        });
      } else {
        setSuccess(null);
        r.json().then((errors) => setErrors(errors));
      }
    });

    console.log(user);
  }

  useEffect(() => {
    const id = setTimeout(() => {
      if (
        (user && user?.account_type === "mover") ||
        user?.account_type === "admin"
      ) {
        navigate("/dashboard");
      } else if (user && user.account_type === "customer") {
        navigate("/home");
      }
    }, 3000);
    return () => clearTimeout(id);
  }, [navigate, user]);

  const textFieldStyle = { margin: "10px auto" };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          pt: 3,
          display: "flex",
          flexDirection: "column",
          width: "100%",
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
