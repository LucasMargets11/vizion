import { clsx } from 'clsx';
import React from 'react';

export const Badge: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className
}) => (
  <span className={clsx('inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand', className)}>
    {children}
  </span>
);
