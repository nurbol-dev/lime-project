import React from 'react';
import './header.scss'
import logo from './../../assets/img/logo.svg'
import {BsBell, BsBoxSeam} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";
import {AiOutlineGlobal, AiOutlineHeart} from "react-icons/ai";
import {LiaEnvelopeSolid} from "react-icons/lia";
import {GoPerson} from "react-icons/go";
const Header = () => {
    return (
        <>
            <div id='header'>
                <div className="container">
                    <div className="header">
                        <img src={logo} alt=""/>
                        <div className="header-nav">
                            <BsBoxSeam/>
                            <BsBell/>
                            <SlBasket/>
                        </div>
                        <div className="header-nav">
                            <AiOutlineGlobal/>
                            <LiaEnvelopeSolid/>
                            <AiOutlineHeart/>
                            <GoPerson/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;