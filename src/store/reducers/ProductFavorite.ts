import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductFavoriteState} from "../../types/ProductFavoriteTypes";
import {dataTypes} from "../../types/faceBack";


const initialState: ProductFavoriteState = {
    favorite: []
}

export const ProductFavorite = createSlice({
    name: "FAVORITE",
    initialState,
    reducers: {
        upDateFavorite(state, {payload}: PayloadAction<dataTypes>) {
            const fount = state.favorite.find(el => el.id === payload.id)
            if (fount) {
                state.favorite = state.favorite.filter(el => el.id !== fount.id)
            } else {
                state.favorite = [...state.favorite, payload]
            }
        }
    }
})

export const {upDateFavorite} = ProductFavorite.actions
export default ProductFavorite.reducer