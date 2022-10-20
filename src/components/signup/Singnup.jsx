import React from "react";

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
  );
}

export default Singnup;
