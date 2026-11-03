import React from 'react';
import { Trophy as IconeTrofeu } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ContentCard } from '../components/ContentCard';

export const LendariosPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-trimera-stone bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Lendários"
                    subtitle="Os sobreviventes das profundezas e masmorras ancestrais de Trimera."
                    icon={<IconeTrofeu className="w-8 h-8" />}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Bloco de Lore Principal */}
                    <div className="lg:col-span-3 bg-trimera-forest text-trimera-stone p-12 rounded-2xl shadow-2xl relative overflow-hidden border border-trimera-forestLight/20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-trimera-gold/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
                        <h2 className="font-title text-4xl text-trimera-gold mb-8 relative z-10">O Título Lendário</h2>
                        <div className="font-body text-lg leading-relaxed gap-12 text-justify relative z-10 text-trimera-stone/90 space-y-6">
                            <p>
                                O título de Lendário é outorgado àqueles audazes o suficiente para adentrar as antigas e misteriosas masmorras deixadas por reinos e civilizações esquecidas, como os Primogênitos e os Gudans. Nestes abismos profundos, habitam guerreiros amaldiçoados, espíritos obsessores e armadilhas de magia ancestral — a forma mais perigosa de feitiçaria devido aos seus efeitos imprevisíveis e há muito esquecidos na atualidade.
                            </p>
                            <p>
                                Os indivíduos que carregam este título são imensamente respeitados, porém reservados. Em sua maioria, são guerreiros de poucas palavras e temperamento introspectivo, sobre os quais pouco se sabe. Afinal, buscar o título de Lendário exige abdicar da própria sanidade para marchar rumo a labirintos dos quais apenas 0,01% dos desafiantes consegue retornar com vida. Diante de tamanha provação, os poucos sobreviventes raramente exibem sua conquista ou discorrem sobre seus feitos, tratando o título muito mais como uma vitória pessoal de superação do que como uma distinção de status social.
                            </p>
                            <p>
                                Para mitigar os perigos e elevar as chances de sobrevivência, expedições de elite costumam ser organizadas por grupos de guerreiros, guildas ou clãs conceituados. Algumas dessas incursões às profundezas das masmorras são anunciadas publicamente nos periódicos e meios de comunicação de Trimera, permitindo que a população acompanhe a jornada. Um prazo estimado para o retorno é estabelecido com base nos raros relatos de expedições bem-sucedidas do passado. Assim, os curiosos e entusiastas se reúnem nos portões no início da jornada para incentivar ou zombar dos guerreiros, retornando ao final do prazo para saudar os raríssimos heróis que emergem como verdadeiras lendas vivas.
                            </p>
                        </div>
                    </div>

                    {/* Cards Complementares */}
                    <ContentCard title="Taxa de Sobrevivência (0,01%)" variant="stone">
                        Para se tornar um Lendário, é necessário abrir mão de parte da própria sanidade. Pouquíssimos guerreiros retornam vivos das profundezas das masmorras, tornando o título um selo raro de superação individual extrema.
                    </ContentCard>

                    <ContentCard title="Origem das Masmorras" variant="stone">
                        Esses labirintos subterrâneos guardam segredos de reinos há muito caídos e civilizações como os Primogênitos e Gudans. São repletos de magias obsoletas e guerreiros tragados pelo tempo.
                    </ContentCard>

                    <ContentCard title="A Mobilização Social" variant="stone">
                        As expedições são acompanhadas avidamente por jornais locais e pela população de Trimera, que se reúne para torcer, zombar ou aclamar os corajosos que adentram a escuridão.
                    </ContentCard>
                </div>
            </div>
        </div>
    );
};
