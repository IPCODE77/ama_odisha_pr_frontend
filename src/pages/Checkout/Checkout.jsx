
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    User,
    Phone,
    Mail,
    ShoppingBag,
    ArrowLeft,
    ShieldCheck,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Checkout.css';
import checkoutBanner from '../../assets/images/checkout-banner.png';
import { FaTruckFast } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const { cartItems, cartTotal } = useCart();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        house: '',
        street: '',
        landmark: '',
        city: '',
        state: '',
        pinCode: '',
        notes: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [deliveryOption, setDeliveryOption] = useState('standard');

    const shippingCost = deliveryOption === 'express' ? 100 : 50;

    const checkoutTotal = cartTotal + shippingCost;

    const formatPrice = (price) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(price);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Please enter a valid name';
        }

        if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Enter a valid 10-digit mobile number';
        }

        if (
            formData.email.trim() &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
        ) {
            newErrors.email = 'Enter a valid email address';
        }

        if (!formData.house.trim()) {
            newErrors.house = 'House / flat details are required';
        }

        if (!formData.street.trim()) {
            newErrors.street = 'Street / area is required';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }

        if (!formData.state.trim()) {
            newErrors.state = 'State is required';
        }

        if (!/^\d{6}$/.test(formData.pinCode.trim())) {
            newErrors.pinCode = 'Enter a valid 6-digit PIN code';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            navigate('/order-confirmation', {
                state: {
                    formData,
                    cartItems,
                    cartTotal,
                    shippingCost,
                    checkoutTotal,
                    deliveryOption
                }
            });
        }
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            navigate('/order-confirmation', {
                state: {
                    formData,
                    cartItems,
                    cartTotal,
                    shippingCost,
                    checkoutTotal,
                    deliveryOption
                }
            });
        }
    };


    if (cartItems.length === 0) {
        return (
            <div className="checkout-page">
                <div className="checkout-empty">
                    <ShoppingBag size={45} />
                    <h2>Your cart is empty</h2>
                    <p>Add some delicious Odisha products before checking out.</p>
                    <Link to="/shop" className="checkout-back-shop">
                        Explore Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-banner">
                    <img src={checkoutBanner} alt="Checkout - Complete Your Order" />

                    {/* <div className="checkout-banner-content">
                        <span>AMA ODISHA</span>
                        <h1>Checkout</h1>
                        <p>Complete Your Order</p>
                    </div> */}
                </div>

                <div className="checkout-layout">
                    {/* CUSTOMER FORM */}
                    <div className="checkout-form-section">
                        <div className="checkout-form-card">
                            <div className="checkout-section-heading">
                                <div className="checkout-section-icon">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h2>Contact Information</h2>
                                    <p>How can we reach you?</p>
                                </div>
                            </div>


                            <form className="checkout-form" noValidate onSubmit={handleSubmit}>
                                {/* Full Name */}
                                <div className="checkout-field">
                                    <label>Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                    {errors.fullName && (
                                        <span className="checkout-error">{errors.fullName}</span>
                                    )}
                                </div>

                                {/* Mobile & Email */}
                                <div className="checkout-form-row">
                                    <div className="checkout-field">
                                        <label>Mobile Number *</label>
                                        <div className="checkout-input-icon">
                                            <Phone size={17} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="10-digit mobile number"
                                                maxLength="10"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <span className="checkout-error">{errors.phone}</span>
                                        )}
                                    </div>

                                    <div className="checkout-field">
                                        <label>Email Address</label>
                                        <div className="checkout-input-icon">
                                            <Mail size={17} />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {errors.email && (
                                            <span className="checkout-error">{errors.email}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Delivery Address Heading */}
                                <div className="checkout-section-heading checkout-address-heading">
                                    <div className="checkout-section-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h2>Delivery Address</h2>
                                        <p>Where should we deliver your order?</p>
                                    </div>
                                </div>

                                {/* House / Flat */}
                                <div className="checkout-field">
                                    <label>House / Flat / Apartment *</label>
                                    <input
                                        type="text"
                                        name="house"
                                        placeholder="House number, flat, apartment"
                                        value={formData.house}
                                        onChange={handleChange}
                                    />
                                    {errors.house && (
                                        <span className="checkout-error">{errors.house}</span>
                                    )}
                                </div>

                                {/* Street / Area */}
                                <div className="checkout-field">
                                    <label>Street / Area *</label>
                                    <input
                                        type="text"
                                        name="street"
                                        placeholder="Street, locality or area"
                                        value={formData.street}
                                        onChange={handleChange}
                                    />
                                    {errors.street && (
                                        <span className="checkout-error">{errors.street}</span>
                                    )}
                                </div>

                                {/* Landmark */}
                                <div className="checkout-field">
                                    <label>Landmark</label>
                                    <input
                                        type="text"
                                        name="landmark"
                                        placeholder="Nearby landmark (optional)"
                                        value={formData.landmark}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* City, State & PIN */}
                                <div className="checkout-form-row checkout-location-row">
                                    <div className="checkout-field">
                                        <label>City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                        {errors.city && (
                                            <span className="checkout-error">{errors.city}</span>
                                        )}
                                    </div>

                                    <div className="checkout-field">
                                        <label>State *</label>
                                        <input
                                            type="text"
                                            name="state"
                                            placeholder="State"
                                            value={formData.state}
                                            onChange={handleChange}
                                        />
                                        {errors.state && (
                                            <span className="checkout-error">{errors.state}</span>
                                        )}
                                    </div>

                                    <div className="checkout-field">
                                        <label>PIN Code *</label>
                                        <input
                                            type="text"
                                            name="pinCode"
                                            inputMode="numeric"
                                            maxLength="6"
                                            placeholder="6-digit PIN"
                                            value={formData.pinCode}
                                            onChange={handleChange}
                                        />
                                        {errors.pinCode && (
                                            <span className="checkout-error">{errors.pinCode}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Order Notes */}
                                <div className="checkout-field">
                                    <label>Order Notes</label>
                                    <textarea
                                        name="notes"
                                        rows="3"
                                        placeholder="Any special delivery instructions? (optional)"
                                        value={formData.notes}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Back to Cart */}
                                <div className="checkout-form-bottom">
                                    <Link to="/cart" className="checkout-back-cart">
                                        <ArrowLeft size={17} />
                                        Back to Cart
                                    </Link>
                                </div>
                            </form>

                        </div>
                        <div className="delivery-options-section">
                            <h3><FaTruckFast /> Delivery Options</h3>
                            <p className="delivery-subtitle">Choose how you'd like your order delivered.</p>

                            <div
                                className={`delivery-option ${deliveryOption === 'standard' ? 'selected' : ''}`}
                                onClick={() => setDeliveryOption('standard')}
                            >
                                <div className="delivery-option-left">
                                    <input
                                        type="radio"
                                        name="deliveryOption"
                                        checked={deliveryOption === 'standard'}
                                        onChange={() => setDeliveryOption('standard')}
                                    />
                                    <div>
                                        <h4>Standard Delivery</h4>
                                        <p>Delivery within 3–7 business days</p>
                                    </div>
                                </div>
                                <span className="delivery-price">₹50</span>
                            </div>

                            <div
                                className={`delivery-option ${deliveryOption === 'express' ? 'selected' : ''}`}
                                onClick={() => setDeliveryOption('express')}
                            >
                                <div className="delivery-option-left">
                                    <input
                                        type="radio"
                                        name="deliveryOption"
                                        checked={deliveryOption === 'express'}
                                        onChange={() => setDeliveryOption('express')}
                                    />
                                    <div>
                                        <h4>Express Delivery</h4>
                                        <p>Delivery within 1–3 business days</p>
                                    </div>
                                </div>
                                <span className="delivery-price">₹100</span>
                            </div>
                        </div>
                    </div>



                    {/* ORDER SUMMARY */}
                    <aside className="checkout-summary">
                        <div className="checkout-summary-card">
                            <h2>Your Order</h2>

                            <div className="checkout-summary-items">
                                {cartItems.map((item) => (
                                    <div
                                        className="checkout-summary-item"
                                        key={item.cartItemId}
                                    >
                                        <div className="checkout-summary-image">
                                            <img src={item.image} alt={item.name} />
                                            <span>{item.quantity}</span>
                                        </div>

                                        <div className="checkout-summary-item-info">
                                            <h3>{item.name}</h3>
                                            <p>{item.weight}</p>
                                        </div>

                                        <strong>
                                            {formatPrice(item.price * item.quantity)}
                                        </strong>
                                    </div>
                                ))}
                            </div>

                            <div className="checkout-summary-calculations">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal.toFixed(2)}</span>
                                </div>

                                <div className="summary-row">
                                    <span>
                                        Delivery ({deliveryOption === 'express' ? 'Express' : 'Standard'})
                                    </span>
                                    <span>₹{shippingCost.toFixed(2)}</span>
                                </div>

                                <div className="summary-total">
                                    <span>Total</span>
                                    <span>₹{checkoutTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="checkout-secure-note">
                                <ShieldCheck size={18} />
                                <span>Your information is kept secure.</span>
                            </div>

                            <button
                                type="button"
                                className="checkout-place-order-btn"
                                onClick={handlePlaceOrder}
                            >
                                Place Order
                            </button>

                            <p className="checkout-terms">
                                By placing your order, you agree to our Terms & Conditions
                                and Privacy Policy.
                            </p>
                        </div>
                    </aside>


                </div>
            </div>
        </div>
    );
}

export default Checkout;
