import {dataTypes} from "./faceBack";

export interface ProductsTypes {
    products: dataTypes[]
    productsDetails: Partial<dataTypes>
    productModal: boolean
}