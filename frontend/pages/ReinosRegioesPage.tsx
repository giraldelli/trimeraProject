import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Map as IconeMapa, Move as IconeMover, Globe as IconeGlobo, Castle as IconeCastelo } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { MapViewer } from '../components/MapViewer';
import { ContentCard } from '../components/ContentCard';
import { MOCK_DATA } from '../constants';

export const ReinosRegioesPage: React.FC = () => {
    const localizacao = useLocation();

    const executarRolagemPara = (idSecao: string) => {
        const elemento = document.getElementById(idSecao);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (localizacao.hash) {
            const idSecao = localizacao.hash.substring(1);
            const elemento = document.getElementById(idSecao);
            if (elemento) {
                const tempoEspera = setTimeout(() => {
                    elemento.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                return () => clearTimeout(tempoEspera);
            }
        }
    }, [localizacao]);

    return (
        <div className="min-h-screen bg-[#EBE9E4] bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho Unificado */}
                <SectionHeader
                    title="Cartografia e Soberanias"
                    subtitle="Explore as fronteiras geográficas, continentes e as grandes fortalezas de Trimera."
                    icon={<IconeMapa className="w-8 h-8" />}
                />

                {/* Sub-Navegação Rápida (Âncoras) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button
                        onClick={() => executarRolagemPara('regioes')}
                        className="px-6 py-3 bg-trimera-forest text-trimera-stone hover:text-trimera-gold font-ui font-bold uppercase tracking-wider rounded-lg border border-trimera-forestLight/30 hover:border-trimera-gold transition-all duration-300 shadow-md flex items-center gap-2"
                    >
                        <IconeGlobo size={18} /> Continentes e Mapa
                    </button>
                    <button
                        onClick={() => executarRolagemPara('reinos')}
                        className="px-6 py-3 bg-trimera-forest text-trimera-stone hover:text-trimera-gold font-ui font-bold uppercase tracking-wider rounded-lg border border-trimera-forestLight/30 hover:border-trimera-gold transition-all duration-300 shadow-md flex items-center gap-2"
                    >
                        <IconeCastelo size={18} /> Grandes Reinos
                    </button>
                </div>

                {/* Seção 1: Regiões e Cartografia */}
                <section id="regioes" className="scroll-mt-36 mb-24">
                    <h2 className="font-title text-3xl text-trimera-forest mb-8 pb-3 border-b-2 border-trimera-gold flex items-center gap-3">
                        <IconeGlobo className="text-trimera-gold" />
                        Cartografia & Continentes
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Mapa Interativo */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-32">
                                <MapViewer />
                                <div className="mt-4 p-4 bg-trimera-stone rounded-lg border border-trimera-stoneDark text-sm text-trimera-textMain/70 italic flex gap-2">
                                    <IconeMover size={16} /> Use o mouse para arrastar e os controles para ampliar o mapa.
                                </div>

                                {/* Informativo do Planeta Trimera */}
                                <div className="mt-6 p-6 bg-white rounded-xl border border-trimera-stoneDark shadow-md">
                                    <h4 className="font-title text-lg text-trimera-forest mb-3 flex items-center gap-2 border-b border-trimera-gold/30 pb-2">
                                        <IconeGlobo size={18} className="text-trimera-gold" />
                                        Dados Planetários de Trimera
                                    </h4>
                                    <p className="font-body text-xs text-trimera-textMain/95 leading-relaxed text-justify">
                                        O planeta Trimera abriga aproximadamente 15 bilhões de cidadãos. Possui 26.987 km de diâmetro equatorial e uma área de superfície total de cerca de 1,5 bilhão de km² — composta por 80% de oceanos e 20% de terra firme (continentes). A sua circunferência equatorial mede aproximadamente 90.025 km ao longo da Linha de Von Richie. Embora não seja uma esfera perfeita devido ao achatamento nos polos, sua magnitude geográfica permanece imponente.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Lista de Continentes */}
                        <div className="space-y-6">
                            <h3 className="font-title text-2xl text-trimera-forest mb-4 inline-block">
                                Continentes Conhecidos
                            </h3>
                            {MOCK_DATA.regioes?.map((regiao, indice) => (
                                <div key={indice} className="bg-white p-6 rounded-xl border border-trimera-stoneDark hover:border-trimera-gold shadow-md hover:shadow-lg transition-all group">
                                    <h4 className="font-title text-xl text-trimera-forest mb-2 flex items-center gap-2">
                                        <IconeGlobo size={18} className="text-trimera-gold" />
                                        {regiao.title}
                                    </h4>
                                    <p className="font-body text-sm text-trimera-textMain/80 leading-relaxed">
                                        {regiao.description}
                                    </p>
                                </div>
                            ))}
                            {(!MOCK_DATA.regioes || MOCK_DATA.regioes.length === 0) && (
                                <div className="p-6 text-center italic opacity-60">Nenhum continente mapeado ainda.</div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Divisor Estético */}
                <div className="relative flex items-center justify-center my-32">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-trimera-stoneDark"></div>
                    </div>
                    <div className="relative bg-[#EBE9E4] bg-noise px-6 text-trimera-gold">
                        <IconeCastelo size={32} className="animate-pulse" />
                    </div>
                </div>

                {/* Seção 2: Os Grandes Reinos */}
                <section id="reinos" className="scroll-mt-36">
                    <h2 className="font-title text-3xl text-trimera-forest mb-8 pb-3 border-b-2 border-trimera-gold flex items-center gap-3">
                        <IconeCastelo className="text-trimera-gold" />
                        Grandes Reinos de Trimera
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOCK_DATA.reinos?.map((reino, indice) => (
                            <ContentCard key={indice} title={reino.title}>
                                {reino.description}
                            </ContentCard>
                        ))}
                        {(!MOCK_DATA.reinos || MOCK_DATA.reinos.length === 0) && (
                            <div className="p-6 col-span-full text-center italic opacity-60">Nenhum reino registrado ainda.</div>
                        )}
                        {/* Card do Pergaminho Corroído para manter a estética */}
                        <ContentCard title="Pergaminho Corroído" variant="wood">
                            <span className="italic opacity-80">"As palavras aqui foram apagadas pelo musgo e pelo tempo. Talvez o Guardião saiba mais..."</span>
                        </ContentCard>
                    </div>
                </section>
            </div>
        </div>
    );
};
