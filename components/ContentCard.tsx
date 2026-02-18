
import React from 'react';
import { Castle, Leaf } from 'lucide-react';

export const ContentCard: React.FC<{ title: string; children: React.ReactNode; variant?: 'stone' | 'wood' }> = ({ title, children, variant = 'stone' }) => (
    <div className={`
    relative p-8 rounded-xl transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl
    ${variant === 'stone'
            ? 'bg-white border border-trimera-stoneDark shadow-lg'
            : 'bg-trimera-forest text-trimera-stone border border-trimera-forestLight shadow-xl'
        }
  `}>
        <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl ${variant === 'stone' ? 'bg-trimera-gold' : 'bg-trimera-gold/50'}`}></div>

        <h3 className={`font-title text-2xl mb-4 flex items-center gap-3 ${variant === 'stone' ? 'text-trimera-forest' : 'text-trimera-gold'}`}>
            {variant === 'stone' ? <Castle size={20} className="text-trimera-gold" /> : <Leaf size={20} />}
            {title}
        </h3>
        <div className={`font-body text-lg leading-relaxed text-readability ${variant === 'stone' ? 'text-trimera-textMain' : 'text-trimera-stone/90'}`}>
            {children}
        </div>
    </div>
);
