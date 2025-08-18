import React from 'react';

interface CaseStudyCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, image, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg focus-ring text-left"
      aria-label={`Abrir ${title}`}
    >
      <img src={image} alt={title} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <span className="absolute bottom-3 left-4 font-medium text-sm">{title}</span>
    </button>
  );
};
