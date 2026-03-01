
import React from 'react';
import { COLORS } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all active:scale-95 shadow-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] border";
  
  const variants = {
    primary: "bg-[#C5A059] text-black border-[#C5A059] hover:bg-[#b08e4d]",
    secondary: "bg-transparent text-[#C5A059] border-[#C5A059] hover:bg-[#C5A059]/10",
    ghost: "bg-transparent text-white border-transparent shadow-none hover:shadow-none font-semibold"
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
