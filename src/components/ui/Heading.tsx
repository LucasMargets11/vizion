import { clsx } from 'clsx';
import React from 'react';

type Level = 1 | 2 | 3 | 4;
interface HeadingProps {
  level?: Level;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ level = 1, children, className }) => {
  const Tag = `h${level}` as const;
  const sizes: Record<Level, string> = {
    1: 'text-4xl sm:text-6xl font-bold',
    2: 'text-3xl sm:text-5xl font-semibold',
    3: 'text-2xl sm:text-3xl font-semibold',
    4: 'text-xl sm:text-2xl font-semibold'
  };
  return <Tag className={clsx('font-outfit tracking-tight', sizes[level], className)}>{children}</Tag>;
};
