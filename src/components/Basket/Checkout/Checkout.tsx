import React, {useState} from 'react';
import "./Checkout.scss"
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {HiArrowNarrowLeft} from "react-icons/hi";
import {upDateBasketREC, upDateCheckREC} from "../../../store/actions/ProductBasket";
import m from "../../../assets/img/image 30.png"
const Checkout = () => {
    const [radio,setRadio] = useState<any>({
        deliver: "",
        selectDate: "",
        cash: "",
        card: ""
    })
    const {basket, basketModal, checkoutModal} = useAppSelector(s => s.ProductBasket)
    const dispatch = useAppDispatch()
    const upDates = () => dispatch(upDateCheckREC(!checkoutModal))
    const upDateBas = () => dispatch(upDateBasketREC(!basketModal))

    const countBas =  basket.reduce((acc, el) => {
        return acc * el.quantity + el.price
    }, 0)



    const handleCash = (e: any) => {
        setRadio({...radio, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className="bac-blur" onClick={upDates} hidden={checkoutModal}></div>
            <div hidden={checkoutModal}>
                <div className="container">
                    <div className="check">
                        <div className="check--text">
                            <h2><HiArrowNarrowLeft onClick={() => {
                                upDates()
                                upDateBas()
                            }}/></h2>
                            <h3>Checkout</h3>
                        </div>
                        <div className="check--group">
                            <div className="check--group__block">
                                <div className="check--group__block--child">
                                    <h1>Name:</h1>
                                    <input type="text"/>
                                </div>
                                <div className="check--group__block--child">
                                    <h1>Last name:</h1>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="check--group--phone">
                                <h1>Phone number:</h1>
                                <input type="text"/>
                            </div>
                            <div className="check--group--address">
                                <h1>Address:</h1>
                                <div className="check--group--address--in">
                                    <input type="text" placeholder="street"/>
                                    <input type="text" placeholder="house"/>
                                    <input type="text" placeholder="apartment"/>
                                </div>
                            </div>
                            <div className="check--group--delivery">
                                <h1>
                                    Delivery
                                </h1>
                                <div className="check--group--delivery__child">
                                    <div className="check--group--delivery__child--inputs">
                                        <input type="radio" onChange={handleCash} name={"deliver"}/>
                                        <p>Deliver the order as soon as possible</p>
                                    </div>
                                    <div className="check--group--delivery__child--inputs">
                                        <input type="radio" onChange={handleCash} name={"selectDate"}/>
                                        <p>Select date and time of delivery</p>
                                    </div>
                                    <input style={{display: radio.selectDate === "on" ?  "block" : "none"}} type="date" className="datas"/>

                                </div>
                            </div>
                            <div className="check--group--com">
                                <h1>leave a comment</h1>
                                <input type="text"/>
                            </div>
                            <div className="check--group--delivery__child">
                                <div className="check--group--delivery__child--inputs">
                                    <input type="radio" onChange={handleCash} name={"cash"}/>
                                    <p>Cash payment to the courier</p>
                                </div>
                                    <div style={{display: radio.cash === "on" ? "block" : "none"}} className="check--s">
                                        <input type="text" placeholder="street"/>
                                        <input type="text" placeholder="apartment"/>
                                    </div>
                                <div  className="check--group--delivery__child--inputs">
                                    <input type="radio" onChange={handleCash} name={"card"}/>
                                    <p>card payment</p>
                                </div>
                                <div style={{display: radio.card === "on" ? "block" : "none"}}>
                                    <div className="check--group--delivery__child--l">
                                        <div className="check--group--delivery__child--l__m">
                                            <h1>Payment with Mbank</h1>
                                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                                <p>You can transfer payment upon receipt of the goods</p>
                                                <img src={m} alt=""/>
                                            </div>
                                            <input type="number" placeholder={"996+700359733"}/>
                                            <span>Syrgakova Nurjamal</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="check--fin">
                            {
                                basket.map(el => (
                                    <div>
                                       <div className="check--fin__bas">
                                           <h2>{el.name_en}</h2>

                                           <p>{el.kg}kg</p>

                                           <h4>{el.price}c</h4>
                                       </div>
                                    </div>
                                ))
                            }
                            <div style={{display: basket.length === 0 ? "none" : "flex", margin: "30px 0 0 0"}} className="finBas">
                                <div className="finBas--text">
                                    <h1>Subtotal</h1>
                                    <h1>Shipping charges</h1>
                                </div>
                                <div className="finBas--count">
                                    <p>{Math.floor(countBas - 50)}c</p>
                                    <p>{Math.floor(countBas / 50)}c</p>
                                </div>
                            </div>
                            <div className="total" style={{display: basket.length === 0 ? "none" : "flex"}}>
                                <h1>total</h1>
                                <p>{countBas}c</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;