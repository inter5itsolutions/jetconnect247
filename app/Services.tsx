import { motion } from 'motion/react';
import { Plane, Shield, HeartPulse, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import LazyImage from '@/components/LazyImage';
import WhatsAppButton from '@/components/WhatsAppButton';

const services = [
  {
    id: 'executive',
    title: 'Executive Charter',
    icon: Plane,
    description: 'Bespoke travel for global leaders. We provide total privacy, customized catering, and rapid response for high-stakes missions.',
    features: ['Discrete VIP terminals', 'On-board meeting facilities', 'Gourmet catering', 'Personalized ground transport'],
    image: '/assets/IMG-20251114-WA0010.jpg',
  },
  {
    id: 'medical',
    title: 'Medical Evacuation',
    icon: HeartPulse,
    description: 'When every second counts. Our air ambulance service provides life-critical transportation with ICU-equipped aircraft and specialized medical staff.',
    features: ['24/7 emergency dispatch', 'Bed-to-bed service', 'Specialized neonatal care', 'Global insurance partnership'],
    image: '/assets/IMG-20251114-WA0009.jpg',
  },
  {
    id: 'cargo',
    title: 'Cargo & Logistics',
    icon: Box,
    description: 'High-value, time-sensitive cargo transportation. We handle everything from oil rig parts to humanitarian aid with absolute precision.',
    features: ['Oversized cargo handling', 'Dangerous goods certified', 'Real-time tracking', 'End-to-end logistics'],
    image: '/assets/IMG-20251114-WA0008.jpg',
  },
];

export default function Services() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12">
      <WhatsAppButton />
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          badge="Operational Capabilities"
          title="Mission Ready."
          highlight="Every Time."
          description="JetConnect247 offers a diverse range of aviation services tailored to the specific needs of the African market and beyond."
          align="center"
        />

        <div className="space-y-20 md:space-y-40 mt-12 md:mt-32">
          {services.map((service, i) => (
            <div key={service.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <service.icon className="h-8 w-8 md:w-12 md:h-12 text-brand-silver-blue" />
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{service.title}</h2>
                <p className=" text-brand-silver-blue text-base md:text-lg font-light leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-brand-white font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-silver-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Link to="/quote" className="inline-flex items-center gap-2 bg-brand-white text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-silver-blue transition-all">
                    Inquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative group"
              >
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-xl">
                  <LazyImage src={service.image} wrapperClassName="w-full h-full" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={service.title} />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-brand-silver-blue/10 backdrop-blur-3xl rounded-full" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
