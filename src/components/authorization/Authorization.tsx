import React from "react";
import "./authorization.scss";

const Authorization = () => {
  return (
    <div>
      <div className="modal">
        <h1>&times;</h1>
        <div>
          <button className="modal--top">Sign up</button>
        </div>
        <div>
          <button className="modal--bottom">Log in</button>
        </div>
      </div>
      <div className="bg-modal"></div>
    </div>  
  );
};

export default Authorization;
