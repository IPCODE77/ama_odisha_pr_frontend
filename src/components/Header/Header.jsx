
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
  Menu,
  X
} from 'lucide-react';

import logo from '../../assets/images/ama-odisha-logo.png';

import './Header.css';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Our Products', path: '/shop' },
  { label: 'Our Story', path: '/about' },
  { label: 'Why AMA Odisha?', path: '/why-ama-odisha' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchValue.trim()) {
      console.log('Search product:', searchValue);
    }
  };

  return (
    <>
      <AppBar position="sticky" elevation={0} className="site-header">

        {/* TOP HEADER */}
        <Box className="header-top">

          {/* LOGO */}
          <Link to="/" className="header-logo">
            <img src={logo} alt="AMA ODISHA" />
          </Link>

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

            <IconButton
              aria-label="Shopping cart"
              component={Link}
              to="/cart"
              className="cart-button"
            >
              <Badge badgeContent={0} color="primary" showZero={false}>
                <ShoppingCart size={25} />
              </Badge>
            </IconButton>

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
