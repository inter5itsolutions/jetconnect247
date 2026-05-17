import { motion } from 'motion/react';

interface Props {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ badge, title, highlight, description, align = 'left' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`space-y-4 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {badge && (
        <span className="text-brand-silver-blue text-xs font-bold uppercase tracking-[0.3em]">{badge}</span>
      )}
      <h2 className="text-2xl md:text-6xl font-bold tracking-tighter">
        {title}{highlight && <><br /><span className="text-luxury">{highlight}</span></>}
      </h2>
      {description && (
        <p className="text-brand-soft-silver font-light text-sm md:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
