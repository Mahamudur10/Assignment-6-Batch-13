import React from 'react';

const HeroSection = () => {
    return (
        <section className="max-w-11/12 mx-auto bg-white py-16 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-100">
                    <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                    New: AI-Powered Tools Available
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                    Supercharge Your <br />
                    <span className="text-slate-800">Digital Workflow</span>
                </h1>

                {/* Description */}
                <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.Explore Products
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-4">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-purple-200">
                        Explore Products
                    </button>

                    <button className="flex items-center gap-2 border border-purple-200 text-purple-600 px-8 py-3.5 rounded-full font-semibold hover:bg-purple-50 transition-all">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Watch Demo
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative">
                <div className="w-full max-w-125 ml-auto">
                    <img
                        src="/assets/banner.png"
                        alt="Digital Workflow Banner"
                        className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;