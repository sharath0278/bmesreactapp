import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CartSideSummaryComponent(props) {
    return (
        <div className="col-md-3 cart_detail__summary-panel pl-4">
            <div className="cart_detail__summary-panel-title-wrapper">
                <p className="cart_detail__summary-panel-title">Cart Summary</p>
            </div>
            <div className="cart_detail__summary-panel-total">
                <span className="cart_detail__summary-panel-total-title">Items({props.itemsCount})</span>
                <span>${props.cartTotal}</span>
            </div>
            <div className="cart_detail__summary-panel-ads">
                <p className="cart_detail__summary-panel-ads-lable">Free 3-Day Shipping!</p>
            </div>
            <div style={{ marginTop: "25px" }}>
                <Link to={props.cartItems.length ? "/checkout" : "#"} className="cart_detail__summary-panel-checkout-button">PROCEED TO CHECKOUT</Link>
            </div>
        </div>
    );
}

CartSideSummaryComponent.propTypes = {
    itemsCount: PropTypes.any,
    cartTotal: PropTypes.any,
    cartItems: PropTypes.arrayOf(PropTypes.object),
};

export default CartSideSummaryComponent;
