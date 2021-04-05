import { cartActionCreators } from './CartData';

const removeItemFromCartRequestType = 'RemoveItemFromCart_Request';
const removeItemFromCartResponseSuccessType = 'RemoveItemFromCart_Response_Success';
const removeItemFromCartResponseErrorType = 'RemoveItemFromCart_Response_Error';
const clearCartItemType = 'Clear_CartItem';

const initialState = { cartItemId: null, isError: false, isloading: false };

export const removeItemFromCartActionCreators = {
    removeItemFromCart: (cartId, cartItemId) => async (dispatch, getState) => {

        dispatch({ type: clearCartItemType });

        dispatch({ type: removeItemFromCartRequestType });

        const url = `/api/cart/${cartId}/${cartItemId}`;

        const response = await fetch(url,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });

        if (response.ok) {
            const removeItemResponse = await response.json();
            const cartItemId = removeItemResponse.cartItemId;
            dispatch({ type: removeItemFromCartResponseSuccessType, cartItemId });
            dispatch(cartActionCreators.removeItemFromCart(cartItemId));
        } else {
            dispatch({ type: removeItemFromCartResponseErrorType });
        }

    }
};

export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === removeItemFromCartRequestType) {
        return {
            ...state,
            isloading: true
        };
    }

    if (action.type === removeItemFromCartResponseSuccessType) {
        return {
            ...state,
            cartItemId: action.cartItemId,
            isloading: false
        };
    }

    if (action.type === removeItemFromCartResponseErrorType) {
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
