const requestProductListType = 'Request_ProductList';
const receiveProductListSuccessType = 'Receive_ProductList_Success';
const receiveProductListErrorType = 'Receive_ProductList_Error';

const initialState = { productData: {}, isloading: false, isError: false };

export const productListActionCreators = {

    fetchProducts: () => async (dispatch, getState) => {

        dispatch({ type: requestProductListType });

        let state = getState();

        let requestParam = state.productState.requestParameters;

        const url = `/api/product/${requestParam.selectedCategory}/${requestParam.selectedBrand}/${requestParam.currentPage}/${requestParam.productsPerPage}`;

        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json; odata = verbose',
                    'Content-Type': 'application/json',
                }
            });

        if (response.ok) {
            const productData = await response.json(url);
            dispatch({ type: receiveProductListSuccessType, productData });
        } else {
            dispatch({ type: receiveProductListErrorType });
        }
    }
};

export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === requestProductListType) {
        return {
            ...state,
            isloading: true
        };
    }

    if (action.type === receiveProductListSuccessType) {
        return {
            ...state,
            productData: action.productData,
            isloading: false,
            isError: false
        };
    }
    if (action.type === receiveProductListErrorType) {
        return {
            ...state,
            isloading: false,
            isError: true
        };
    }
    return state;
};
