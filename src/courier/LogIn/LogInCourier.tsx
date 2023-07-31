import React from 'react';
import "./LogInCourier.scss"
import img from "../../assets/img/Rectangle 17951.png"
import {Link} from "react-router-dom";

const LogInCourier = () => {
    return (
        <div className="navbarL">
            <div className="navbarL--nav">
                <div className="navbarL--nav__log">
                    <img src={img} alt=""/>
                    <h1>Login</h1>
                    <input type="text" placeholder="Login"/>
                    <input type="password" placeholder="Password"/>
                    <Link to={"/courier"}>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LogInCourier;