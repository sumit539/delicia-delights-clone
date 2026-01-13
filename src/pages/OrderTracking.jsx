import React, { useState } from 'react';
import { FaSearch, FaBox, FaSpinner } from 'react-icons/fa';

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleTrackOrder = async (e) => {
        e.preventDefault();
        setError('');
        setOrderData(null);
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Order not found');
            }

            // Verify email matches
            if (data.order.customerInfo.email.toLowerCase() !== email.toLowerCase()) {
                throw new Error('Order ID and email do not match');
            }

            setOrderData(data.order);
        } catch (err) {
            setError(err.message || 'Failed to fetch order. Please check your Order ID and email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-warm min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <FaBox className="text-6xl text-primary mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-dark mb-4">Track Your Order</h1>
                    <p className="text-gray-600">Enter your Order ID and email to view order details</p>
                </div>

                {/* Tracking Form */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <form onSubmit={handleTrackOrder} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-dark mb-2">
                                Order ID *
                            </label>
                            <input
                                type="text"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder="e.g., ORD1736772345678"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Found in your order confirmation email
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-dark mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {loading ? (
                                <>
                                    <FaSpinner className="animate-spin" />
                                    Searching...
                                </>
                            ) : (
                                <>
                                    <FaSearch />
                                    Track Order
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Order Details */}
                {orderData && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="border-b border-gray-200 pb-6 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-dark">Order #{orderData.orderId}</h2>
                                    <p className="text-gray-500">
                                        Placed on {new Date(orderData.createdAt).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </div>
                                <span className={`px-4 py-2 rounded-full font-semibold ${orderData.status === 'confirmed'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {orderData.status.charAt(0).toUpperCase() + orderData.status.slice(1)}
                                </span>
                            </div>
                        </div>

                        {/* Customer Info */}
                        <div className="mb-6">
                            <h3 className="font-bold text-dark mb-3">Delivery Address</h3>
                            <div className="bg-warm rounded-lg p-4">
                                <p className="font-semibold">{orderData.customerInfo.name}</p>
                                <p className="text-gray-600">{orderData.customerInfo.address}</p>
                                <p className="text-gray-600">
                                    {orderData.customerInfo.city}, {orderData.customerInfo.state} - {orderData.customerInfo.pincode}
                                </p>
                                <p className="text-gray-600 mt-2">Phone: {orderData.customerInfo.phone}</p>
                                <p className="text-gray-600">Email: {orderData.customerInfo.email}</p>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="mb-6">
                            <h3 className="font-bold text-dark mb-3">Order Items</h3>
                            <div className="space-y-3">
                                {orderData.items.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 bg-warm rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-contain rounded-lg bg-white"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-dark">{item.name}</h4>
                                            <p className="text-sm text-gray-500">
                                                Size: {item.selectedSize} | Qty: {item.quantity}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-primary">₹{item.price}</p>
                                            <p className="text-sm text-gray-500">× {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="border-t border-gray-200 pt-6">
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{orderData.total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600">FREE</span>
                                </div>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-dark pt-4 border-t border-gray-200">
                                <span>Total Paid</span>
                                <span className="text-primary">₹{orderData.total.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-bold text-dark mb-2">Payment Information</h3>
                            <p className="text-sm text-gray-600">
                                <strong>Payment ID:</strong> {orderData.razorpayPaymentId}
                            </p>
                            <p className="text-sm text-green-600 font-semibold mt-1">✓ Payment Successful</p>
                        </div>

                        {/* Delivery Info */}
                        <div className="mt-6 p-4 bg-warm rounded-lg">
                            <h3 className="font-bold text-dark mb-2">📦 Delivery Status</h3>
                            <p className="text-gray-600">
                                Your order is being processed and will be shipped soon.
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Estimated delivery: 3-5 business days
                            </p>
                        </div>
                    </div>
                )}

                {/* Help Section */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        Need help? Contact us at{' '}
                        <a href="mailto:deepak@deliciadelights.com" className="text-primary hover:underline">
                            deepak@deliciadelights.com
                        </a>
                        {' '}or call{' '}
                        <a href="tel:+919876543210" className="text-primary hover:underline">
                            +91 98765 43210
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
