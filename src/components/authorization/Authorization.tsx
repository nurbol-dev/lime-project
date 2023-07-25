import React, { useState } from "react";
import "./authorization.scss";
import Login from "./login/Login";

const Authorization = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <>
    {
    login ?  <Login/> :  <div style={{
      display: auth ? "none" : "block"
    }}>
      <div  className="modal">
        <h1 onClick={() => setAuth(true)}>&times;</h1>
        <div>
          <button  className="modal--top">Sign up</button>
        </div>
        <div>
          <button onClick={() => setLogin(true)} className="modal--bottom">Log in</button>
        </div>
      </div>
      <div onClick={() => setAuth(true)} className="bg-modal"></div>
    </div>
    }
    </>
  );
};

export default Authorization;
