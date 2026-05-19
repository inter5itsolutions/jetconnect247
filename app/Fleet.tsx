import SectionHeading from '@/components/SectionHeading';
import AircraftCard from '@/components/AircraftCard';
import { AIRCRAFT_DATA } from '@/lib/data/fleet';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Fleet() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12">
      <WhatsAppButton />
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          badge="The JetConnect247 Collection"
          title="Precision Engineered"
          highlight="Excellence"
          description="Our curated fleet represents the pinnacle of business aviation. Each aircraft is selected for its performance, safety record, and cabin comfort, ensuring your journey is as productive as it is peaceful."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {AIRCRAFT_DATA.map((aircraft, i) => (
            <AircraftCard key={aircraft.id} aircraft={aircraft} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
