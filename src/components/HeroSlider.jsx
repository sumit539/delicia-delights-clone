import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../assets/banners/banner1.jpg';
import banner2 from '../assets/banners/banner2.jpg';
import banner3 from '../assets/banners/banner3.jpg';
import banner4 from '../assets/banners/banner4.jpg';
import banner5 from '../assets/banners/banner5.jpg';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: banner1, title: "Premium Quality Canned Foods", subtitle: "Fresh from Nature to Your Table" },
        { image: banner2, title: "Delicious Fruit Jams", subtitle: "Made with Real Fruits" },
        { image: banner3, title: "Ready to Eat Delicacies", subtitle: "Authentic Indian Flavors" },
        { image: banner4, title: "Canned Fruits & Vegetables", subtitle: "Preserved at Peak Freshness" },
        { image: banner5, title: "Chutneys & Pickles", subtitle: "Traditional Recipes" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
                                {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 font-light">
                                {slide.subtitle}
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    to="/products"
                                    className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition text-lg"
                                >
                                    Explore Products
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-semibold transition text-lg"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Arrow Navigation */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
                aria-label="Previous slide"
            >
                ←
            </button>
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition"
                aria-label="Next slide"
            >
                →
            </button>
        </div>
    );
};

export default HeroSlider;
