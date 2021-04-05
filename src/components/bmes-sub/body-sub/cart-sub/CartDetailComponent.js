import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItemFromCartActionCreators } from '../../../../store/cart/RemoveFromCart';
import { Link } from 'react-router-dom';
import CartSideSummaryComponent from './cart-detail-sub/CartSideSummaryComponent';
import TableComponent from './cart-detail-sub/TableComponent';

class CartDetailComponent extends Component {
    constructor(props) {
        super(props)
        this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
    }

    handleRemoveCartItem(itemId) {
        let cartItem = this.props.cartItems[0]
        if (cartItem !== undefined) {
            let cartId = cartItem.cartId
            this.props.removeItemFromCart(cartId, itemId)
        }
    }

    render() {
        const { cartItems = [] } = this.props;
        return (
            <div className="container cart_detail">
                <div className="row no-gutters display-flex cart_detail__row">
                    <div className="col-md-9 cart_detail__cart-panel pl-3 pr-3">
                        <div className="cart_detail__cart-panel-header">
                            <div className="cart_detail__cart-panel-title ">
                                <p>Your Cart</p>
                            </div>
                            <div>
                                <Link to={"/"} className="cart_detail__continue-shopping-button">Continue Shopping</Link>
                            </div>
                        </div>
                        <div>
                            <table className="table table-bordered table-striped">
                                <TableComponent cartItems={cartItems} handleRemoveCartItem={this.handleRemoveCartItem} />
                            </table>
                        </div>
                    </div>
                    <CartSideSummaryComponent cartItems={cartItems} itemsCount={this.props.itemsCount} cartTotal={this.props.cartTotal} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeItemFromCart: removeItemFromCartActionCreators.removeItemFromCart
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDetailComponent);