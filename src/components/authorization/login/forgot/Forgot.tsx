import React, { useState } from "react";
import "./forgot.scss";
import emailImg from "../../../../assets/img/email-img.svg";
import Confirm from "./confirm/Confirm";
import Login from "../Login";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { authChange } from "../../../../store/reducers/AuthSlice";

const Forgot = () => {
  const dispatch = useAppDispatch();
  const { back } = useAppSelector((s) => s.AuthSlice);
  const [code, setCode] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const backReturn = () => {
    dispatch(authChange(true));
  };
  return code ? (
    <Confirm />
  ) : login ? (
    <Login />
  ) : (
    <div
      style={{
        display: back ? "none" : "block",
      }}
    >
      <form>
        <div className="forgot">
          <div className="forgot--title">
            <h1>Forgot password</h1>
            <p>
              Enter your email for the verification process, <br />
              we will send code to your email
            </p>

            <div className="login--title__email">
              <img src={emailImg} alt="email" />
              <input type="text" placeholder="Email Address" />
            </div>
            <h4 onClick={() => setLogin(true)}>Back to login</h4>
            <button onClick={() => setCode(true)}>Continue</button>
          </div>
        </div>
      </form>
      <div onClick={backReturn} className="bg-modal"></div>
    </div>
  );
};

export default Forgot;
