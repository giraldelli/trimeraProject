import React, { useState } from 'react';
import { Fingerprint, ChevronDown, ChevronUp, Scroll, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { MOCK_DATA } from '../constants';

export const RacasPage: React.FC = () => {
    const [idsExpandidos, setIdsExpandidos] = useState<Record<number, boolean>>({});

    const executarAlternarExpansao = (indice: number) => {
        setIdsExpandidos((estadoAnterior) => ({
            ...estadoAnterior,
            [indice]: !estadoAnterior[indice],
        }));
    };

    const primogenito = MOCK_DATA.racas?.find(r => r.title === 'Primogênitos');
    const outrasRacas = MOCK_DATA.racas?.filter(r => r.title !== 'Primogênitos') || [];

    return (
        <div className="min-h-screen bg-trimera-stone bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Raças de Trimera"
                    subtitle="A genealogia e as características dos povos catalogados pelos Primogênitos."
                    icon={<Fingerprint className="w-8 h-8 text-trimera-gold" />}
                />
                
                {/* Introduction Section - Parchment style */}
                <div className="mb-12 bg-[#F4EFE0] text-trimera-textMain p-8 md:p-12 rounded-2xl shadow-2xl border border-trimera-stoneDark relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-trimera-gold/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-trimera-forest/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 bg-trimera-forest text-trimera-gold p-4 rounded-xl shadow-lg">
                            <Scroll className="w-8 h-8" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="font-title text-3xl text-trimera-forest">O Catálogo de Trimera</h2>
                            <p className="font-body text-lg leading-relaxed text-justify text-readability text-trimera-textMain/90">
                                <span className="first-letter:text-5xl first-letter:font-title first-letter:text-trimera-gold first-letter:mr-3 first-letter:float-left first-letter:leading-none">As</span> raças foram analisadas, identificadas e catalogadas pelos Primogênitos, os primeiros seres a surgir em Trimera após o conflito dos três Deuses. A era primordial foi marcada por extrema brutalidade, injustiças e desolação, eventos relatados minuciosamente para a compreensão dos padrões do mundo. Gradualmente, os Primogênitos inseriram ensinamentos por onde passavam, buscando elevar a sabedoria das sociedades sem interferir no livre-arbítrio de cada criatura.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Highlighted Section: Primogênitos */}
                {primogenito && (
                    <div className="mb-16 bg-white rounded-2xl border-2 border-trimera-gold shadow-2xl p-8 lg:p-12 relative overflow-hidden transition-all duration-300 hover:shadow-gold/20 group">
                        {/* Golden Glowing Accents */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-trimera-gold via-yellow-500 to-trimera-gold"></div>
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-trimera-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-trimera-gold/15 transition-colors duration-500"></div>
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-trimera-forest/5 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute top-8 right-8 text-trimera-gold/5 pointer-events-none hidden md:block">
                            <Fingerprint size={140} strokeWidth={0.3} />
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-trimera-stoneDark/50 pb-8 lg:pb-0 lg:pr-8">
                                <span className="bg-trimera-gold/20 text-trimera-bark font-ui px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5 shadow-sm">
                                    <Sparkles size={12} className="text-trimera-gold" />
                                    A Linhagem Suprema
                                </span>
                                <h2 className="font-title text-4xl text-trimera-forest mb-4 flex items-center gap-3">
                                    <Fingerprint className="w-10 h-10 text-trimera-gold" />
                                    {primogenito.title}
                                </h2>
                                <p className="font-ui text-sm text-trimera-textMain/60 leading-relaxed max-w-sm">
                                    Os primeiros povos de Trimera. Detentores da memória criacionista e guardiões intelectuais do destino das demais raças.
                                </p>
                            </div>

                            <div className="lg:col-span-8 space-y-6">
                                <p className="font-body text-lg leading-relaxed text-trimera-textMain/90 text-justify text-readability">
                                    {primogenito.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-trimera-stoneDark/30">
                                    <div className="bg-trimera-stone/30 border border-trimera-stoneDark/50 px-4 py-3 rounded-lg text-sm font-ui flex flex-col gap-1">
                                        <span className="text-trimera-gold font-bold uppercase tracking-wider text-xs">Expectativa de Vida</span>
                                        <span className="text-trimera-textMain/80 font-semibold">Milhares de anos</span>
                                    </div>
                                    <div className="bg-trimera-stone/30 border border-trimera-stoneDark/50 px-4 py-3 rounded-lg text-sm font-ui flex flex-col gap-1">
                                        <span className="text-trimera-gold font-bold uppercase tracking-wider text-xs">Propósito primordial</span>
                                        <span className="text-trimera-textMain/80 font-semibold">Preservar a paz global e preparar o retorno dos Deuses</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Subtitle for the rest of the catalog */}
                <h3 className="font-title text-2xl text-trimera-forest mb-8 border-b-2 border-trimera-gold pb-2 inline-block">
                    Espécies Catalogadas
                </h3>

                {/* Other Races Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {outrasRacas.map((raca, idx) => {
                        const estaExpandido = !!idsExpandidos[idx];
                        const ehVarianteStone = idx % 2 === 0;
                        
                        return (
                            <div
                                key={idx}
                                onClick={() => executarAlternarExpansao(idx)}
                                className={`
                                    relative p-8 rounded-xl transition-all duration-300 group cursor-pointer select-none hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between
                                    ${estaExpandido ? 'h-auto min-h-[280px]' : 'h-[280px]'}
                                    ${ehVarianteStone
                                        ? 'bg-white border border-trimera-stoneDark shadow-lg'
                                        : 'bg-trimera-forest text-trimera-stone border border-trimera-forestLight shadow-xl'
                                    }
                                `}
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl ${ehVarianteStone ? 'bg-trimera-gold' : 'bg-trimera-gold/50'}`}></div>

                                <div className="flex-1 flex flex-col">
                                    <h3 className={`font-title text-2xl mb-4 flex items-center gap-3 ${ehVarianteStone ? 'text-trimera-forest' : 'text-trimera-gold'}`}>
                                        <Fingerprint size={20} className={ehVarianteStone ? 'text-trimera-gold' : 'text-trimera-stone'} />
                                        {raca.title}
                                    </h3>
                                    <div className={`font-body text-base leading-relaxed text-readability overflow-hidden transition-all duration-300 ${
                                        estaExpandido 
                                            ? 'text-clip' 
                                            : 'line-clamp-4'
                                    } ${ehVarianteStone ? 'text-trimera-textMain/90' : 'text-trimera-stone/90'}`}>
                                        {raca.description}
                                    </div>
                                </div>

                                <div className="mt-4 pt-2 border-t border-dotted border-trimera-stoneDark/30 flex items-center justify-between text-xs font-ui uppercase tracking-wider">
                                    <span className={ehVarianteStone ? 'text-trimera-forest/70' : 'text-trimera-gold/70'}>
                                        {estaExpandido ? 'Clique para fechar' : 'Clique para ler mais'}
                                    </span>
                                    {estaExpandido ? (
                                        <ChevronUp size={16} className={ehVarianteStone ? 'text-trimera-gold' : 'text-trimera-stone'} />
                                    ) : (
                                        <ChevronDown size={16} className={ehVarianteStone ? 'text-trimera-gold' : 'text-trimera-stone'} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
