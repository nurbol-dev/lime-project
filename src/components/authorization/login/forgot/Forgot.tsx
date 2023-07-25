import React, { useState } from "react";
import "./forgot.scss";
import emailImg from "../../../../assets/img/email-img.svg";
import Confirm from "./confirm/Confirm";

const Forgot = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [code, setCode] = useState<boolean>(false)
  return (
    code ? <Confirm/> :
    <div
      style={{
        display: auth ? "none" : "block",
      }} >
      <div className="forgot">
        <h1>Forgot password</h1>
        <p>
          Enter your email for the verification process, <br />
           we will send code to your email
        </p>
        <div className="login--email">
          <img src={emailImg} alt="email" />
          <input type="text" placeholder="Email Address" />
        </div>
        <h4>Back to login</h4>
        <button onClick={() => setCode(true)}>Continue</button>
      </div>
      <div onClick={() => setAuth(true)} className="bg-modal"></div>
    </div>
  );
};

export default Forgot;
