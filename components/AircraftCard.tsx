import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Gauge, Map, ArrowRight } from 'lucide-react';
import type { Aircraft } from '@/types';

interface Props {
  aircraft: Aircraft;
  index?: number;
  featured?: boolean; 
}

export default function AircraftCard({ aircraft, index = 0, featured }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group ${featured ? 'h-[500px] rounded-3xl overflow-hidden bg-gray-50' : 'rounded-[2rem] overflow-hidden glass-card hover:border-brand-silver-blue/40 transition-all duration-500'}`}
    >
      {featured ? (
        /* Featured card layout (Home page) */
        <>
          <div className="absolute inset-0">
            <img
              src={aircraft.heroImage}
              alt={aircraft.name}
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-10 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-silver-blue/10 border border-brand-silver-blue/30 text-[10px] font-bold text-brand-silver-blue uppercase tracking-widest">
              {aircraft.category}
            </span>
            <h3 className="text-3xl font-bold leading-none text-brand-white">{aircraft.name}</h3>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <SpecItem label="Guests" value={String(aircraft.passengers)} />
              <SpecItem label="Range" value={aircraft.range} />
              <SpecItem label="Speed" value={aircraft.speed} />
            </div>
            <Link
              to={`/fleet/${aircraft.slug}`}
              className="flex mt-6 w-full py-4 items-center justify-center gap-2 rounded-xl bg-brand-white text-white text-xs font-bold uppercase tracking-widest group-hover:bg-brand-silver-blue transition-all"
            >
              Details <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </>
      ) : (
        /* Standard card layout (Fleet page) */
        <>
          <div className="relative h-80 overflow-hidden">
            <img
              src={aircraft.heroImage}
              alt={aircraft.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-brand-silver-blue">
                {aircraft.category}
              </span>
            </div>
          </div>
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{aircraft.name}</h3>
                <p className="text-brand-soft-silver text-sm font-light max-w-sm">{aircraft.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100">
              <SpecDetail icon={Users} label="Guests" value={String(aircraft.passengers)} />
              <SpecDetail icon={Map} label="Range" value={aircraft.range} />
              <SpecDetail icon={Gauge} label="Speed" value={aircraft.speed} />
            </div>
            <div className="flex gap-4">
              <Link
                to={`/fleet/${aircraft.slug}`}
                className="flex-1 bg-brand-white text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-silver-blue transition-all text-center"
              >
                View Specifications
              </Link>
              <Link
                to="/quote"
                className="bg-gray-50 border border-gray-200 text-brand-white px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-[10px] text-brand-soft-silver uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm font-bold text-brand-white">{value}</p>
    </div>
  );
}

function SpecDetail({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-brand-silver-blue">
        <Icon className="w-3.5 h-3.5" />
        <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
      </div>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}
