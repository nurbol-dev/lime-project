import {appDispatch} from "../index";
import {getProduct} from "../reducers/ProductSlice";


export const getProductREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(getProduct(el))
}