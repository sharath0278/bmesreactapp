const checkoutRequestType = 'Checkout_Request';
const checkoutResponseSuccessType = 'Checkout_Response_Success';
const checkoutResponseErrorType = 'Checkout_Response_Error';
const clearCheckoutType = 'Clear_Checkout';

const initialState = { result: null, isError: false, isloading: false };

export const checkoutActionCreators = {
    checkout: (checkoutData) => async (dispatch, getState) => {
        const requestBody = checkoutData;

        dispatch({ type: clearCheckoutType });

        dispatch({ type: checkoutRequestType });

        const url = `/api/checkout`;

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
            const result = await response.json();
            dispatch({ type: checkoutResponseSuccessType, result });
        } else {
            dispatch({ type: checkoutResponseErrorType });
        }

    }
};

export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === checkoutRequestType) {
        return {
            ...state,
            isloading: true
        };
    }

    if (action.type === checkoutResponseSuccessType) {
        return {
            ...state,
            result: action.result,
            isloading: false
        };
    }

    if (action.type === checkoutResponseErrorType) {
        return {
            ...state,
            isError: true,
            isloading: false
        };
    }

    if (action.type === clearCheckoutType) {
        return {
            ...state,
            ...initialState
        };
    }

    return state;
};
