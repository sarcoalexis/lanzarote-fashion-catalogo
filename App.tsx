
import React, { useState } from 'react';
import { AuthView, Product } from './types';
import { Logo, COLORS } from './constants';
import Input from './components/Input';
import Button from './components/Button';
import ChatBot from './components/ChatBot';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import { Home, LayoutGrid, User, Settings, LogOut, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<AuthView>('login');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'catalog' | 'profile'>('catalog');

  const handleLogin = () => {
    setView('catalog');
    setActiveTab('catalog');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
  };

  const renderLogin = () => (
    <div className="w-full max-w-sm space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-center mb-12 hover:scale-105 transition-transform duration-500 cursor-pointer">
        <Logo size={180} />
      </div>
      
      <div className="space-y-6">
        <Input 
          label="Correo Electrónico" 
          type="email" 
          placeholder="ejemplo@lanzarote.com" 
        />
        <Input 
          label="Contraseña" 
          type="password" 
          placeholder="••••••••" 
        />
      </div>

      <div className="space-y-4">
        <Button fullWidth onClick={handleLogin}>
          Iniciar Sesión
        </Button>
        <div className="text-center">
          <button 
            onClick={() => setView('recovery')}
            className="text-[10px] font-semibold text-[#C5A059] uppercase tracking-[0.3em] hover:opacity-80 transition-opacity"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>

      <div className="pt-8 text-center">
        <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
          ¿No tienes cuenta?{' '}
          <button 
            onClick={() => setView('register')}
            className="text-white font-bold hover:text-[#C5A059] transition-colors"
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="w-full max-w-sm space-y-8 animate-in slide-in-from-right-10 duration-500">
      <div className="text-center">
        <h2 className="serif text-3xl font-bold text-white tracking-tight">Crear Cuenta</h2>
        <p className="text-[10px] text-[#C5A059] mt-2 uppercase tracking-[0.4em]">Únete a la exclusividad</p>
      </div>

      <div className="space-y-6">
        <Input label="Correo Electrónico" type="email" placeholder="tu@email.com" />
        <Input label="Contraseña" type="password" placeholder="••••••••" />
        <Input label="Confirmar Contraseña" type="password" placeholder="••••••••" />
      </div>

      <Button fullWidth variant="secondary" onClick={() => setView('login')}>
        Crear Cuenta
      </Button>

      <div className="text-center">
        <button 
          onClick={() => setView('login')}
          className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.3em] hover:text-white transition-colors"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );

  const renderRecovery = () => (
    <div className="w-full max-w-sm space-y-8 animate-in slide-in-from-left-10 duration-500">
      <div className="text-center">
        <h2 className="serif text-3xl font-bold text-white tracking-tight">Recuperación</h2>
        <p className="text-[10px] text-[#C5A059] mt-2 uppercase tracking-[0.4em]">Enviaremos un enlace a tu correo</p>
      </div>

      <div className="space-y-6">
        <Input label="Correo Electrónico" type="email" placeholder="tu@email.com" />
      </div>

      <Button fullWidth onClick={() => alert('Enlace enviado')}>
        Enviar Enlace
      </Button>

      <div className="text-center">
        <button 
          onClick={() => setView('login')}
          className="text-[10px] text-neutral-400 font-bold uppercase tracking-[0.3em] hover:text-white transition-colors"
        >
          Volver al Login
        </button>
      </div>
    </div>
  );

  const BottomNav = () => (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex items-center justify-around px-6 z-50">
      <button 
        onClick={() => { setActiveTab('home'); setView('catalog'); }}
        className={`flex flex-col items-center space-y-1 transition-all ${activeTab === 'home' ? 'text-[#C5A059]' : 'text-[#C5A059]/40 hover:text-[#C5A059]/70'}`}
      >
        <Home size={20} />
        <span className="text-[8px] uppercase font-bold tracking-widest">Inicio</span>
      </button>
      <button 
        onClick={() => { setActiveTab('catalog'); setView('catalog'); }}
        className={`flex flex-col items-center space-y-1 transition-all ${activeTab === 'catalog' ? 'text-[#C5A059]' : 'text-[#C5A059]/40 hover:text-[#C5A059]/70'}`}
      >
        <LayoutGrid size={20} />
        <span className="text-[8px] uppercase font-bold tracking-widest">Catálogo</span>
      </button>
      <button 
        onClick={() => setActiveTab('profile')}
        className={`flex flex-col items-center space-y-1 transition-all ${activeTab === 'profile' ? 'text-[#C5A059]' : 'text-[#C5A059]/40 hover:text-[#C5A059]/70'}`}
      >
        <User size={20} />
        <span className="text-[8px] uppercase font-bold tracking-widest">Perfil</span>
      </button>
      <button 
        onClick={() => setView('login')}
        className="flex flex-col items-center space-y-1 text-[#C5A059]/40 hover:text-red-500/80 transition-all"
      >
        <LogOut size={20} />
        <span className="text-[8px] uppercase font-bold tracking-widest">Salir</span>
      </button>
    </div>
  );

  const isAuthView = view === 'login' || view === 'register' || view === 'recovery';

  const renderHome = () => (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6 animate-in fade-in duration-700">
      <Logo size={200} />
      <div className="text-center space-y-2">
        <h2 className="serif text-2xl text-white font-bold">Bienvenido a la Exclusividad</h2>
        <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.4em]">Explora nuestras colecciones premium</p>
      </div>
      <Button onClick={() => { setActiveTab('catalog'); setView('catalog'); }}>
        Ver Catálogo
      </Button>
    </div>
  );

  const renderProfile = () => (
    <div className="w-full h-full flex flex-col space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center space-x-4 p-6 bg-[#111111] rounded-[32px] border border-neutral-900">
        <div className="w-16 h-16 rounded-full bg-[#C5A059] flex items-center justify-center text-black font-bold text-xl">
          LF
        </div>
        <div>
          <h3 className="text-white font-bold">Lanzarote Fashion</h3>
          <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Miembro Exclusive</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 px-2">Mi Cuenta</h4>
        <div className="space-y-2">
          {['Mis Pedidos', 'Direcciones', 'Métodos de Pago', 'Notificaciones'].map(item => (
            <button key={item} className="w-full flex items-center justify-between p-5 bg-[#0A0A0A] border border-neutral-900 rounded-2xl text-xs text-neutral-300 hover:border-[#C5A059]/30 transition-all">
              <span>{item}</span>
              <ChevronRight size={14} className="text-neutral-700" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-0 md:p-6 bg-[#000000] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059] opacity-[0.05] rounded-full -mr-64 -mt-64 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059] opacity-[0.05] rounded-full -ml-64 -mb-64 blur-[120px]" />

      {/* Main Content Card */}
      <main className={`bg-[#0A0A0A] relative z-10 flex flex-col items-center transition-all duration-500 ${
        isAuthView 
          ? 'p-8 md:p-12 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-md border border-[#C5A059]/10' 
          : 'w-full h-screen md:h-[850px] md:max-w-[450px] md:rounded-[60px] md:border md:border-[#C5A059]/10 overflow-hidden p-6'
      }`}>
        {view === 'login' && renderLogin()}
        {view === 'register' && renderRegister()}
        {view === 'recovery' && renderRecovery()}
        
        {!isAuthView && (
          <div className="w-full h-full flex flex-col">
            {activeTab !== 'home' && (
              <div className="flex items-center justify-between mb-8 px-2">
                <div className="pl-1">
                  <Logo size={110} />
                </div>
                <div className="flex space-x-3">
                  <button className="p-3 rounded-full bg-[#1A1A1A] border border-neutral-800 text-neutral-400">
                    <Settings size={18} />
                  </button>
                </div>
              </div>
            )}

            <div className="flex-1 overflow-hidden">
              {activeTab === 'home' && renderHome()}
              {activeTab === 'catalog' && view === 'catalog' && <Catalog onProductClick={handleProductClick} />}
              {activeTab === 'catalog' && view === 'detail' && selectedProduct && (
                <ProductDetail product={selectedProduct} onBack={() => setView('catalog')} />
              )}
              {activeTab === 'profile' && renderProfile()}
            </div>
            
            <BottomNav />
          </div>
        )}
      </main>

      {/* AI Chatbot */}
      <ChatBot />

      {/* Footer Credit (only on auth views) */}
      {isAuthView && (
        <footer className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
          <p className="text-[9px] text-neutral-600 uppercase tracking-[0.6em]">
            Lanzarote Fashion &copy; 2024
          </p>
        </footer>
      )}
    </div>
  );
};

export default App;
