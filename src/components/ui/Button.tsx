import { clsx } from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'brand' | 'brandOutline' | 'brandGradient';
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
      'bg-base-white text-base-black hover:bg-base-white/90 focus-visible:ring-2 focus-visible:ring-base-white/60 shadow-md hover:shadow-lg',
    secondary:
      'bg-base-black text-base-white border border-base-white/30 hover:bg-base-white hover:text-base-black transition-colors focus-visible:ring-2 focus-visible:ring-base-white/60',
    ghost: 'text-base-white hover:text-base-white/70 focus-visible:ring-2 focus-visible:ring-base-white/60',
    brand: 'bg-brand-blue text-base-white hover:bg-brand-blue/90 focus-visible:ring-2 focus-visible:ring-brand-blue/50 shadow-md hover:shadow-lg',
    brandOutline: 'border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-base-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue/50',
    brandGradient: 'relative text-base-white bg-gradient-to-r from-brand-blue to-brand-mint hover:from-brand-blue/90 hover:to-brand-mint/90 focus-visible:ring-2 focus-visible:ring-brand-blue/40 shadow-lg'
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
