import React, { useState } from "react";
import "./confirm.scss"
import Success from "./success/Success";
const Confirm = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  return (
    confirm ? <Success/> :
    <div
      style={{
        display: auth ? "none" : "block",
      }}>
        <div className="confirm">
                <h1>Enter 4 digit code</h1>
                <p>A four-digit code should have come to <br /> your email address that you indicated.</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="confirm--btns">
                    <button onClick={() => setConfirm(true)}>Confirm</button>
                    <button>Cancel</button>
                </div>
        </div>
      <div onClick={() => setAuth(true)} className="bg-modal"></div>
    </div>
  );
};

export default Confirm;
