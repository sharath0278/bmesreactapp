import brandReducers from './brand/brandReducers';
import categoryReducers from './category/categoryReducers';
import productReducers from './product/productReducers';

const catalogReducers = {
    brandState: brandReducers(),
    categoryState: categoryReducers(),
    productState: productReducers(),
}

export default catalogReducers;