import React from 'react';

const GetStartedSection = () => {
    const steps = [
        {
            number: "01",
            title: "Create Account",
            desc: "Sign up for free in seconds. No credit card required to get started.",

            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Choose Products",
            desc: "Browse our catalog and select the tools that fit your needs.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4L4 7m0 0v10l8 4" />
                </svg>

            )
        },
        {
            number: "03",
            title: "Start Creating",
            desc: "Download and start using your premium tools immediately.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            )
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

                            <div className="absolute top-6 right-6 bg-[#7C3AED] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-base shadow-inner group-hover:scale-110 transition-transform">
                                {step.number}
                            </div>


                            <div className="bg-[#F3E8FF] rounded-full p-6 mb-8 mt-4 ring-8 ring-white shadow-[0_10px_20px_-10px_rgba(124,58,237,0.3)] transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                                {step.icon}
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