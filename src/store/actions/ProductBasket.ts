import {dataTypes} from "../../types/faceBack";
import {appDispatch} from "../index";
import {addToBasket, decrimentBasket, deleteBasket, tests, upDateBasket, upDateCheck} from "../reducers/ProductBasket";

export const addToBasketREC = (el: dataTypes | any) => (dispatch: appDispatch) => {
    dispatch(addToBasket(el))
}


export const upDateBasketREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(upDateBasket(el))
}

export const testREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(tests(el))
}

export const delBasketREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(deleteBasket(el))
}

export const upDateCheckREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(upDateCheck(el))
}

export const decBasketREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(decrimentBasket(el))
}