import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Authorization from './components/authorization/Authorization';
import Products from "./components/Products/Products";
import ProductList from "./components/product-list/ProductList";

function App() {
  return (
        <div className="App">
            <Header/>
            <Authorization/>
            <Products/>
            <ProductList/>
        </div>
    );
}

export default App;
