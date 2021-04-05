import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CartSummaryComponent(props) {
    return (
        <div className="pt-3">
            {displayCartSummary(props)}
            <Link to="/cart">
                <FaShoppingCart className="cart_summary_widget__cart-icon" />
            </Link>
        </div>
    );
}

function displayCartSummary(props) {
    if (props.itemsCount > 0) {
        return (
            <small className="cart_summary_widget__wrapper">
                <b>My Cart:</b>
                <span className="cart_summary_widget__item-count">{props.itemsCount} item(s) </span>
                <span className="cart_summary_widget__cart-total"> ${props.cartTotal}</span>
            </small>
        );
    }
}

CartSummaryComponent.propTypes = {
    itemsCount: PropTypes.any,
    cartTotal: PropTypes.any
};

export default CartSummaryComponent;