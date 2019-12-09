import { REQUEST_PRODUCTS_DATA, RECEIVED_PRODUCTS_DATA } from './constants';

export const receivedProductsData = data => ({type: RECEIVED_PRODUCTS_DATA, payload: data});

export const requestProductsData = (cid) => {
    return {type: REQUEST_PRODUCTS_DATA, payload: cid}
};