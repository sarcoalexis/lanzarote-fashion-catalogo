
import React from 'react';

export const COLORS = {
  primary: '#0A0A0A', // Rich Black
  accent: '#C5A059',  // Soft Gold
  background: '#000000', // Pure Black
  text: '#F5F5F5',    // Off-white
  border: '#262626',  // Dark border
};

export const Logo = ({ size = 120 }: { size?: number }) => {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div 
        className="flex flex-col items-center justify-center"
        style={{ width: size }}
      >
        <h1 
          className="serif text-center font-bold tracking-[0.2em] uppercase leading-none"
          style={{ 
            color: 'transparent', 
            fontSize: size * 0.18,
            WebkitTextStroke: `0.5px ${COLORS.accent}`,
            textShadow: `
              1px 1px 0px rgba(197, 160, 89, 0.4),
              -1px -1px 0px rgba(255, 255, 255, 0.1),
              2px 2px 8px rgba(0,0,0,0.9)
            `,
            backgroundImage: `linear-gradient(to bottom, ${COLORS.accent}, #8a6d3b)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          Lanzarote
        </h1>
        <div className="w-full h-[1px] bg-[#D4AF37] my-1 opacity-50" />
        <p 
          className="text-center font-medium tracking-[0.6em] uppercase"
          style={{ color: COLORS.accent, fontSize: size * 0.08, opacity: 0.9 }}
        >
          Fashion
        </p>
      </div>
    );
  }

  return (
    <div 
      className="flex items-center justify-center overflow-hidden"
      style={{ width: size }}
    >
      <img 
        src="https://ais-dev-x2gmxknaiiwsmr6uo6g77t-292416208523.us-east1.run.app/api/images/2/0" 
        alt="Lanzarote Fashion Logo"
        className="w-full h-auto object-contain"
        referrerPolicy="no-referrer"
        onError={() => setError(true)}
      />
    </div>
  );
};
