import React from 'react';
import { inputBase } from './Input';

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
  <select {...props} className={inputBase + ' ' + (props.className ?? '')} />
);
