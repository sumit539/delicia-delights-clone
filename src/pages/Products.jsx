
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

// Product Card Component with inline selectors
const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
    const [quantity, setQuantity] = useState(1);

    const currentPrice = product.pricing && selectedSize
        ? product.pricing[selectedSize]
        : product.price || 0;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (selectedSize) {
            addToCart(product, selectedSize, quantity);
            setQuantity(1); // Reset quantity after adding
        }
    };

    const incrementQuantity = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setQuantity(prev => Math.max(1, prev - 1));
    };

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group flex flex-col">
            {/* Product Image */}
            <Link to={`/products/${product.id}`} className="block">
                <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition z-10"></div>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 p-4"
                    />
                    <span className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm">
                        {product.category}
                    </span>
                </div>
            </Link>

            {/* Product Details */}
            <div className="p-6 flex flex-col flex-grow">
                <Link to={`/products/${product.id}`} className="block">
                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                        {product.description}
                    </p>
                </Link>

                <div className="mt-auto space-y-4">
                    {/* Size Selector */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-2">Size:</label>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setSelectedSize(size);
                                        }}
                                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${selectedSize === size
                                                ? 'bg-primary text-white shadow-md'
                                                : 'bg-gray-100 text-dark hover:bg-gray-200'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Price Display */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500">Price:</p>
                            <p className="text-2xl font-bold text-primary">
                                ₹{currentPrice}
                            </p>
                        </div>

                        {/* Quantity Selector */}
                        <div>
                            <p className="text-xs text-gray-500 mb-1">Qty:</p>
                            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
                                <button
                                    onClick={decrementQuantity}
                                    className="w-6 h-6 flex items-center justify-center bg-white rounded hover:bg-gray-200 transition-colors"
                                >
                                    <FaMinus className="text-xs" />
                                </button>
                                <span className="w-8 text-center font-semibold">{quantity}</span>
                                <button
                                    onClick={incrementQuantity}
                                    className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                                >
                                    <FaPlus className="text-xs" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Total Price */}
                    <div className="flex items-center justify-between py-2 px-3 bg-warm rounded-lg">
                        <span className="text-sm font-semibold text-gray-600">Total:</span>
                        <span className="text-xl font-bold text-primary">
                            ₹{(currentPrice * quantity).toFixed(2)}
                        </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-accent text-white font-bold uppercase tracking-wider text-sm px-4 py-3 rounded-lg hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                        <FaShoppingCart /> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    const location = useLocation();
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const category = searchParams.get('category');
        const search = searchParams.get('search');

        if (search) {
            setFilter(`Search: ${search}`);
        } else if (category) {
            setFilter(category);
        } else {
            setFilter('All');
        }
    }, [location.search]);

    const categories = ['All', 'Jams', 'Canned Food', 'Sauces', 'Pickles', 'Ready to Eat'];

    const filteredProducts = filter.startsWith('Search: ')
        ? products.filter(p =>
            p.name.toLowerCase().includes(filter.replace('Search: ', '').toLowerCase()) ||
            p.description.toLowerCase().includes(filter.replace('Search: ', '').toLowerCase())
        )
        : filter === 'All'
            ? products
            : products.filter(p => p.category === filter);

    return (
        <div className="bg-warm min-h-screen py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif font-bold text-dark mb-4">Our Premium Products</h1>
                    <p className="text-lg text-gray-600">Discover the taste of quality in every jar and can.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === cat
                                ? 'bg-primary text-white shadow-lg transform scale-105'
                                : 'bg-white text-dark hover:bg-gray-100 shadow-sm'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
