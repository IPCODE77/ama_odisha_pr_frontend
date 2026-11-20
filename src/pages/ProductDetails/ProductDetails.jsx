
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Heart,
    Minus,
    Plus,
    ShoppingCart,
    Star,
    ShieldCheck,
    PackageCheck,
    Truck,
    Target,
    ArrowLeft
} from 'lucide-react';

import mudhiImage from '../../assets/images/products/mudhi.png';
import mixtureImage from '../../assets/images/products/mixture.png';
import khajaImage from '../../assets/images/products/khaja.png';
import badiImage from '../../assets/images/products/badi.png';
import pickleImage from '../../assets/images/products/pickle.png';
import { useCart } from '../../context/CartContext';

import './ProductDetails.css';

const products = [
    {
        id: '1',
        name: 'Mudhi',
        price: 100,
        originalPrice: 120,
        rating: 4.8,
        reviews: 250,
        description: 'Light, crispy and fresh puffed rice.',
        longDescription:
            'Enjoy the traditional taste of Odisha with our Mudhi, made from carefully selected ingredients and prepared to bring the authentic taste of home.',
        image: mudhiImage,
        weights: ['200g', '400g'],
    },
    {
        id: '2',
        name: 'Odia Mixture',
        price: 120,
        originalPrice: 150,
        rating: 4.8,
        reviews: 250,
        description: 'A crunchy blend of traditional flavours.',
        longDescription:
            'A perfect blend of traditional spices and crunchy ingredients, bringing the authentic taste of Odisha in every bite.',
        image: mixtureImage,
        weights: ['200g', '400g'],
    },
    {
        id: '3',
        name: 'Khaja',
        price: 150,
        originalPrice: 180,
        rating: 4.8,
        reviews: 250,
        description: 'Traditional crispy layered sweet.',
        longDescription:
            'Enjoy the traditional sweetness of Odisha with crispy, layered Khaja, made to bring a taste of celebration to every occasion.',
        image: khajaImage,
        weights: ['250g', '500g'],
    },
    {
        id: '4',
        name: 'Badi',
        price: 110,
        originalPrice: 140,
        rating: 4.8,
        reviews: 250,
        description: 'Homestyle traditional sun-dried Badi.',
        longDescription:
            'Traditional Odia Badi, inspired by the flavours of home and perfect for bringing authentic Odia cooking to your kitchen.',
        image: badiImage,
        weights: ['200g', '400g'],
    },
    {
        id: '5',
        name: 'Pickle',
        price: 140,
        originalPrice: 180,
        rating: 4.8,
        reviews: 250,
        description: 'A tangy taste of traditional Odisha.',
        longDescription:
            'Enjoy a traditional pickle with rich flavours and a tangy taste that pairs perfectly with your everyday meals.',
        image: pickleImage,
        weights: ['200g', '400g'],
    },
];


function ProductImageZoom({ image, name }) {
    const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
    const [isZooming, setIsZooming] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setZoomPosition({
            x: Math.max(0, Math.min(100, x)),
            y: Math.max(0, Math.min(100, y)),
        });
    };

    return (
        <div className="product-zoom-wrapper">
            <div
                className="product-main-image"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
            >
                <img src={image} alt={name} />

                {isZooming && (
                    <div
                        className="product-zoom-lens"
                        style={{
                            left: `${zoomPosition.x}%`,
                            top: `${zoomPosition.y}%`,
                        }}
                    />
                )}
            </div>

            {isZooming && (
                <div
                    className="product-zoom-panel"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }}
                />
            )}
        </div>
    );
}


function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const handleAddToCart = () => {
        addToCart(product, quantity, selectedWeight);
    };

    const product = products.find((item) => item.id === id) || products[0];

    const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('Description');
    const [isWishlisted, setIsWishlisted] = useState(false);

    const discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    return (
        <div className="product-details-page">
            <button
                className="product-back-button"
                onClick={() => navigate('/shop')}
            >
                <ArrowLeft size={18} />
                Back to Products
            </button>
            <div className="product-details-container">

                {/* LEFT IMAGE SECTION */}

                <div className="product-details-gallery">
                    <ProductImageZoom
                        image={product.image}
                        name={product.name}
                    />

                    <div className="product-thumbnail-list">
                        <button className="product-thumbnail active">
                            <img src={product.image} alt={product.name} />
                        </button>

                        <button className="product-thumbnail">
                            <img src={product.image} alt={`${product.name} view 2`} />
                        </button>

                        <button className="product-thumbnail">
                            <img src={product.image} alt={`${product.name} view 3`} />
                        </button>

                        <button className="product-thumbnail">
                            <img src={product.image} alt={`${product.name} view 4`} />
                        </button>
                    </div>
                </div>

                {/* RIGHT PRODUCT INFORMATION */}

                <div className="product-details-info">

                    <h1>{product.name}</h1>

                    <div className="product-rating">
                        <div className="product-stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={16} fill="currentColor" />
                            ))}
                        </div>

                        <span>{product.rating}</span>
                        <span className="product-review-count">
                            ({product.reviews} reviews)
                        </span>
                    </div>

                    <div className="product-details-price">
                        <span className="product-detail-offer-price">
                            ₹{product.price}
                        </span>

                        <span className="product-detail-original-price">
                            ₹{product.originalPrice}
                        </span>

                        <span className="product-detail-discount">
                            {discount}% OFF
                        </span>
                    </div>

                    <p className="product-detail-description">
                        {product.description}
                    </p>

                    {/* WEIGHT */}

                    <div className="product-weight-selection">
                        <label>Weight:</label>

                        <div className="product-weight-options">
                            {product.weights.map((weight) => (
                                <button
                                    key={weight}
                                    className={`product-weight-option ${selectedWeight === weight ? 'active' : ''
                                        }`}
                                    onClick={() => setSelectedWeight(weight)}
                                >
                                    {weight}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* QUANTITY AND CART */}

                    <div className="product-purchase-row">

                        <div className="product-quantity-selector">
                            <button
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                aria-label="Decrease quantity"
                            >
                                <Minus size={16} />
                            </button>

                            <span>{quantity}</span>

                            <button
                                onClick={() => setQuantity((q) => q + 1)}
                                aria-label="Increase quantity"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        <button
                            className="product-detail-add-cart"
                            onClick={() =>
                                addToCart(
                                    {
                                        ...product,
                                        price: product.price,
                                        id: product.id,
                                    },
                                    quantity,
                                    selectedWeight
                                )
                            }
                        >
                            <ShoppingCart size={18} />
                            Add to Cart
                        </button>

                    </div>

                    {/* WISHLIST */}

                    <button
                        className={`product-detail-wishlist ${isWishlisted ? 'active' : ''
                            }`}
                        onClick={() => setIsWishlisted((prev) => !prev)}
                    >
                        <Heart
                            size={18}
                            fill={isWishlisted ? 'currentColor' : 'none'}
                        />
                        {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                    </button>

                    {/* BENEFITS */}

                    <div className="product-detail-benefits">
                        <div>
                            <Target size={19} />
                            <span>Authentic Odisha Taste</span>
                        </div>

                        <div>
                            <ShieldCheck size={19} />
                            <span>Premium Quality</span>
                        </div>

                        <div>
                            <PackageCheck size={19} />
                            <span>Secure Payments</span>
                        </div>

                        <div>
                            <Truck size={19} />
                            <span>Pan India Delivery</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* PRODUCT INFORMATION TABS */}

            <div className="product-detail-tabs">

                <div className="product-tab-buttons">
                    {['Description', 'Reviews', 'Shipping'].map((tab) => (
                        <button
                            key={tab}
                            className={`product-tab-btn ${activeTab === tab ? 'active' : ''
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="product-tab-content">

                    {activeTab === 'Description' && (
                        <p>{product.longDescription}</p>
                    )}

                    {activeTab === 'Reviews' && (
                        <p>
                            Customer reviews will be displayed here once our review
                            functionality is implemented.
                        </p>
                    )}

                    {activeTab === 'Shipping' && (
                        <p>
                            Delivery information, shipping timelines and return
                            policies will be displayed here.
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
}

export default ProductDetails;
