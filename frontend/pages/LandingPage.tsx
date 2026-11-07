
import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, ArrowRight, Castle, Zap, ScrollText } from 'lucide-react';

export const LandingPage = () => {
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
                        <Link to="/reinos-e-regioes#regioes" className="group relative px-8 py-4 bg-trimera-gold text-trimera-forest font-ui font-bold uppercase tracking-wider rounded overflow-hidden hover:bg-trimera-goldHover transition-all shadow-lg hover:shadow-trimera-gold/50 w-full md:w-auto text-center">
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
                        { icon: Castle, title: "Reinos", desc: "Fortalezas erguidas sobre alicerces de magia.", link: "/reinos-e-regioes#reinos" },
                        { icon: Zap, title: "Energia Vital", desc: "O fluxo que conecta toda a vida e matéria.", link: "/energias" },
                        { icon: ScrollText, title: "Arquivos Antigos", desc: "Pergaminhos que contam a verdade do universo.", link: "/historias" }
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
