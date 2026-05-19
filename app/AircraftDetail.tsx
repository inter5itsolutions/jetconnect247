import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AIRCRAFT_DATA } from '@/lib/data/fleet';
import { Check, ArrowLeft, Users, Gauge, Map as MapIcon, Wifi, Coffee, ShieldCheck } from 'lucide-react';
import { useMemo } from 'react';
import LazyImage from '@/components/LazyImage';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AircraftDetail() {
  const { slug } = useParams();
  const aircraft = useMemo(() => AIRCRAFT_DATA.find(a => a.slug === slug), [slug]);

  if (!aircraft) {
    return (
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Aircraft not found</h1>
        <Link to="/fleet" className="text-brand-silver-blue underline">Back to Fleet</Link>
      </section>
    );
  }

  return (
    <section>
      {/* Hero */}
      <section className="relative h-[90vh]  flex items-end">
        <WhatsAppButton />
        <div className="absolute inset-0">
          <LazyImage src={aircraft.heroImage} wrapperClassName="w-full h-full" className="w-full h-full object-cover" alt={aircraft.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30  via-black/50  to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <Link to="/fleet" className="flex items-center gap-2 text-white hover:text-brand-white transition-colors text-xs font-bold uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Back to Fleet
            </Link>
            <div className="space-y-2">
              <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">{aircraft.category}</span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">{aircraft.name}</h1>
            </div>
            <div className="flex flex-wrap gap-10 pt-6">
              {[
                { label: 'Guests', value: aircraft.passengers, icon: Users },
                { label: 'Max Range', value: aircraft.range, icon: MapIcon },
                { label: 'Cruise Spd', value: aircraft.speed, icon: Gauge },
              ].map(spec => (
                <div key={spec.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest">
                    <spec.icon className="w-3.5 h-3.5" />
                    {spec.label}
                  </div>
                  <span className="text-xl font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
              <p className="text-brand-soft-silver text-lg leading-relaxed font-light">{aircraft.longDescription}</p>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Premium Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aircraft.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-4 p-6 glass-card rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-brand-silver-blue/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-brand-silver-blue" />
                    </div>
                    <span className="font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Interior Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aircraft.gallery.length > 0 ? aircraft.gallery.map((img, i) => (
                  <div key={i} className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <LazyImage src={img} wrapperClassName="w-full h-full" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={`${aircraft.name} interior ${i + 1}`} />
                  </div>
                )) : (
                  <>
                    <div className="aspect-video rounded-2xl bg-gray-100" />
                    <div className="aspect-video rounded-2xl bg-gray-100" />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="glass-card p-10 rounded-[2.5rem] border-brand-silver-blue/20">
                <h3 className="text-2xl font-bold mb-6">Booking Inquiry</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-brand-silver-blue/10 rounded-xl border border-brand-silver-blue/20">
                    <p className="text-[10px] uppercase tracking-widest text-brand-silver-blue font-bold mb-1">Indicative Hourly Rate</p>
                    <p className="text-2xl font-bold">From ${aircraft.pricePerHour?.toLocaleString() || 'POA'}</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: Wifi, text: 'Global Connectivity Included' },
                      { icon: Coffee, text: 'Premium Concierge Catering' },
                      { icon: ShieldCheck, text: 'Argus Gold Rated Safety' },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3 text-sm text-brand-soft-silver">
                        <Icon className="w-4 h-4 text-brand-silver-blue" />
                        {text}
                      </div>
                    ))}
                  </div>
                  <Link to="/quote" className="flex w-full py-5 items-center justify-center bg-brand-white text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-silver-blue transition-all shadow-xl shadow-brand-silver-blue/10 mt-8">
                    Request Charter
                  </Link>
                </div>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-brand-soft-silver">Need Assistance?</h4>
                <p className="text-sm text-brand-soft-silver mb-6">Our 24/7 concierge team is ready to assist with your specific mission requirements.</p>
                <a href="tel:+234800JET247" className="text-brand-silver-blue font-bold hover:underline">Contact Concierge →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
