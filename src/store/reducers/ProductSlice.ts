import {createSlice} from "@reduxjs/toolkit";
import {ProductsTypes} from "../../types/ProductsTypes";


const initialState: ProductsTypes = {
    products: []
}

export const ProductSlice = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getProduct(state, {payload}) {
            state.products = payload
        }
    }
})

export default ProductSlice.reducer
export const {getProduct} = ProductSlice.actions