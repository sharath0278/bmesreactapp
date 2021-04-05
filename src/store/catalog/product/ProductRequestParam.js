import { productListActionCreators } from './ProductList';

const updateSelectedBrandType = 'Update_SelectedBrand';
const updateSelectedCategoryType = 'Update_SelectedCategory';
const updateCurrentPageType = 'Update_CurrentPage';
const clearRequestParamType = 'Clear_RequestParam';

const initialState = { selectedBrand: "all-brands", selectedCategory: "all-categories", currentPage: 1, productsPerPage: 9 };

export const productRequestParamActionCreators = {

    clearRequestParam: () => ({ type: clearRequestParamType }),

    updateSelectedBrand: (selectedBrand) => async (dispatch, getState) => {
        dispatch({ type: updateSelectedBrandType, selectedBrand });
        dispatch(productListActionCreators.fetchProducts());

    },

    updateSelectedCategory: (selectedCategory) => async (dispatch, getState) => {
        dispatch({ type: updateSelectedCategoryType, selectedCategory });
        dispatch(productListActionCreators.fetchProducts());
    },

    updateCurrentPage: (currentPage) => async (dispatch, getState) => {
        dispatch({ type: updateCurrentPageType, currentPage });
        dispatch(productListActionCreators.fetchProducts());
    }
};

export const reducer = (state, action) => {

    state = state || initialState;

    if (action.type === updateSelectedBrandType) {
        return {
            ...state,
            selectedBrand: action.selectedBrand,
        };
    }

    if (action.type === updateSelectedCategoryType) {
        return {
            ...state,
            selectedCategory: action.selectedCategory,
        };
    }

    if (action.type === updateCurrentPageType) {
        return {
            ...state,
            currentPage: action.currentPage,
        };
    }

    if (action.type === clearRequestParamType) {
        return {
            ...state,
            ...initialState
        };
    }

    return state;
};
