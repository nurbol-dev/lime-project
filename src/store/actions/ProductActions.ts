import {appDispatch} from "../index";
import {getProduct, ProductDetails, productModals} from "../reducers/ProductSlice";
import {dataTypes} from "../../types/faceBack";


export const getProductREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(getProduct(el))
}

export const detailsProductREC = (el: dataTypes) => (dispatch: appDispatch) => {
    dispatch(ProductDetails(el))
}

export const productModalREC = (edit: boolean) => (dispatch: appDispatch) => {
    dispatch(productModals(!edit))
}


