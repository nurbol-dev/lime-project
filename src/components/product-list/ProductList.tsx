import React from 'react';
import friuts from './../../assets/img/fruits.svg'
import juice from   './../../assets/img/juice.svg'
import grocery from  './../../assets/img/grocery.svg'
import cosmetice from  './../../assets/img/icon.png'
import kids from  './../../assets/img/kids.svg'
import './ProductList.scss'
import {useAppDispatch, useAppSelector} from "../../hooks";
import ProductCard from "../Products/ProductCard/ProductCard";
const ProductList = () => {
    const dispatch = useAppDispatch()
    const {productCard} = useAppSelector(state => state.ProductSlice)
    return (

        <>
            {
              productCard ?
                  <div id='productlist'>
                    <div className="container">
                        <div className="productlist-content">
                            <div className="productlist-block">
                                <h2>Product list</h2>
                                <div className="productlist-card">
                                    <img src={friuts} alt=""/>
                                    <p>Vegetables, fruits</p>
                                </div>
                                <div className="productlist-card">
                                    <img src={juice} alt=""/>
                                    <p>Juices</p>
                                </div>
                                <div className="productlist-card">
                                    <img src={grocery} alt=""/>
                                    <p>Grocery</p>
                                </div>
                                <div className="productlist-card">
                                    <img src={cosmetice} alt=""/>
                                    <p>Cosmetics,hygiene</p>
                                </div>
                                <div className="productlist-card">
                                    <img src={kids} alt=""/>
                                    <p>For kids</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ''
            }

        </>
    );
};

export default ProductList;