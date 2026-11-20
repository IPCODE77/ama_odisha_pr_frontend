
import { useState } from 'react';
import ShopBanner from '../../components/Shop/ShopBanner/ShopBanner';
import ShopSidebar from '../../components/Shop/ShopSidebar/ShopSidebar';
import ShopProductGrid from '../../components/Shop/ShopProductGrid/ShopProductGrid';
import './Shop.css';

function Shop() {
  const [activeCategory, setActiveCategory] = useState('All Products');

  return (
    <div className="shop-page">
      <ShopBanner />

      <div className="shop-content-layout">
        <ShopSidebar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <ShopProductGrid activeCategory={activeCategory} />
      </div>
    </div>
  );
}

export default Shop;
