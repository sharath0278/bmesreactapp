import React from 'react';
import PropTypes from 'prop-types';
import TableHeaderComponent from './table-sub/TableHeaderComponent';
import TableBodyComponent from './table-sub/TableBodyComponent';

function TableComponent(props) {
    return (
        <React.Fragment>
            <TableHeaderComponent />
            <TableBodyComponent cartItems={props.cartItems} handleRemoveCartItem={props.handleRemoveCartItem} />
        </React.Fragment>
    );
}

TableComponent.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object),
    handleRemoveCartItem: PropTypes.func
};
export default TableComponent;
