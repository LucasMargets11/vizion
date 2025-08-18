import { clsx } from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  children,
  ...rest
}) => {
  const styles: Record<string, string> = {
    primary:
      'bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent shadow-md hover:shadow-lg',
    secondary:
      'bg-white/10 text-white hover:bg-white/20 border border-white/10 focus-visible:ring-brand',
    ghost: 'text-white hover:text-brand focus-visible:ring-brand'
  };
  return (
    <button
      className={clsx(
        'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all focus-ring disabled:opacity-50 disabled:cursor-not-allowed',
        styles[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
