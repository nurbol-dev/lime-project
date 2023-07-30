import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getProductREC, productModalREC} from "../../store/actions/ProductActions";
import {data} from "../../faceBackend/backend";
import ProductCard from "./ProductCard/ProductCard";
import "./Product.scss"
import Slider from "react-slick";
import banner from "../../assets/img/image 33.png"
import ProductDetails from "./ProductDetails/ProductDetails";
import {IoSearchSharp} from "react-icons/io5";

const Products = () => {
    const {basket} = useAppSelector(s => s.ProductBasket)
    const {products, productModal} = useAppSelector(s => s.ProductSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductREC(data))
    }, [])

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: true,
        slidesToScroll: 3,
        variableWidth: true,
    };

    return (
        <div className="data">
            <ProductDetails/>
            <div className="blur" onClick={() => dispatch(productModalREC(productModal))}
                 style={{display: productModal ? "flex" : "none"}}></div>
            <div className="mainInput" >
                <IoSearchSharp className="mainInput--icon"/>
                <input type="text" placeholder="What would you like to buy..."/>
            </div>
            <div className="container">
                <div>
                    <Slider {...settings}>
                        <img src={banner} alt="img"/>
                        {
                            products.map(el => <ProductCard el={el}/>)
                        }
                    </Slider>
                </div>
                <div className="products">
                    {
                        products.map(el => <ProductCard el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;