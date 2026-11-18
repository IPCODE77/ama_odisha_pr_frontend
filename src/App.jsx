
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';  
import Home from './pages/Home/Home';

// Temporary page components

function Shop() {
  return <main className="page-content"><h1>Our Products</h1></main>;
}

function About() {
  return <main className="page-content"><h1>Our Story</h1></main>;
}

function WhyAmaOdisha() {
  return <main className="page-content"><h1>Why AMA ODISHA?</h1></main>;
}

function Blog() {
  return <main className="page-content"><h1>Blog & Recipes</h1></main>;
}

function Contact() {
  return <main className="page-content"><h1>Contact Us</h1></main>;
}

function Cart() {
  return <main className="page-content"><h1>Your Shopping Cart</h1></main>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-ama-odisha" element={<WhyAmaOdisha />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
