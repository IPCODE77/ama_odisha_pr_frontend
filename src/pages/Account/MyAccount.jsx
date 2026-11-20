
import React, { useState } from 'react';
import {
    FaUser,
    FaShoppingBag,
    FaMapMarkerAlt,
    FaLock,
    FaSignOutAlt,
    FaEdit
} from 'react-icons/fa';
import './MyAccount.css';


// Demo Import for showing data please remove after dynamic data implementation
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';
import mudhi from '../../assets/images/products/mudhi.png';
import mixture from '../../assets/images/products/mixture.png';
import khaja from '../../assets/images/products/khaja.png';
import badi from '../../assets/images/products/badi.png';
const demoWishlist = [
    {
        id: 1,
        name: 'Traditional Odisha Mudhi',
        price: 120,
        image: mudhi
    },
    {
        id: 2,
        name: 'Special Odisha Mixture',
        price: 180,
        image: mixture
    },
    {
        id: 3,
        name: 'Authentic Odisha Khaja',
        price: 200,
        image: khaja
    },
    {
        id: 4,
        name: 'Homemade Badi',
        price: 150,
        image: badi
    }
];
const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [wishlistItems, setWishlistItems] = useState(demoWishlist);

    const menuItems = [
        { id: 'profile', label: 'My Profile', icon: <FaUser /> },
        { id: 'orders', label: 'My Orders', icon: <FaShoppingBag /> },
        {
            id: 'wishlist',
            label: 'My Wishlist',
            icon: <FaHeart />
        },
        { id: 'addresses', label: 'My Addresses', icon: <FaMapMarkerAlt /> },
        { id: 'password', label: 'Change Password', icon: <FaLock /> }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div className="account-content-card">
                        <div className="account-content-heading">
                            <div>
                                <h2>My Profile</h2>
                                <p>Manage your personal information.</p>
                            </div>
                            <button className="account-edit-btn">
                                <FaEdit /> Edit Profile
                            </button>
                        </div>

                        <div className="account-profile-info">
                            <div className="account-info-item">
                                <label>Full Name</label>
                                <p>Itish Kumar</p>
                            </div>

                            <div className="account-info-item">
                                <label>Email Address</label>
                                <p>itish@example.com</p>
                            </div>

                            <div className="account-info-item">
                                <label>Mobile Number</label>
                                <p>+91 XXXXX XXXXX</p>
                            </div>

                            <div className="account-info-item">
                                <label>Account Status</label>
                                <span className="account-status">Active</span>
                            </div>
                        </div>
                    </div>
                );

            case 'orders':
                return (
                    <div className="account-content-card">
                        <div className="account-content-heading">
                            <div>
                                <h2>My Orders</h2>
                                <p>Track and manage your purchases.</p>
                            </div>
                        </div>

                        <div className="account-empty-state">
                            <FaShoppingBag />
                            <h3>No Orders Yet</h3>
                            <p>Your AMA ODISHA shopping journey starts here.</p>
                        </div>
                    </div>
                );

            case 'wishlist':
                return (
                    <div className="account-wishlist">
                        <div className="account-wishlist-heading">
                            <h2>My Wishlist</h2>
                            <p>{wishlistItems.length} items saved for later</p>
                        </div>

                        {wishlistItems.length > 0 ? (
                            <div className="account-wishlist-grid">
                                {wishlistItems.map((product) => (
                                    <div className="account-wishlist-card" key={product.id}>
                                        <div className="account-wishlist-image">
                                            <img src={product.image} alt={product.name} />

                                            <button
                                                onClick={() =>
                                                    setWishlistItems((prev) =>
                                                        prev.filter((item) => item.id !== product.id)
                                                    )
                                                }
                                                className="account-wishlist-heart"
                                            >
                                                <FaHeart />
                                            </button>
                                        </div>

                                        <div className="account-wishlist-details">
                                            <h3>{product.name}</h3>
                                            <strong>₹{product.price}</strong>

                                            <button
                                                className="account-wishlist-cart"
                                                onClick={() =>
                                                    alert(`${product.name} will be added to cart.`)
                                                }
                                            >
                                                <FaShoppingCart /> Add to Cart
                                            </button>

                                            <button
                                                className="account-wishlist-remove"
                                                onClick={() =>
                                                    setWishlistItems((prev) =>
                                                        prev.filter((item) => item.id !== product.id)
                                                    )
                                                }
                                            >
                                                <FaTrash /> Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="account-wishlist-empty">
                                <FaHeart />
                                <h3>Your wishlist is empty</h3>
                                <p>Save your favourite Odisha products here.</p>
                            </div>
                        )}
                    </div>
                )

            case 'addresses':
                return (
                    <div className="account-content-card">
                        <div className="account-content-heading">
                            <div>
                                <h2>My Addresses</h2>
                                <p>Manage your delivery addresses.</p>
                            </div>
                            <button className="account-edit-btn">
                                + Add Address
                            </button>
                        </div>

                        <div className="account-empty-state">
                            <FaMapMarkerAlt />
                            <h3>No Saved Addresses</h3>
                            <p>Add an address for faster checkout.</p>
                        </div>
                    </div>
                );

            case 'password':
                return (
                    <div className="account-content-card">
                        <div className="account-content-heading">
                            <div>
                                <h2>Change Password</h2>
                                <p>Keep your account secure.</p>
                            </div>
                        </div>

                        <div className="account-empty-state">
                            <FaLock />
                            <h3>Password Settings</h3>
                            <p>Password updates will be connected with backend authentication.</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="my-account-page">

            <div className="account-page-header">
                <h1>My Account</h1>
                <p>Welcome to your AMA ODISHA account.</p>
            </div>

            <div className="account-dashboard">

                {/* SIDEBAR */}

                <aside className="account-sidebar">

                    <div className="account-user-card">
                        <div className="account-avatar">
                            <FaUser />
                        </div>

                        <h3>Welcome, Itish!</h3>
                        <p>AMA ODISHA Member</p>
                    </div>

                    <nav className="account-navigation">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                className={`account-nav-item ${activeTab === item.id ? 'active' : ''
                                    }`}
                                onClick={() => setActiveTab(item.id)}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </button>
                        ))}

                        <button
                            className="account-nav-item account-logout"
                            onClick={() => alert('Logout will be connected later.')}
                        >
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </button>
                    </nav>

                </aside>

                {/* MAIN CONTENT */}

                <main className="account-main-content">
                    {renderContent()}
                </main>

            </div>
        </div>
    );
};

export default MyAccount;
