
import { Link } from 'react-router-dom';
import heroBanner from '../../../assets/images/hero-banner.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <img
        src={heroBanner}
        alt="AMA ODISHA - Authentic flavours of Odisha"
        className="hero-banner"
      />

      <Link to="/shop" className="hero-shop-button">
        Shop Now
      </Link>
    </section>
  );
}

export default Hero;
