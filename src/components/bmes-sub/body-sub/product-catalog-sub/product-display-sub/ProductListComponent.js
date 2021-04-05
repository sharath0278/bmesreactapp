import React from 'react';
import PropTypes from 'prop-types';
import ProductListItemComponent from './product-list-sub/ProductListItemComponent';

function ProductListComponent(props) {
    return (
        <div className="row">
            {displayManager(props)}
        </div>
    );
}

function displayManager(props) {
    if (props.products && props.products.length > 0) {
        return displayProducts(props);
    } else {
        return showEmptyProductsNotice();
    }
}

function displayProducts(props) {
    return (
        props.products.map((product, index) =>
            <ProductListItemComponent key={index} product={product} handleAddToCart={props.handleAddToCart} />
        )
    )
}

function showEmptyProductsNotice() {
    return (
        <div className="product-list__empty-notifier">
            <p>There are no products that match your filters.</p>
            <p>Try a different combination or contact customer service for further assistance.</p>
        </div>
    )
}

ProductListComponent.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    handleAddToCart: PropTypes.func
};


export default ProductListComponent;
