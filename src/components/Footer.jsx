import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0b1120] text-gray-400 font-sans">

            <div className="max-w-10/12 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">


                <div className="lg:col-span-2">
                    <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
                    <p className="max-w-xs text-sm leading-relaxed">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h6 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Product</h6>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Company</h6>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Resources</h6>
                    <ul className="space-y-2 text-sm mb-6">
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    </ul>

                    <h6 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Social Links</h6>
                    <div className="flex gap-3">

                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>

                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </a>

                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;