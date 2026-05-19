import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import LazyImage from '@/components/LazyImage';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function About() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12">
      <WhatsAppButton />
      <div className="max-w-7xl mx-auto space-y-32">
        <SectionHeading
          badge="Our Story"
          title="Redefining the"
          highlight="African Sky"
          description="JetConnect247 was founded on the belief that private aviation across Africa should be as seamless, reliable, and sophisticated as any global hub in London, Dubai, or New York."
          align="center"
        />

        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <LazyImage src="/assets/IMG-20251114-WA0014.jpg" wrapperClassName="w-full h-full" className="w-full h-full object-cover" alt="Elite Aviation" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight border-l-4 border-brand-silver-blue pl-6">Mission & Vision</h2>
            <p className="text-brand-soft-silver leading-relaxed font-light text-lg">
              Our mission is to provide uncompromised executive mobility. We blend cutting-edge aviation technology with deep regional expertise to deliver a transport experience that prioritizes speed, reliability, and modern African luxury.
            </p>
            <p className="text-brand-soft-silver leading-relaxed font-light text-lg">
              We envision a future where borders are seamless and time is optimized, empowering leaders and organizations to reach their full potential through elite air travel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {[
              { label: 'Safety Record', value: '100%' },
              { label: 'Avg. Dispatch', value: '< 4hrs' },
              { label: 'Annual Flights', value: '800+' },
              { label: 'Team Experts', value: '45+' },
            ].map((stat, i) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} index={i} className="text-center" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
