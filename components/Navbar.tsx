
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkClass = (path: string) => {
        const isActive = location.pathname === path;
        return `font-ui font-bold text-sm tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-md whitespace-nowrap ${isActive
                ? 'text-trimera-gold'
                : 'text-trimera-stone/80 hover:text-white hover:bg-white/10'
            }`;
    };

    // Split navigation items for left and right sides
    const midPoint = Math.ceil(NAV_ITEMS.length / 2); // 4 items left, 3 right
    const leftNavItems = NAV_ITEMS.slice(0, midPoint);
    const rightNavItems = NAV_ITEMS.slice(midPoint);

    return (
        <>
            <div className={`fixed z-40 transition-all duration-500 ease-in-out w-full flex justify-center ${isScrolled ? 'top-4 px-4' : 'top-0 px-0'
                }`}>
                <nav className={`
          w-full transition-all duration-500 flex items-center px-6 lg:px-12 relative
          ${isScrolled
                        ? 'max-w-7xl rounded-2xl bg-trimera-forest/95 backdrop-blur-md shadow-2xl h-24 border border-white/10'
                        : 'h-40 bg-gradient-to-b from-black/80 to-transparent'
                    }
        `}>

                    {/* Mobile Menu Button (Absolute Left on Mobile) */}
                    <button
                        className="lg:hidden absolute left-6 text-trimera-gold hover:text-white transition-colors z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Left Desktop Nav */}
                    <div className="hidden lg:flex flex-1 justify-end items-center gap-1 pr-8">
                        {leftNavItems.map((item) => (
                            <Link key={item.id} to={`/${item.id}`} className={getLinkClass(`/${item.id}`)}>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Logo Area (Centered) */}
                    <div className="flex-shrink-0 mx-auto lg:mx-4 transition-all duration-500">
                        <Link to="/" className="block group">
                            <img
                                src="https://i.imgur.com/873qBsT.png"
                                alt="Trimera Universe"
                                className={`transition-all duration-500 object-contain drop-shadow-lg group-hover:drop-shadow-2xl ${isScrolled ? 'h-20' : 'h-32'}`}
                            />
                        </Link>
                    </div>

                    {/* Right Desktop Nav */}
                    <div className="hidden lg:flex flex-1 justify-start items-center gap-1 pl-8">
                        {rightNavItems.map((item) => (
                            <Link key={item.id} to={`/${item.id}`} className={getLinkClass(`/${item.id}`)}>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-trimera-forest/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    {/* Logo in Mobile Menu */}
                    <img src="https://i.imgur.com/873qBsT.png" alt="Trimera" className="h-24 mb-4 opacity-80" />

                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.id}
                            to={`/${item.id}`}
                            className="font-title text-3xl text-trimera-stone hover:text-trimera-gold transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};
