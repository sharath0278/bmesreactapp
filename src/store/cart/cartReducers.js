import { combineReducers } from "redux";
import * as AddToCart from './AddToCart';
import * as RemoveFromCart from './RemoveFromCart';
import * as CartData from './CartData';

const cartReducers = () => combineReducers({
    addedItem: AddToCart.reducer,
    removedItem: RemoveFromCart.reducer,
    cartData: CartData.reducer
});

export default cartReducers;
