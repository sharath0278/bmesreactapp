import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productRequestParamActionCreators } from '../../../store/catalog/product/ProductRequestParam';
import ProductFilterComponent from './product-catalog-sub/ProductFilterComponent';
import ProductDisplayComponent from './product-catalog-sub/ProductDisplayComponent';


class ProductCatalogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.handleBrandFilter = this.handleBrandFilter.bind(this);
        this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
    }

    handleBrandFilter(brand) {
        this.props.updateSelectedBrand(brand)
    }

    handleCategoryFilter(category) {
        this.props.updateSelectedCategory(category)
    }


    render() {
        return (
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row">
                    <div className="col-md-3 index__filter-wrapper">
                        <ProductFilterComponent brands={this.props.brands}
                            categories={this.props.categories}
                            handleBrandFilter={this.handleBrandFilter}
                            handleCategoryFilter={this.handleCategoryFilter}
                            selectedBrand={this.props.requestParameters.selectedBrand}
                            selectedCategory={this.props.requestParameters.selectedCategory} />
                    </div>
                    <div className={"col-md-9 " + (this.props.productData.products ? " index__product-wrapper--has-pages" : "index__product-wrapper--no-pages")}
                        style={{ paddingTop: "40px" }}>
                        <ProductDisplayComponent productData={this.props.productData} />
                    </div>
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        brands: state.brandState.brandList.brandData.brands,
        categories: state.categoryState.categoryList.categoryData.categories,
        productData: state.productState.productList.productData,
        requestParameters: state.productState.requestParameters
    };
}

function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            updateSelectedBrand: productRequestParamActionCreators.updateSelectedBrand,
            updateSelectedCategory: productRequestParamActionCreators.updateSelectedCategory,
        }, dispatch)
    )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCatalogComponent);
