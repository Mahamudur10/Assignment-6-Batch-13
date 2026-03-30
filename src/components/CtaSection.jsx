import React from 'react';

const CtaSection = () => {
    return (
        <section className="bg-[#7C3AED] py-20 md:py-28 px-6">
            <div className="max-w-7xl mx-auto text-center">


                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-[600] tracking-tight mb-6">
                    Ready To Transform Your Workflow?
                </h2>


                <p className="text-purple-100 text-sm md:text-lg max-w-3xl mx-auto mb-12 font-medium opacity-90">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    <button className="bg-white text-[#7C3AED] px-10 py-4 rounded-full font-bold text-[15px] hover:bg-slate-50 transition-all shadow-lg active:scale-95">
                        Explore Products
                    </button>


                    <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-[15px] hover:bg-white/10 transition-all active:scale-95">
                        View Pricing
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-purple-200 text-sm font-semibold opacity-80">
                    <span>14-day free trial</span>
                    <span className="hidden sm:block">•</span>
                    <span>No credit card required</span>
                    <span className="hidden sm:block">•</span>
                    <span>Cancel anytime</span>
                </div>

            </div>
        </section>
    );
};

export default CtaSection;