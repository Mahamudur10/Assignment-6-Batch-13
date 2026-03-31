import React from 'react';

const Cart = ({ cartItems, removeFromCart, handleCheckout }) => {

    const totalAmount = cartItems.reduce((total, item) => {
        const priceNumber = Number(item.price.replace(/[^0-9.-]+/g, ""));
        return total + priceNumber;
    }, 0);

    return (
        <section className="py-8 min-h-[400px]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-black text-slate-900 mb-10 text-center uppercase tracking-tight">
                    Your Selected Tools
                </h2>

                {cartItems.length === 0 ? (
                    <div className="text-center py-24 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 shadow-sm">
                        <div className="text-6xl mb-4">🛒</div>
                        <p className="text-slate-400 text-xl font-semibold italic">Your cart is currently empty!</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center p-3 group-hover:scale-105 transition-transform">
                                        <img
                                            src={encodeURI(item.imagePath)}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                            onError={(e) => { e.target.src = "https://via.placeholder.com/64"; }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-[#7C3AED] font-extrabold text-lg">{item.price}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-50 text-red-500 px-6 py-2.5 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all active:scale-95 shadow-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <div className="mt-12 pt-8 border-t-2 border-slate-200">
                            <div className="flex justify-between items-center mb-10 bg-purple-50 p-7 rounded-[2rem] border border-purple-100 shadow-inner">
                                <span className="text-2xl font-extrabold text-slate-700">Total Amount:</span>
                                <span className="text-4xl font-black text-[#7C3AED]">
                                    ${totalAmount}
                                </span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-[#7C3AED] text-white py-5 rounded-[1.5rem] font-black text-xl hover:bg-[#6D28D9] shadow-xl hover:shadow-purple-200 transition-all active:scale-95 uppercase tracking-wide"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;