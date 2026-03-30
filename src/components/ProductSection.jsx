import React, { useState, useEffect } from 'react';

const ProductSection = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {

    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error("JSON", err));
  }, []);

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight">
            Premium Digital Tools
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          <div className="flex justify-center items-center gap-4 pt-6">
            <button className="bg-[#7C3AED] text-white px-9 py-3 rounded-full font-bold shadow-lg hover:shadow-purple-200 transition-all">
              Products
            </button>
            <button className="bg-white text-slate-600 border border-slate-200 px-9 py-3 rounded-full font-bold hover:bg-slate-50">
              Cart
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative"
            >

              <div className={`absolute top-10 right-10 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${product.badgeColor}`}>
                {product.badge}
              </div>


              <div className="w-16 h-16 mb-8 bg-slate-50 rounded-2xl flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={encodeURI(product.imagePath)}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.log("Image not found at:", product.imagePath);
                    e.target.src = "https://via.placeholder.com/64";
                  }}
                />
              </div>


              <h3 className="text-2xl font-[900] text-slate-900 mb-3 tracking-tight">{product.title}</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 h-12 overflow-hidden">
                {product.desc}
              </p>


              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-3xl font-black text-slate-900">{product.price}</span>
                <span className="text-slate-400 font-bold text-sm">{product.period}</span>
              </div>


              <ul className="space-y-4 mb-12">
                {product.features && product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600 text-[14px] font-semibold">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>


              <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-4.5 rounded-2xl font-bold text-[15px] transition-all shadow-lg shadow-purple-50 active:scale-95">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;