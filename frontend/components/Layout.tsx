
import React from 'react';
import { Castle } from 'lucide-react';
import { Navbar } from './Navbar';
import { LoreKeeper } from './LoreKeeper';

export const Layout = ({ children }: { children?: React.ReactNode }) => (
    <div className="font-sans antialiased text-gray-900 selection:bg-trimera-gold selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <LoreKeeper />
        <footer className="bg-trimera-forest text-trimera-stone py-16 border-t border-trimera-gold/30 mt-auto">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <Castle className="w-12 h-12 text-trimera-gold mx-auto mb-6 opacity-80" />
                <div className="font-logo text-4xl mb-6 tracking-wider">Trimera Universe</div>
                <p className="font-body text-lg opacity-60 max-w-lg mx-auto mb-8">
                    Uma enciclopédia viva de lendas, deuses e reinos esquecidos, tecida em código e magia.
                </p>
                <div className="flex justify-center gap-8 text-sm font-ui uppercase tracking-widest text-trimera-gold/60">
                    <span className="hover:text-trimera-gold cursor-pointer">Sobre</span>
                    <span className="hover:text-trimera-gold cursor-pointer">Mapa</span>
                    <span className="hover:text-trimera-gold cursor-pointer">Contato</span>
                </div>
                <div className="mt-12 text-xs font-ui opacity-30 border-t border-white/10 pt-8">
                    &copy; 2024 Projeto Trimera. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    </div>
);
