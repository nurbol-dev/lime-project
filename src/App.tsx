import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Authorization from './components/authorization/Authorization';
import Products from "./components/Products/Products";

function App() {
    return (
        <div className="App">
            <Header/>
            <Authorization/>
            <Products/>
        </div>
    );
}

export default App;
