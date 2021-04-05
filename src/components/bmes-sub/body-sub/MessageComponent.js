import React from 'react';
import CheckoutReceiptComponent from '../body-sub/message-sub/CheckoutReceiptComponent';
import PropTypes from 'prop-types';

function MessageComponent(props) {
    return (
        <React.Fragment>
            {messageManager(props.match.params.name)}
        </React.Fragment>
    );
}

function messageManager(messageType) {
    switch (messageType) {
        case "checkout-receipt":
            return <CheckoutReceiptComponent />;
        default:
            return;
    }
}

MessageComponent.propTypes = {
    match: PropTypes.object
};

export default MessageComponent;
