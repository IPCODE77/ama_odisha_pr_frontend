
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaEnvelope,
    FaArrowLeft,
    FaLock
} from 'react-icons/fa';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Reset password email:', email);

        alert('Password reset functionality will be connected with the backend soon!');
    };

    return (
        <div className="forgot-password-page">

            <div className="forgot-password-glass-card">

                <div className="forgot-password-icon">
                    <FaLock />
                </div>

                <div className="forgot-password-heading">
                    <span>ACCOUNT RECOVERY</span>

                    <h1>Forgot Password?</h1>

                    <p>
                        Don't worry! Enter your registered email address
                        and we'll help you reset your password.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="forgot-password-input-group">
                        <label>Email Address</label>

                        <div className="forgot-password-input-wrapper">
                            <FaEnvelope />

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="forgot-password-submit-btn"
                    >
                        Send Reset Link
                        <span>→</span>
                    </button>

                </form>

                <div className="forgot-password-back-link">
                    <Link to="/login">
                        <FaArrowLeft />
                        Back to Login
                    </Link>
                </div>

                <div className="forgot-password-brand-footer">
                    GHARA RA SWADA, EBE SARA BHARATARE
                </div>

            </div>

        </div>
    );
};

export default ForgotPassword;
