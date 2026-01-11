import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/mockData';
import { FaFilter } from 'react-icons/fa';

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
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group flex flex-col"
                        >
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
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="mt-auto">
                                    <p className="text-green-600 font-semibold mb-3 text-sm">
                                        {product.sizes ? `Available in: ${product.sizes.join(", ")}` : "Available in various sizes"}
                                    </p>
                                    <Link
                                        to="/contact"
                                        state={{ productName: product.name }}
                                        className="text-red-600 font-bold uppercase tracking-wider text-sm border-2 border-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all inline-block"
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                            </div>
                        </Link>
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
