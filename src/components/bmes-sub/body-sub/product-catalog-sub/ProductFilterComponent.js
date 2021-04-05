import React from 'react';
import PropTypes from 'prop-types';
import CategoriesComponent from './product-filter-sub/CategoriesComponent';
import BrandsComponent from './product-filter-sub/BrandsComponent';

function ProductFilterComponent(props) {
    return (
        <React.Fragment>
            <h4 className="index__filter-title">Filter By</h4>
            <hr />
            <div>
                <CategoriesComponent categories={props.categories ? props.categories : []}
                    selectedBrand={props.selectedBrand}
                    selectedCategory={props.selectedCategory}
                    handleCategoryFilter={props.handleCategoryFilter} />
                <br />
            </div>
            <div>
                <BrandsComponent brands={props.brands ? props.brands : []}
                    selectedBrand={props.selectedBrand ? props.selectedBrand : ""}
                    selectedCategory={props.selectedCategory ? props.selectedCategory : ""}
                    handleBrandFilter={props.handleBrandFilter} />
            </div>
        </React.Fragment>
    );
}

ProductFilterComponent.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    brands: PropTypes.arrayOf(PropTypes.object),
    selectedBrand: PropTypes.string,
    selectedCategory: PropTypes.string,
};

export default ProductFilterComponent;