import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutReceiptComponent(props) {
    return (
        <div className="container receipt">
            <p>Hello there,</p>
            <p>Your order has been submitted.</p>
            <p>You should get a notification once your items have been dispatched.</p>
            <p>Thank you for shopping with us.</p>
            <div className="receipt__button-wrapper">
                <Link to={"/"} className="receipt__button">Continue Shopping</Link>
            </div>
        </div>
    );
}

export default CheckoutReceiptComponent;