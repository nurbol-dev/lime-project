import {dataTypes} from "../../types/faceBack";
import {appDispatch} from "../index";
import {addToBasket, tests, upDateBasket} from "../reducers/ProductBasket";

export const addToBasketREC = (el: dataTypes | any) => (dispatch: appDispatch) => {
    dispatch(addToBasket(el))
}


export const upDateBasketREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(upDateBasket(el))
}

export const testREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(tests(el))
}