import React, { useState } from "react";
import "./login.scss"
import emailImg from "./../../../assets/img/email-img.svg";
import { FiLock } from "react-icons/fi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Forgot from "./forgot/Forgot";

const Login = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [password, setPassword] = useState<boolean>(false)
  const [remember, setRemember] = useState<boolean>(false)
  const [forgot, setForgot] = useState<boolean>(false)
  return (
    forgot ?   <Forgot/>  : <div style={{
      display: auth ? "none" : "block"
    }}>
      <div className="login">
            <h1>log in</h1>
        <h4>Welcome!</h4>
        <p className="p">Log in to your account</p>
        <div className="login--email">
          <img src={emailImg} alt="email" />
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="login--password">
          <h5 ><FiLock /></h5>
          <input type={password ? "text" : "password"} />
          {password ? <span onClick={() => setPassword(false)}><BsEyeSlash/></span> :  <span  onClick={() => setPassword(true)}><BsEye/></span>}
        </div>
        <div className="login--flex">
            <div className="login--flex__remember"> 
              <div className="login--flex__remember--dark">
                <div style={{
                left: remember ? "15px" : "-2px"
              }}  onClick={() => setRemember(!remember)} className="login--flex__remember--dark__top" ></div>
              </div>
              <p>Remember me</p>
              </div>
            <h6 onClick={() => setForgot(true)}>Forgot password</h6>
        </div>
        <button>Log in</button>
        <h3>Don’t have an account ?   <span>Sign up</span></h3>
        </div>
        <div  onClick={() => setAuth(true)} className="bg-modal"></div>
    </div>
  );
};

export default Login;
