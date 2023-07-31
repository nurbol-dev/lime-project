import React from 'react';
import './header.scss'
import logo from './../../assets/img/logo.svg'
import {BsBell, BsBoxSeam} from "react-icons/bs";
import {SlBasket} from "react-icons/sl";
import {AiOutlineGlobal, AiOutlineHeart} from "react-icons/ai";
import {LiaEnvelopeSolid} from "react-icons/lia";
import {GoPerson} from "react-icons/go";
import Basket from "../Basket/Basket";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getProductCard} from "../../store/reducers/ProductSlice";
import ProductList from "../product-list/ProductList";


const Header = () => {
    const dispatch = useAppDispatch()
    const {productCard} = useAppSelector(state => state.ProductSlice)
    const getProductList = ()=> {
        dispatch(getProductCard(!productCard))
    }

    return (
        <>
            <div id='header'>
                <div className="container">
                    <div className="header">
                        <img src={logo} alt=""/>
                        <div className="header-nav">
                            <div className="header-nav-icons">
                                <BsBoxSeam onClick={()=> getProductList()} className='header-nav-icon'/>
                                <BsBell className='header-nav-icon'/>
                                <Basket/>
                            </div>
                            </div>
                        <div className="header-nav">
                            <div className="header-nav-icons1">
                                <AiOutlineGlobal className='header-nav-icon'/>
                                <LiaEnvelopeSolid className='header-nav-icon'/>
                                <AiOutlineHeart className='header-nav-icon'/>
                                <GoPerson className='header-nav-icon'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductList/>
        </>

    );
};

export default Header;