import React from 'react';
import PropTypes from 'prop-types';
import CartSummaryComponent from './header-sub/CartSummaryComponent';

function HeaderComponent(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light layout__nav-wrapper">
            <div className="container">
                <div className="layout__nav-brand-wrapper">
                    <a href="/" className="layout__nav-brand">Building Materials E-Store</a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <CartSummaryComponent itemsCount={props.itemsCount} cartTotal={props.cartTotal} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

HeaderComponent.propTypes = {

};

export default HeaderComponent;