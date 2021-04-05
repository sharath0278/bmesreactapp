import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PaginationComponent(props) {
    return (
        <div className="custom-pagination ml-auto">
            <ul className="pagination">
                {managePreviousOption(props)}
                {displayPageLinks(props)}
                {manageNextOption(props)}
            </ul>
        </div>
    );
}

function displayPageLinks(props) {
    return (props.pages.map((page, index) => {
        if (page > 0) {
            if (props.currentPage && props.currentPage === page) {
                return <li className="active" key={index}><span className="page-link">{page}<span className="sr-only">(current)</span></span></li>
            }
            else {
                return (
                    <li className="page-item" key={index}>
                        <Link to={`?${("page" + page)}`} onClick={() => { props.handlePageButtonClick(page) }} className="page-link">{page}</Link>
                    </li>
                )
            }
        }
        else {
            return <li className="page-item disabled" key={index}><a className="page-link" href="#">&hellip;</a></li>
        }
    }
    ))
}

function manageNextOption(props) {
    if (props.hasNextPages) {
        let nextPage = (props.currentPage + 1)
        return (
            <li className="page-item">
                <Link to={`?${("page" + nextPage)}`}
                    onClick={() => { props.handlePageButtonClick(nextPage) }}
                    className="page-link">&raquo;</Link>
            </li>
        )
    } else {
        return (
            <li className="page-item disabled">
                <Link to={"#"} className="page-link">&raquo;</Link>
            </li>
        )
    }
}

function managePreviousOption(props) {
    if (props.hasPreviousPages) {
        let previousPage = (props.currentPage - 1)
        return (
            <li className="page-item">
                <Link to={`?${("page" + previousPage)}`}
                    onClick={() => { props.handlePageButtonClick(previousPage) }}
                    className="page-link">&laquo;</Link>
            </li>
        )
    } else {
        return (<li className="page-item disabled">
            <Link to={"#"} className="page-link">&laquo;</Link>
        </li>
        )
    }
}

PaginationComponent.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.number),
    currentPage: PropTypes.number,
    hasNextPages: PropTypes.bool,
    hasPreviousPages: PropTypes.bool,
};

export default PaginationComponent;