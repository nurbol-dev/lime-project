import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./reducers/ProductSlice";


const rootReducer = combineReducers({
    ProductSlice,
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type appStore = ReturnType<typeof setUpStore>
export type appDispatch = appStore["dispatch"]