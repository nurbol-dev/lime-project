import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./reducers/ProductSlice";
import ProductBasket from "./reducers/ProductBasket";
import ProductFavorite from "./reducers/ProductFavorite";


const rootReducer = combineReducers({
    ProductSlice,
    ProductBasket,
    ProductFavorite
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type appStore = ReturnType<typeof setUpStore>
export type appDispatch = appStore["dispatch"]