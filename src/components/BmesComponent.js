import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { brandListActionCreators } from '../store/catalog/brand/BrandList';
import { categoryListActionCreators } from '../store/catalog/category/CategoryList';
import { productListActionCreators } from '../store/catalog/product/ProductList';
import { cartActionCreators } from '../store/cart/CartData';
import HeaderComponent from './bmes-sub/HeaderComponent';
import BodyComponent from './bmes-sub/BodyComponent';
import FooterComponent from './bmes-sub/FooterComponent';

class BmesComponent extends Component {

    componentDidMount() {
        this.props.fetchBrands();
        this.props.fetchCategories();
        this.props.fetchProducts();
        this.props.fetchCart();
    }


    render() {
        let itemsCount = calculateItemsCount(this.props.cartItems);
        let cartTotal = calculateCartTotal(this.props.cartItems);
        return (
            <div>
                <HeaderComponent itemsCount={itemsCount} cartTotal={cartTotal} />
                <BodyComponent cartItems={this.props.cartItems} itemsCount={itemsCount} cartTotal={cartTotal} />
                <FooterComponent />
            </div>
        );
    }
}

function calculateItemsCount(cartItems) {
    let itemsCount = 0;
    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            itemsCount += item.quantity;
        });
    }
    return itemsCount;
}

function calculateCartTotal(cartItems) {
    let cartTotal = 0;
    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            cartTotal += (item.product.price * item.quantity);
        });
    }
    return cartTotal.toFixed(2);
}


function mapStateToProps(state) {
    console.log(state)
    return {
        cartItems: state.cartState.cartData.cart.cartItems
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchBrands: brandListActionCreators.fetchBrands,
        fetchCategories: categoryListActionCreators.fetchCategories,
        fetchProducts: productListActionCreators.fetchProducts,
        fetchCart: cartActionCreators.fetchCart
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BmesComponent);
