import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Singnup({ onLogin }) {

  const[fullName, setFullName] = useState("")
  const[accountType, setAccountType] = useState("")
  const[email, setEmail] = useState("")
  const[phone, setPhone] = useState("")
  const[password, setPassword] = useState("")
  const[passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])    
    fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName, 
        phone,
        email, 
        accountType, 
        password, 
        passwordConfirmation
      }),
    })
    .then((res)=>{
      if(res.ok){
        res.json().then((user) => onLogin(user))
      } else {
        res.json().then((err)=>setErrors(err.errors))
      }
    })
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
              value={fullName}
              className="signup-field"
              placeholder="full name"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              value={phone}
              className="signup-field"
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
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
              value={accountType}
              className="signup-field"
              placeholder="accountType"
              onChange={(e) => setAccountType(e.target.value)}
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
            <input className="signup-btn" type="submit" value="REGISTER"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singnup;
