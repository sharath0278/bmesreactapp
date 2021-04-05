import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CategoriesComponent(props) {
    return (
        <div>
            <h5 className="category__heading">Categories</h5>
            {props.categories.map((category, index) =>
                <div key={index}>
                    <Link to={`/catalog/${category.slug}/${props.selectedBrand}`}
                        className={category.slug === props.selectedCategory ? "category__selected" : "category__not-selected"}
                        onClick={() => { props.handleCategoryFilter(category.slug) }} >
                        {category.name}
                    </Link>
                </div>
            )}
        </div >
    );
}


CategoriesComponent.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    selectedCategory: PropTypes.string,
    selectedBrand: PropTypes.string
};

export default CategoriesComponent;