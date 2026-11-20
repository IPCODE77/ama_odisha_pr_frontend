import './OrderConfirmation.css';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        formData,
        cartItems,
        cartTotal,
        shippingCost,
        checkoutTotal,
        deliveryOption
    } = location.state || {};
    return (
    <div className="order-confirmation-page">
        <div className="order-success-card">
            <div className="success-icon">✓</div>

            <h1>Order Placed Successfully!</h1>

            <p className="success-subtitle">
                Thank you for shopping with AMA Odisha.
            </p>

            <div className="order-id-box">
                Order ID: <strong>#AO202611001234</strong>
            </div>

            <p className="confirmation-email">
                A confirmation email has been sent to
                <strong> {formData?.email || 'your email address'}</strong>
            </p>

            <div className="confirmation-buttons">
                <button
                    className="track-order-btn"
                    onClick={() => alert('Order tracking will be available soon!')}
                >
                    Track Order
                </button>

                <button
                    className="continue-shopping-btn"
                    onClick={() => navigate('/shop')}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    </div>
);
};

export default OrderConfirmation;