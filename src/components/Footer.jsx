import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import exportersLogo from '../assets/images/exporters_india_logo.png';

const Footer = () => {
    React.useEffect(() => {
        // Check if script is already there
        if (document.querySelector('script[src*="translate.google.com"]')) {
            return;
        }

        // Define the google translate initialization function
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en' }, // Removed layout: SIMPLE to get standard dropdown
                'google_translate_element'
            );
        };

        // Create script element
        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <footer className="bg-dark text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Company Info */}
                <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-6">
                        Delicia<span className="text-primary">Delights</span>
                    </h3>
                    <p className="mb-6 leading-relaxed">
                        Bringing the finest canned foods and fresh delights to your table since 2004. Quality, taste, and tradition in every jar.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-xl hover:text-primary transition-colors"><FaFacebook /></a>
                        <a href="#" className="text-xl hover:text-primary transition-colors"><FaTwitter /></a>
                        <a href="#" className="text-xl hover:text-primary transition-colors"><FaInstagram /></a>
                        <a href="#" className="text-xl hover:text-primary transition-colors"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6 border-b-2 border-primary inline-block pb-2">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><a href="/#clientele" className="hover:text-primary transition-colors">Clientele</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6 border-b-2 border-primary inline-block pb-2">Our Products</h4>
                    <ul className="space-y-3">
                        <li><Link to="/products?category=Jams" className="hover:text-primary transition-colors">Fruit Jams</Link></li>
                        <li><Link to="/products?category=Canned Food" className="hover:text-primary transition-colors">Canned Fruits</Link></li>
                        <li><Link to="/products?category=Ready to Eat" className="hover:text-primary transition-colors">Vegetables (Ready to Eat)</Link></li>
                        <li><Link to="/products?category=Pickles" className="hover:text-primary transition-colors">Chutneys & Pickles</Link></li>
                        <li><Link to="/products?category=Sauces" className="hover:text-primary transition-colors">Tomato Ketchup & Sauces</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6 border-b-2 border-primary inline-block pb-2">Reach Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-primary" />
                            <span>No. 10 Bhavanipur Chhoti Peerumadara,<br />Nainital, Ram Nagar, Uttarakhand, India, 244715</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-primary" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-primary" />
                            <span>deepak@deliciadelights.com</span>
                        </li>
                    </ul>

                    {/* Member & Extras */}
                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">Member of:</p>
                        <div className="bg-white p-2 rounded inline-block">
                            <a href="https://www.exportersindia.com/delicia-foods-india-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="block">
                                <img
                                    src={exportersLogo}
                                    alt="Member of ExportersIndia.com"
                                    className="h-12 w-auto object-contain"
                                />
                            </a>
                        </div>
                        {/* Google Translate Widget Placeholder */}
                        <div className="mt-4">
                            <div id="google_translate_element" className="p-2 bg-white rounded text-black text-xs">Select Language ▼</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Delicia Delights. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
