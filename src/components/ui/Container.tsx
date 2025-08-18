import { clsx } from 'clsx';
import React from 'react';

export const Container: React.FC<React.PropsWithChildren<{ className?: string; as?: any }>> = ({
  children,
  className,
  as: Comp = 'div'
}) => (
  <Comp className={clsx('container mx-auto', className)}>{children}</Comp>
);
