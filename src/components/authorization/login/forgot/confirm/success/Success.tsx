import React, { useState } from 'react';
import "./success.scss"
import correct from "../../../../../../assets/img/correct.svg"
const Success = () => {
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <div style={{
            display: auth ? "none" : "block",
          }}>
            <div className="success">
            <h1 onClick={() => setAuth(true)}>&times;</h1>
                <img src={correct} alt="" />
                <h2>You have successfully <br /> restored your account!</h2>
                <button onClick={() => setAuth(true)}>OK</button>
            </div>
            <div onClick={() => setAuth(true)} className="bg-modal"></div>
        </div>
    );
};

export default Success;