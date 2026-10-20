
import React from 'react';
import { Map as MapIcon, Move, Globe } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { MapViewer } from '../components/MapViewer';
import { MOCK_DATA } from '../constants';

export const RegioesPage = () => (
    <div className="min-h-screen bg-[#EBE9E4] bg-noise pt-52 pb-32 px-6 page-transition">
        <div className="max-w-7xl mx-auto">
            <SectionHeader
                title="Cartografia de Trimera"
                subtitle="Explore as fronteiras entre os reinos mortais e as terras proibidas."
                icon={<MapIcon className="w-8 h-8" />}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Interactive Map Column */}
                <div className="lg:col-span-2">
                    <div className="sticky top-24">
                        <MapViewer />
                        <div className="mt-4 p-4 bg-trimera-stone rounded-lg border border-trimera-stoneDark text-sm text-trimera-textMain/70 italic flex gap-2">
                            <Move size={16} /> Use o mouse para arrastar e os controles para ampliar o mapa.
                        </div>
                    </div>
                </div>

                {/* Regions List Column */}
                <div className="space-y-6">
                    <h3 className="font-title text-2xl text-trimera-forest mb-6 border-b-2 border-trimera-gold pb-2 inline-block">
                        Continentes
                    </h3>
                    {MOCK_DATA.regioes?.map((region, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-trimera-stoneDark hover:border-trimera-gold shadow-md hover:shadow-lg transition-all group">
                            <h4 className="font-title text-xl text-trimera-forest mb-2 flex items-center gap-2">
                                <Globe size={18} className="text-trimera-gold" />
                                {region.title}
                            </h4>
                            <p className="font-body text-sm text-trimera-textMain/80 leading-relaxed">
                                {region.description}
                            </p>
                        </div>
                    ))}
                    {(!MOCK_DATA.regioes || MOCK_DATA.regioes.length === 0) && (
                        <div className="p-6 text-center italic opacity-60">Nenhum continente mapeado ainda.</div>
                    )}
                </div>
            </div>
        </div>
    </div>
);
