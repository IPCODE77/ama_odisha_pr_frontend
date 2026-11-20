
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash
} from 'react-icons/fa';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Login UI is ready! Backend authentication will be connected later.');
    };

    return (
        <div className="login-page">

            <div className="login-glass-card">

                <div className="login-heading">
                    <h1>Login</h1>
                    <span>Welcome to the AMA ODISHA family</span>
                    {/* <p>Welcome to the AMA ODISHA family</p> */}
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="login-input-group">
                        <label>Email Address</label>

                        <div className="login-input-wrapper">
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

                    <div className="login-input-group">
                        <label>Password</label>

                        <div className="login-input-wrapper">
                            <FaLock />

                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="button"
                                className="login-password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="login-extra-options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link to="/forgot-password">
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="login-submit-btn">
                        Login
                    </button>

                </form>

                <div className="login-signup-link">
                    Don't have an account?
                    <Link to="/signup"> Create Account</Link>
                </div>

                <div className="login-brand-footer">
                    GHARA RA SWADA, EBE SARA BHARATARE
                </div>

            </div>

        </div>
    );
};

export default Login;
