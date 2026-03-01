
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el asistente de Lanzarote Fashion. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Format history for Gemini
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getChatResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C5A059] text-black shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-transform hover:scale-110 active:scale-90"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl bg-[#0A0A0A] shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-[#C5A059]/20 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#0A0A0A] p-4 text-white border-b border-[#C5A059]/10">
            <div className="flex items-center space-x-2">
              <Bot size={20} className="text-[#C5A059]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Asistente LF</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#C5A059] transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0A0A0A]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-[11px] shadow-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#C5A059] text-black rounded-tr-none font-medium'
                      : 'bg-[#1A1A1A] text-neutral-300 rounded-tl-none border border-neutral-800'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="animate-pulse bg-neutral-900 text-neutral-600 p-2 rounded-full text-[10px] tracking-widest uppercase">
                  Escribiendo...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-[#C5A059]/10 p-4 flex space-x-2 bg-[#0A0A0A]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 text-xs outline-none focus:ring-0 bg-transparent text-white placeholder:text-neutral-700"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="text-[#C5A059] hover:scale-110 disabled:opacity-30 transition-transform"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
