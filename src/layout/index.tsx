import React from 'react';
import Header from "../components/header/Header";
import Home from "../Home";

const Layout = ({children}: any) => {
    return (
        <>
            <Header/>
            {children}
            <Home/>
        </>
    );
};

export default Layout;