import { combineReducers } from "redux";
import * as Checkout from './Checkout';

const checkoutReducers = () => combineReducers({
    checkout: Checkout.reducer,
});

export default checkoutReducers;
