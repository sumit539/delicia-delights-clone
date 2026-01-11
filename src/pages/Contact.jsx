import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { sendEmail } from '../utils/emailService';

const Contact = () => {
    const location = useLocation();
    const formRef = useRef();

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        sizeInterest: '',
        message: ''
    });

    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    // Handle incoming state from Product Detail page
    useEffect(() => {
        if (location.state?.consultationReference) {
            setFormData(prev => ({
                ...prev,
                message: `${location.state.consultationReference}\n\nI would like more information about this product...`
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        const result = await sendEmail(formRef.current);

        if (result.success) {
            setStatus({ loading: false, success: true, error: null });
            setFormData({ firstName: '', lastName: '', email: '', phone: '', countryCode: '+91', sizeInterest: '', message: '' }); // Reset form
            setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000); // Clear success message
        } else {
            setStatus({ loading: false, success: false, error: result.error });
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-secondary text-white py-16 text-center">
                <h1 className="text-5xl font-serif font-bold mb-4">Contact Us</h1>
                <p className="text-xl">We'd love to hear from you.</p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <div>
                        <h2 className="text-3xl font-bold text-dark mb-8">Get in Touch</h2>
                        <p className="text-gray-600 mb-8">
                            Whether you are looking for bulk supplies, dealership opportunities, or just want to appreciate our products, drop us a line!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark">Our Location</h4>
                                    <p className="text-gray-500">No. 10 Bhavanipur Chhoti Peerumadara,<br />Nainital, Ram Nagar, Uttarakhand, India, 244715</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary text-xl">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark">Phone</h4>
                                    <p className="text-gray-500">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark">Email</h4>
                                    <p className="text-gray-500">sales@deliciadelights.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="mt-12 h-64 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1578.966374929848!2d79.05597956461942!3d29.28929769062325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a424269e88a0d%3A0x634d0b165b4c4832!2sDelicia%20Foods%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1704561234567!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Delicia Foods Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-warm p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold text-dark mb-6">Send us a Message</h3>

                        {status.success && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline"> Your message has been sent. We'll get back to you shortly.</span>
                            </div>
                        )}

                        {status.error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                                <strong className="font-bold">Error!</strong>
                                <span className="block sm:inline"> {status.error}</span>
                            </div>
                        )}

                        {/* Note: The name attributes are important for EmailJS variables */}
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    required
                                />
                            </div>

                            {/* New Fields: Purpose, Business Type, Application */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Purpose of Inquiry</label>
                                    <div className="relative">
                                        <select
                                            name="purpose"
                                            value={formData.purpose || ''}
                                            onChange={handleChange}
                                            className={`w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none appearance-none bg-transparent ${!formData.purpose ? 'text-gray-400' : 'text-dark'}`}
                                            required
                                        >
                                            <option value="" className="text-gray-400">Select Purpose...</option>
                                            <option value="Selling" className="text-dark">Selling (Distribution/Retail)</option>
                                            <option value="Reselling" className="text-dark">Reselling (Wholesale/Trader)</option>
                                            <option value="Consumption" className="text-dark">End Consumption</option>
                                            <option value="Other" className="text-dark">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Business Type</label>
                                    <input
                                        type="text"
                                        name="businessType"
                                        value={formData.businessType || ''}
                                        onChange={handleChange}
                                        placeholder="e.g., Retailer, Wholesaler, Hotel"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Application / Usage</label>
                                <input
                                    type="text"
                                    name="application"
                                    value={formData.application || ''}
                                    onChange={handleChange}
                                    placeholder="e.g., For Catering, Retail Shelves, Industrial Use"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Phone Number with Country Code */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                                <PhoneInput
                                    country={'in'}
                                    value={formData.phone}
                                    onChange={(phone) => setFormData({ ...formData, phone })}
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                    }}
                                    containerClass="w-full"
                                    inputClass="!w-full !py-6 !border-gray-300 !rounded-lg focus:!border-primary"
                                    buttonClass="!border-gray-300 !rounded-l-lg"
                                />
                            </div>

                            {/* Interested Size (Optional) */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Interested Size (Optional)</label>
                                {location.state?.sizes ? (
                                    <select
                                        name="sizeInterest"
                                        value={formData.sizeInterest}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    >
                                        <option value="">Select a size...</option>
                                        {location.state.sizes.map((size, index) => (
                                            <option key={index} value={size}>{size}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        name="sizeInterest"
                                        value={formData.sizeInterest}
                                        onChange={handleChange}
                                        placeholder="e.g., 500g, Bulk"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    />
                                )}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`w-full bg-primary hover:bg-red-600 text-white font-bold py-3 rounded-lg transition shadow-lg ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status.loading ? 'Sending...' : 'Submit Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
