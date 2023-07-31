import {dataTypes} from "./faceBack";

export interface ProductBaskets {
    basket: dataTypes[]
    basketModal: boolean
    test: Partial<dataTypes>,
    checkoutModal: boolean
}