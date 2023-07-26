import {createSlice} from "@reduxjs/toolkit";
import {ProductsTypes} from "../../types/ProductsTypes";


const initialState: ProductsTypes = {
    products: [],
    productCard: false,
}

export const ProductSlice = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getProduct(state, {payload}) {
            state.products = payload
        },
        getProductCard(state, action) {
            state.productCard = action.payload
        }

    }
})

export default ProductSlice.reducer
export const {getProduct,getProductCard} = ProductSlice.actions