import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BrandsComponent(props) {
    return (
        <div>
            <h5 className="brand__heading">Brands</h5>
            {props.brands.map((brand, index) =>
                <div key={index}>
                    <Link to={`/catalog/${props.selectedCategory}/${brand.slug}`}
                        className={brand.slug === props.selectedBrand ? "brand__selected" : "brand__not-selected"}
                        onClick={() => { props.handleBrandFilter(brand.slug) }}>
                        {brand.name}
                    </Link>
                </div>
            )}
        </div>
    );
}

BrandsComponent.propTypes = {
    brands: PropTypes.arrayOf(PropTypes.object),
    selectedCategory: PropTypes.string,
    selectedBrand: PropTypes.string
};

export default BrandsComponent;
