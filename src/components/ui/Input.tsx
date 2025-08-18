import React from 'react';

export const inputBase =
  'w-full rounded-md border border-base-white/20 bg-base-white/5 px-4 py-2 text-sm placeholder:text-base-white/50 focus:ring-2 focus:ring-base-white/60 focus:border-base-white/60 transition text-base-white';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} className={inputBase + ' ' + (props.className ?? '')} />
);
