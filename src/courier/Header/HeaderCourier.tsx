import React from 'react';
import "./HeaderCourier.scss"
import i from "../../assets/img/Rectangle 17951.png"
import {SlBasket} from "react-icons/sl";
import {AiOutlineInbox, AiOutlineLogout, AiOutlineUser} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import {RiMessage2Line} from "react-icons/ri";


const HeaderCourier = () => {
    return (
        <div style={{display: "flex"}}>
            <div className="CouHeader">
                <img src={i} alt=""/>
                <div className="CouHeader--child">
                    <SlBasket/>
                    <h1>Orders</h1>
                </div>
                <div className="CouHeader--child">
                    <AiOutlineUser/>
                    <h1>Profile</h1>
                </div>
                <div className="CouHeader--child">
                    <AiOutlineInbox/>
                    <h1>My orders</h1>
                </div>
                <div className="CouHeader--logOut">
                    <AiOutlineLogout/>
                    <h1>Log out</h1>
                </div>
            </div>
            <div className="profilesHeader">
                <div className="profilesHeader--nav">
                    <input type="text" placeholder="Search here"/>
                    <BiSearch className="profilesHeader--nav__icon"/>
                </div>
                <div>
                    <RiMessage2Line/>

                </div>
            </div>
        </div>
    );
};

export default HeaderCourier;