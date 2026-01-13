import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaBox, FaTruck } from 'react-icons/fa';

const OrderConfirmation = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch order details from backend (optional)
        // For now, we'll just display the order ID
        setTimeout(() => {
            setOrderDetails({ orderId });
            setLoading(false);
        }, 500);
    }, [orderId]);

    if (loading) {
        return (
            <div className="bg-warm min-h-screen py-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                    <p className="mt-4 text-gray-600">Loading order details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-warm min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
                    {/* Success Icon */}
                    <div className="mb-6">
                        <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
                    </div>

                    {/* Success Message */}
                    <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                        Order Placed Successfully!
                    </h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Thank you for your purchase. Your order has been confirmed and will be processed shortly.
                    </p>

                    {/* Order ID */}
                    <div className="bg-warm rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-500 mb-2">Order ID</p>
                        <p className="text-2xl font-bold text-primary">{orderId}</p>
                    </div>

                    {/* Order Timeline */}
                    <div className="mb-8 text-left">
                        <h2 className="text-xl font-bold text-dark mb-4">What's Next?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaCheckCircle className="text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark">Order Confirmed</h3>
                                    <p className="text-sm text-gray-600">You'll receive an email confirmation shortly</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <FaBox className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark">Order Processing</h3>
                                    <p className="text-sm text-gray-600">We're preparing your items for shipment</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <FaTruck className="text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark">Delivery</h3>
                                    <p className="text-sm text-gray-600">Estimated delivery: 3-5 business days</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
                        <h3 className="font-bold text-dark mb-2">📧 Confirmation Email</h3>
                        <p className="text-sm text-gray-600">
                            We've sent an order confirmation email with all the details.
                            Please check your inbox (and spam folder).
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/products')}
                            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Continue Shopping
                        </button>
                        <button
                            onClick={() => navigate('/track-order')}
                            className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                        >
                            Track This Order
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-gray-200 text-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>

                    {/* Support */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
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
        </div>
    );
};

export default OrderConfirmation;
