import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

interface Props {
  label: string;
  value: string;
  icon?: LucideIcon;
  change?: string;
  index?: number;
  className?: string;
}

export default function StatCard({ label, value, icon: Icon, change, index = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card p-8 rounded-3xl space-y-4 ${className || ''}`}
    >
      {Icon && (
        <div className="flex justify-between items-center">
          <div className="w-10 h-10 rounded-xl bg-brand-silver-blue/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-brand-silver-blue" />
          </div>
          {change && (
            <span className="text-[10px] font-bold text-brand-silver-blue bg-brand-silver-blue/10 px-2 py-1 rounded">
              {change}
            </span>
          )}
        </div>
      )}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-brand-soft-silver font-bold mb-1">{label}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </motion.div>
  );
}
