
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Trash2,
    Plus,
    Minus,
    ShoppingBag,
    ArrowLeft,
    ShieldCheck,
    Truck,
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Cart.css';
import cartBanner from '../../assets/images/cart-banner.png';

function Cart() {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    const formatPrice = (price) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(price);


    const FREE_SHIPPING_THRESHOLD = 999;

    const remainingForFreeShipping = Math.max(
        FREE_SHIPPING_THRESHOLD - cartTotal,
        0
    );

    const shippingProgress = Math.min(
        (cartTotal / FREE_SHIPPING_THRESHOLD) * 100,
        100
    );

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="cart-banner">
                    <img src={cartBanner} alt="AMA Odisha - Your Cart" />
                </div>
                <div className="cart-empty">
                    <div className="cart-empty-icon">
                        <ShoppingBag size={48} />
                    </div>

                    <h2>Your cart is feeling a little empty!</h2>
                    <p>
                        Discover authentic Odisha flavours and add your favourites to
                        your cart.
                    </p>

                    <Link to="/shop" className="cart-shop-btn">
                        Explore Products
                    </Link>

                    <Link to="/" className="cart-back-home">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-banner">
                <img src={cartBanner} alt="AMA Odisha - Your Cart" />
            </div>
            <div className="cart-container">
                <div className="cart-heading">
                    <div>
                        <span className="cart-eyebrow">YOUR SHOPPING BAG</span>
                        <h1>My Cart</h1>
                        <p>
                            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}{' '}
                            in your cart
                        </p>
                    </div>

                    <Link to="/shop" className="cart-continue-link">
                        <ArrowLeft size={17} />
                        Continue Shopping
                    </Link>
                </div>

                <div className="cart-layout">
                    <div className="cart-items-section">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.cartItemId}>
                                <div className="cart-item-image">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>

                                <div className="cart-item-info">
                                    <div className="cart-item-top">
                                        <div>
                                            <h3>{item.name}</h3>
                                            <span className="cart-item-weight">
                                                Weight: {item.weight}
                                            </span>
                                        </div>

                                        <button
                                            className="cart-remove-btn"
                                            onClick={() => removeFromCart(item.cartItemId)}
                                            aria-label={`Remove ${item.name}`}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    <div className="cart-item-bottom">
                                        <div className="cart-quantity">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.cartItemId, item.quantity - 1)
                                                }
                                                disabled={item.quantity <= 1}
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus size={15} />
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.cartItemId, item.quantity + 1)
                                                }
                                                aria-label="Increase quantity"
                                            >
                                                <Plus size={15} />
                                            </button>
                                        </div>

                                        <div className="cart-item-price">
                                            {formatPrice(item.price * item.quantity)}
                                        </div>
                                    </div>

                                    <span className="cart-unit-price">
                                        {formatPrice(item.price)} per pack
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <aside className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="free-shipping-box">
                            {cartTotal >= FREE_SHIPPING_THRESHOLD ? (
                                <p className="free-shipping-success">
                                    🎉 Congratulations! You've unlocked free shipping!
                                </p>
                            ) : (
                                <p className="free-shipping-message">
                                    Add <strong>{formatPrice(remainingForFreeShipping)}</strong> more
                                    to unlock <strong>FREE shipping!</strong>
                                </p>
                            )}

                            <div className="free-shipping-track">
                                <div
                                    className="free-shipping-fill"
                                    style={{ width: `${shippingProgress}%` }}
                                />
                            </div>

                            <div className="free-shipping-labels">
                                <span>{formatPrice(cartTotal)}</span>
                                <span>Free shipping at ₹999</span>
                            </div>
                        </div>

                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <span>{formatPrice(cartTotal)}</span>
                        </div>

                        <div className="cart-summary-row">
                            <span>Shipping</span>
                            <span className="cart-shipping-note">Calculated at checkout</span>
                        </div>

                        <div className="cart-summary-divider" />

                        <div className="cart-summary-total">
                            <span>Total</span>
                            <strong>{formatPrice(cartTotal)}</strong>
                        </div>

                        <Link to="/checkout" className="cart-checkout-btn">
                            Proceed to Checkout
                        </Link>

                        <div className="cart-trust-info">
                            <div>
                                <ShieldCheck size={18} />
                                <span>Secure shopping</span>
                            </div>

                            <div>
                                <Truck size={18} />
                                <span>Delivery across India</span>
                            </div>
                        </div>

                        <div className="cart-summary-footer">
                            <ShoppingBag size={17} />
                            <span>Ghara ra swada, ebe sara Bharatare.</span>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Cart;
