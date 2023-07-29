import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Authorization from './components/authorization/Authorization';
import Products from "./components/Products/Products";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/product-list/ProductList";

function App() {
    return (
        <div className="App">
            <Header/>
            {/* <Authorization/> */}
            <Products/>
            <Routes>
                <Route path={"/"} element={<Products/>}/>
                <Route path={"/authorization"} element={<Authorization/>}/>
            </Routes>
            <ProductList/>
        </div>
    );
}

export default App;
