import React from 'react';
import { Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import ProductCatalogComponent from './body-sub/ProductCatalogComponent';
import CartComponent from './body-sub/CartComponent';
import CheckoutComponent from './body-sub/CheckoutComponent';
import MessageComponent from './body-sub/MessageComponent';


function BodyComponent(props) {
    return (
        <Switch>
            <Route exact path="/" render={(routeProps) => <ProductCatalogComponent {...routeProps} />} />
            <Route exact path="/catalog/:category/:brand/:page?" render={(routeProps) => <ProductCatalogComponent  {...routeProps} />} />
            <Route exact path="/cart" render={(routeProps) => <CartComponent {...routeProps} cartItems={props.cartItems}
                itemsCount={props.itemsCount}
                cartTotal={props.cartTotal} />} />
            <Route exact path="/checkout" render={(routeProps) => <CheckoutComponent {...routeProps} cartItems={props.cartItems} />} />
            <Route exact path="/message/:name" render={(routeProps) => <MessageComponent {...routeProps} />} />
        </Switch>
    );
}

BodyComponent.propTypes = {

};

export default BodyComponent;