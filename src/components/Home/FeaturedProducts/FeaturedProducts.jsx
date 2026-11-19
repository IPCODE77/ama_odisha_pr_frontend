
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import './FeaturedProducts.css';

import mudhiImage from '../../../assets/images/mudhi.png';
import mixtureImage from '../../../assets/images/mixture.png';
import khajaImage from '../../../assets/images/khaja.png';

const products = [
    { id: 1, name: 'Mudhi', image: mudhiImage },
    { id: 2, name: 'Mixture', image: mixtureImage },
    { id: 3, name: 'Khaja', image: khajaImage },
    { id: 4, name: 'Badi', image: null },
    { id: 5, name: 'Papad', image: null },
    { id: 6, name: 'Pickles', image: null },
];

function FeaturedProducts() {
    return (
        <section className="featured-section">
            <div className="featured-container">



                <div className="featured-heading">

                    <div className="featured-heading-content">
                        <span className="featured-eyebrow">
                            OUR COLLECTION
                        </span>

                        <h2>A Taste of Odisha</h2>

                        <p>
                            Discover the traditional flavours that bring us closer to home.
                        </p>

                        <div className="featured-heading-divider">
                            <span></span>
                            <span className="divider-diamond">◆</span>
                            <span></span>
                        </div>
                    </div>

                    <Link to="/shop" className="featured-view-all">
                        View All <ArrowRight size={15} />
                    </Link>

                </div>



                <div className="featured-products-grid">
                    {products.map((product) => (
                        <Link
                            to="/shop"
                            className="featured-product-item"
                            key={product.id}
                        >
                            <div className="featured-product-image">
                                {product.image ? (
                                    <img src={product.image} alt={product.name} />
                                ) : (
                                    <div className="product-image-placeholder">
                                        <Package size={35} strokeWidth={1.3} />
                                    </div>
                                )}
                            </div>

                            <div className="featured-product-name">
                                {product.name}
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturedProducts;
