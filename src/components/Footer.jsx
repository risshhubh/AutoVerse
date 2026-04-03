import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();

    const handleScrollToExperience = (e) => {
        if (location.pathname !== '/') {
            // Let the Link handle navigation to home first
            return;
        }
        e.preventDefault();
        const element = document.getElementById('experience');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <footer className="relative bg-[#000000] text-white pt-20 pb-10 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
                <h1 className="text-[15rem] md:text-[25rem] font-black font-cinzel leading-none text-white whitespace-nowrap absolute -bottom-20 -left-10 md:left-20 tracking-tighter">
                    AutoVerse
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <h2 className="text-3xl font-cinzel font-bold mb-6">AutoVerse</h2>
                        <p className="text-white/60 leading-relaxed max-w-sm mb-8">
                            Redefining automotive excellence through innovation and timeless design.
                            Experience the future of driving today.
                        </p>

                        {/* Newsletter */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Stay updated..."
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors backdrop-blur-sm placeholder-white/30"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-[#000000] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:col-span-2"></div>

                    {/* Links Columns */}
                    {/* Links Columns */}
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-lg mb-6 tracking-wide">Explore</h3>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/body-styles" className="hover:text-white transition-colors">Body Styles</Link></li>
                            <li><Link to="/brands" className="hover:text-white transition-colors">Brands</Link></li>
                            <li>
                                <Link
                                    to="/#experience"
                                    onClick={handleScrollToExperience}
                                    className="hover:text-white transition-colors"
                                >
                                    Experience
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-bold text-lg mb-6 tracking-wide">Company</h3>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><span className="cursor-not-allowed opacity-50">About Us</span></li>
                            <li><span className="cursor-not-allowed opacity-50">Careers</span></li>
                            <li><span className="cursor-not-allowed opacity-50">Press</span></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="font-bold text-lg mb-6 tracking-wide">Legal</h3>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><span className="cursor-not-allowed opacity-50">Privacy Policy</span></li>
                            <li><span className="cursor-not-allowed opacity-50">Terms of Service</span></li>
                            <li><span className="cursor-not-allowed opacity-50">Cookie Policy</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs uppercase tracking-widest">
                        &copy; {currentYear} AutoVerse Inc. All rights reserved.
                    </p>

                    {/* Socials */}
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/risshhubh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white text-xs uppercase tracking-widest transition-colors relative group"
                        >
                            GitHub
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full opacity-50"></span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rishabh-srivastava-5a509232a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white text-xs uppercase tracking-widest transition-colors relative group"
                        >
                            LinkedIn
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full opacity-50"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
