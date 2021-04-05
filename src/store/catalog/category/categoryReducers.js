import { combineReducers } from "redux";
import * as CategoryList from './CategoryList';

const categoryReducers = () => combineReducers({
    categoryList: CategoryList.reducer
});

export default categoryReducers;
