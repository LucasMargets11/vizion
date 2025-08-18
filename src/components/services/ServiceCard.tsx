import React from 'react';

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'light' | 'dark';
}

export default function ServiceCard({ title, description, icon, variant = 'light' }: Props) {
  const revealText =
    variant === 'dark'
      ? 'group-hover:text-white group-focus-visible:text-white'
      : 'group-hover:text-black group-focus-visible:text-black';

  return (
    <button
      className="group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30 rounded-none"
    >
      <div className="flex flex-col gap-2">
        {icon && <div className="text-2xl md:text-3xl" aria-hidden>{icon}</div>}
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
        <p
          className={`text-sm md:text-base text-transparent ${revealText} transition-all duration-300 ease-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0`}
        >
          {description}
        </p>
      </div>
    </button>
  );
}
