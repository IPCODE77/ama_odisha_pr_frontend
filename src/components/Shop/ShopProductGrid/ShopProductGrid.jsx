
import { Heart,ShoppingCart  } from 'lucide-react';
import mudhiImage from '../../../assets/images/products/mudhi.png';
import mixtureImage from '../../../assets/images/products/mixture.png';
import khajaImage from '../../../assets/images/products/khaja.png';
import badiImage from '../../../assets/images/products/badi.png';
import pickleImage from '../../../assets/images/products/pickle.png';
import { Link } from 'react-router-dom';
import './ShopProductGrid.css';
import { useCart } from '../../../context/CartContext';

const products = [
    {
        id: 1,
        name: 'Mudhi',
        category: 'Mudhi',
        originalPrice: 200,
        offerPrice: 179,
        weight: '1kg',
        description: 'Light, crispy and fresh puffed rice.',
        image: mudhiImage,
    },
    {
        id: 2,
        name: 'Odia Mixture',
        category: 'Mixture',
        originalPrice: 230,
        offerPrice: 180,
        weight: '500g',
        description: 'A crunchy blend of traditional flavours.',
        image: mixtureImage,
    },
    {
        id: 3,
        name: 'Khaja',
        category: 'Khaja',
        originalPrice: 180,
        offerPrice: 150,
        weight: '250g',
        description: 'Traditional crispy layered sweet.',
        image: khajaImage,
    },
    {
        id: 4,
        name: 'Badi',
        category: 'Badi',
        originalPrice: 140,
        offerPrice: 110,
        weight: '200g',
        description: 'Homestyle traditional sun-dried Badi.',
        image: badiImage,
    },
    {
        id: 5,
        name: 'Pickle',
        category: 'Pickles',
        originalPrice: 180,
        offerPrice: 140,
        weight: '200g',
        description: 'A tangy taste of traditional Odisha.',
        image: pickleImage,
    },
];

function ShopProductGrid({ activeCategory }) {
    const filteredProducts =
        activeCategory === 'All Products'
            ? products
            : products.filter((product) => product.category === activeCategory);

    const { addToCart } = useCart();

    return (
        <div className="shop-product-grid-wrapper">
            <div className="shop-product-grid">
                {filteredProducts.map((product) => {
                    const discount = Math.round(
                        ((product.originalPrice - product.offerPrice) /
                            product.originalPrice) *
                        100
                    );

                    const savings = product.originalPrice - product.offerPrice;

                    return (
                        <div className="shop-product-card" key={product.id}>
                            <div className="shop-product-image">
                                <Link to={`/product/${product.id}`} className="shop-product-image-link">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="shop-product-photo"
                                    />
                                </Link>

                                <span className="shop-discount-badge">
                                    {discount}% OFF
                                </span>

                                <button
                                    className="shop-wishlist-btn"
                                    aria-label={`Wishlist ${product.name}`}
                                >
                                    <Heart size={16} />
                                </button>
                            </div>

                            <div className="shop-product-info">
                                <Link to={`/product/${product.id}`} className="shop-product-name-link">
                                    <h3>{product.name}</h3>
                                </Link>

                                <p className="shop-product-description">
                                    {product.description}
                                </p>

                                <div className="shop-product-price-area">
                                    <span className="shop-original-price">
                                        ₹{product.originalPrice}
                                    </span>

                                    <span className="shop-offer-price">
                                        ₹{product.offerPrice}
                                    </span>

                                    <span className="shop-product-weight">
                                        / {product.weight}
                                    </span>
                                </div>

                                <p className="shop-savings">
                                    You save ₹{savings}
                                </p>

                                <button
                                    className="shop-add-cart-btn"
                                    onClick={() => addToCart(product, 1, '200g')}
                                >
                                    <ShoppingCart size={18} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="shop-pagination">
                <button className="shop-page-number active">1</button>
                <button className="shop-page-number">2</button>
                <button className="shop-page-next">→</button>
            </div>
        </div>
    );
}

export default ShopProductGrid;
