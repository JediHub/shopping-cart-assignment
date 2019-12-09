import { call, put, takeEvery } from "redux-saga/effects";

import { receivedProductsData } from "./actions";
import { receiveCategoriesData } from "../home/actions";
import { REQUEST_PRODUCTS_DATA } from "./constants";
import { ProductsData, CategoriesData } from './../Api';


function* getProductsData(action) {
    let catData = "";
    try {
        const prodData = yield call(ProductsData);

        // getting category id
        if (!action.payload.categories) {
            catData = yield call(CategoriesData);
            yield put(receiveCategoriesData(catData));
        }

        if (action.payload.cid !== 'all') {
            let categories = action.payload.categories ? action.payload.categories : catData;
            let catID = categories && categories.filter((d) => {
                return d.key === action.payload.cid;
            })[0].id;

            let filteredProducts = prodData && prodData.filter((d) => {
                return d.category === catID;
            });
            yield put(receivedProductsData(filteredProducts));
        } else {
            yield put(receivedProductsData(prodData));
        }
    } catch (e) {
        console.log(e);
    }
}



export function* plpSaga() {
    yield takeEvery(REQUEST_PRODUCTS_DATA, getProductsData);
}

