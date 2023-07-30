import React from 'react';
import "./Basket.scss"
import {SlBasket} from "react-icons/sl";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {
    addToBasketREC,
    decBasketREC,
    delBasketREC,
    upDateBasketREC,
    upDateCheckREC
} from "../../store/actions/ProductBasket";
import {BsArrowLeft} from "react-icons/bs";
import {GrClose} from "react-icons/gr";
import Checkout from "./Checkout/Checkout";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Basket = () => {
    const {basketModal,test,checkoutModal, basket} = useAppSelector(s => s.ProductBasket)
    const dispatch = useAppDispatch()
    const delBas = (el: any) => dispatch(delBasketREC(el))
    const upDateBas = () => dispatch(upDateBasketREC(!basketModal))

    const countBas =  basket.reduce((acc, el) => {
        return acc * el.quantity + el.price
    }, 0)
    const countBtn =  basket.reduce((acc, el) => {
        return acc * el.quantity + el.price / 50
    }, 0)
    const countStr =  basket.reduce((acc, el) => {
        return acc * el.quantity + el.price - 50
    }, 0)
    const upDates = () => dispatch(upDateCheckREC(!checkoutModal))
    return (
        <>
            <SlBasket className='header-nav-icon' onClick={() => dispatch(upDateBasketREC(!basketModal))}/>
            <div hidden={basketModal}>
                <div className="container">
                    <div className="bac-blur"  onClick={() => dispatch(upDateBasketREC(!basketModal))}></div>
                    <div className="baskets" >
                       <div className="v">
                           <div className="baskets--nav">
                               <BsArrowLeft onClick={() => dispatch(upDateBasketREC(!basketModal))} className="baskets--nav--array"/>
                               <h2>Cart</h2>
                           </div>
                           <div className="icons">
                               <h1><AiOutlinePlus onClick={() => dispatch(upDateBasketREC(!basketModal))}/></h1>
                           </div>
                       </div>

                        <div className="baskets--bas">
                            {
                                basket.map(el =>
                                    <>
                                        <div className="baskets--bas--cards">
                                            <img src={el.image} alt=""/>
                                            <div>
                                                <h1>{el.name_en}</h1>
                                                <h2>130с/kg</h2>
                                                <span>1 pc.~0.1 kg</span>
                                            </div>
                                            <div className="baskets--bas--cards__count">
                                                <p>Quantity</p>
                                                <div className="baskets--bas--cards__count--btn">
                                                    <div onClick={() => dispatch(decBasketREC(el))}><AiOutlineMinus/></div>
                                                    <h3>{el.quantity}</h3>
                                                    <div onClick={() => dispatch(addToBasketREC(el))}><AiOutlinePlus/></div>
                                                </div>
                                                <h4>{el.price * el.quantity}c</h4>
                                                <div onClick={() => delBas(el)}
                                                     className="baskets--bas--cards__count--btn__close"><GrClose/></div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div style={{display: basket.length === 0 ? "none" : "flex"}} className="finBas">
                            <div className="finBas--text">
                                <h1>Subtotal</h1>
                                <h1>Shipping charges</h1>
                            </div>
                            <div className="finBas--count">
                                <p>{Math.floor(countStr)}c</p>
                                <p>{Math.floor(countBtn)}c</p>
                            </div>
                        </div>
                        <div className="total" style={{display: basket.length === 0 ? "none" : "flex"}}>
                            <h1>total</h1>
                            <p>{countBas}c</p>
                        </div>
                        <div style={{textAlign: "right"}}>
                            <button onClick={() => {
                                upDates()
                                upDateBas()
                            }} className="btnBasket" style={{display: basket.length === 0 ? "none" : "flex"}}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Basket;