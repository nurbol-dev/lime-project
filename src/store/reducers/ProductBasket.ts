import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductBaskets} from "../../types/ProductBasket";
import {dataTypes} from "../../types/faceBack";


const initialState: ProductBaskets = {
    basket: [],
    basketModal: true,
    test: {}
}

export const ProductBasket = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        addToBasket(state, {payload}: PayloadAction<dataTypes>) {
            const found = state.basket.find(el => el.id === payload.id)
            if (found) {
                state.basket = state.basket.map(el => el.id === found.id ? {...el, quantity: el.quantity+1} : el)
            } else {
                state.basket = [...state.basket, {...payload, quantity: 1}]
            }
        },
        upDateBasket(state,{payload}) {
            state.basketModal = payload
        },
        tests(state,{payload}) {
            state.test = payload
        }
    }
})

export const {addToBasket,upDateBasket,tests} = ProductBasket.actions
export default ProductBasket.reducer