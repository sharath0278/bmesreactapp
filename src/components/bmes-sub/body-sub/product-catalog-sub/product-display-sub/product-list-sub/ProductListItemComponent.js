import React from 'react';
import PropTypes from 'prop-types';

function ProductListItemComponent(props) {
    return (
        <div className="product-list-item" style={{ width: "272px", height: "auto", marginLeft: "8px" }}>
            <div className="product-list-item__image-wrapper">
                <img src={`/productimages/main/${props.product ? props.product.imageUrl : ""}`} className="product-list-item__image" alt="" />
            </div>
            <div>
                <p className="product-list-item__product-name">{props.product ? props.product.name : ""}</p>
            </div>
            <div>
                <p className="product-list-item__product-price">${props.product ? props.product.price : ""}</p>
            </div>
            <div>
                <button className="product-list-item__button"
                    type="button" name="submit"
                    onClick={() => { props.handleAddToCart((props.product ? props.product.id : "")) }} >Add to Cart</button>
            </div>
        </div>
    );
}

ProductListItemComponent.propTypes = {
    product: PropTypes.object,
    handleAddToCart: PropTypes.func
};

export default ProductListItemComponent;