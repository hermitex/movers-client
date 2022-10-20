import Button from "@mui/material/Button";
import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Paper, TextField } from "@mui/material";

function Login({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then((r) => {
      setIsLoading(false)
      if (r.ok) {
        r.json().then((user) => onLogin(user))
      } else {
        r.json().then((errors) => setErrors(errors))
      }
    })
  }

  const paperStyle={backgroundImage: "url('https://images.pexels.com/photos/4246211/pexels-photo-4246211.jpeg?auto=compress&cs=tinysrgb&w=1600')", backgroundPosition: "center", backgroundSize: "cover", padding :20, height: 600, width: 600, margin: '100px auto'}
  const paperStyleInner={padding :20, height: 600, width: 300, position: 'relative', zIndex: 1500, top: '-20px', left: '280px'}
  const buttonStyle={width: "150px", height: "40px", margin: 0}
  const textFieldStyle={margin: "10px auto"}

  return (
    <Grid >
      <Paper elevation={10} style={paperStyle}>    
        <Paper style={paperStyleInner} >
          <Grid>
            <Button variant="outlined" color="secondary" style={buttonStyle}>Log In</Button>
            <Button variant="outlined" color="secondary" style={buttonStyle}>Sign Up</Button>
          </Grid>   
          <br /><br /><br />       
          <TextField size="small" id="outlined-basic" label="Email" placeholder="enter email" variant="outlined" style={textFieldStyle} fullWidth required/>
          <TextField size="small" id="outlined-basic" label="Password" placeholder="enter password" type="password" variant="outlined" style={textFieldStyle} fullWidth required/>
          <FormControlLabel control={<Checkbox defaultUnChecked />} label="Are you a mover?" />
          <FormControlLabel control={<Checkbox defaultUnChecked />} label="Remember me" />
          <br /><br /><br />
          <Button variant="contained" color="success" fullWidth>Log In</Button>
        </Paper>           
      </Paper>
    </Grid>
  );
}

export default Login;
