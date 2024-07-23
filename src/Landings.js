import React from 'react';

import { Link } from 'react-router-dom';

function MainPages() {
    return (
        <div className="bg-gray-100">
            {/* Banner Section */}
            <div className="relative h-60 sm:h-60 md:h-70 lg:h-82 w-full">
                <img
                    src="https://www.nutritionsystems.co.nz/wp-content/uploads/2024/06/Ryse_Banner.jpeg"
                    alt="banner"
                    className="absolute inset-0 object-cover w-full h-full"
                />
            </div>

            {/* Best Sellers Section */}
            <div className="container mx-auto px-4 lg:px-0 py-8">
                <h2 className="font-bold text-3xl text-center mb-8">Our Best Sellers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {/* Product Cards */}
                    <div className="block mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://rysesupps.com/cdn/shop/files/2lb_ct_1_grande.webp?v=1718338127"
                            alt="Ryse Protein"
                            className="h-40 w-full object-contain"
                        />
                        <div className="p-4 bg-white">
                            <h2 className="text-xl font-bold mb-2">Ryse Protein Powder</h2>
                            <ul className="text-sm mb-4">
                                <li>One of the best proteins on the Market</li>
                                <li>Muscle Pumps and no clumps</li>
                                <li>The best flavors</li>
                            </ul>
                            <p className="text-gray-700">$44.95</p>
                        </div>
                    </div>

                    <div className="block mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://rysesupps.com/cdn/shop/files/2lb_ct_1_grande.webp?v=1718338127"
                            alt="Ryse Protein"
                            className="h-40 w-full object-contain"
                        />
                        <div className="p-4 bg-white">
                            <h2 className="text-xl font-bold mb-2">Ryse Protein Powder</h2>
                            <ul className="text-sm mb-4">
                                <li>One of the best proteins on the Market</li>
                                <li>Muscle Pumps and no clumps</li>
                                <li>The best flavors</li>
                            </ul>
                            <p className="text-gray-700">$44.95</p>
                        </div>
                    </div>

                    <div className="block mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://rysesupps.com/cdn/shop/files/2lb_ct_1_grande.webp?v=1718338127"
                            alt="Ryse Protein"
                            className="h-40 w-full object-contain"
                        />
                        <div className="p-4 bg-white">
                            <h2 className="text-xl font-bold mb-2">Ryse Protein Powder</h2>
                            <ul className="text-sm mb-4">
                                <li>One of the best proteins on the Market</li>
                                <li>Muscle Pumps and no clumps</li>
                                <li>The best flavors</li>
                            </ul>
                            <p className="text-gray-700">$44.95</p>
                        </div>
                    </div>
                </div>

                {/* Button to See All Products */}
            <div className="flex justify-center mt-8">
                    <Link to="/Products">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">
                            See All Products
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-800 text-white py-4 mt-auto">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Jacked Supplements. All rights reserved.</p>
                </div>
            </div> 
        </div>
    );
}

export default MainPages;
