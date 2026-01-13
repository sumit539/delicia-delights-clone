import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { FaArrowLeft, FaCheck, FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div className="text-center py-20">Product not found</div>;
    }

    const currentPrice = product.pricing && selectedSize
        ? product.pricing[selectedSize]
        : product.price || 0;

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product, selectedSize, quantity);
            // Reset quantity after adding
            setQuantity(1);
        }
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-4">
                <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition">
                    <FaArrowLeft className="mr-2" /> Back to Products
                </Link>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Image */}
                    <div className="lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-xl bg-warm p-8">
                            <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl font-serif font-bold text-dark mb-4">{product.name}</h1>
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-6">
                            {product.category}
                        </span>

                        {/* Price Display */}
                        <div className="mb-6">
                            <p className="text-4xl font-bold text-primary">₹{currentPrice}</p>
                            <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
                        </div>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {product.description} Carefully processed to retain natural flavor and nutrition. Perfect for family meals or quick snacks.
                        </p>

                        {/* Size Selector */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-dark mb-3">Select Size:</label>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${selectedSize === size
                                                    ? 'bg-primary text-white shadow-lg scale-105'
                                                    : 'bg-gray-100 text-dark hover:bg-gray-200'
                                                }`}
                                        >
                                            {size}
                                            {product.pricing && product.pricing[size] && (
                                                <span className="block text-xs mt-1">₹{product.pricing[size]}</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity Selector */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-dark mb-3">Quantity:</label>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={decrementQuantity}
                                    className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                                >
                                    <FaMinus />
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-20 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg py-2"
                                    min="1"
                                />
                                <button
                                    onClick={incrementQuantity}
                                    className="w-10 h-10 flex items-center justify-center bg-primary text-white hover:bg-primary/90 rounded-lg transition-colors"
                                >
                                    <FaPlus />
                                </button>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500">Subtotal:</p>
                                    <p className="text-2xl font-bold text-primary">₹{(currentPrice * quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            disabled={!selectedSize}
                            className="w-full bg-accent hover:bg-accent/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition shadow-md hover:shadow-lg mb-6 flex items-center justify-center gap-3 text-lg"
                        >
                            <FaShoppingCart /> Add to Cart
                        </button>

                        <div className="mb-8 p-6 bg-warm rounded-xl border border-gray-100">
                            <h3 className="font-bold text-dark mb-4">Product Highlights</h3>
                            <ul className="space-y-2">
                                {product.keyFeatures?.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <FaCheck className="text-primary mr-3" /> {feature}
                                    </li>
                                ))}
                                <li className="flex items-center text-gray-700">
                                    <FaCheck className="text-primary mr-3" /> Shelf Life: {product.shelfLife}
                                </li>
                            </ul>
                        </div>

                        {/* Additional Information */}
                        {product.ingredients && (
                            <div className="p-6 border border-gray-200 rounded-xl bg-gray-50 mb-6">
                                <h3 className="font-bold text-lg mb-2 text-dark">Ingredients</h3>
                                <p className="text-gray-600 text-sm">{product.ingredients}</p>
                            </div>
                        )}

                        {product.storage && (
                            <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
                                <h3 className="font-bold text-lg mb-2 text-dark">Storage Instructions</h3>
                                <p className="text-gray-600 text-sm">{product.storage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
