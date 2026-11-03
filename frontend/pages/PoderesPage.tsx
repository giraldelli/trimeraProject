import React from 'react';
import { Zap as IconeRaio } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ContentCard } from '../components/ContentCard';

export const PoderesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-trimera-stone bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Poderes"
                    subtitle="A manifestação prática e canalização das 12 energias de Trimera."
                    icon={<IconeRaio className="w-8 h-8" />}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Bloco de Lore Principal */}
                    <div className="lg:col-span-3 bg-trimera-forest text-trimera-stone p-12 rounded-2xl shadow-2xl relative overflow-hidden border border-trimera-forestLight/20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-trimera-gold/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
                        <h2 className="font-title text-4xl text-trimera-gold mb-8 relative z-10">O Fluxo da Habilidade</h2>
                        <div className="font-body text-lg leading-relaxed gap-12 text-justify relative z-10 text-trimera-stone/90 space-y-6">
                            <p>
                                Em Trimera, o conceito de "Poder" não se resume a feitiços mágicos intangíveis. Os poderes são o resultado da conversão e canalização ativa de uma ou mais das doze energias fundamentais do universo. Quando um guerreiro manifesta um soco flamejante, ele está fundindo sua energia física com a energia natural do fogo; quando um sábio projeta uma barreira mental, ele converte sua própria energia vital em uma barreira de força astral protetora.
                            </p>
                            <p>
                                O domínio dos poderes exige treino rigoroso de corpo e mente. A velocidade com que a energia é canalizada e o seu nível de refino definem a eficácia e o alcance do poder. Erros na taxa de vazão energética podem causar a sobrecarga das células corporais (especialmente para aqueles que não possuem marcas mágicas ou tatuagens de proteção) ou, em casos mais graves, a loucura total do praticante.
                            </p>
                            <p>
                                Os historiadores e cartógrafos do Grimório categorizam as manifestações de poderes em três eixos principais: habilidades ofensivas (voltadas para ataque direto), barreiras defensivas (proteção e mitigação de danos celulares ou espirituais) e magias de utilidade prática (como flutuação, manipulação de luz ambiente ou transfusão elemental para objetos inanimados).
                            </p>
                        </div>
                    </div>

                    {/* Cards Complementares */}
                    <ContentCard title="Manifestação Ofensiva" variant="stone">
                        Magias de ataque que convertem energias como fogo, escuridão e eletricidade em golpes devastadores. São comumente usadas em combates abertos pelas elites de Drakonia e Azardian.
                    </ContentCard>

                    <ContentCard title="Barreiras Defensivas" variant="stone">
                        Proteções estelares ou barreiras físicas criadas a partir de energia de luz ou espiritual. O lendário "Escudo Solar de Aethelgard" é o maior exemplo conhecido desse tipo de defesa.
                    </ContentCard>

                    <ContentCard title="Transfusão Elemental" variant="stone">
                        A capacidade de transferir as propriedades de uma energia elemental temporariamente para armas e ferramentas, como imbuir uma espada de metal com chamas vorazes.
                    </ContentCard>
                </div>
            </div>
        </div>
    );
};
