import React, {useState} from 'react';
import "./modal.scss"
import log from "../../assets/img/Rectangle 17951.png"
import {AiOutlineClose} from "react-icons/ai";
import {Link} from "react-router-dom";
import LogInCourier from "../LogIn/LogInCourier";
const Modal = () => {
    const [courier, setCourier] = useState(false)

    return (
        <>
            <div className="adminModal">
                <div style={{display: courier ? "" : "none"}}><LogInCourier/></div>
                <div className="adminModal--nav" style={{display: courier ? "none" : ""}} >
                    <Link to={"/"}>
                        <AiOutlineClose className="adminModal--nav--icon"/>
                    </Link>
                    <div className="adminModal--nav__block">
                        <img src={log} alt=""/>
                        <button onClick={() => setCourier(!courier)}>Courier</button>
                        <button>Сollector</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;