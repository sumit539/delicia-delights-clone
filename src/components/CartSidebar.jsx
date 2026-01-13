import React from 'react';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaShoppingBag } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
    const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-warm">
                    <h2 className="text-2xl font-bold text-dark">Shopping Cart</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        aria-label="Close cart"
                    >
                        <FaTimes className="text-xl text-dark" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <FaShoppingBag className="text-6xl text-gray-300 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                            <p className="text-gray-500 mb-6">Add some delicious products to get started!</p>
                            <button
                                onClick={() => {
                                    setIsCartOpen(false);
                                    navigate('/products');
                                }}
                                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={`${item.id}-${item.selectedSize}`}
                                    className="flex gap-4 p-4 bg-warm rounded-lg shadow-sm"
                                >
                                    {/* Product Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-contain rounded-lg bg-white"
                                    />

                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-dark mb-1">{item.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">Size: {item.selectedSize}</p>
                                        <p className="text-primary font-bold">₹{item.price}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                                            className="text-red-500 hover:text-red-700 transition-colors"
                                            aria-label="Remove item"
                                        >
                                            <FaTrash className="text-sm" />
                                        </button>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                                                className="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                <FaMinus className="text-xs" />
                                            </button>
                                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                                                className="w-7 h-7 flex items-center justify-center bg-primary text-white hover:bg-primary/90 rounded-full transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <FaPlus className="text-xs" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer with Total and Checkout */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 p-6 bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-dark">Total:</span>
                            <span className="text-2xl font-bold text-primary">₹{getCartTotal().toFixed(2)}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartSidebar;
