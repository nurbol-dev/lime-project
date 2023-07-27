import {createSlice} from "@reduxjs/toolkit";
import {ProductsTypes} from "../../types/ProductsTypes";


const initialState: ProductsTypes = {
    products: [],
    productsDetails: {},
    productModal: false
}

export const ProductSlice = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getProduct(state, {payload}) {
            state.products = payload
        },
        ProductDetails(state,{payload}) {
            state.productsDetails = payload
        },
        productModals(state,{payload}) {
            state.productModal = payload
        },
    }
})

export default ProductSlice.reducer
export const {getProduct,ProductDetails,productModals} = ProductSlice.actions