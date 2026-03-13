import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon,
}) => {
  const baseStyles = 'rounded-2xl font-bold transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-b from-academy-gold to-academy-gold-dark text-dark-text shadow-lg shadow-academy-gold/30',
    secondary: 'bg-gradient-to-b from-sky-blue to-sky-blue-dark text-white shadow-lg shadow-sky-blue/30',
    success: 'bg-gradient-to-b from-meadow-green to-green-600 text-white shadow-lg shadow-meadow-green/30',
    outline: 'border-2 border-academy-gold text-academy-gold bg-transparent hover:bg-academy-gold/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg min-w-[200px]',
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};
