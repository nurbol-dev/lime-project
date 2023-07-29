import {dataTypes} from "../../types/faceBack";
import {appDispatch} from "../index";
import {upDateFavorite} from "../reducers/ProductFavorite";


export const getFavorite = (el: any) => (dispatch: appDispatch) => {
    dispatch(upDateFavorite(el))
}