
import './ShopBanner.css';
import shopBanner from '../../../assets/images/shop-banner.png';

function ShopBanner() {
  return (
    <section className="shop-page-banner">
      <img
        src={shopBanner}
        alt=""
        className="shop-banner-background"
      />

      <div className="shop-banner-text">
        <span>AUTHENTIC FLAVOURS OF ODISHA</span>
        <h1>Our Products</h1>
        <p>Taste the Tradition</p>
      </div>
    </section>
  );
}

export default ShopBanner;
