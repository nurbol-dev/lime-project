import React, { useState } from "react";
import "./authorization.scss";
import Login from "./login/Login";
import Sign from "./sign/Sign";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authChange } from "../../store/reducers/AuthSlice";

const Authorization = () => {
  const dispatch = useAppDispatch();
  const { back } = useAppSelector((s) => s.AuthSlice);
  const [login, setLogin] = useState<boolean>(false);
  const [sign, setSign] = useState<boolean>(false);

  const backReturn = () => {
    dispatch(authChange(true));
  };
  return (
    <>
      {login ? (
        <Login />
      ) : sign === true ? (
        <Sign />
      ) : (
        <div
          style={{
            display: back ? "none" : "block",
          }}
        >
          <div className="modal">
            <h1 onClick={backReturn}>&times;</h1>
            <div>
              <button onClick={() => setSign(true)} className="modal--top">
                Sign up
              </button>
            </div>
            <div>
              <button onClick={() => setLogin(true)} className="modal--bottom">
                Log in
              </button>
            </div>
          </div>
          <div onClick={backReturn} className="bg-modal"></div>
        </div>
      )}
    </>
  );
};

export default Authorization;
