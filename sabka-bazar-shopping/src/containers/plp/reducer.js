import { RECEIVED_PRODUCTS_DATA } from './constants';

export default (state={}, action) => {
    switch(action.type){
        case RECEIVED_PRODUCTS_DATA:
            return state= {...state, products: action.payload}

            default:
                return state;
    }
}