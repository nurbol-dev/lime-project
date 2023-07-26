import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getProductREC} from "../../store/actions/ProductActions";
import {data} from "../../faceBackend/backend";
import ProductCard from "./ProductCard/ProductCard";
import "./Product.scss"
import Slider from "react-slick";
import banner from "../../assets/img/image 33.png"

const Products = () => {
    const {products} = useAppSelector(s => s.ProductSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductREC(data))
    }, [])

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        variableWidth: true,
    };

    return (
        <div className="data">
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