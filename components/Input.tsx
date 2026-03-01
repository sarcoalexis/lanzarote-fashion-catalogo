
import React from 'react';
import { COLORS } from '../constants';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col space-y-2 w-full group">
      <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 group-focus-within:text-[#C5A059] transition-colors">
        {label}
      </label>
      <input
        {...props}
        className="w-full border-b border-neutral-800 bg-transparent py-2 px-0 text-white transition-all focus:border-[#C5A059] focus:outline-none placeholder:text-neutral-700"
      />
    </div>
  );
};

export default Input;
