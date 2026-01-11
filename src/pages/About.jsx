import React from 'react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-5xl font-serif font-bold mb-4">About Us</h1>
                <p className="text-xl max-w-2xl mx-auto">A legacy of taste, quality, and trust since 2004.</p>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Story Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-dark mb-6">Our Journey</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Delicia Delights, established in 2004, was founded with a singular vision: to bring the authentic taste of Indian fruits and vegetables to the world year-round. Led by our CEO, <span className="font-semibold text-primary">Mr. Deepak Puri</span>, and the founding duo, we have grown from a small unit to a global name.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We specialize in processing seasonal fruits and vegetables, located amidst <span className="font-semibold text-dark">lush green orchards of Mangoes and Litchis in Nainital</span>, ensuring that the freshness is locked in at the source.
                        </p>

                        {/* Business Attributes */}
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex justify-between border-b border-gray-200 pb-2">
                                    <span className="font-semibold">Nature of Business</span>
                                    <span>Manufacturer & Exporter</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-2 pt-2">
                                    <span className="font-semibold">Year of Establishment</span>
                                    <span>2004</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span className="font-semibold">Legal Status</span>
                                    <span>Private Limited Company</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80" alt="Factory" className="rounded-xl shadow-lg" />
                    </div>
                </div>

                {/* Quality Section */}
                <div className="bg-warm rounded-3xl p-12 text-center mb-16">
                    <h2 className="text-3xl font-bold text-dark mb-8">Quality Assurance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">🏭</div>
                            <h3 className="font-bold text-xl mb-2">Modern Infrastructure</h3>
                            <p className="text-gray-500">State-of-the-art facility situated in the heart of fruit orchards for immediate processing.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">✅</div>
                            <h3 className="font-bold text-xl mb-2">ISO 22000:2005 Certified</h3>
                            <p className="text-gray-500">Adhering to strict international food safety standards and FSSAI regulations.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="font-bold text-xl mb-2">Farm to Fork</h3>
                            <p className="text-gray-500">Direct sourcing from farmers to ensure optimal freshness and quality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
