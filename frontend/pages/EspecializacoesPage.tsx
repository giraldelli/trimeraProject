import React from 'react';
import { Shield as IconeEscudo, Wand2, RefreshCw, Wind, FlaskConical, Box, PawPrint, Award } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export const EspecializacoesPage: React.FC = () => {
    const especializacoes = [
        {
            titulo: "Criador",
            icone: <Wand2 className="w-6 h-6 text-trimera-gold" />,
            descricao: "Conjuradores devotados ao alvorecer da feitiçaria, capazes de conceber feitiços e magias inteiramente novos, além de talhar tatuagens rúnicas complexas que organizam e estabilizam os fluxos de energia vital.",
            topicos: [
                "Desenvolvimento e criação de novos feitiços.",
                "Confecção e gravação de tatuagens rúnicas protetoras."
            ]
        },
        {
            titulo: "Transformador",
            icone: <RefreshCw className="w-6 h-6 text-trimera-gold" />,
            descricao: "Mestres da transfiguração física e energética, capazes de assumir temporariamente a forma de animais, pessoas e objetos, herdando seus respectivos atributos. Podem manifestar sua \"forma perfeita\", evoluindo armaduras e armas.",
            topicos: [
                "Metamorfose temporária com replicação completa de atributos.",
                "Acesso à 'Melhor Forma' com aprimoramento de status.",
                "Evolução dinâmica de armas e armaduras pós-transformação."
            ]
        },
        {
            titulo: "Controlador",
            icone: <Wind className="w-6 h-6 text-trimera-gold" />,
            descricao: "Magos com profunda afinidade elemental, habilitados a submeter e comandar diretamente as forças e os elementos da natureza (como fogo, água, terra e vento) para ataque ou utilidade.",
            topicos: [
                "Manipulação direta de elementos naturais.",
                "Domínio de correntes térmicas, marés e forças tectônicas."
            ]
        },
        {
            titulo: "Cientista",
            icone: <FlaskConical className="w-6 h-6 text-trimera-gold" />,
            descricao: "Mentes analíticas focadas na alquimia e engenharia de combate. Projetam armas e equipamentos complexos, consagram selos mágicos a partir de runas escritas e destilam elixires com propósitos curativos ou bélicos.",
            topicos: [
                "Criação de artefatos, armas e maquinários funcionais.",
                "Concepção de selos mágicos a partir de escrita mística.",
                "Preparação de poções diversas (ofensivas ou curativas)."
            ]
        },
        {
            titulo: "Materializador",
            icone: <Box className="w-6 h-6 text-trimera-gold" />,
            descricao: "Especialistas em condensar pura energia em objetos tangíveis. Realizam a materialização e desmaterialização de itens físicos, clonam objetos através do consumo de energia e projetam cópias materiais de si mesmos.",
            topicos: [
                "Materialização e desmaterialização instantânea de objetos.",
                "Replicação e cópia exata de ferramentas e armas.",
                "Projeção de clones materiais ativos para suporte em combate."
            ]
        },
        {
            titulo: "Domador",
            icone: <PawPrint className="w-6 h-6 text-trimera-gold" />,
            descricao: "Praticantes dotados de forte empatia animal, capacitados para acalmar, domesticar e liderar criaturas selvagens de pequeno a grande porte.",
            topicos: [
                "Domesticação e adestramento de feras de qualquer dimensão.",
                "Conexão mental e empática sobre o reino animal."
            ]
        },
        {
            titulo: "Profissional",
            icone: <Award className="w-6 h-6 text-trimera-gold" />,
            descricao: "Prodígios da adaptabilidade que rejeitam o foco único. Conseguem compreender e replicar, em níveis básicos ou avançados, as técnicas e conhecimentos de todas as demais especializações.",
            topicos: [
                "Aprendizado dinâmico de técnicas básicas e intermediárias de todas as classes.",
                "Adaptabilidade completa a cenários variados de combate e suporte."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-trimera-stone bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Especializações"
                    subtitle="Os caminhos de domínio avançado de armas, táticas e magias em Trimera."
                    icon={<IconeEscudo className="w-8 h-8" />}
                />

                <div className="space-y-12">
                    {/* Bloco de Lore Principal */}
                    <div className="bg-trimera-forest text-trimera-stone p-12 rounded-2xl shadow-2xl relative overflow-hidden border border-trimera-forestLight/20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-trimera-gold/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
                        <h2 className="font-title text-4xl text-trimera-gold mb-8 relative z-10">Caminhos de Mestria</h2>
                        <div className="font-body text-lg leading-relaxed text-justify relative z-10 text-trimera-stone/90 space-y-6">
                            <p>
                                Quando um habitante de Trimera domina suas fontes energéticas básicas (vital, física e mágica) e atinge a maturidade em combate, ele passa a trilhar um caminho de **Especialização**. Escolher uma especialização é mais do que uma vocação: é um pacto militar e cognitivo com um estilo de vida, exigindo o refinamento extremo de técnicas peculiares que pouquíssimos conseguem replicar.
                            </p>
                            <p>
                                O Grimório divide os maiores especialistas do mundo em sete ramificações distintas de poder e utilidade. Cada caminho possui suas próprias regras de treinamento, exigindo dedicação vitalícia para alcançar o ápice de sua execução.
                            </p>
                        </div>
                    </div>

                    {/* Grade de Especializações */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {especializacoes.map((esp, indice) => (
                            <div
                                key={indice}
                                className="bg-white p-8 rounded-xl border border-trimera-stoneDark hover:border-trimera-gold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-trimera-gold rounded-t-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                                
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-trimera-stone rounded-full border border-trimera-stoneDark shadow-inner text-trimera-gold group-hover:scale-110 transition-transform duration-300">
                                            {esp.icone}
                                        </div>
                                        <h3 className="font-title text-2xl text-trimera-forest">{esp.titulo}</h3>
                                    </div>
                                    <p className="font-body text-sm text-trimera-textMain/85 leading-relaxed mb-6">
                                        {esp.descricao}
                                    </p>
                                </div>

                                {esp.topicos && (
                                    <ul className="space-y-2 border-t border-trimera-stoneDark/50 pt-4 font-body text-xs text-trimera-textMain/80">
                                        {esp.topicos.map((topico, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-trimera-gold mt-1.5 min-w-[5px] h-[5px] rounded-full bg-trimera-gold"></span>
                                                <span>{topico}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
