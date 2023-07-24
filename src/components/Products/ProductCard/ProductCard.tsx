import React from 'react';
import {dataTypes} from "../../../types/faceBack";
import "./ProductCard.scss"
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {SlBasket} from "react-icons/sl";

interface card {
    el: dataTypes
}

const ProductCard = ({el}: card) => {
    return (
        <div className="card">
            <div className="container">
                <div className="card--group">
                    <MdOutlineFavoriteBorder className="card--group__fav"/>
                    <div className="card">
                        <img src={el.image} alt="img"/>
                        <h5>{el.price}c</h5>
                        <h1>{el.name_en}</h1>
                        <h2>{el.kg} kg</h2>
                    </div>
                    <button><SlBasket/> Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;