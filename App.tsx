import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Zap, Crown, BookOpen, ScrollText, Leaf, Castle, ArrowRight, Shield, Brain, Sparkles, Sword, Crosshair, User, Maximize2, Map as MapIcon, ZoomIn, ZoomOut, RotateCcw, Move, Search, BarChart3, Heart, Flame, Ghost, Hammer, Star, Sun, Moon, Wand2, FlaskConical, Target } from 'lucide-react';
import { NAV_ITEMS, MOCK_DATA, MOCK_CHARACTERS } from './constants';
import { LoreKeeper } from './components/LoreKeeper';
import { CharacterAttributes, CharacterEntry } from './types';

// --- Shared Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `font-ui font-bold text-sm tracking-widest uppercase transition-all duration-300 px-4 py-2 rounded-md whitespace-nowrap ${
      isActive 
        ? 'text-trimera-gold' 
        : 'text-trimera-stone/80 hover:text-white hover:bg-white/10'
    }`;
  };

  // Split navigation items for left and right sides
  const midPoint = Math.ceil(NAV_ITEMS.length / 2); // 4 items left, 3 right
  const leftNavItems = NAV_ITEMS.slice(0, midPoint);
  const rightNavItems = NAV_ITEMS.slice(midPoint);

  return (
    <>
      <div className={`fixed z-40 transition-all duration-500 ease-in-out w-full flex justify-center ${
        isScrolled ? 'top-4 px-4' : 'top-0 px-0'
      }`}>
        <nav className={`
          w-full transition-all duration-500 flex items-center px-6 lg:px-12 relative
          ${isScrolled 
            ? 'max-w-7xl rounded-2xl bg-trimera-forest/95 backdrop-blur-md shadow-2xl h-24 border border-white/10' 
            : 'h-40 bg-gradient-to-b from-black/80 to-transparent'
          }
        `}>
          
          {/* Mobile Menu Button (Absolute Left on Mobile) */}
          <button 
            className="lg:hidden absolute left-6 text-trimera-gold hover:text-white transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Left Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-1 pr-8">
            {leftNavItems.map((item) => (
              <Link key={item.id} to={`/${item.id}`} className={getLinkClass(`/${item.id}`)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo Area (Centered) */}
          <div className="flex-shrink-0 mx-auto lg:mx-4 transition-all duration-500">
            <Link to="/" className="block group">
              <img 
                src="https://i.imgur.com/873qBsT.png" 
                alt="Trimera Universe" 
                className={`transition-all duration-500 object-contain drop-shadow-lg group-hover:drop-shadow-2xl ${isScrolled ? 'h-20' : 'h-32'}`}
              />
            </Link>
          </div>

          {/* Right Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-start items-center gap-1 pl-8">
            {rightNavItems.map((item) => (
              <Link key={item.id} to={`/${item.id}`} className={getLinkClass(`/${item.id}`)}>
                {item.label}
              </Link>
            ))}
          </div>

        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-trimera-forest/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          {/* Logo in Mobile Menu */}
          <img src="https://i.imgur.com/873qBsT.png" alt="Trimera" className="h-24 mb-4 opacity-80" />

          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.id} 
              to={`/${item.id}`} 
              className="font-title text-3xl text-trimera-stone hover:text-trimera-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const SectionHeader: React.FC<{
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

const ContentCard: React.FC<{ title: string; children: React.ReactNode; variant?: 'stone' | 'wood' }> = ({ title, children, variant = 'stone' }) => (
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

// --- Map Component ---

const MapViewer: React.FC = () => {
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

// --- Pages ---

const LandingPage = () => {
  return (
    <div className="min-h-screen font-body page-transition">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2568&auto=format&fit=crop" 
            alt="Ancient Forest" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-trimera-forest/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-trimera-stone via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-32">
          <div className="inline-block animate-pulse mb-6">
            <Crown className="w-16 h-16 text-trimera-gold mx-auto drop-shadow-lg" />
          </div>
          <h1 className="font-logo text-7xl md:text-9xl text-trimera-stone mb-6 tracking-wide drop-shadow-2xl">
            Trimera
          </h1>
          <p className="font-body text-2xl md:text-3xl text-trimera-stone/90 mb-10 leading-relaxed drop-shadow-md border-l-4 border-trimera-gold pl-6 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-6 bg-black/20 p-6 rounded-lg backdrop-blur-sm">
            "Onde as árvores sussurram profecias antigas e as pedras dos castelos guardam os segredos dos deuses esquecidos."
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/regioes" className="group relative px-8 py-4 bg-trimera-gold text-trimera-forest font-ui font-bold uppercase tracking-wider rounded overflow-hidden hover:bg-trimera-goldHover transition-all shadow-lg hover:shadow-trimera-gold/50 w-full md:w-auto text-center">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explorar o Mapa <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/personagens" className="px-8 py-4 bg-transparent border-2 border-trimera-stone text-trimera-stone font-ui font-bold uppercase tracking-wider rounded hover:bg-trimera-stone hover:text-trimera-forest transition-all w-full md:w-auto text-center backdrop-blur-sm">
              Conhecer Lendas
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-32 bg-trimera-stone bg-noise relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Castle, title: "Reinos", desc: "Fortalezas erguidas sobre alicerces de magia.", link: "/reinos" },
            { icon: Zap, title: "Energia Vital", desc: "O fluxo que conecta toda a vida e matéria.", link: "/energias" },
            { icon: ScrollText, title: "Arquivos Antigos", desc: "Pergaminhos que contam a verdade do universo.", link: "/civilizacao" }
          ].map((feature, idx) => (
            <Link key={idx} to={feature.link} className="block h-full group">
              <div className="h-full p-8 bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-trimera-stoneDark text-center cursor-pointer">
                <div className="w-20 h-20 mx-auto bg-trimera-stone rounded-full flex items-center justify-center mb-6 group-hover:bg-trimera-gold transition-colors duration-500">
                  <feature.icon className="w-10 h-10 text-trimera-forest" />
                </div>
                <h3 className="font-title text-2xl text-trimera-forest mb-4 group-hover:text-trimera-gold transition-colors">{feature.title}</h3>
                <p className="font-body text-lg text-trimera-textMain/80">{feature.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

const CivilizacaoPage = () => (
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
            <br/><br/>
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

const DeusesPage = () => (
  <div className="min-h-screen bg-trimera-forest pt-52 pb-32 px-6 relative overflow-hidden page-transition">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeader 
        title="Panteão Divino" 
        subtitle="As forças primordiais que moldaram as florestas e os mares." 
        icon={<Crown className="w-8 h-8 text-trimera-gold" />}
        titleColor="text-trimera-gold"
        subtitleColor="text-trimera-gold"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Sublimy Special Card */}
        <div className="md:col-span-2 group relative bg-gradient-to-b from-gray-900 via-trimera-forest to-black border-2 border-trimera-gold p-10 rounded-xl shadow-[0_0_30px_rgba(196,146,47,0.3)] hover:shadow-[0_0_50px_rgba(196,146,47,0.5)] transition-all duration-500 overflow-hidden">
          {/* Animated Background Effect */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
            <div className="shrink-0 w-24 h-24 bg-trimera-gold rounded-full flex items-center justify-center font-title text-5xl text-trimera-forest shadow-[0_0_20px_rgba(196,146,47,0.6)] group-hover:scale-110 transition-transform duration-700 border-4 border-trimera-stone">
              S
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h2 className="font-title text-4xl md:text-5xl text-trimera-gold drop-shadow-md">Sublimy Excelsior</h2>
                <span className="px-3 py-1 bg-trimera-gold/20 border border-trimera-gold text-trimera-gold text-xs font-bold uppercase tracking-widest rounded-full">
                  O Deus do Universo
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-ui text-trimera-stone/70 uppercase tracking-widest mb-6">
                <span className="flex items-center gap-2"><Sparkles size={14} className="text-trimera-gold" /> Domínio: Existência</span>
                <span className="flex items-center gap-2"><Crown size={14} className="text-trimera-gold" /> Símbolo: O Vazio Criador</span>
              </div>

              <p className="font-body text-xl text-trimera-stone leading-relaxed">
                O criador indireto do universo, nascido da implosão do nada absoluto em Candor. Sua consciência é o próprio tecido da realidade, e sua energia permeia cada átomo de Trimera.
              </p>
            </div>
          </div>
        </div>

        {/* Regular Gods */}
        {MOCK_DATA.deuses.map((deus, idx) => (
          <div key={idx} className="group relative bg-trimera-forestLight/30 border border-trimera-gold/20 p-10 rounded-xl hover:bg-trimera-forestLight/50 transition-all duration-500">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-16 h-16 bg-trimera-gold rounded-lg flex items-center justify-center font-title text-4xl text-trimera-forest shadow-lg group-hover:scale-110 transition-transform">
                {deus.title.charAt(0)}
              </div>
              <div>
                <h2 className="font-title text-3xl text-trimera-stone mb-2">{deus.title}</h2>
                <div className="flex gap-4 text-xs font-ui text-trimera-gold uppercase tracking-widest mb-4">
                  <span>{deus.stats?.Dominio}</span> • <span>{deus.stats?.Simbolo}</span>
                </div>
                <p className="font-body text-lg text-trimera-stone/80 leading-relaxed">{deus.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EnergiasPage = () => {
  const getIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('vital')) return <Heart className="w-8 h-8" />;
    if (lower.includes('natural')) return <Leaf className="w-8 h-8" />;
    if (lower.includes('espiritual')) return <Ghost className="w-8 h-8" />;
    if (lower.includes('física')) return <Hammer className="w-8 h-8" />;
    if (lower.includes('astral')) return <Star className="w-8 h-8" />;
    if (lower.includes('mental')) return <Brain className="w-8 h-8" />;
    if (lower.includes('luz')) return <Sun className="w-8 h-8" />;
    if (lower.includes('escuridão') || lower.includes('negra')) return <Moon className="w-8 h-8" />;
    if (lower.includes('mágica')) return <Wand2 className="w-8 h-8" />;
    if (lower.includes('química')) return <FlaskConical className="w-8 h-8" />;
    if (lower.includes('concentrada')) return <Target className="w-8 h-8" />;
    if (lower.includes('mítica')) return <Crown className="w-8 h-8" />;
    return <Zap className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-[#EBE9E4] bg-noise pt-52 pb-32 px-6 page-transition">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Catálogo de Energias" 
          subtitle="O estudo profundo das forças que compõem a realidade de Trimera." 
          icon={<BookOpen className="w-8 h-8" />}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_DATA.energias.map((eng, idx) => (
            <div key={idx} className="bg-[#FDFBF7] p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-double border-4 border-trimera-gold/30 hover:border-trimera-gold relative group overflow-hidden">
               {/* Decorative corner */}
               <div className="absolute top-0 right-0 w-12 h-12 bg-trimera-stoneDark/20 -rotate-45 transform translate-x-6 -translate-y-6"></div>

               <div className="flex flex-col items-center mb-6">
                 <div className="w-16 h-16 bg-trimera-forest text-trimera-gold rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md border border-trimera-gold">
                    {getIcon(eng.title)}
                 </div>
                 <h3 className="font-title text-2xl text-trimera-forest text-center border-b-2 border-trimera-gold/20 pb-2 w-full">{eng.title}</h3>
               </div>
               
               {eng.effects && (
                 <ul className="space-y-3 font-body text-trimera-textMain/90 text-sm leading-relaxed">
                   {eng.effects.map((effect, i) => (
                     <li key={i} className="flex items-start gap-2">
                       <span className="text-trimera-gold mt-1.5 min-w-[6px] h-[6px] rounded-full bg-trimera-gold"></span>
                       <span>{effect}</span>
                     </li>
                   ))}
                 </ul>
               )}

               {!eng.effects && (
                 <p className="font-body text-lg text-trimera-textMain leading-relaxed">{eng.description}</p>
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- New Regioes Page ---

const RegioesPage = () => (
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
            Principais Regiões
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
             <div className="p-6 text-center italic opacity-60">Nenhuma região mapeada ainda.</div>
          )}
        </div>
      </div>
    </div>
  </div>
);


// --- New Personagens Page (REFACTORED MODAL) ---

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
        <div className="w-full md:w-5/12 h-72 md:h-full relative bg-black flex-shrink-0 group">
           <img 
            src={character.image || `https://placehold.co/600x800?text=${character.name}`} 
            alt={character.name}
            className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
          />
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
                     <span className="text-5xl font-title text-trimera-forest">{totalPower}</span>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-trimera-textMain/50">Total</span>
                   </div>
                </div>
                <h3 className="font-title text-xl text-trimera-gold uppercase tracking-widest">Nível de Poder</h3>
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

const PersonagensPage = () => {
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
          {filteredCharacters.map((char) => (
            <div 
              key={char.id}
              onClick={() => setSelectedCharacter(char)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-trimera-stoneDark flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={char.image || `https://placehold.co/600x400?text=${char.name}`} 
                  alt={char.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 mb-2 bg-trimera-gold text-trimera-forest text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-md">
                    {char.role}
                  </span>
                  <h3 className="font-title text-2xl text-white drop-shadow-md">{char.name}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="font-body text-trimera-textMain/80 line-clamp-3 leading-relaxed mb-6 flex-1">
                  {char.description}
                </p>
                
                {/* Button-like visual for expand */}
                <div className="mt-auto pt-4 border-t border-trimera-stoneDark">
                  <button className="w-full py-3 bg-trimera-forest text-trimera-gold font-ui font-bold uppercase text-xs tracking-widest rounded hover:bg-trimera-forestLight transition-colors flex items-center justify-center gap-2 group-hover:bg-trimera-gold group-hover:text-trimera-forest">
                    Ler História Completa <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
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

const GenericPage = ({ title, bg, items }: { title: string, bg: string, items: any[] }) => (
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

// --- Main Layout ---

const Layout = ({ children }: { children?: React.ReactNode }) => (
  <div className="font-sans antialiased text-gray-900 selection:bg-trimera-gold selection:text-white flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <LoreKeeper />
    <footer className="bg-trimera-forest text-trimera-stone py-16 border-t border-trimera-gold/30 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Castle className="w-12 h-12 text-trimera-gold mx-auto mb-6 opacity-80" />
        <div className="font-logo text-4xl mb-6 tracking-wider">Trimera Universe</div>
        <p className="font-body text-lg opacity-60 max-w-lg mx-auto mb-8">
          Uma enciclopédia viva de lendas, deuses e reinos esquecidos, tecida em código e magia.
        </p>
        <div className="flex justify-center gap-8 text-sm font-ui uppercase tracking-widest text-trimera-gold/60">
          <span className="hover:text-trimera-gold cursor-pointer">Sobre</span>
          <span className="hover:text-trimera-gold cursor-pointer">Mapa</span>
          <span className="hover:text-trimera-gold cursor-pointer">Contato</span>
        </div>
        <div className="mt-12 text-xs font-ui opacity-30 border-t border-white/10 pt-8">
          &copy; 2024 Projeto Trimera. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/civilizacao" element={<CivilizacaoPage />} />
          <Route path="/deuses" element={<DeusesPage />} />
          <Route path="/energias" element={<EnergiasPage />} />
          <Route path="/entidades" element={<GenericPage title="Entidades" bg="bg-trimera-stone" items={[]} />} />
          <Route path="/personagens" element={<PersonagensPage />} />
          <Route path="/reinos" element={<GenericPage title="Reinos" bg="bg-trimera-stone" items={MOCK_DATA.reinos} />} />
          <Route path="/regioes" element={<RegioesPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;