
import './ShopSidebar.css';

const categories = [
  'All Products',
  'Mixture',
  'Khaja',
  'Badi',
  'Papad',
  'Pickles',
];

function ShopSidebar({ activeCategory, onSelectCategory }) {
  return (
    <aside className="shop-sidebar">
      <h3>Categories</h3>

      <ul className="shop-category-list">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`shop-category-btn ${
                activeCategory === category ? 'active' : ''
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ShopSidebar;
