import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkoutActionCreators } from '../../../store/checkout/Checkout';
import { cartActionCreators } from '../../../store/cart/CartData';
import { Link } from 'react-router-dom';

class CheckoutComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            middleName: "",
            lastName: "",
            emailAddress: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            country: "",
            state: "",
            zipCode: "",
            displayFieldError: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        switch (target.id) {
            case "firstName":
                this.setState({ firstName: target.value });
                break;
            case "middleName":
                this.setState({ middleName: target.value });
                break;
            case "lastName":
                this.setState({ lastName: target.value });
                break;
            case "emailAddress":
                this.setState({ emailAddress: target.value });
                break;
            case "addressLine1":
                this.setState({ addressLine1: target.value });
                break;
            case "addressLine2":
                this.setState({ addressLine2: target.value });
                break;
            case "city":
                this.setState({ city: target.value });
                break;
            case "country":
                this.setState({ country: target.value });
                break;
            case "state":
                this.setState({ state: target.value });
                break;
            case "zipCode":
                this.setState({ zipCode: target.value });
                break;
            default:
                return;
        }
    }

    isFormValid() {
        return (
            this.state.firstName !== "" &&
            this.state.lastName !== "" &&
            this.state.emailAddress !== "" &&
            this.state.addressLine1 !== "" &&
            this.state.city !== "" &&
            this.state.country !== "" &&
            this.state.state !== "" &&
            this.state.zipCode !== ""
        );
    }

    handleSubmit() {
        if (this.isFormValid()) {
            let cartId = this.props.cartItems[0] ? this.props.cartItems[0].id : 0
            let detail = {
                customer: {
                    firstName: this.state.firstName,
                    middleName: this.state.middleName,
                    lastName: this.state.lastName,
                    emailAddress: this.state.emailAddress,
                },
                address: {
                    addressLine1: this.state.addressLine1,
                    addressLine2: this.state.addressLine2,
                    city: this.state.city,
                    country: this.state.country,
                    state: this.state.state,
                    zipCode: this.state.zipCode,
                },
                cart: { id: cartId }
            }
            this.props.checkout(detail);
            this.props.clearCart();
            this.props.history.push(`/message/${"checkout-receipt"}`);
        } else {
            this.setState({ displayFieldError: true });
        }
    }

    render() {
        return (
            <div className="container checkout">
                <div className="card checkout__panel">
                    <div className="card-header checkout__header">
                        <h1 className="card-title checkout__panel-title">
                            <span>Submit Your Order</span>
                        </h1>
                    </div>
                    <form style={{ paddingBottom: "0px" }}>
                        <div className="card-body checkout__panel-body">
                            <div className="form-group">
                                <label className="checkout__input-label">First Name</label>
                                <input id="firstName" className="form-control checkout__subject-input" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label">Middle Name</label>
                                <input id="middleName" className="form-control checkout__subject-input" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label" >Last Name</label>
                                <input id="lastName" className="form-control checkout__subject-input" onChange={(event) => { this.handleChange(event) }} required />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label" asp-for="EmailAddress">Email Address</label>
                                <input id="emailAddress" className="form-control checkout__subject-input" onChange={(event) => { this.handleChange(event) }} required />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label" asp-for="AddressLine1">Address Line 1</label>
                                <input id="addressLine1" className="form-control checkout__subject-input" onChange={(event) => { this.handleChange(event) }} required />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label" asp-for="AddressLine2">Address Line 2</label>
                                <input id="addressLine2" className="form-control checkout__subject-input" onChange={(event) => { this.handleChange(event) }} required />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label" asp-for="City">City</label>
                                <input id="city" className="form-control checkout__subject-input" onChange={(event) => { this.handleChange(event) }} required />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label" asp-for="Country">Country</label>
                                <input id="country" className="form-control checkout__subject-input" onChange={(event) => { this.handleChange(event) }} required />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label" asp-for="State">State</label>
                                <input id="state" className="form-control checkout__subject-input" onChange={(event) => { this.handleChange(event) }} required />
                            </div>
                            <div className="form-group">
                                <label className="checkout__input-label" asp-for="ZipCode">Zip Code</label>
                                <input id="zipCode" className="form-control checkout__subject-input" onChange={(event) => { this.handleChange(event) }} required />
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="checkout__flex-container">
                                <Link to={"/cart"} className="btn btn-sm checkout__button">Cancel</Link>
                                <button className="btn btn-sm checkout__button" type="button" onClick={this.handleSubmit}>Submit Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        checkout: checkoutActionCreators.checkout,
        clearCart: cartActionCreators.clearCart
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutComponent);
