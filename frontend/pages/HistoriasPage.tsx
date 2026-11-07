import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    BookOpen as IconeLivro, 
    FlaskConical as IconePocao, 
    ArrowRight as IconeSetaDireita, 
    Sparkles as IconeBrilho,
    Scroll as IconePergaminho,
    Globe as IconeGlobo,
    Clock as IconeRelogio,
    Shield as IconeEscudo
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ContentCard } from '../components/ContentCard';
import { MOCK_DATA } from '../constants';

export const HistoriasPage: React.FC = () => {
    const navegar = useNavigate();

    const executarNavegarParaHistoriaJoelGina = () => {
        navegar('/historias/joel-e-gina');
    };

    return (
        <div className="min-h-screen bg-trimera-stone bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Histórias & Crônicas"
                    subtitle="Os relatos, sacrifícios e lendas que moldam o cotidiano e a sobrevivência em Trimera."
                    icon={<IconeLivro className="w-8 h-8" />}
                />

                <div className="space-y-12">
                    {/* Card Principal de Resumo: Joel e Gina */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-trimera-gold/40 via-trimera-gold to-trimera-forestLight/40 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>

                        <div 
                            onClick={executarNavegarParaHistoriaJoelGina}
                            className="relative bg-trimera-forest text-trimera-stone rounded-2xl p-8 md:p-12 shadow-2xl border border-trimera-gold/40 cursor-pointer overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                        >
                            <div className="absolute top-0 right-0 w-80 h-80 bg-trimera-gold/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    {/* Badges superiores */}
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-trimera-gold text-trimera-forest text-xs font-ui font-bold uppercase tracking-wider shadow-sm">
                                            <IconeBrilho size={13} /> Destaque
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-trimera-gold border border-trimera-gold/30 text-xs font-ui font-semibold uppercase tracking-wider">
                                            <IconePocao size={13} /> Alquimia & Cavernas
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-trimera-stone/80 text-xs font-ui font-medium">
                                            <IconeRelogio size={13} /> 5 min de leitura
                                        </span>
                                    </div>

                                    {/* Título e Subtítulo */}
                                    <h2 className="font-title text-3xl md:text-5xl text-trimera-gold mb-4 group-hover:text-yellow-400 transition-colors">
                                        Joel e Gina
                                    </h2>
                                    <h3 className="font-ui text-lg md:text-xl text-trimera-stone/90 font-semibold mb-6 tracking-wide">
                                        O Compêndio da Sobrevivência & A Revolução dos Boticários
                                    </h3>

                                    {/* Resumo da História */}
                                    <p className="font-body text-base md:text-lg text-trimera-stone/80 leading-relaxed text-justify mb-8">
                                        Dois aventureiros obstinados que aceitam contratos arriscados nas tavernas e centros de guilda para juntar ouro e financiar um livro de poções definitivo. Enfrentando os manuais fraudulentos vendidos nos bazares e o preconceito sangrento que enxerga curandeiros como uma “subclasse descartável” nas masmorras, Joel e Gina desafiam a força bruta para que nenhum guerreiro seja deixado para morrer nas profundezas.
                                    </p>
                                </div>

                                {/* Botão de Ação */}
                                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2 text-xs font-ui text-trimera-stone/60">
                                        <span className="bg-black/20 px-3 py-1 rounded-md">#PoçõesVerdadeiras</span>
                                        <span className="bg-black/20 px-3 py-1 rounded-md">#MasmorrasDeTrimera</span>
                                        <span className="bg-black/20 px-3 py-1 rounded-md">#FimDaSubclasse</span>
                                    </div>

                                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-trimera-gold text-trimera-forest font-ui font-bold text-sm tracking-wider uppercase shadow-lg group-hover:bg-trimera-goldHover transition-colors">
                                        Ler História Completa
                                        <IconeSetaDireita size={18} className="group-hover:translate-x-1.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Seção de Crônicas da Civilização */}
                    <div className="pt-8">
                        <div className="flex items-center gap-3 mb-8">
                            <IconeGlobo className="text-trimera-forest" size={26} />
                            <h3 className="font-title text-3xl text-trimera-forest">
                                Crônicas da Civilização
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Card: A Era do Ouro Fosco */}
                            <div className="bg-white border border-trimera-stoneDark rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-trimera-gold"></div>
                                <span className="text-xs font-ui font-bold uppercase tracking-widest text-trimera-gold block mb-2">
                                    Era Primordial
                                </span>
                                <h4 className="font-title text-2xl text-trimera-forest mb-4 group-hover:text-trimera-gold transition-colors">
                                    A Era do Ouro Fosco
                                </h4>
                                <p className="font-body text-base text-trimera-textMain/85 leading-relaxed text-justify mb-6">
                                    As grandes cidades de Trimera não foram construídas apenas com pedra e argamassa, mas tecidas com a própria magia da terra. A arquitetura reflete uma harmonia com a natureza; torres que se curvam como árvores antigas e muralhas que imitam as falésias naturais.
                                </p>
                                <div className="text-xs font-ui font-semibold text-trimera-forest/60">
                                    História Fundamental dos Povos
                                </div>
                            </div>

                            {/* Card: Cidades e Ordens */}
                            {MOCK_DATA.civilizacao.map((item, indice) => (
                                <ContentCard key={indice} title={item.title} variant="stone">
                                    {item.description}
                                </ContentCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
