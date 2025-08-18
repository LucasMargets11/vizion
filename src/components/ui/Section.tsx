import { motion } from 'framer-motion';
import React from 'react';
import { Container } from './Container';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

interface SectionProps {
  id?: string;
  className?: string;
  as?: any;
  contained?: boolean;
}

export const Section: React.FC<React.PropsWithChildren<SectionProps>> = ({
  id,
  className,
  as: Comp = 'section',
  children,
  contained = true
}) => {
  const content = (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </motion.div>
  );
  return (
    <Comp id={id} className={className}>
      {contained ? <Container className="py-20 sm:py-28">{content}</Container> : content}
    </Comp>
  );
};
