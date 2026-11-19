
import { Link } from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Heart,
} from 'lucide-react';

import logo from '../../assets/images/ama-odisha-logo-2.png';
import './Footer.css';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import upiLogo from '../../assets/images/upi.png';
import visaLogo from '../../assets/images/visa.svg';
import mastercardLogo from '../../assets/images/mastercard.svg';
import rupayLogo from '../../assets/images/rupay.png';

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/shop' },
    { name: 'Our Story', path: '/about' },
    { name: 'Why AMA ODISHA?', path: '/why-ama-odisha' },
    { name: 'Blog & Recipes', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
];

function Footer() {
    const handleSubscribe = (event) => {
        event.preventDefault();
        alert('Thank you for subscribing to AMA ODISHA!');
    };

    return (
        <footer className="footer-section">

            <div className="footer-main">
                <div className="footer-container">

                    {/* BRAND */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="AMA ODISHA" />
                        </Link>

                        <p className="footer-tagline">
                            Ghara ra swada, ebe sara Bharatare
                        </p>

                        <div className="footer-divider">
                            <span></span> ◆ <span></span>
                        </div>

                        <p className="footer-description">
                            Bringing the authentic taste of Odisha to every
                            home across India, with love, tradition and purity.
                        </p>

                        <div className="footer-socials">
                            <a
                                href="https://www.instagram.com/amaodisha/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <RiInstagramFill />
                            </a>

                            <a href="#" aria-label="Facebook"><FaFacebookSquare /></a>

                            <a href="#" aria-label="YouTube"><IoLogoYoutube /></a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer-column">
                        <h3>Quick Links</h3>

                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>
                                        <span>›</span> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CUSTOMER SUPPORT */}
                    <div className="footer-column">
                        <h3>Customer Support</h3>

                        <ul>
                            <li>
                                <Link to="/contact"><span>›</span> Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/contact"><span>›</span> FAQs</Link>
                            </li>
                            <li>
                                <Link to="/contact"><span>›</span> Shipping Policy</Link>
                            </li>
                            <li>
                                <Link to="/contact"><span>›</span> Return & Refund</Link>
                            </li>
                            <li>
                                <Link to="/track-order"><span>›</span> Track Your Order</Link>
                            </li>
                        </ul>

                        <div className="footer-contact">
                            <p><Mail size={15} /> support@amaodisha.com</p>
                            <p><Phone size={15} /> Contact details coming soon</p>
                            <p><MapPin size={15} /> Odisha, India</p>
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="footer-column footer-newsletter">
                        <h3>Subscribe to Our Newsletter</h3>

                        <p>
                            Get the latest updates, special offers
                            and more!
                        </p>

                        <form className="footer-subscribe"
                            onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                aria-label="Email address"
                                required
                            />

                            <button type="submit" aria-label="Subscribe">
                                <Send size={18} />
                            </button>
                        </form>

                        <div className="footer-payment">
                            <h4>We Accept</h4>

                            <div className="footer-payment-logos">
                                <img src={upiLogo} alt="UPI" />
                                <img src={visaLogo} alt="Visa" />
                                <img src={mastercardLogo} alt="Mastercard" />
                                <img src={rupayLogo} alt="RuPay" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>© {new Date().getFullYear()} AMA ODISHA. All Rights Reserved.</p>

                    <p className="footer-made">
                        Made with <Heart size={15} fill="currentColor" /> in Odisha
                    </p>

                    <div className="footer-legal">
                        <Link to="/contact">Privacy Policy</Link>
                        <Link to="/contact">Terms & Conditions</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
