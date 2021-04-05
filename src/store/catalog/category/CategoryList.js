const requestCategoryListType = 'Request_CategoryList';
const receiveCategoryListSuccessType = 'Receive_CategoryList_Success';
const receiveCategoryListErrorType = 'Receive_CategoryList_Success';

const initialState = { categoryData: {}, isloading: false, isError: false };

export const categoryListActionCreators = {

    fetchCategories: () => async (dispatch, getState) => {

        dispatch({ type: requestCategoryListType });

        const url = `/api/category`;

        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

        if (response.ok) {
            const categoryData = await response.json();
            dispatch({ type: receiveCategoryListSuccessType, categoryData });
        } else {
            dispatch({ type: receiveCategoryListErrorType });
        }
    }
};

export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === requestCategoryListType) {
        return {
            ...state,
            isloading: true
        };
    }

    if (action.type === receiveCategoryListSuccessType) {
        return {
            ...state,
            categoryData: action.categoryData,
            isloading: false,
            isError: false
        };
    }

    if (action.type === receiveCategoryListErrorType) {
        return {
            ...state,
            isloading: false,
            isError: true
        };
    }

    return state;
};
