
import React, { useState, useRef } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react';

export const MapViewer: React.FC = () => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 }); // Mouse position on click
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });   // Image position on click
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        // Constraint: Only allow drag if zoomed in
        if (scale <= 1) return;

        e.preventDefault();
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
        setStartPos({ x: position.x, y: position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || scale <= 1) return;
        e.preventDefault();

        if (containerRef.current) {
            const { offsetWidth, offsetHeight } = containerRef.current;

            const deltaX = e.clientX - dragStart.x;
            const deltaY = e.clientY - dragStart.y;

            let newX = startPos.x + deltaX;
            let newY = startPos.y + deltaY;

            // Constraint: Do not drag beyond limits (clamp)
            // The "extra" width/height caused by zoom is (size * scale) - size.
            // We can move half of that distance in either positive or negative direction.
            const limitX = (offsetWidth * (scale - 1)) / 2;
            const limitY = (offsetHeight * (scale - 1)) / 2;

            // Clamp Values
            if (newX > limitX) newX = limitX;
            if (newX < -limitX) newX = -limitX;
            if (newY > limitY) newY = limitY;
            if (newY < -limitY) newY = -limitY;

            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.5, 4));

    const handleZoomOut = () => {
        setScale(prev => {
            const next = Math.max(prev - 0.5, 1);
            // Reset position if we zoom all the way out to keep it clean
            if (next === 1) setPosition({ x: 0, y: 0 });
            return next;
        });
    };

    const handleReset = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full rounded-2xl border-4 border-trimera-gold/50 overflow-hidden shadow-2xl group bg-trimera-forest/10 ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >

            {/* Map Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 bg-trimera-stone/90 p-2 rounded-lg border border-trimera-stoneDark shadow-lg backdrop-blur-sm">
                <button onClick={handleZoomIn} className="p-2 hover:bg-trimera-gold hover:text-trimera-forest rounded transition-colors" title="Zoom In">
                    <ZoomIn size={20} />
                </button>
                <button onClick={handleZoomOut} className="p-2 hover:bg-trimera-gold hover:text-trimera-forest rounded transition-colors" title="Zoom Out">
                    <ZoomOut size={20} />
                </button>
                <button onClick={handleReset} className="p-2 hover:bg-trimera-gold hover:text-trimera-forest rounded transition-colors" title="Reset View">
                    <RotateCcw size={20} />
                </button>
            </div>

            {/* Drag Hint (Only visible when zoomed) */}
            <div className={`
        absolute bottom-4 left-4 z-20 bg-trimera-forest/80 text-trimera-gold px-3 py-1 rounded-full text-xs font-ui uppercase tracking-widest pointer-events-none transition-opacity flex items-center gap-2
        ${scale > 1 ? 'opacity-100' : 'opacity-0'}
      `}>
                <Move size={12} /> Arraste para explorar
            </div>

            {/* Map Image (Directly Transformable) */}
            <div
                className="w-full h-auto flex items-center justify-center transition-transform duration-100 ease-out origin-center"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                }}
            >
                <img
                    src="https://i.imgur.com/1uXlSPB.jpeg"
                    alt="Mapa de Trimera"
                    className="w-full h-full object-cover pointer-events-none select-none drop-shadow-2xl block"
                />
            </div>
        </div>
    );
};
