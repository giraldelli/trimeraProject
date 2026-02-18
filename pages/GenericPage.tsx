
import React from 'react';
import { BookOpen } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ContentCard } from '../components/ContentCard';

export const GenericPage = ({ title, bg, items }: { title: string, bg: string, items: any[] }) => (
    <div className={`min-h-screen ${bg} bg-noise pt-52 pb-32 px-6 page-transition`}>
        <div className="max-w-6xl mx-auto">
            <SectionHeader title={title} subtitle="Arquivos do Universo Trimera" icon={<BookOpen className="w-8 h-8" />} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, idx) => (
                    <ContentCard key={idx} title={item.title}>
                        {item.description}
                    </ContentCard>
                ))}
                {/* Fillers to maintain layout aesthetic */}
                <ContentCard title="Pergaminho Corroído" variant="wood">
                    <span className="italic opacity-80">"As palavras aqui foram apagadas pelo musgo e pelo tempo. Talvez o Guardião saiba mais..."</span>
                </ContentCard>
            </div>
        </div>
    </div>
);
