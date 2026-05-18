import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Globe, Clock, ChevronRight, Search, Plane, HeartPulse, Package, Users, Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AIRCRAFT_DATA } from '@/lib/data/fleet';
import CTAButton from '@/components/CTAButton';
import SectionHeading from '@/components/SectionHeading';
import AircraftCard from '@/components/AircraftCard';
import WhatsAppButton from '@/components/WhatsAppButton';

const services = [
  {
    title: 'Executive Charter',
    desc: 'Uncompromised privacy and luxury for high-level officials and business leaders.',
    icon: Plane,
    img: '/assets/IMG-20251114-WA0010.jpg',
  },
  {
    title: 'Air Ambulance',
    desc: '24/7 dedicated medical evacuation with ICU-equipped aircraft and specialized crew.',
    icon: HeartPulse,
    img: '/assets/IMG-20251114-WA0009.jpg',
  },
  {
    title: 'Cargo & Logistics',
    desc: 'Rapid transportation of high-value goods, parts, and specialized cargo.',
    icon: Package,
    img: '/assets/IMG-20251114-WA0008.jpg',
  },
];

const steps = [
  { icon: Search, title: 'Select Your Aircraft', desc: 'Browse our premier fleet and choose the aircraft that matches your mission. Our team is available 24/7 to guide your selection.' },
  { icon: Users, title: 'Customize Your Trip', desc: 'Tailor every detail — from gourmet catering and ground transport to in-flight connectivity and special requests.' },
  { icon: Check, title: 'Confirm & Fly', desc: 'Receive instant confirmation and dedicated concierge support from takeoff to touchdown. Wheels-up in under 4 hours.' },
];

const fleetImages = [
  '/assets/IMG-20251114-WA0015.jpg',
  '/assets/IMG-20251114-WA0012.jpg',
  '/assets/IMG-20251114-WA0011.jpg',
];

export default function Home() {
  const featuredAircraft = AIRCRAFT_DATA.filter(a => a.featured);

  return (
    <div className="flex flex-col">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
        <video
            src="/assets/Private_Jet_Interior_1920x1080.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-semibold text-white/80">24/7 Global Flight Operations</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tighter text-white">
                Speed Meets <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-brand-silver-blue">Reliability</span>
              </h1>

              <p className="text-md md:text-xl text-white font-light leading-relaxed max-w-2xl">
                Seamless private jet charter across Africa and beyond  where every mission is executed with precision, privacy, and purpose.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  to="/quote"
                  className="w-full sm:w-auto bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-sm text-center tracking-wide hover:bg-brand-silver-blue hover:text-white transition-all duration-500 shadow-2xl shadow-black/20"
                >
                  REQUEST A QUOTE
                </Link>
                <Link
                  to="/fleet"
                  className="w-full sm:w-auto border border-white/30 text-center text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  EXPLORE FLEET
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Coverage', value: 'Worldwide', icon: Globe },
              { label: 'Dispatch', value: 'Under 4 hrs', icon: Zap },
              { label: 'Safety', value: 'Argus Gold', icon: Shield },
              { label: 'Support', value: '24/7/365', icon: Clock },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-5 flex flex-col md:flex-row items-center gap-4 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-silver-blue/10 flex  items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-silver-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-white">{item.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-soft-silver">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              The Standard of <br />
              <span className="text-brand-silver-blue">Executive Mobility</span>
            </h2>
            <p className="text-brand-soft-silver text-md md:text-lg leading-relaxed font-light">
              We understand that in the world of high-stakes business and personal travel, 
              time is the ultimate currency. JetConnect247 was built on a singular promise: 
              <strong> Speed Meets Reliability</strong>.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <span className="text-2xl md:text-4xl font-bold block mb-2">150+</span>
                <span className="text-[9px] md:text-xs uppercase tracking-widest text-brand-soft-silver">Destinations across Africa</span>
              </div>
              <div>
                <span className="text-2xl md:text-4xl font-bold block mb-2">1,200</span>
                <span className="text-[9px] md:text-xs uppercase tracking-widest text-brand-soft-silver">Successful Fleet Missions</span>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-silver-blue font-bold uppercase text-xs tracking-widest hover:gap-4 transition-all">
              Discover Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/IMG-20251114-WA0014.jpg"
                className="w-full h-full object-cover"
                alt="Luxury Interior"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <p className="text-sm italic font-light text-gray-700">"The most seamless travel experience I've had in Nigeria. Every detail was handled with absolute precision."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-silver-blue/20 flex items-center justify-center text-brand-silver-blue font-bold text-sm">TA</div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Tunde Adeyemi</p>
                    <p className="text-[10px] text-gray-500">CEO, Vantage Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="py-12 md:py-28 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-20">
          <SectionHeading
            badge="Simple Process"
            title="Book in Three Steps"
            description="Booking a private jet has never been easier. From selection to takeoff, we handle every detail."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-brand-silver-blue/10 via-brand-silver-blue/40 to-brand-silver-blue/10" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center gap-6"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-brand-silver-blue/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-brand-silver-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-white text-white text-[11px] font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                  <p className="text-brand-soft-silver text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center md:pt-8">
            <Link to="/quote" className="inline-flex items-center gap-2 bg-brand-white text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-silver-blue transition-all shadow-xl">
              Start Your Booking <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-12 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-brand-silver-blue text-xs font-bold uppercase tracking-[0.3em]">Curated Collection</span>
              <h2 className="text-2xl md:text-5xl font-bold tracking-tighter">Premier Private Fleet</h2>
            </div>
            <Link to="/fleet" className="group flex items-center text-white gap-2 bg-brand-silver-blue border border-gray-200 pl-6 md:px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-silver-blue hover:text-white transition-all">
              View Available Aircraft <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredAircraft.map((aircraft, i) => (
              <div key={aircraft.id} className="relative group">
                <AircraftCard aircraft={aircraft} index={i} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-32 px-6 md:px-12 bg-gray-200">
        <div className="max-w-7xl mx-auto md:space-y-20">
          <SectionHeading
            title="Tailored Aviation Solutions"
            description="From discrete executive travel to life-critical medical evacuations, we provide mission-ready solutions across the African continent."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4 md:py-8">
            {services.map((service) => (
              <div key={service.title} className="group relative h-[400px] rounded-3xl overflow-hidden glass-card hover:border-brand-silver-blue/30 transition-all">
                <img src={service.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-black/60 to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <service.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-white/80">{service.title}</h3>
                  <p className="text-white text-sm mb-6">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-accent-blue transition-colors">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet strip */}
      <section className="py-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeading
            title="Our Fleet in Action"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleetImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={src} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Fleet" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAButton />
    </div>
  );
}
