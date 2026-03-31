import React from 'react';

const Navbar = ({ cartCount }) => {
    return (
        <nav className="bg-white border-b border-[#f1f1f1] sticky top-0 z-50 py-5">
            <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">

                <div className="flex items-center gap-4">
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="p-2 hover:bg-gray-100 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-xl w-56 font-semibold text-gray-600 uppercase tracking-wide">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <h1 className="text-2xl font-extrabold text-[#7C3AED] tracking-tight">
                        DigiTools
                    </h1>
                </div>

                <div className="hidden lg:flex items-center">
                    <ul className="flex space-x-8 text-[15px] font-semibold text-gray-600">
                        <li className="hover:text-[#7C3AED] cursor-pointer transition">Products</li>
                        <li className="hover:text-[#7C3AED] cursor-pointer transition">Features</li>
                        <li className="hover:text-[#7C3AED] cursor-pointer transition">Pricing</li>
                        <li className="hover:text-[#7C3AED] cursor-pointer transition">Testimonials</li>
                        <li className="hover:text-[#7C3AED] cursor-pointer transition">FAQ</li>
                    </ul>
                </div>

                <div className="flex items-center space-x-5">
                    <div className="relative cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-[#7C3AED] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>

                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#7C3AED] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <button className="hidden sm:block text-sm font-bold text-gray-700 hover:text-black">
                        Login
                    </button>

                    <button className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;