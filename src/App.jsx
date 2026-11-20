
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import MyAccount from './pages/Account/MyAccount';
import Wishlist from './pages/Wishlist/Wishlist';
import AdminDashboard from './pages/Admin/AdminDashboard';

function AppContent() {
    const location = useLocation();

    const isAdminPage = location.pathname.startsWith('/admin');

    return (
        <>
            {!isAdminPage && <Header />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>

            {!isAdminPage && <Footer />}
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
