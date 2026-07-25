
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { User, Search, X, Brain, Sword, Sparkles, Shield, Crosshair, ScrollText, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { MOCK_CHARACTERS } from '../constants';
import { CharacterEntry, CharacterAttributes } from '../types';

const AttributeBar: React.FC<{ label: string; value: number; icon: React.ReactNode }> = ({ label, value, icon }) => (
    <div className="mb-4">
        <div className="flex justify-between items-center mb-1 text-sm font-ui uppercase tracking-widest text-trimera-textMain/70">
            <span className="flex items-center gap-2">{icon} {label}</span>
            <span className="font-bold text-trimera-forest">{value}</span>
        </div>
        <div className="h-2 bg-trimera-stoneDark/50 rounded-full overflow-hidden border border-trimera-stoneDark/50">
            <div
                className="h-full bg-gradient-to-r from-trimera-gold to-yellow-500 rounded-full shadow-[0_0_8px_rgba(196,146,47,0.4)] transition-all duration-1000 ease-out"
                style={{ width: `${Math.min(value, 100)}%` }}
            ></div>
        </div>
    </div>
);

const CharacterModal: React.FC<{ character: CharacterEntry; onClose: () => void }> = ({ character, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    const calculateTotalPower = (attrs: CharacterAttributes) => {
        if (!attrs) return 0;
        const total = (attrs.sabedoria || 0) + (attrs.forcaFisica || 0) + (attrs.forcaMagica || 0) + (attrs.defesa || 0) + (attrs.tecnica || 0);
        return Math.round(total / 5);
    };

    if (!character) return null;
    const totalPower = calculateTotalPower(character.attributes);

    const showImage = ['Gaeziel Aud-Balder', 'Zamma Can-Legan', 'Sublimy Excelsior', 'Pawllon Brawller'].includes(character.name);

    return createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-trimera-forest/95 backdrop-blur-md" onClick={onClose}></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-6xl h-[90vh] bg-trimera-stone rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-trimera-gold animate-in zoom-in-95 duration-300">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 text-trimera-stone rounded-full transition-colors backdrop-blur-sm border border-white/20"
                >
                    <X size={24} />
                </button>

                {/* LEFT COLUMN: Image & Header (Mobile Top) */}
                <div className={`w-full md:w-5/12 h-72 md:h-full relative ${showImage ? 'bg-black' : 'bg-trimera-forest'} flex-shrink-0 group`}>
                    {showImage && (
                        <img
                            src={character.image || `https://placehold.co/600x800?text=${character.name}`}
                            alt={character.name}
                            className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-trimera-forest via-trimera-forest/20 to-transparent"></div>

                    {/* Mobile/Desktop Header Overlay */}
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-trimera-gold text-trimera-forest font-bold text-xs uppercase tracking-widest rounded shadow-lg shadow-black/20">
                                {character.role}
                            </span>
                        </div>
                        <h2 className="font-title text-4xl md:text-5xl text-trimera-stone leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {character.name}
                        </h2>
                    </div>
                </div>

                {/* RIGHT COLUMN: Scrollable Content */}
                <div className="flex-1 h-full overflow-y-auto bg-trimera-stone bg-noise custom-scrollbar relative">

                    {/* Decorative Top Border */}
                    <div className="h-2 w-full bg-gradient-to-r from-trimera-forest to-trimera-gold sticky top-0 z-10"></div>

                    <div className="p-8 md:p-12 space-y-12">

                        {/* Intro Quote */}
                        <div className="relative p-6 bg-white/50 rounded-xl border-l-4 border-trimera-gold italic font-body text-xl text-trimera-textMain/80">
                            <span className="absolute -top-4 -left-2 text-6xl text-trimera-gold/20 font-serif">"</span>
                            {character.description}
                        </div>

                        {/* Stats & Power Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white p-6 rounded-2xl border border-trimera-stoneDark shadow-sm">

                            {/* Power Circle (Visible prominent) */}
                            <div className="md:col-span-2 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-trimera-stoneDark pb-6 md:pb-0 md:pr-6">
                                <div className="relative w-32 h-32 flex items-center justify-center mb-2">
                                    {/* Animated Rings */}
                                    <div className="absolute inset-0 border-4 border-trimera-stoneDark/30 rounded-full"></div>
                                    <div className="absolute inset-0 border-4 border-trimera-gold rounded-full border-t-transparent animate-spin duration-[3s]"></div>

                                    <div className="flex flex-col items-center">
                                        <span className="text-5xl font-logo font-bold text-trimera-forest">{totalPower}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-trimera-textMain/50">Total</span>
                                    </div>
                                </div>
                                <h3 className="font-logo text-base font-bold text-trimera-gold uppercase tracking-wider mt-2">Nível de Poder</h3>
                            </div>

                            {/* Attributes Bars */}
                            <div className="md:col-span-3 space-y-1">
                                <h4 className="font-ui text-xs font-bold uppercase tracking-widest text-trimera-textMain/40 mb-4">Atributos de Combate</h4>
                                {character.attributes ? (
                                    <>
                                        <AttributeBar label="Sabedoria" value={character.attributes.sabedoria} icon={<Brain size={14} />} />
                                        <AttributeBar label="Força Física" value={character.attributes.forcaFisica} icon={<Sword size={14} />} />
                                        <AttributeBar label="Força Mágica" value={character.attributes.forcaMagica} icon={<Sparkles size={14} />} />
                                        <AttributeBar label="Defesa" value={character.attributes.defesa} icon={<Shield size={14} />} />
                                        <AttributeBar label="Técnica" value={character.attributes.tecnica} icon={<Crosshair size={14} />} />
                                    </>
                                ) : (
                                    <p className="text-sm italic opacity-50">Atributos desconhecidos.</p>
                                )}
                            </div>
                        </div>

                        {/* Full Story Section */}
                        <div>
                            <h3 className="font-title text-3xl text-trimera-forest mb-6 flex items-center gap-3 border-b border-trimera-stoneDark pb-4">
                                <ScrollText className="w-8 h-8 text-trimera-gold" />
                                Crônicas & Lendas
                            </h3>

                            <div className="font-body text-lg leading-loose text-justify text-trimera-textMain space-y-6 columns-1">
                                {/* Dropped cap for first letter */}
                                {character.fullStory ? (
                                    character.fullStory.split('\n').map((paragraph, idx) => {
                                        if (idx === 0) {
                                            return (
                                                <p key={idx}>
                                                    <span className="float-left text-5xl font-title text-trimera-gold mr-3 mt-[-6px] leading-none">{paragraph.charAt(0)}</span>
                                                    {paragraph.slice(1)}
                                                </p>
                                            )
                                        }
                                        return <p key={idx}>{paragraph}</p>;
                                    })
                                ) : (
                                    <p className="italic text-trimera-textMain/50">A história deste personagem foi perdida nas areias do tempo...</p>
                                )}
                            </div>
                        </div>

                        {/* Footer / ID */}
                        <div className="pt-8 border-t border-trimera-stoneDark text-right">
                            <span className="text-xs font-mono text-trimera-textMain/30 uppercase tracking-widest">ID: {character.id} // Trimera Archives</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export const PersonagensPage = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterEntry | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCharacters = MOCK_CHARACTERS.filter(char =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        char.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-trimera-stone bg-noise pt-52 pb-32 px-6 page-transition">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Lendas Vivas"
                    subtitle="Guerreiros, magos e entidades que moldaram a história."
                    icon={<User className="w-8 h-8" />}
                />

                {/* Search Bar */}
                <div className="max-w-xl mx-auto mb-16 relative">
                    <input
                        type="text"
                        placeholder="Buscar por nome ou título..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-trimera-stoneDark rounded-full px-6 py-4 pl-12 font-body text-lg focus:outline-none focus:border-trimera-gold focus:ring-1 focus:ring-trimera-gold shadow-sm transition-all"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-trimera-textMain/40 w-5 h-5" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCharacters.map((char) => {
                        const showImage = ['Gaeziel Aud-Balder', 'Zamma Can-Legan', 'Sublimy Excelsior', 'Pawllon Brawller'].includes(char.name);
                        return (
                            <div
                                key={char.id}
                                onClick={() => setSelectedCharacter(char)}
                                className="group cursor-pointer bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-trimera-gold/20 hover:-translate-y-2 transition-all duration-500 border-2 border-trimera-stoneDark/60 hover:border-trimera-gold flex flex-col"
                            >
                                {showImage ? (
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={char.image || `https://placehold.co/600x400?text=${char.name}`}
                                            alt={char.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="inline-block px-2 py-1 mb-2 bg-trimera-gold text-trimera-forest text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-md">
                                                {char.role}
                                            </span>
                                            <h3 className="font-title text-2xl text-white drop-shadow-md">{char.name}</h3>
                                        </div>
                                    </div>
                                ) : null}
                                <div className="p-6 flex-1 flex flex-col">
                                    {!showImage && (
                                        <div className="mb-4">
                                            <span className="inline-block px-2 py-1 mb-2 bg-trimera-gold text-trimera-forest text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-md">
                                                {char.role}
                                            </span>
                                            <h3 className="font-title text-2xl text-trimera-forest">{char.name}</h3>
                                        </div>
                                    )}
                                    <p className="font-body text-trimera-textMain/80 line-clamp-3 leading-relaxed mb-6 flex-1">
                                        {char.description}
                                    </p>

                                    {/* Button-like visual for expand */}
                                    <div className="mt-auto pt-4 border-t border-trimera-stoneDark">
                                        <button className="w-full py-3 bg-trimera-forest text-trimera-gold font-ui font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-trimera-forestLight transition-colors flex items-center justify-center gap-2 group-hover:bg-trimera-gold group-hover:text-trimera-forest">
                                            Ler História Completa <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredCharacters.length === 0 && (
                    <div className="text-center py-20 opacity-50">
                        <p className="font-title text-2xl text-trimera-forest">Nenhuma lenda encontrada.</p>
                    </div>
                )}
            </div>

            {selectedCharacter && (
                <CharacterModal
                    character={selectedCharacter}
                    onClose={() => setSelectedCharacter(null)}
                />
            )}
        </div>
    );
};
