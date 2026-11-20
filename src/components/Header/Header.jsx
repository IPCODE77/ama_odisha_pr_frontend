
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  Badge
} from '@mui/material';

import {
  Search,
  ShoppingCart,
  ShoppingCartPlus,
  Menu,
  X
} from 'lucide-react';

import logo from '../../assets/images/ama-odisha-logo.png';
import { FaRegUser } from 'react-icons/fa';

import './Header.css';


const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Our Products', path: '/shop' },
  { label: 'Our Story', path: '/about' },
  { label: 'Why AMA Odisha?', path: '/why-ama-odisha' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

// /Demo Offer Items/

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { cartCount } = useCart();

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchValue.trim()) {
      console.log('Search product:', searchValue);
    }
  };

  const offers = [
    {
      label: 'WELCOME OFFER',
      title: 'Get 10% OFF',
      subtitle: 'On your first order',
      code: 'AMA10',
      icon: '🎁',
    },
    {
      label: 'SPECIAL DELIVERY',
      title: 'FREE DELIVERY',
      subtitle: 'On orders above ₹499',
      code: 'FREE499',
      icon: '🚚',
    },
    {
      label: 'ODISHA SPECIAL',
      title: 'Taste of Odisha',
      subtitle: 'Traditional flavours, delivered with love',
      code: 'EXPLORE',
      icon: '❤️',
    },
    {
      label: 'EXCLUSIVE OFFER',
      title: 'Something Delicious Awaits!',
      subtitle: 'Explore our traditional collection',
      code: 'SHOP NOW',
      icon: '✨',
    },
  ];

  const [offerIndex, setOfferIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setOfferIndex((previous) => (previous + 1) % offers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AppBar position="sticky" elevation={0} className="site-header">

        {/* TOP HEADER */}
        <Box className="header-top">

          {/* LOGO */}
          <Link to="/" className="header-logo">
            <img src={logo} alt="AMA ODISHA" />
          </Link>
          <div className="header-offer">
            <div className="offer-card" key={offerIndex}>

              <div className="offer-icon">
                {offers[offerIndex].icon}
              </div>

              <div className="offer-details">
                <span className="offer-label">
                  {offers[offerIndex].label}
                </span>

                <h4>{offers[offerIndex].title}</h4>

                <p>{offers[offerIndex].subtitle}</p>
              </div>

              <div className="offer-code">
                <span>USE CODE</span>
                <strong>{offers[offerIndex].code}</strong>
              </div>

            </div>
          </div>


          {/* SEARCH */}
          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchValue}
              onChange={(event) =>
                setSearchValue(event.target.value)
              }
              aria-label="Search products"
            />

            <button type="submit" aria-label="Search">
              <Search size={18} />
            </button>
          </form>

          {/* HEADER ACTIONS */}
          <Box className="header-actions">

            {/* Account Button */}
            <IconButton
              aria-label="User account"
              className="account-button"
              onClick={() => navigate('/login')}
            >
              <FaRegUser className="header-account-icon" />
            </IconButton>

            {/* Cart Button */}
            <IconButton
              aria-label="Shopping cart"
              component={Link}
              to="/cart"
              className="cart-button"
            >
              <Badge badgeContent={0} color="primary" showZero={false}>
                <div className="header-cart-wrapper">
                  <ShoppingCart size={22} />

                  {cartCount > 0 && (
                    <span className="header-cart-count">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Badge>
            </IconButton>

            {/* Mobile Menu */}
            <IconButton
              className="mobile-menu-button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={25} />
            </IconButton>

          </Box>

        </Box>

        {/* DESKTOP NAVIGATION */}
        <Box component="nav" className="desktop-navigation">

          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive ? 'navigation-link active' : 'navigation-link'
              }
            >
              {item.label}
            </NavLink>
          ))}

        </Box>

      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobileMenu}
      >
        <Box className="mobile-drawer">

          <Box className="drawer-header">

            <img src={logo} alt="AMA ODISHA" />

            <IconButton onClick={closeMobileMenu}>
              <X size={24} />
            </IconButton>

          </Box>

          <Box className="drawer-navigation">

            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'drawer-link active'
                    : 'drawer-link'
                }
              >
                {item.label}
              </NavLink>
            ))}

          </Box>

        </Box>
      </Drawer>
    </>
  );
}

export default Header;
