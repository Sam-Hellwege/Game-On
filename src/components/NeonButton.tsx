// components/NeonButton.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/fonts/fonts.css';

interface NeonButtonProps {
  text: string;
  to?: string; // replaces href
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const NeonButton: React.FC<NeonButtonProps> = ({
  text,
  to,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = `
    inline-block
    px-6 py-3
    rounded-xl

    text-white text-sm sm:text-base font-semibold
    font-display
    neon-link
    shadow-[0_0_8px_#a0e9ff,0_0_16px_#a0e9ff]
    transition-all duration-200 ease-in-out
    hover:shadow-[0_0_12px_#a0e9ff,0_0_24px_#a0e9ff]
    focus:outline-none focus:ring-2 focus:ring-[#a0e9ff]/50
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={baseClasses}>
      {text}
    </button>
  );
};

export default NeonButton;
