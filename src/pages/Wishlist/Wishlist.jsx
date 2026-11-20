
import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaTrash, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Wishlist.css';

import mudhi from '../../assets/images/products/mudhi.png';
import mixture from '../../assets/images/products/mixture.png';
import khaja from '../../assets/images/products/khaja.png';
import badi from '../../assets/images/products/badi.png';
import { useCart } from '../../context/CartContext';

const demoWishlist = [
    {
        id: 1,
        name: 'Traditional Odisha Mudhi',
        price: 120,
        oldPrice: 150,
        image: mudhi,
        category: 'Traditional Snacks'
    },
    {
        id: 2,
        name: 'Special Odisha Mixture',
        price: 180,
        oldPrice: 220,
        image: mixture,
        category: 'Namkeen'
    },
    {
        id: 3,
        name: 'Authentic Odisha Khaja',
        price: 200,
        oldPrice: 250,
        image: khaja,
        category: 'Traditional Sweets'
    },
    {
        id: 4,
        name: 'Homemade Badi',
        price: 150,
        oldPrice: 180,
        image: badi,
        category: 'Traditional Food'
    }
];

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState(demoWishlist);
    const { addToCart } = useCart();

    const removeFromWishlist = (id) => {
        setWishlistItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };



    const handleAddToCart = (product) => {
        addToCart(product, 1, '200g');
        alert(`${product.name} added to cart successfully!`);
    };

    return (
        <div className="wishlist-page">

            {/* Wishlist Banner */}
            <section className="wishlist-banner">
            </section>

            {/* Wishlist Content */}
            <section className="wishlist-container">

                <div className="wishlist-heading">
                    <div>
                        <span className="wishlist-small-title">SAVED WITH LOVE</span>
                        <h2>Your Favourite Picks</h2>
                        <p>
                            You have {wishlistItems.length} items in your wishlist.
                        </p>
                    </div>

                    {wishlistItems.length > 0 && (
                        <button
                            className="wishlist-clear-btn"
                            onClick={() => setWishlistItems([])}
                        >
                            <FaTrash /> Clear Wishlist
                        </button>
                    )}
                </div>

                {wishlistItems.length > 0 ? (
                    <div className="wishlist-grid">
                        {wishlistItems.map((product) => (
                            <div className="wishlist-card" key={product.id}>

                                <div className="wishlist-image">
                                    <img src={product.image} alt={product.name} />

                                    <button
                                        className="wishlist-heart"
                                        onClick={() => removeFromWishlist(product.id)}
                                        title="Remove from wishlist"
                                    >
                                        <FaHeart />
                                    </button>

                                    <span className="wishlist-category">
                                        {product.category}
                                    </span>
                                </div>

                                <div className="wishlist-card-content">
                                    <h3>{product.name}</h3>

                                    <div className="wishlist-price">
                                        <strong>₹{product.price}</strong>
                                        <del>₹{product.oldPrice}</del>
                                    </div>

                                    <button
                                        className="wishlist-cart-btn"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        <FaShoppingCart />
                                        Add to Cart
                                    </button>

                                    <button
                                        className="wishlist-remove-btn"
                                        onClick={() => removeFromWishlist(product.id)}
                                    >
                                        <FaTrash /> Remove
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="wishlist-empty">
                        <FaHeart className="empty-heart" />
                        <h2>Your Wishlist is Empty!</h2>
                        <p>
                            Looks like you haven't saved any delicious Odisha
                            favourites yet.
                        </p>
                        <Link to="/shop" className="wishlist-shop-btn">
                            <FaArrowLeft /> Explore Products
                        </Link>
                    </div>
                )}

            </section>
        </div>
    );
};

export default Wishlist;
