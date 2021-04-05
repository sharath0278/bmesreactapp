import { combineReducers } from "redux";
import * as BrandList from './BrandList';

const brandReducers = () => combineReducers({
    brandList: BrandList.reducer
});

export default brandReducers;
