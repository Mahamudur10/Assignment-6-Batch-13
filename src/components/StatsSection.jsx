import React from 'react';

const StatsSection = () => {
    return (
        <section className="bg-[#7C3AED] py-10 md:py-15">

            <div className="max-w-8xl mx-auto px-6 lg:px-12">

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center justify-center text-white">

                    {/* Active Users */}
                    <div className="flex flex-col items-center text-center space-y-3 px-4">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-tighter">
                            50K+
                        </h2>
                        <p className="text-purple-100 text-lg md:text-xl font-medium opacity-80">
                            Active Users
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-3 px-4 border-y border-white/10 md:border-y-0 md:border-x md:border-white/20 py-8 md:py-0">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-tighter">
                            200+
                        </h2>
                        <p className="text-purple-100 text-lg md:text-xl font-medium opacity-80">
                            Premium Tools
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-center text-center space-y-3 px-4">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-tighter">
                            4.9
                        </h2>
                        <p className="text-purple-100 text-lg md:text-xl font-medium opacity-80">
                            Rating
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StatsSection;