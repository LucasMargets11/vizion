import { motion } from 'framer-motion';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

interface SectionProps {
  id?: string;
  className?: string;
  as?: any;
  variant?: 'dark' | 'light';
  animateOnView?: boolean; // nuevo: permite desactivar animación interna para animaciones personalizadas
}

export const Section: React.FC<React.PropsWithChildren<SectionProps>> = ({
  id,
  className,
  as: Comp = 'section',
  children,
  variant = 'dark',
  animateOnView = true
}) => {
  const content = animateOnView ? (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  ) : (
    <>{children}</>
  );
  const variantClasses = variant === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  return (
    <Comp id={id} className={`w-full ${variantClasses} py-20 md:py-28 ${className || ''}`}>
      {content}
    </Comp>
  );
};
