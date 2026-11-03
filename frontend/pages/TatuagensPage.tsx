import React from 'react';
import { Flame as IconeChama } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ContentCard } from '../components/ContentCard';

export const TatuagensPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-trimera-stone bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Tatuagens"
                    subtitle="Os canais e marcas rúnicas que estabilizam e conduzem a magia no corpo."
                    icon={<IconeChama className="w-8 h-8" />}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Bloco de Lore Principal */}
                    <div className="lg:col-span-3 bg-trimera-forest text-trimera-stone p-12 rounded-2xl shadow-2xl relative overflow-hidden border border-trimera-forestLight/20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-trimera-gold/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
                        <h2 className="font-title text-4xl text-trimera-gold mb-8 relative z-10">Os Canais Rúnicos de Pele</h2>
                        <div className="font-body text-lg leading-relaxed gap-12 text-justify relative z-10 text-trimera-stone/90 space-y-6">
                            <p>
                                Nem todos os seres em Trimera nascem com canais mágicos celulares estáveis (como os raros Halvgøds ou os Primogênitos). Para os Trimérios comuns e Elementais de baixo ranque, a manipulação direta de energias naturais e mágicas pode ser letal, desgastando o corpo físico ou incinerando a própria mente. As **Tatuagens Rúnicas** surgiram na Era Primordial como a solução ideal para esse dilema.
                            </p>
                            <p>
                                Gravadas com tintas especiais misturadas a pó de cristais de Sylavara e essências rituais, essas tatuagens atuam como circuitos artificiais na pele. Elas auxiliam na distribuição térmica e no fluxo energético, garantindo que o praticante consiga conjurar feitiços potentes sem sobrecarregar seu sistema nervoso ou sua energia vital.
                            </p>
                            <p>
                                O ato de receber uma tatuagem mágica é doloroso e considerado um rito de passagem militar e espiritual. Dependendo do desenho e dos símbolos rúnicos escolhidos, a tatuagem adquire propriedades distintas: algumas servem de baterias energéticas (armazenamento), outras direcionam a vazão de energia natural pura (canalização), e as mais raras delimitam pactos sagrados ou contratos com deuses.
                            </p>
                        </div>
                    </div>

                    {/* Cards Complementares */}
                    <ContentCard title="Runas de Armazenamento" variant="stone">
                        Tatuagens que funcionam como acumuladores energéticos, permitindo que guerreiros guardem energia mágica ou física sobressalente para ser ativada em momentos críticos de fadiga.
                    </ContentCard>

                    <ContentCard title="Runas de Canalização" variant="stone">
                        Traçados lineares finos feitos ao longo dos braços e dedos, projetados para aumentar drasticamente a velocidade de conjuração e a precisão do disparo de magias elementais.
                    </ContentCard>

                    <ContentCard title="Marcas de Pacto Divino" variant="stone">
                        Tatuagens sagradas recebidas diretamente em templos ou manifestadas espontaneamente, que canalizam a energia divina de deuses como Ignis ou Aequor.
                    </ContentCard>
                </div>
            </div>
        </div>
    );
};
