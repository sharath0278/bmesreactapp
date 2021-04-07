const requestBrandListType = 'Request_BrandList';
const receiveBrandListSuccessType = 'Receive_BrandList_Success';
const receiveBrandListErrorType = 'Receive_BrandList_Error';

const initialState = { brandData: {}, isloading: false, isError: false };

export const brandListActionCreators = {

    fetchBrands: () => async (dispatch, getState) => {

        dispatch({ type: requestBrandListType });

        const url = `/api/brand`;

        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

        if (response.ok) {
            const brandData = await response.json();
            dispatch({ type: receiveBrandListSuccessType, brandData });
        } else {
            dispatch({ type: receiveBrandListErrorType });
        }
    }
};

export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === requestBrandListType) {
        return {
            ...state,
            isloading: true
        };
    }

    if (action.type === receiveBrandListSuccessType) {
        return {
            ...state,
            brandData: action.brandData,
            isloading: false,
            isError: false
        };
    }
    if (action.type === receiveBrandListErrorType) {
        return {
            ...state,
            isloading: false,
            isError: true
        };
    }

    return state;
};
