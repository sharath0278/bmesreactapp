import { combineReducers } from "redux";
import * as ProductList from './ProductList';
import * as ProductRequestParam from './ProductRequestParam';

const productReducers = () => combineReducers({
    productList: ProductList.reducer,
    requestParameters: ProductRequestParam.reducer
});

export default productReducers;
