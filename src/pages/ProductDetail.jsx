import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="text-center py-20">Product not found</div>;
    }

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="container mx-auto px-4">
                <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition">
                    <FaArrowLeft className="mr-2" /> Back to Products
                </Link>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Image */}
                    <div className="lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl font-serif font-bold text-dark mb-4">{product.name}</h1>
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-6">
                            {product.category}
                        </span>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            {product.description} Carefully processed to retain natural flavor and nutrition. Perfect for family meals or quick snacks.
                        </p>

                        <div className="mb-8 p-6 bg-warm rounded-xl border border-gray-100">
                            <h3 className="font-bold text-dark mb-4">Product Highlights</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-700"><FaCheck className="text-primary mr-3" /> No Artificial Preservatives</li>
                                <li className="flex items-center text-gray-700"><FaCheck className="text-primary mr-3" /> 100% Natural Ingredients</li>
                                <li className="flex items-center text-gray-700"><FaCheck className="text-primary mr-3" /> Internationally Certified Quality</li>
                                <li className="flex items-center text-gray-700">
                                    <FaCheck className="text-primary mr-3" />
                                    {product.sizes ? `Sizes: ${product.sizes.join(", ")}` : "Available in multiple pack sizes"}
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-xl bg-gray-50">
                            <h3 className="font-bold text-xl mb-4 text-dark">Interested in this product?</h3>
                            <p className="text-gray-600 mb-6">
                                We offer bulk supplies and customized solutions for {product.name}.
                                Get a quote or discuss your requirements with our sales team.
                            </p>
                            <Link
                                to="/contact"
                                state={{
                                    consultationReference: `Enquiry for ${product.name}`,
                                    sizes: product.sizes
                                }} // Pass state to Contact page
                                className="w-full block text-center bg-primary hover:bg-red-600 text-white font-bold py-4 rounded-lg transition shadow-md hover:shadow-lg"
                            >
                                Enquire Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
