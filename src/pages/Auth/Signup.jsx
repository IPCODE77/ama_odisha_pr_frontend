
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaLock,
    FaEye,
    FaEyeSlash
} from 'react-icons/fa';
import './Signup.css';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log(formData);
        alert('Signup UI is ready! Backend registration will be connected later.');
    };

    return (
        <div className="signup-page">

            <div className="signup-glass-card">

                <div className="signup-heading">
                    <span>JOIN OUR FAMILY</span>
                    <h1>Create Account</h1>
                    {/* <p>Discover the authentic taste of Odisha.</p> */}
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="signup-input-group">
                        <label>Full Name</label>
                        <div className="signup-input-wrapper">
                            <FaUser />
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="signup-input-group">
                        <label>Email Address</label>
                        <div className="signup-input-wrapper">
                            <FaEnvelope />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="signup-input-group">
                        <label>Mobile Number</label>
                        <div className="signup-input-wrapper">
                            <FaPhone />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="signup-input-group">
                        <label>Password</label>
                        <div className="signup-input-wrapper">
                            <FaLock />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                minLength={8}
                                required
                            />
                            <button
                                type="button"
                                className="signup-password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="signup-input-group">
                        <label>Confirm Password</label>
                        <div className="signup-input-wrapper">
                            <FaLock />
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                minLength={8}
                                required
                            />
                            <button
                                type="button"
                                className="signup-password-toggle"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="signup-submit-btn">
                        Create Account
                        <span>→</span>
                    </button>

                </form>

                <div className="signup-login-link">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </div>

                <div className="signup-brand-footer">
                    GHARA RA SWADA, EBE SARA BHARATARE
                </div>

            </div>

        </div>
    );
};

export default Signup;
