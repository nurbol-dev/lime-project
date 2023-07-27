import React, { useState } from "react";
import "./login.scss";
import emailImg from "./../../../assets/img/email-img.svg";
import { FiLock } from "react-icons/fi";
import { BsArrowLeft, BsEye, BsEyeSlash } from "react-icons/bs";
import Forgot from "./forgot/Forgot";
import Sign from "../sign/Sign";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { authChange } from "../../../store/reducers/AuthSlice";
import Authorization from "../Authorization";
const Login = () => {
  const dispatch = useAppDispatch();
  const { back } = useAppSelector((s) => s.AuthSlice);
  const [password, setPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [forgot, setForgot] = useState<boolean>(false);
  const [sign, setSign] = useState<boolean>(false);
  const [exit, setExit] = useState<boolean>(false);
  const backReturn = () => {
    dispatch(authChange(true));
  };
  return forgot ? (
    <Forgot />
  ) : sign ? (
    <Sign />
  ) : exit ? (
    <Authorization />
  ) : (
    <div
      style={{
        display: back ? "none" : "block",
      }}
    >
      <form>
        <div className="login">
          <div className="login--title">
            <span onClick={() => setExit(true)} className="login--title__row">
              <BsArrowLeft />
            </span>
            <h1>log in</h1>
            <h4>Welcome!</h4>
            <p className="p">Log in to your account</p>
            <div className="login--title__email">
              <img src={emailImg} alt="email" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="login--title__password">
              <h5>
                <FiLock />
              </h5>
              <input
                type={password ? "text" : "password"}
                placeholder="Password"
              />
              {password ? (
                <span onClick={() => setPassword(false)}>
                  <BsEyeSlash />
                </span>
              ) : (
                <span onClick={() => setPassword(true)}>
                  <BsEye />
                </span>
              )}
            </div>
            <div className="login--title__flex">
              <div className="login--title__flex--remember">
                <div className="login--title__flex--remember__dark">
                  <div
                    style={{
                      left: remember ? "15px" : "-2px",
                      background: remember ? "green" : "",
                    }}
                    onClick={() => setRemember(!remember)}
                    className="login--title__flex--remember__dark--top"
                  ></div>
                </div>
                <p
                  style={{
                    color: remember ? "green" : "",
                  }}
                >
                  Remember me
                </p>
              </div>
              <h6 onClick={() => setForgot(true)}>Forgot password</h6>
            </div>
            <button>Log in</button>
            <h3>
              Don’t have an account ?{" "}
              <span onClick={() => setSign(true)}>Sign up</span>
            </h3>
          </div>
        </div>
      </form>
      <div onClick={backReturn} className="bg-modal"></div>
    </div>
  );
};

export default Login;
