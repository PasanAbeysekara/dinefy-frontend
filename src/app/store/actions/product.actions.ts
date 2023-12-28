import { Action } from '@ngrx/store';
import { ProductInfoModel } from '../../models/api/productInfoModel';

export enum ProductActionTypes {
    LOAD_PRODUCT = '[PRODUCT] Load Product',
    LOAD_PRODUCT_SUCCESS = '[PRODUCT] Load Product Success',
    LOAD_PRODUCT_FAILURE = '[PRODUCT] Load Product Failure',
    ADD_ITEM = '[PRODUCT] Add Item',
    ADD_ITEM_SUCCESS = '[PRODUCT] Add Item Sucess',
    ADD_ITEM_FAILURE = '[PRODUCT] Add Item Failure'
}

export class LoadProductAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT
}

export class LoadProductSuccessAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT_SUCCESS;
    constructor(public payload: ProductInfoModel) { }
}

export class LoadProductFailureAction implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCT_FAILURE;
    constructor(public payload: Error) { }
}

export type ProductAction = LoadProductAction |
    LoadProductFailureAction |
    LoadProductSuccessAction;