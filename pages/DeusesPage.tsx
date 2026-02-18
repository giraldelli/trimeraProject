
import React from 'react';
import { Crown, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { MOCK_DATA } from '../constants';

export const DeusesPage = () => (
    <div className="min-h-screen bg-trimera-forest pt-52 pb-32 px-6 relative overflow-hidden page-transition">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
            <SectionHeader
                title="Panteão Divino"
                subtitle="As forças primordiais que moldaram as florestas e os mares."
                icon={<Crown className="w-8 h-8 text-trimera-gold" />}
                titleColor="text-trimera-gold"
                subtitleColor="text-trimera-gold"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                {/* Sublimy Special Card */}
                <div className="md:col-span-2 group relative bg-gradient-to-b from-gray-900 via-trimera-forest to-black border-2 border-trimera-gold p-10 rounded-xl shadow-[0_0_30px_rgba(196,146,47,0.3)] hover:shadow-[0_0_50px_rgba(196,146,47,0.5)] transition-all duration-500 overflow-hidden">
                    {/* Animated Background Effect */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                        <div className="shrink-0 w-24 h-24 bg-trimera-gold rounded-full flex items-center justify-center font-title text-5xl text-trimera-forest shadow-[0_0_20px_rgba(196,146,47,0.6)] group-hover:scale-110 transition-transform duration-700 border-4 border-trimera-stone">
                            S
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                <h2 className="font-title text-4xl md:text-5xl text-trimera-gold drop-shadow-md">Sublimy Excelsior</h2>
                                <span className="px-3 py-1 bg-trimera-gold/20 border border-trimera-gold text-trimera-gold text-xs font-bold uppercase tracking-widest rounded-full">
                                    O Deus do Universo
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-ui text-trimera-stone/70 uppercase tracking-widest mb-6">
                                <span className="flex items-center gap-2"><Sparkles size={14} className="text-trimera-gold" /> Domínio: Existência</span>
                                <span className="flex items-center gap-2"><Crown size={14} className="text-trimera-gold" /> Símbolo: O Vazio Criador</span>
                            </div>

                            <p className="font-body text-xl text-trimera-stone leading-relaxed">
                                O criador indireto do universo, nascido da implosão do nada absoluto em Candor. Sua consciência é o próprio tecido da realidade, e sua energia permeia cada átomo de Trimera.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Regular Gods */}
                {MOCK_DATA.deuses.map((deus, idx) => (
                    <div key={idx} className="group relative bg-trimera-forestLight/30 border border-trimera-gold/20 p-10 rounded-xl hover:bg-trimera-forestLight/50 transition-all duration-500">
                        <div className="flex items-start gap-6">
                            <div className="shrink-0 w-16 h-16 bg-trimera-gold rounded-lg flex items-center justify-center font-title text-4xl text-trimera-forest shadow-lg group-hover:scale-110 transition-transform">
                                {deus.title.charAt(0)}
                            </div>
                            <div>
                                <h2 className="font-title text-3xl text-trimera-stone mb-2">{deus.title}</h2>
                                <div className="flex gap-4 text-xs font-ui text-trimera-gold uppercase tracking-widest mb-4">
                                    <span>{deus.stats?.Dominio}</span> • <span>{deus.stats?.Simbolo}</span>
                                </div>
                                <p className="font-body text-lg text-trimera-stone/80 leading-relaxed">{deus.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
