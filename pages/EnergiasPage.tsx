
import React from 'react';
import { Heart, Leaf, Ghost, Hammer, Star, Brain, Sun, Moon, Wand2, FlaskConical, Target, Crown, Zap, BookOpen } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { MOCK_DATA } from '../constants';

export const EnergiasPage = () => {
    const getIcon = (title: string) => {
        const lower = title.toLowerCase();
        if (lower.includes('vital')) return <Heart className="w-8 h-8" />;
        if (lower.includes('natural')) return <Leaf className="w-8 h-8" />;
        if (lower.includes('espiritual')) return <Ghost className="w-8 h-8" />;
        if (lower.includes('física')) return <Hammer className="w-8 h-8" />;
        if (lower.includes('astral')) return <Star className="w-8 h-8" />;
        if (lower.includes('mental')) return <Brain className="w-8 h-8" />;
        if (lower.includes('luz')) return <Sun className="w-8 h-8" />;
        if (lower.includes('escuridão') || lower.includes('negra')) return <Moon className="w-8 h-8" />;
        if (lower.includes('mágica')) return <Wand2 className="w-8 h-8" />;
        if (lower.includes('química')) return <FlaskConical className="w-8 h-8" />;
        if (lower.includes('concentrada')) return <Target className="w-8 h-8" />;
        if (lower.includes('mítica')) return <Crown className="w-8 h-8" />;
        return <Zap className="w-8 h-8" />;
    };

    return (
        <div className="min-h-screen bg-[#EBE9E4] bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Catálogo de Energias"
                    subtitle="O estudo profundo das forças que compõem a realidade de Trimera."
                    icon={<BookOpen className="w-8 h-8" />}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_DATA.energias.map((eng, idx) => (
                        <div key={idx} className="bg-[#FDFBF7] p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-double border-4 border-trimera-gold/30 hover:border-trimera-gold relative group overflow-hidden">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-12 h-12 bg-trimera-stoneDark/20 -rotate-45 transform translate-x-6 -translate-y-6"></div>

                            <div className="flex flex-col items-center mb-6">
                                <div className="w-16 h-16 bg-trimera-forest text-trimera-gold rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md border border-trimera-gold">
                                    {getIcon(eng.title)}
                                </div>
                                <h3 className="font-title text-2xl text-trimera-forest text-center border-b-2 border-trimera-gold/20 pb-2 w-full">{eng.title}</h3>
                            </div>

                            {eng.effects && (
                                <ul className="space-y-3 font-body text-trimera-textMain/90 text-sm leading-relaxed">
                                    {eng.effects.map((effect, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-trimera-gold mt-1.5 min-w-[6px] h-[6px] rounded-full bg-trimera-gold"></span>
                                            <span>{effect}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {!eng.effects && (
                                <p className="font-body text-lg text-trimera-textMain leading-relaxed">{eng.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
