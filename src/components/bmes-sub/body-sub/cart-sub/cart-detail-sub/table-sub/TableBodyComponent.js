import React from 'react';
import PropTypes from 'prop-types';

function TableBodyComponent(props) {
    return (
        <tbody>
            { props.cartItems.map((item, index) =>
                <tr className="cart_detail__table-body-item-wrapper" key={index}>
                    <td className="text-center">
                        <img src={`/productimages/main/${item.product.imageUrl}`} className="cart_detail__image" alt={item.product.name} />
                    </td>
                    <td className="text-left cart_detail__table-body-item-name">{item.product.name}</td>
                    <td className="text-center cart_detail__table-body-item-price">${item.product.price}</td>
                    <td className="text-center cart_detail__table-body-item-quantity">{item.quantity}</td>
                    <td className="text-center cart_detail__table-body-item-total">${(item.quantity * item.product.price).toFixed(2)}</td>
                    <td className="text-center">
                        <button className="cart_detail__table-remove-button" type="button"
                            onClick={() => { props.handleRemoveCartItem(item.id) }}>X</button>
                    </td>
                </tr>
            )}
        </tbody>
    );
}

TableBodyComponent.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object),
    handleRemoveCartItem: PropTypes.func
};

export default TableBodyComponent;