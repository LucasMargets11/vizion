import React from 'react';
import { inputBase } from './Input';

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea rows={5} {...props} className={inputBase + ' resize-y ' + (props.className ?? '')} />
);
