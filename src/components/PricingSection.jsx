import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Starter",
      subTitle: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      btnText: "Get Started Free",
      isPro: false
    },
    {
      title: "Pro",
      subTitle: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      btnText: "Start Pro Trial",
      isPro: true
    },
    {
      title: "Enterprise",
      subTitle: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      btnText: "Contact Sales",
      isPro: false
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-10/12 mx-auto">
        
        {/* Header Content */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-[900] text-[#1E293B] tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 ${
                plan.isPro 
                ? "bg-[#7C3AED] text-white border-transparent shadow-2xl shadow-purple-200 scale-105 z-10 py-14" 
                : "bg-white text-[#1E293B] border-slate-100 shadow-sm hover:shadow-xl py-10"
              }`}
            >
              {/* Popular Badge for Pro Plan */}
              {plan.isPro && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white shadow-md">
                  Most Popular
                </div>
              )}

              {/* Plan Details */}
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-1">{plan.title}</h3>
                <p className={`text-sm font-semibold ${plan.isPro ? "text-purple-100" : "text-slate-400"}`}>
                  {plan.subTitle}
                </p>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={`text-sm font-bold ${plan.isPro ? "text-purple-200" : "text-slate-400"}`}>
                  /Month
                </span>
              </div>

              
              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] font-semibold">
                    <svg 
                      className={`w-5 h-5 mt-0.5 shrink-0 ${plan.isPro ? "text-white" : "text-green-500"}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.isPro ? "text-white" : "text-slate-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className={`w-full py-4.5 rounded-2xl font-bold text-sm transition-all active:scale-95 ${
                plan.isPro 
                ? "bg-white text-[#7C3AED] hover:bg-slate-50 shadow-lg" 
                : "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-md shadow-purple-50"
              }`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;