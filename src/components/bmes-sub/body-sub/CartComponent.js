import React from 'react';
import PropTypes from 'prop-types';
import CartDetailComponent from './cart-sub/CartDetailComponent';

function CartComponent(props) {
    return (
        <CartDetailComponent cartItems={props.cartItems}
            itemsCount={props.itemsCount}
            cartTotal={props.cartTotal} />
    );
}

CartComponent.propTypes = {

};

export default CartComponent;
