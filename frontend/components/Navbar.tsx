import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Users, Crown, Sparkles, Trophy, BookOpen, Zap, Flame, Shield } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { NavItem } from '../types';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // States and Refs for Personagens dropdown
    const [dropdownPersonagensAberto, setDropdownPersonagensAberto] = useState(false);
    const [acordeaoPersonagensAberto, setAcordeaoPersonagensAberto] = useState(false);
    const refDropdownPersonagens = useRef<HTMLDivElement>(null);

    // States and Refs for Energias dropdown
    const [dropdownEnergiasAberto, setDropdownEnergiasAberto] = useState(false);
    const [acordeaoEnergiasAberto, setAcordeaoEnergiasAberto] = useState(false);
    const refDropdownEnergias = useRef<HTMLDivElement>(null);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const executarCliqueFora = (evento: MouseEvent) => {
            // Click outside Personagens dropdown
            if (refDropdownPersonagens.current && !refDropdownPersonagens.current.contains(evento.target as Node)) {
                setDropdownPersonagensAberto(false);
            }
            // Click outside Energias dropdown
            if (refDropdownEnergias.current && !refDropdownEnergias.current.contains(evento.target as Node)) {
                setDropdownEnergiasAberto(false);
            }
        };
        document.addEventListener('mousedown', executarCliqueFora);
        return () => document.removeEventListener('mousedown', executarCliqueFora);
    }, []);

    // Actions for Personagens dropdown
    const executarToggleDropdownPersonagens = () => {
        setDropdownPersonagensAberto(anterior => !anterior);
    };

    const executarToggleAcordeaoPersonagens = () => {
        setAcordeaoPersonagensAberto(anterior => !anterior);
    };

    const executarCliqueItemDropdownPersonagens = () => {
        setDropdownPersonagensAberto(false);
    };

    const executarCliqueItemMobilePersonagens = () => {
        setAcordeaoPersonagensAberto(false);
        setIsMobileMenuOpen(false);
    };

    // Actions for Energias dropdown
    const executarToggleDropdownEnergias = () => {
        setDropdownEnergiasAberto(anterior => !anterior);
    };

    const executarToggleAcordeaoEnergias = () => {
        setAcordeaoEnergiasAberto(anterior => !anterior);
    };

    const executarCliqueItemDropdownEnergias = () => {
        setDropdownEnergiasAberto(false);
    };

    const executarCliqueItemMobileEnergias = () => {
        setAcordeaoEnergiasAberto(false);
        setIsMobileMenuOpen(false);
    };

    const getLinkClass = (path: string) => {
        const isActive = location.pathname === path;
        return `font-ui font-bold text-sm tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-md whitespace-nowrap ${isActive
                ? 'text-trimera-gold'
                : 'text-trimera-stone/80 hover:text-white hover:bg-white/10'
            }`;
    };

    const renderizarItemNavegacao = (item: NavItem) => {
        // Personagens Dropdown
        if (item.id === 'personagens') {
            const estaAtivo = ['/personagens', '/deuses', '/entidades', '/lendarios'].includes(location.pathname);
            return (
                <div key={item.id} className="relative" ref={refDropdownPersonagens}>
                    <button
                        onClick={executarToggleDropdownPersonagens}
                        className={`font-ui font-bold text-sm tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-md whitespace-nowrap flex items-center gap-1 ${estaAtivo
                                ? 'text-trimera-gold'
                                : 'text-trimera-stone/80 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownPersonagensAberto ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    {dropdownPersonagensAberto && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-trimera-forest border border-trimera-gold/30 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-md">
                            <Link
                                to="/personagens"
                                onClick={executarCliqueItemDropdownPersonagens}
                                className="px-4 py-3 text-trimera-stone/90 hover:text-trimera-gold hover:bg-white/5 transition-all flex items-center gap-3 font-ui text-xs tracking-wider uppercase font-semibold"
                            >
                                <Users size={16} className="text-trimera-gold" />
                                Personagens
                            </Link>
                            <Link
                                to="/deuses"
                                onClick={executarCliqueItemDropdownPersonagens}
                                className="px-4 py-3 text-trimera-stone/90 hover:text-trimera-gold hover:bg-white/5 transition-all flex items-center gap-3 font-ui text-xs tracking-wider uppercase font-semibold"
                            >
                                <Crown size={16} className="text-trimera-gold" />
                                Deuses
                            </Link>
                            <Link
                                to="/entidades"
                                onClick={executarCliqueItemDropdownPersonagens}
                                className="px-4 py-3 text-trimera-stone/90 hover:text-trimera-gold hover:bg-white/5 transition-all flex items-center gap-3 font-ui text-xs tracking-wider uppercase font-semibold"
                            >
                                <Sparkles size={16} className="text-trimera-gold" />
                                Entidades
                            </Link>
                            <Link
                                to="/lendarios"
                                onClick={executarCliqueItemDropdownPersonagens}
                                className="px-4 py-3 text-trimera-stone/90 hover:text-trimera-gold hover:bg-white/5 transition-all flex items-center gap-3 font-ui text-xs tracking-wider uppercase font-semibold"
                            >
                                <Trophy size={16} className="text-trimera-gold" />
                                Lendários
                            </Link>
                        </div>
                    )}
                </div>
            );
        }

        // Energias Dropdown
        if (item.id === 'energias') {
            const estaAtivo = ['/energias', '/poderes', '/tatuagens', '/especializacoes'].includes(location.pathname);
            return (
                <div key={item.id} className="relative" ref={refDropdownEnergias}>
                    <button
                        onClick={executarToggleDropdownEnergias}
                        className={`font-ui font-bold text-sm tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-md whitespace-nowrap flex items-center gap-1 ${estaAtivo
                                ? 'text-trimera-gold'
                                : 'text-trimera-stone/80 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownEnergiasAberto ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    {dropdownEnergiasAberto && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-trimera-forest border border-trimera-gold/30 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-md">
                            <Link
                                to="/energias"
                                onClick={executarCliqueItemDropdownEnergias}
                                className="px-4 py-3 text-trimera-stone/90 hover:text-trimera-gold hover:bg-white/5 transition-all flex items-center gap-3 font-ui text-xs tracking-wider uppercase font-semibold"
                            >
                                <BookOpen size={16} className="text-trimera-gold" />
                                Energias
                            </Link>
                            <Link
                                to="/poderes"
                                onClick={executarCliqueItemDropdownEnergias}
                                className="px-4 py-3 text-trimera-stone/90 hover:text-trimera-gold hover:bg-white/5 transition-all flex items-center gap-3 font-ui text-xs tracking-wider uppercase font-semibold"
                            >
                                <Zap size={16} className="text-trimera-gold" />
                                Poderes
                            </Link>
                            <Link
                                to="/tatuagens"
                                onClick={executarCliqueItemDropdownEnergias}
                                className="px-4 py-3 text-trimera-stone/90 hover:text-trimera-gold hover:bg-white/5 transition-all flex items-center gap-3 font-ui text-xs tracking-wider uppercase font-semibold"
                            >
                                <Flame size={16} className="text-trimera-gold" />
                                Tatuagens
                            </Link>
                            <Link
                                to="/especializacoes"
                                onClick={executarCliqueItemDropdownEnergias}
                                className="px-4 py-3 text-trimera-stone/90 hover:text-trimera-gold hover:bg-white/5 transition-all flex items-center gap-3 font-ui text-xs tracking-wider uppercase font-semibold"
                            >
                                <Shield size={16} className="text-trimera-gold" />
                                Especializações
                            </Link>
                        </div>
                    )}
                </div>
            );
        }

        return (
            <Link key={item.id} to={`/${item.id}`} className={getLinkClass(`/${item.id}`)}>
                {item.label}
            </Link>
        );
    };

    // Split navigation items for left and right sides
    const midPoint = Math.ceil(NAV_ITEMS.length / 2);
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

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden absolute left-6 text-trimera-gold hover:text-white transition-colors z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Left Desktop Nav */}
                    <div className="hidden lg:flex flex-1 justify-end items-center gap-1 pr-8">
                        {leftNavItems.map(renderizarItemNavegacao)}
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
                        {rightNavItems.map(renderizarItemNavegacao)}
                    </div>

                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-trimera-forest/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 overflow-y-auto py-12 animate-in fade-in duration-200">
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    {/* Logo in Mobile Menu */}
                    <img src="https://i.imgur.com/873qBsT.png" alt="Trimera" className="h-24 mb-4 opacity-80" />

                    {NAV_ITEMS.map((item) => {
                        // Personagens mobile accordion
                        if (item.id === 'personagens') {
                            return (
                                <div key={item.id} className="w-full flex flex-col items-center">
                                    <button
                                        onClick={executarToggleAcordeaoPersonagens}
                                        className="font-title text-3xl text-trimera-stone hover:text-trimera-gold transition-colors flex items-center gap-2"
                                    >
                                        {item.label}
                                        <ChevronDown size={24} className={`transition-transform duration-300 ${acordeaoPersonagensAberto ? 'rotate-180' : 'rotate-0'}`} />
                                    </button>

                                    <div className={`
                                        flex flex-col items-center gap-4 mt-4 w-full bg-black/10 py-4 rounded-xl border border-white/5 transition-all duration-300 overflow-hidden
                                        ${acordeaoPersonagensAberto ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none mt-0 py-0 border-none'}
                                    `}>
                                        <Link
                                            to="/personagens"
                                            onClick={executarCliqueItemMobilePersonagens}
                                            className="font-title text-2xl text-trimera-stone/80 hover:text-trimera-gold transition-colors flex items-center gap-2"
                                        >
                                            <Users size={18} className="text-trimera-gold" />
                                            Personagens
                                        </Link>
                                        <Link
                                            to="/deuses"
                                            onClick={executarCliqueItemMobilePersonagens}
                                            className="font-title text-2xl text-trimera-stone/80 hover:text-trimera-gold transition-colors flex items-center gap-2"
                                        >
                                            <Crown size={18} className="text-trimera-gold" />
                                            Deuses
                                        </Link>
                                        <Link
                                            to="/entidades"
                                            onClick={executarCliqueItemMobilePersonagens}
                                            className="font-title text-2xl text-trimera-stone/80 hover:text-trimera-gold transition-colors flex items-center gap-2"
                                        >
                                            <Sparkles size={18} className="text-trimera-gold" />
                                            Entidades
                                        </Link>
                                        <Link
                                            to="/lendarios"
                                            onClick={executarCliqueItemMobilePersonagens}
                                            className="font-title text-2xl text-trimera-stone/80 hover:text-trimera-gold transition-colors flex items-center gap-2"
                                        >
                                            <Trophy size={18} className="text-trimera-gold" />
                                            Lendários
                                        </Link>
                                    </div>
                                </div>
                            );
                        }

                        // Energias mobile accordion
                        if (item.id === 'energias') {
                            return (
                                <div key={item.id} className="w-full flex flex-col items-center">
                                    <button
                                        onClick={executarToggleAcordeaoEnergias}
                                        className="font-title text-3xl text-trimera-stone hover:text-trimera-gold transition-colors flex items-center gap-2"
                                    >
                                        {item.label}
                                        <ChevronDown size={24} className={`transition-transform duration-300 ${acordeaoEnergiasAberto ? 'rotate-180' : 'rotate-0'}`} />
                                    </button>

                                    <div className={`
                                        flex flex-col items-center gap-4 mt-4 w-full bg-black/10 py-4 rounded-xl border border-white/5 transition-all duration-300 overflow-hidden
                                        ${acordeaoEnergiasAberto ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none mt-0 py-0 border-none'}
                                    `}>
                                        <Link
                                            to="/energias"
                                            onClick={executarCliqueItemMobileEnergias}
                                            className="font-title text-2xl text-trimera-stone/80 hover:text-trimera-gold transition-colors flex items-center gap-2"
                                        >
                                            <BookOpen size={18} className="text-trimera-gold" />
                                            Energias
                                        </Link>
                                        <Link
                                            to="/poderes"
                                            onClick={executarCliqueItemMobileEnergias}
                                            className="font-title text-2xl text-trimera-stone/80 hover:text-trimera-gold transition-colors flex items-center gap-2"
                                        >
                                            <Zap size={18} className="text-trimera-gold" />
                                            Poderes
                                        </Link>
                                        <Link
                                            to="/tatuagens"
                                            onClick={executarCliqueItemMobileEnergias}
                                            className="font-title text-2xl text-trimera-stone/80 hover:text-trimera-gold transition-colors flex items-center gap-2"
                                        >
                                            <Flame size={18} className="text-trimera-gold" />
                                            Tatuagens
                                        </Link>
                                        <Link
                                            to="/especializacoes"
                                            onClick={executarCliqueItemMobileEnergias}
                                            className="font-title text-2xl text-trimera-stone/80 hover:text-trimera-gold transition-colors flex items-center gap-2"
                                        >
                                            <Shield size={18} className="text-trimera-gold" />
                                            Especializações
                                        </Link>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.id}
                                to={`/${item.id}`}
                                className="font-title text-3xl text-trimera-stone hover:text-trimera-gold transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
};
