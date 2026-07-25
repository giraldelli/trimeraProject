import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Book, Scroll } from 'lucide-react';
import { generateLoreResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const LoreKeeper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Saudações, viajante. Eu sou o Guardião do Grimório. Que segredos de Trimera desejas desvendar?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateLoreResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-trimera-forest text-trimera-gold border border-trimera-gold/30 p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-trimera-forestLight transition-all duration-300 group"
        >
          <Book className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {isOpen && (
        <div className="bg-trimera-stone border border-trimera-stoneDark rounded-2xl shadow-2xl w-80 md:w-96 h-[500px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-trimera-forest p-4 flex justify-between items-center border-b border-trimera-gold/20">
            <h3 className="font-title text-xl text-trimera-stone tracking-wider flex items-center gap-2">
              <Scroll className="w-5 h-5 text-trimera-gold" /> Grimório
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-trimera-stone/60 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-noise" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl font-body text-lg leading-snug shadow-sm border ${
                    msg.role === 'user'
                      ? 'bg-trimera-gold text-trimera-forest border-trimera-goldHover rounded-tr-none'
                      : 'bg-white text-trimera-textMain border-trimera-stoneDark rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/50 p-3 rounded-lg border border-trimera-stoneDark italic text-trimera-forestLight font-body flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-spin" /> Consultando os espíritos...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-trimera-stoneDark flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pergunte ao grimório..."
              className="flex-1 bg-trimera-stone/50 border border-trimera-stoneDark rounded-lg px-4 py-2 font-body text-lg focus:outline-none focus:border-trimera-gold focus:bg-white transition-all text-trimera-textMain placeholder:text-trimera-textMain/40"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-trimera-forest text-trimera-gold p-3 rounded-lg hover:bg-trimera-forestLight transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
