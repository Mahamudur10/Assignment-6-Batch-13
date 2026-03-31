import React from 'react';

const GetStartedSection = () => {
    const steps = [
        {
            number: "01",
            title: "Create Account",
            desc: "Sign up for free in seconds. No credit card required to get started.",
            image: "./assets/user.png"
        },
        {
            number: "02",
            title: "Choose Products",
            desc: "Browse our catalog and select the tools that fit your needs.",
            image: "./assets/package.png"
        },
        {
            number: "03",
            title: "Start Creating",
            desc: "Download and start using your premium tools immediately.",
            image: "./assets/rocket.png"
        }
    ];

    return (
        <section className="bg-[#f9fafc] py-20 px-6">
            <div className="max-w-10/12 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col items-center text-center relative group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-50"
                        >
                            {/* Step Number */}
                            <div className="absolute top-6 right-6 bg-[#7C3AED] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base shadow-inner group-hover:scale-110 transition-transform">
                                {step.number}
                            </div>

                            {/* Image Container */}
                            <div className="bg-[#F3E8FF] rounded-full p-6 mb-8 mt-4 ring-8 ring-white shadow-[0_10px_20px_-10px_rgba(124,58,237,0.3)] transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-12 h-12 object-contain"
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/48" }}
                                />
                            </div>

                            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                                {step.title}
                            </h3>

                            <p className="text-slate-500 text-base leading-relaxed max-w-[280px]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetStartedSection;