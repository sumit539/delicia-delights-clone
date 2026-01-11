import React from 'react';
import { Link } from 'react-router-dom';
import { products, testimonials, clientele } from '../data/mockData';
import { FaArrowRight, FaCheckCircle, FaLeaf, FaMedal, FaIndustry } from 'react-icons/fa';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
    // Handle hash navigation
    React.useEffect(() => {
        if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col">
            {/* Hero Slider */}
            <HeroSlider />

            {/* About Summary */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1598460599292-2bc3827ec3d9?auto=format&fit=crop&w=800&q=80"
                            alt="Fresh Orchard"
                            className="rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">Since 2004</h4>
                        <h2 className="text-4xl font-serif font-bold text-dark mb-6">Welcome to Delicia Foods India Pvt. Ltd.</h2>
                        <h3 className="text-xl font-medium text-gray-700 mb-4 italic">"Nature…delivered in a Jar"</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            We warmly invite you to experience the world of flavour at Delicia Foods India Pvt. Ltd., a trusted name in the food industry for over 21 years. Known for our premium-quality food products, we have a proud history since 2004, catering to different market sectors such as food services, domestic retail, institutional, defense, and exports.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <FaLeaf className="text-secondary text-2xl" />
                                <span className="font-semibold text-dark">100% Natural</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMedal className="text-accent text-2xl" />
                                <span className="font-semibold text-dark">Premium Quality</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-primary text-2xl" />
                                <span className="font-semibold text-dark">Hygienic Process</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaIndustry className="text-dark text-2xl" />
                                <span className="font-semibold text-dark">State-of-art Unit</span>
                            </div>
                        </div>

                        <Link to="/about" className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                            Read Our Story <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-20 bg-warm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-dark mb-4">Our Premium Range</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Explore our diverse collection of processed food products, made with the finest ingredients.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                to={`/products/${product.id}`}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group flex flex-col"
                            >
                                <div className="aspect-square overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition z-10"></div>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 p-4"
                                    />
                                    <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                    <p className="text-gray-500 mb-4 line-clamp-2">{product.description}</p>

                                    <div className="mt-auto">
                                        <p className="text-green-600 font-semibold mb-3 text-sm">
                                            {product.sizes ? `Available in: ${product.sizes.join(", ")}` : "Available in various sizes"}
                                        </p>
                                        <span className="text-red-600 font-bold uppercase tracking-wider text-sm border-2 border-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all inline-block">
                                            Enquire Now
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/products" className="btn-secondary border-2 border-dark text-dark px-8 py-3 rounded-full font-semibold hover:bg-dark hover:text-white transition">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Clientele */}
            <section id="clientele" className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-4 text-center mb-10">
                    <h2 className="text-3xl font-serif font-bold text-dark">Our Esteemed Clientele</h2>
                </div>
                <div className="relative">
                    <div className="flex items-center justify-center flex-wrap gap-12 px-4">
                        {clientele.map((client, index) => (
                            <div key={index} className="w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 p-2">
                                <img src={client.image} alt={client.name} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-12">What Our Clients Say</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="bg-white/10 backdrop-blur-md p-8 rounded-xl max-w-lg text-left border border-white/20">
                                <p className="text-lg italic mb-6">"{t.text}"</p>
                                <div>
                                    <h4 className="font-bold text-xl">{t.name}</h4>
                                    <span className="text-yellow-300 text-sm">{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-dark mb-6">Ready to Experience the Taste?</h2>
                    <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">Get in touch with us for bulk orders, distributorship, or general inquiries.</p>
                    <Link to="/contact" className="bg-secondary hover:bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-green-500/30 transition transform hover:-translate-y-1">
                        Contact Us Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
