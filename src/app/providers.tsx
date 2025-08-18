import { MotionConfig } from 'framer-motion';
import React from 'react';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
};
