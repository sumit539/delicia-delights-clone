import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaLock, FaShoppingBag } from 'react-icons/fa';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setError('');
        setIsProcessing(true);

        try {
            // Load Razorpay script
            const scriptLoaded = await loadRazorpayScript();
            if (!scriptLoaded) {
                setError('Failed to load payment gateway. Please try again.');
                setIsProcessing(false);
                return;
            }

            // Create order on backend
            const response = await fetch('http://localhost:5000/api/orders/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: getCartTotal(),
                    currency: 'INR',
                    customerInfo: formData,
                    items: cartItems
                }),
            });

            const order = await response.json();

            if (!response.ok) {
                throw new Error(order.error || 'Failed to create order');
            }

            // Razorpay options
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_PLACEHOLDER', // Replace with your key
                amount: order.amount,
                currency: order.currency,
                name: 'Delicia Delights',
                description: `Order for ${cartItems.length} items`,
                order_id: order.id,
                handler: async function (response) {
                    // Verify payment on backend
                    try {
                        const verifyResponse = await fetch('http://localhost:5000/api/orders/verify', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                customerInfo: formData,
                                items: cartItems
                            }),
                        });

                        const verifyData = await verifyResponse.json();

                        if (verifyData.success) {
                            // Clear cart and navigate to success page
                            clearCart();
                            navigate(`/order-confirmation/${verifyData.orderId}`);
                        } else {
                            setError('Payment verification failed. Please contact support.');
                            setIsProcessing(false);
                        }
                    } catch (err) {
                        console.error('Verification error:', err);
                        setError('Payment verification failed. Please contact support.');
                        setIsProcessing(false);
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.phone,
                },
                theme: {
                    color: '#D4302E',
                },
                modal: {
                    ondismiss: function () {
                        setIsProcessing(false);
                    }
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (err) {
            console.error('Payment error:', err);
            setError(err.message || 'Payment failed. Please try again.');
            setIsProcessing(false);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="bg-warm min-h-screen py-20">
                <div className="container mx-auto px-4 text-center">
                    <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-dark mb-4">Your cart is empty</h2>
                    <p className="text-gray-600 mb-8">Add some products to proceed with checkout</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Browse Products
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-warm min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-dark mb-8 text-center">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Shipping Form */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-dark mb-6">Shipping Information</h2>
                            <form onSubmit={handlePayment} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-dark mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-dark mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-dark mb-2">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            pattern="[0-9]{10}"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                            placeholder="10-digit mobile number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-dark mb-2">Address *</label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        rows="3"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Street address, building, etc."
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-dark mb-2">City *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                            placeholder="City"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-dark mb-2">State *</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                            placeholder="State"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-dark mb-2">PIN Code *</label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            required
                                            pattern="[0-9]{6}"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                                            placeholder="6-digit PIN"
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                                >
                                    <FaLock />
                                    {isProcessing ? 'Processing...' : `Pay ₹${getCartTotal().toFixed(2)}`}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-4">
                            <h2 className="text-2xl font-bold text-dark mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                                {cartItems.map((item) => (
                                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-contain rounded-lg bg-warm"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-dark text-sm">{item.name}</h3>
                                            <p className="text-xs text-gray-500">{item.selectedSize}</p>
                                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-primary">₹{(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-4 space-y-2">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-dark pt-2 border-t border-gray-200">
                                    <span>Total</span>
                                    <span className="text-primary">₹{getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                <p className="text-sm text-green-800 flex items-center gap-2">
                                    <FaLock className="text-green-600" />
                                    Secure payment powered by Razorpay
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
