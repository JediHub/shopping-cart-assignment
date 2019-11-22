import { RECEIVE_BANNER_DATA, RECEIVE_CATEGORIES_DATA } from '../home/constants';

export default (state= {}, action)=> {
    switch(action.type) {
        case RECEIVE_BANNER_DATA:
            return state = {...state, banners: action.payload}
        case RECEIVE_CATEGORIES_DATA:
            return state = {...state, categories: action.payload}
        default:
            return state;
    }
}