import React from 'react';

export const inputBase =
  'w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-brand focus:border-brand transition';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} className={inputBase + ' ' + (props.className ?? '')} />
);
