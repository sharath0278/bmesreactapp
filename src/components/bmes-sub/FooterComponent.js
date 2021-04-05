import React from 'react';
import PropTypes from 'prop-types';

function FooterComponent(props) {
    return (
        <div className="container">
            <hr />
            <footer>
                <p className="layout__copyright">&copy; 2019 - Building Material E-Store</p>
            </footer>
        </div>
    );
}

FooterComponent.propTypes = {

};

export default FooterComponent;
