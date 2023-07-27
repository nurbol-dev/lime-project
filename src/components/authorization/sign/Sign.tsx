import React, { useState } from "react";
import "./sign.scss";
import emailImg from "./../../../assets/img/email-img.svg";
import { FiLock } from "react-icons/fi";
import { BsArrowLeft, BsEye, BsEyeSlash } from "react-icons/bs";
import SignUp from "./signUp/SignUp";
import Login from "../login/Login";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { authChange } from "../../../store/reducers/AuthSlice";
import Authorization from "../Authorization";

const Sign = () => {
  const dispatch = useAppDispatch();
  const { back } = useAppSelector((s) => s.AuthSlice);
  const [password, setPassword] = useState<boolean>(false);
  const [conpassword, setConpassword] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [exit, setExit] = useState<boolean>(false);
  const backReturn = () => {
    dispatch(authChange(true));
  };
  return confirm ? (
    <SignUp />
  ) : login ? (
    <Login />
  ) : exit ? <Authorization/> : (
    <div
      style={{
        display: back ? "none" : "block",
      }}
    >
      <div className="sign">
        <div className="sign--title">
        <span onClick={() => setExit(true)} className="login--title__row">
              <BsArrowLeft />
            </span>
          <form>
            <h1>Sign up</h1>
            <h4>Create account</h4>
            <p>Quickly create account</p>
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
            <div className="login--title__password">
              <h5>
                <FiLock />
              </h5>
              <input
                type={conpassword ? "text" : "password"}
                placeholder="Confirm password"
              />
              {conpassword ? (
                <span onClick={() => setConpassword(false)}>
                  <BsEyeSlash />
                </span>
              ) : (
                <span onClick={() => setConpassword(true)}>
                  <BsEye />
                </span>
              )}
            </div>
            <button
              onClick={() => {
                setConfirm(true);
              }}
            >
              Sign up
            </button>
            <h6>
              Already have an account ?{" "}
              <span onClick={() => setLogin(true)}>Login</span>
            </h6>
          </form>
        </div>
      </div>
      <div onClick={backReturn} className="bg-modal"></div>
    </div>
  );
};

export default Sign;
