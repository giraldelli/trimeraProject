
import React from 'react';

export const SectionHeader: React.FC<{
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
    titleColor?: string;
    subtitleColor?: string;
}> = ({
    title,
    subtitle,
    icon,
    titleColor = "text-trimera-forest",
    subtitleColor = "text-trimera-forestLight"
}) => (
        <div className="text-center mb-20 relative group">
            <div className="flex justify-center items-center mb-4">
                <div className="h-px w-12 bg-trimera-gold/50"></div>
                <div className="mx-4 p-3 bg-trimera-stone rounded-full border border-trimera-stoneDark shadow-inner text-trimera-gold group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <div className="h-px w-12 bg-trimera-gold/50"></div>
            </div>
            <h1 className={`font-title text-5xl md:text-6xl mb-4 drop-shadow-sm ${titleColor}`}>{title}</h1>
            <p className={`font-body text-xl md:text-2xl italic max-w-2xl mx-auto text-readability ${subtitleColor}`}>{subtitle}</p>
        </div>
    );
