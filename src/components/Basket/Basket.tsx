import React from 'react';
import "./Basket.scss"
import {SlBasket} from "react-icons/sl";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {upDateBasketREC} from "../../store/actions/ProductBasket";

const Basket = () => {
    const {basketModal} = useAppSelector(s => s.ProductBasket)
    const dispatch = useAppDispatch()
    return (
        <>
            <SlBasket className='header-nav-icon' onClick={() => dispatch(upDateBasketREC(!basketModal))}/>
            <div hidden={basketModal}>
                <div className="container">
                    <div className="baskets">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Basket;