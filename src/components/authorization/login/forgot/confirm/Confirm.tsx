import React, { useState } from "react";
import "./confirm.scss"
import Success from "./success/Success";
import Forgot from "../Forgot";
import { authChange } from "../../../../../store/reducers/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
const Confirm = () => {
  const dispatch = useAppDispatch()
  const {back} = useAppSelector(s => s.AuthSlice)
  const [confirm, setConfirm] = useState<boolean>(false);
  const [forgot, setForgot] = useState<boolean>(false);
  
  const backReturn = () => {
    dispatch(authChange(true))
  }

  return (
    confirm ? <Success/>  : forgot ? <Forgot/> :
    <div
      style={{
        display: back ? "none" : "block",
      }}>
        <form>
        <div className="confirm">
          <div className="confirm--title">
                <h1>Enter 4 digit code</h1>
                <p>A four-digit code should have come to <br /> your email address that you indicated.</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="confirm--title__btns">
                    <button onClick={() => setConfirm(true)}>Confirm</button>
                    <button onClick={() => setForgot(true)}>Cancel</button>
                </div>
          </div>
        </div>
        </form>
      <div onClick={backReturn} className="bg-modal"></div>
    </div>
  );
};

export default Confirm;
