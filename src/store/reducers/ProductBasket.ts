import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductBaskets} from "../../types/ProductBasket";
import {dataTypes} from "../../types/faceBack";


const initialState: ProductBaskets = {
    basket: [],
    basketModal: true,
    test: {},
    checkoutModal: true
}

export const ProductBasket = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        addToBasket(state, {payload}: PayloadAction<dataTypes>) {
            const found = state.basket.find(el => el.id === payload.id)
            if (found) {
                state.basket = state.basket.map(el => el.id === found.id ? {...el, quantity: el.quantity + 1} : el)
            } else {
                state.basket = [...state.basket, {...payload, quantity: 1}]
            }
        },
        upDateBasket(state, {payload}) {
            state.basketModal = payload
        },
        tests(state, {payload}) {
            state.test = payload
        },
        deleteBasket(state, {payload}) {
            state.basket = state.basket.filter(el => el.id !== payload.id)
        },
        decrimentBasket(state, {payload}) {
            state.basket = state.basket.map(el => {
                if (el.id === payload.id) {
                    if (el.quantity > 1) {
                        return {...el, quantity: el.quantity -1}
                    } else return el
                } else return el
            })
        },
        upDateCheck(state, {payload}) {
            state.checkoutModal = payload
        }
    }
})

export const {upDateCheck,deleteBasket, decrimentBasket, addToBasket, upDateBasket, tests} = ProductBasket.actions
export default ProductBasket.reducer