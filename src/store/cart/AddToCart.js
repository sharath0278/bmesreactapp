import { cartActionCreators } from './CartData';

const addItemToCartRequestType = 'AddItemToCart_Request';
const addItemToCartResponseSuccessType = 'AddItemToCart_Response_Success';
const addItemToCartResponseErrorType = 'AddItemToCart_Response_Error';
const clearCartItemType = 'Clear_CartItem';

const initialState = { cartItem: {}, isError: false, isloading: false };

export const addToCartActionCreators = {
    addToCart: (productId, cartId = 0) => async (dispatch, getState) => {

        const requestBody = { cartId: cartId, productId: productId };

        dispatch({ type: clearCartItemType });

        dispatch({ type: addItemToCartRequestType });

        const url = "/api/cart";

        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

        if (response.ok) {
            const cartItemResponse = await response.json();
            const cartItem = cartItemResponse.cartItem;
            dispatch(cartActionCreators.addItemToCart(cartItem));
            dispatch({ type: addItemToCartResponseSuccessType, cartItem });
        } else {
            dispatch({ type: addItemToCartResponseErrorType });
        }

    }
};

export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === addItemToCartRequestType) {
        return {
            ...state,
            isloading: true
        };
    }

    if (action.type === addItemToCartResponseSuccessType) {
        return {
            ...state,
            cartItem: action.cartItem,
            isloading: false
        };
    }

    if (action.type === addItemToCartResponseErrorType) {
        return {
            ...state,
            isError: true,
            isloading: false
        };
    }

    if (action.type === clearCartItemType) {
        return {
            ...state,
            ...initialState
        };
    }

    return state;
};
