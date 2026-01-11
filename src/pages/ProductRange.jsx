import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';

const ProductRange = () => {
    // Group products by category
    const categories = [
        "Jams",
        "Pickles",
        "Chutneys",
        "Canned Food",
        "Ready to Eat",
        "Sauces"
    ];

    const groupedProducts = categories.reduce((acc, category) => {
        acc[category] = products.filter(p => p.category === category);
        return acc;
    }, {});

    const categoryDisplayNames = {
        "Jams": "Fruit Jams",
        "Pickles": "Pickles",
        "Chutneys": "Chutneys",
        "Canned Food": "Canned Fruits",
        "Ready to Eat": "Ready to Eat Vegetables",
        "Sauces": "Tomato Ketchup & Sauces"
    };

    return (
        <div className="bg-white min-h-screen pt-4 pb-16">
            <div className="bg-primary text-white py-12 text-center mb-8">
                <h1 className="text-4xl font-serif font-bold mb-2">Products Range</h1>
                <p className="text-lg opacity-90">Manufacturers, Exporters, and Suppliers from India</p>
            </div>

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-dark text-white text-left">
                                <th className="p-4 border-b border-gray-600 w-1/3">Product Category</th>
                                <th className="p-4 border-b border-gray-600">Products</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-warm/10'}`}>
                                    <td className="p-4 align-top border-r border-gray-100">
                                        <Link
                                            to={`/products?category=${category}`}
                                            className="text-primary font-bold text-lg hover:underline block mb-2"
                                        >
                                            {categoryDisplayNames[category]}
                                        </Link>
                                        <div className="w-16 h-16 rounded overflow-hidden border border-gray-200">
                                            {groupedProducts[category][0] && (
                                                <img
                                                    src={groupedProducts[category][0].image}
                                                    alt={category}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 align-top">
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {groupedProducts[category].map(product => (
                                                <li key={product.id} className="flex items-center">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                                    <Link
                                                        to={`/products/${product.id}`}
                                                        className="text-dark hover:text-primary transition-colors hover:underline"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductRange;
