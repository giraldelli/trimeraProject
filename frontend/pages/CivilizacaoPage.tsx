
import React from 'react';
import { Globe } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ContentCard } from '../components/ContentCard';
import { MOCK_DATA } from '../constants';

export const CivilizacaoPage = () => (
    <div className="min-h-screen bg-trimera-stone bg-noise pt-52 pb-32 px-6 page-transition">
        <div className="max-w-6xl mx-auto">
            <SectionHeader
                title="Civilização"
                subtitle="A ascensão dos mortais entre as raízes do mundo."
                icon={<Globe className="w-8 h-8" />}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="lg:col-span-2 bg-trimera-forest text-trimera-stone p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-trimera-gold/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                    <h2 className="font-title text-4xl text-trimera-gold mb-8 relative z-10">A Era do Ouro Fosco</h2>
                    <p className="font-body text-xl leading-8 column-count-2 gap-12 text-justify relative z-10 text-trimera-stone/90">
                        As grandes cidades de Trimera não foram construídas apenas com pedra e argamassa, mas tecidas com a própria magia da terra. A arquitetura reflete uma harmonia com a natureza; torres que se curvam como árvores antigas e muralhas que imitam as falésias naturais.
                        <br /><br />
                        Os mercados de Zyr são conhecidos por suas sedas cor de ocre e especiarias raras, enquanto Aethelgard permanece como o bastião da ordem, suas pedras cinzentas absorvendo a luz do sol para brilhar suavemente à noite.
                    </p>
                </div>
                {MOCK_DATA.civilizacao.map((item, idx) => (
                    <ContentCard key={idx} title={item.title}>
                        {item.description}
                    </ContentCard>
                ))}
            </div>
        </div>
    </div>
);
