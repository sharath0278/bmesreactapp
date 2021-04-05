const requestCartType = 'Request_Cart';
const receiveCartSuccessType = 'Receive_Cart_Success';
const receiveCartErrorType = 'Receive_Cart_Error';
const addItemToCartType = 'Add_Item_To_Cart';
const removeItemFromCartType = 'Remove_Item_From_Cart';
const clearCartType = 'Clear_Cart';

const initialState = { cart: { cartItems: [] }, isloading: false, isError: false };

export const cartActionCreators = {
    addItemToCart: (cartItem) => ({ type: addItemToCartType, cartItem }),
    removeItemFromCart: (cartItemId) => ({ type: removeItemFromCartType, cartItemId }),
    clearCart: () => ({ type: clearCartType }),
    fetchCart: () => async (dispatch, getState) => {

        dispatch({ type: requestCartType });

        const url = `/api/cart`;

        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

        if (response.ok) {
            const cartResponse = await response.json();
            const cart = cartResponse.cart
            dispatch({ type: receiveCartSuccessType, cart });
        } else {
            dispatch({ type: receiveCartErrorType });
        }
    }
};

export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === requestCartType) {
        return {
            ...state,
            isloading: true
        };
    }

    if (action.type === receiveCartSuccessType) {
        return {
            ...state,
            cart: action.cart,
            isloading: false,
            isError: false
        };
    }
    if (action.type === receiveCartErrorType) {
        return {
            ...state,
            isloading: false,
            isError: true
        };
    }
    if (action.type === addItemToCartType) {
        let cartItems = state.cart.cartItems;

        let item = cartItems.find(cartItem => cartItem.id === action.cartItem.id)

        if (item !== undefined) {
            let index = cartItems.findIndex(cartItem => cartItem.id === action.cartItem.id);
            cartItems[index] = action.cartItem;
        } else {
            cartItems.push(action.cartItem);
        }

        return {
            ...state,
            cart: { cartItems: [...cartItems] }
        };
    }

    if (action.type === removeItemFromCartType) {
        let cart = state.cart;
        let cartItems = cart.cartItems.filter(cartItem => cartItem.id !== action.cartItemId);
        cart.cartItems = cartItems;
        return {
            ...state,
            cart: { ...cart }
        };
    }

    if (action.type === clearCartType) {
        return {
            ...state,
            ...initialState
        }
    }

    return state;
};
