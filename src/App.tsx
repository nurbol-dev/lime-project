import React from 'react';
import './App.scss';
import Authorization from './components/authorization/Authorization';
import Products from "./components/Products/Products";
import {Route, Routes} from "react-router-dom";
import Modal from "./courier/Modal/modal";
import Courier from "./courier/Courier";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Products/>}/>
                <Route path={"/authorization"} element={<Authorization/>}/>
                <Route path={"/admin/modal"} element={<Modal/>}/>
                <Route path={"/courier"} element={<Courier/>}/>
            </Routes>
        </div>
    );
}

export default App;
