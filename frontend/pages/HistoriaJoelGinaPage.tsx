import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ArrowLeft as IconeVoltar, 
    BookOpen as IconeLivro, 
    FlaskConical as IconePocao, 
    Skull as IconeVeneno, 
    ShieldAlert as IconeEscudoAlerta, 
    Zap as IconeRaio, 
    Sparkles as IconeBrilho,
    AlertTriangle as IconePerigo, 
    Scroll as IconePergaminho,
    CheckCircle2 as IconeSucesso
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ContentCard } from '../components/ContentCard';

export const HistoriaJoelGinaPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-trimera-stone bg-noise pt-44 pb-32 px-6 page-transition">
            <div className="max-w-5xl mx-auto">
                {/* Botão de Retorno */}
                <div className="mb-8">
                    <Link
                        to="/historias"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-trimera-stoneDark text-trimera-forest hover:bg-trimera-gold/20 hover:text-trimera-goldHover transition-all font-ui font-bold text-sm tracking-widest uppercase shadow-sm group"
                    >
                        <IconeVoltar size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Voltar para Histórias
                    </Link>
                </div>

                {/* Cabeçalho da História */}
                <SectionHeader
                    title="Joel e Gina"
                    subtitle="O Compêndio da Sobrevivência & A Revolução dos Boticários em Trimera."
                    icon={<IconePocao className="w-8 h-8" />}
                />

                {/* Bloco Narrativo Principal */}
                <article className="bg-trimera-forest text-trimera-stone p-8 md:p-14 rounded-2xl shadow-2xl relative overflow-hidden border border-trimera-forestLight/20 mb-12">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-trimera-gold/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-trimera-gold/20 pb-6 mb-8 relative z-10">
                        <div>
                            <span className="font-ui text-xs font-bold tracking-widest uppercase text-trimera-gold block mb-1">
                                Conto Original de Trimera
                            </span>
                            <h1 className="font-title text-3xl md:text-5xl text-trimera-gold">
                                O Tratado das Poções Proibidas
                            </h1>
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trimera-gold/15 text-trimera-gold border border-trimera-gold/30 text-xs font-ui font-semibold uppercase tracking-wider">
                            <IconePergaminho size={14} /> Leitura Completa
                        </span>
                    </div>

                    <div className="font-body text-lg leading-relaxed text-justify relative z-10 text-trimera-stone/90 space-y-6">
                        <section className="space-y-4">
                            <h2 className="font-title text-2xl text-trimera-gold/90 border-l-4 border-trimera-gold pl-4">
                                I. A Lida dos Aventureiros nas Tavernas
                            </h2>
                            <p>
                                Joel e Gina compartilhavam uma rotina que a grande maioria dos combatentes de Trimera preferiria esquecer: a dura e ingrata jornada das missões de caça, escolta e reconhecimento, aceitas nos balcões empoeirados das tavernas marginais e nos centros de contratação de aventureiros. Diferente dos mercenários comuns — que prontamente esbanjavam seus pagamentos em canecas de hidromel barato, jogatinas clandestinas ou lâminas pomposas —, cada moeda de cobre e prata amealhada pela dupla tinha uma destinação sagrada: financiar os insumos, vidrarias e a pesquisa empírica para um livro de poções definitivo que estavam produzindo.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-title text-2xl text-trimera-gold/90 border-l-4 border-trimera-gold pl-4">
                                II. A Farsa Descarada dos Bazares e Centros Comerciais
                            </h2>
                            <p>
                                Esses manuais e livretos de poções eram extremamente comuns nos centros comerciais e bazares populares de Trimera, vendidos a preços irrisórios em bancas de quinquilharias. No entanto, todos compartilhavam uma característica infame: eram uma completa farsa. Prometiam fórmulas para regeneração vital, vigor ou restauração de mana, mas eram raríssimas aquelas que surtiam real efeito prático além de um fraco alívio psicológico. 
                            </p>
                            <p>
                                O que mais revoltava Joel e Gina, todavia, era a ausência total das fórmulas verdadeiramente vitais. Nenhum desses panfletos ensinava o tratamento de neurotoxinas e venenos fulminantes, a reversão de paralisias motoras ou a neutralização de atordoamentos arcanos provocados por choques e golpes sísmicos. Muito menos continham elixires de combate autênticos — misturas capazes de conferir aceleração de reflexos, incremento imediato de força bruta ou enrijecimento corporal defensivo para enfrentar as feras das profundezas.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-title text-2xl text-trimera-gold/90 border-l-4 border-trimera-gold pl-4">
                                III. A Carnificina das Masmorras e o Tabu da "Subclasse"
                            </h2>
                            <p>
                                A grande meta da dupla era reunir recursos suficientes para publicar e distribuir esse tratado de forma oficial na entrada de todas as cavernas e postos de expedição autorizados. Trimera registra milhares de incursões diárias rumo a complexos subterrâneos e masmorras inexploradas; nelas, incontáveis guerreiros perdem a vida não pela covardia ou inaptidão física, mas pelo avanço impiedoso de venenos sem antídoto e pela carência de tônicos de resposta rápida no instante do combate.
                            </p>
                            <p>
                                Contudo, além da escassez de ouro, Joel e Gina colidiam frontalmente contra a arrogância cega que contaminava as guildas. Muitos combatentes se recusavam categoricamente a transportar frascos, queixando-se de que o peso extra atrapalhava a agilidade e que seria inviável manipular vidros frágeis durante o clamor das espadas. Pior ainda: o ato de recorrer a frascos curativos era taxado com desdém como "coisa de fracote". 
                            </p>
                            <p>
                                Essa mentalidade cobrava um preço sangrento e desumano. Estatisticamente, nas expedições que contratavam um boticário ou curandeiro encarregado de carregar poções, o grupo quase invariavelmente regressava desfalcado — sem o próprio especialista. Enxergados como uma “subclasse descartável”, eram abandonados pelos combatentes no menor sinal de emboscada.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-title text-2xl text-trimera-gold/90 border-l-4 border-trimera-gold pl-4">
                                IV. A Cruzada pela Alquimia Oficial
                            </h2>
                            <p>
                                Cientes dessa realidade impiedosa, Joel e Gina transformaram suas próprias vidas em uma cruzada. Com recipientes ergonômicos de saque rápido, dosagens concentradas e receitas testadas na própria carne em cavernas inexploradas, eles buscam provar que a verdadeira coragem não reside em morrer por orgulho, mas em dominar o conhecimento necessário para que todos regressem vivos da escuridão.
                            </p>
                        </section>
                    </div>
                </article>

                {/* Detalhes Técnicos do Compêndio */}
                <div className="space-y-8 mb-12">
                    <h3 className="font-title text-3xl text-trimera-forest flex items-center gap-3">
                        <IconePerigo className="text-trimera-gold" size={28} />
                        Os 4 Pilares Negligenciados pelo Mercado Charlatão
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-trimera-stoneDark shadow-md hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-3 text-red-700">
                                <IconeVeneno size={24} />
                                <h4 className="font-title text-xl text-trimera-forest">1. Cura de Venenos e Toxinas</h4>
                            </div>
                            <p className="font-body text-base text-trimera-textMain/85 leading-relaxed">
                                As masmorras de Trimera abrigam criaturas colossais que inoculam neurotoxinas velozes. As receitas populares ignoravam reagentes purificadores básicos como seiva de lótus negra e carvão vegetal cristalizado, sentenciando expedições inteiras à asfixia.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-trimera-stoneDark shadow-md hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-3 text-amber-700">
                                <IconeEscudoAlerta size={24} />
                                <h4 className="font-title text-xl text-trimera-forest">2. Reversão de Paralisias</h4>
                            </div>
                            <p className="font-body text-base text-trimera-textMain/85 leading-relaxed">
                                Esporos de fungos cavernosos e descargas estáticas de bestas ancestrais paralisam a musculatura em segundos. O compêndio de Joel e Gina introduz tônicos estimulantes de circulação imediata, permitindo a recuperação motora antes do golpe fatal.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-trimera-stoneDark shadow-md hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-3 text-purple-700">
                                <IconeRaio size={24} />
                                <h4 className="font-title text-xl text-trimera-forest">3. Tratamento de Atordoamento</h4>
                            </div>
                            <p className="font-body text-base text-trimera-textMain/85 leading-relaxed">
                                Golpes sísmicos e ondas de choque mágico costumam atordoar guerreiros com severas concussões vestibulares. As essências inalatórias pesquisadas pela dupla limpam a névoa mental e restauram o equilíbrio postural quase que instantaneamente.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-trimera-stoneDark shadow-md hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-3 text-emerald-700">
                                <IconeBrilho size={24} />
                                <h4 className="font-title text-xl text-trimera-forest">4. Elixires de Combate e Vigor</h4>
                            </div>
                            <p className="font-body text-base text-trimera-textMain/85 leading-relaxed">
                                Diferente das águas açucaradas vendidas nas feiras, os elixires da dupla sintetizam extratos de raiz de carvalho pétreo para aumentar temporariamente o limiar de força física, a resistência a impactos e a velocidade de resposta motora sob cerco.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Análise Cultural e Inovações */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    <ContentCard title="O Mito do 'Peso Excessivo'" variant="stone">
                        Combatentes alegam que frascos pesam e quebram com facilidade. Joel desenvolveu tubos de couro impermeabilizados e ligas metálicas leves com lacres de saque veloz, que podem ser acoplados a ombreiras e cinturões táticos sem comprometer a mobilidade.
                    </ContentCard>

                    <ContentCard title="A Tragédia da 'Subclasse'" variant="stone">
                        Rotulados preconceituosamente de estorvo, curandeiros eram os primeiros a tombar sem amparo nas masmorras. A publicação do compêndio visa educar os grupos sobre a proteção tática de seus boticários, provando que um boticário vivo garante o regresso de todos.
                    </ContentCard>

                    <ContentCard title="A Missão dos Postos Oficiais" variant="stone">
                        Joel e Gina não buscam enriquecer como os mercadores desonestos. Cada lucro reinvestido visa erguer postos padronizados nas entradas das cavernas, onde todo aventureiro possa adquirir antídotos certificados antes de pisar na escuridão.
                    </ContentCard>
                </div>

                {/* Rodapé com Botão de Voltar */}
                <div className="text-center pt-8 border-t border-trimera-stoneDark">
                    <Link
                        to="/historias"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-trimera-forest text-trimera-stone hover:bg-trimera-gold hover:text-trimera-forest transition-all font-ui font-bold text-sm tracking-widest uppercase shadow-lg group"
                    >
                        <IconeVoltar size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Voltar para a Lista de Histórias
                    </Link>
                </div>
            </div>
        </div>
    );
};

