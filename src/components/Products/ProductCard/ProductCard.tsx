import React from 'react';
import {dataTypes} from "../../../types/faceBack";
import "./ProductCard.scss"
import {MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md";
import {SlBasket} from "react-icons/sl";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {detailsProductREC, productModalREC} from "../../../store/actions/ProductActions";
import {addToBasketREC, testREC} from "../../../store/actions/ProductBasket";
import {getFavorite} from "../../../store/actions/ProductFavoriteActions";

interface card {
    el: dataTypes
}

const ProductCard = ({el}: card) => {
    const {productsDetails,productModal} = useAppSelector(s => s.ProductSlice)
    const {basket} = useAppSelector(s => s.ProductBasket)
    const {favorite} = useAppSelector(s => s.ProductFavorite)
    const dispatch = useAppDispatch()
    const detailPr = () => dispatch(detailsProductREC(el))
    const found = favorite.some(some => some.id === el.id)

    return (
        <div className="card">
            <div className="container">
                    <div className="card--group">
                        <MdFavorite style={{color: found ? "red" : ""}} onClick={() => dispatch(getFavorite(el))} className="card--group__fav"/>
                        <div className="card">
                            <img src={el.image} alt="img" onClick={() => {
                                detailPr()
                                dispatch(productModalREC(productModal))
                                dispatch(testREC(el.id))
                            }}/>
                            <h5>{el.price}c</h5>
                            <h1>{el.name_en}</h1>
                            <h2>{el.kg} kg</h2>
                        </div>
                        <button onClick={() => {
                            dispatch(addToBasketREC(el))
                            dispatch(testREC(el.id))
                        }
                        }> <SlBasket/> Add to cart</button>
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;