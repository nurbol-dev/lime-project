import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { setUpStore } from "./store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import Products from "./components/Products/Products";

import {BrowserRouter} from "react-router-dom";
import Layout from "./layout";
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={setUpStore()}>
       <BrowserRouter>
          <Layout>
              <App/>
          </Layout>
       </BrowserRouter>
    </Provider>
);
