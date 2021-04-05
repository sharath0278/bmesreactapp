import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCartActionCreators } from '../../../../store/cart/AddToCart';
import { productRequestParamActionCreators } from '../../../../store/catalog/product/ProductRequestParam';
import { bindActionCreators } from 'redux';
import ProductListComponent from './product-display-sub/ProductListComponent';
import PaginationComponent from './product-display-sub/PaginationComponent';

class ProductDisplayComponent extends Component {
    constructor(props) {
        super(props)
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handlePageButtonClick = this.handlePageButtonClick.bind(this);
    }

    handlePageButtonClick(page) {
        this.props.updateCurrentPage(page)
    }

    handleAddToCart(productId) {
        let cart = this.props.cart;
        if (Object.keys(cart).length > 0) {
            this.props.addToCart(productId, cart.id)
        } else {
            this.props.addToCart(productId)
        }
    }

    render() {
        const { pages = [], currentPage = 1, hasNextPages = false, hasPreviousPages = false } = this.props.productData;
        return (
            <div className="container">
                <div className="row">
                    <PaginationComponent pages={pages}
                        currentPage={currentPage}
                        hasNextPages={hasNextPages}
                        hasPreviousPages={hasPreviousPages}
                        handlePageButtonClick={this.handlePageButtonClick} />
                </div>
                <hr className="product-list__upper-horizontal-line" />
                <div className="row">
                    <ProductListComponent products={this.props.productData.products} handleAddToCart={this.handleAddToCart} />
                </div>
                <hr className="product-list__lower-horizontal-line" />
                <div className="row">
                    <PaginationComponent pages={pages}
                        currentPage={currentPage}
                        hasNextPages={hasNextPages}
                        hasPreviousPages={hasPreviousPages}
                        handlePageButtonClick={this.handlePageButtonClick} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartState.cartData.cart,
    };
}

function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            addToCart: addToCartActionCreators.addToCart,
            updateCurrentPage: productRequestParamActionCreators.updateCurrentPage,
        }, dispatch)
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDisplayComponent);