import React from 'react';

function TableHeaderComponent(props) {
    return (
        <thead className="cart_detail__table-head">
            <tr>
                <th className="cart_detail__table-head-item">Item</th>
                <th></th>
                <th className="text-center cart_detail__table-head-item">Price</th>
                <th className="text-center cart_detail__table-head-item">Quantity</th>
                <th className="text-center cart_detail__table-head-item">Total</th>
                <th></th>
            </tr>
        </thead>
    );
}

export default TableHeaderComponent;
