import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import CartIcon from './CartIcon';
import CartSidebar from './CartSidebar';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();


    const toggleMenu = () => setIsOpen(!isOpen);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/', exact: true },
        { name: 'About Us', path: '/about' },
        { name: 'Products Range', path: '/products-range' },
        { name: 'Products', path: '/products' },
        { name: 'Track Order', path: '/track-order' },
        { name: 'Clientele', path: '/#clientele', isHash: true },
        { name: 'Contact Us', path: '/contact' },
    ];


    return (
        <header className="w-full shadow-md z-50 relative">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 px-4 text-xs md:text-sm hidden md:block">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <span className="font-semibold">GST NO. 05AABCD6731F1Z0</span>
                        <span className="flex items-center gap-2"><FaEnvelope /> deepak@deliciadelights.com</span>
                        <span className="flex items-center gap-2"><FaPhone /> +91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://wa.me/919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <FaWhatsapp /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>


            {/* Main Navigation */}
            <div className="bg-white py-4 px-4 sticky top-0 shadow-sm z-40">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src="https://catalog.wlimg.com/1/304027/other-images/12577-comp-image.png"
                            alt="Delicia Delights"
                            className="h-16 md:h-20 object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-base xl:text-lg font-medium transition-colors hover:text-primary text-dark"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    end={link.exact}
                                    className={({ isActive }) =>
                                        `text-base xl:text-lg font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-dark'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            )
                        ))}
                    </nav>

                    {/* Search & Cart Actions */}
                    <div className="hidden lg:flex items-center gap-2">
                        {/* Search */}
                        <div className="relative">
                            {isSearchOpen && (
                                <form onSubmit={handleSearch} className="absolute right-12 top-1/2 -translate-y-1/2 z-10">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary w-64 shadow-md"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        autoFocus
                                    />
                                </form>
                            )}
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="p-2 text-dark hover:text-primary transition-colors"
                                aria-label="Search"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* Cart Icon */}
                        <CartIcon />
                    </div>


                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link to="/contact" className="bg-accent hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Cart & Menu */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <CartIcon />
                        <button className="text-2xl text-dark" onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <nav className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="py-3 px-6 text-dark hover:bg-gray-50 hover:text-primary border-b border-gray-50 last:border-none"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="py-3 px-6 text-dark hover:bg-gray-50 hover:text-primary border-b border-gray-50 last:border-none"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <Link
                            to="/contact"
                            className="mt-4 mx-6 bg-accent text-white py-2 text-center rounded-full font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Quote
                        </Link>
                    </nav>
                </div>
            )}
            <CartSidebar />
        </header>
    );
};

export default Header;
