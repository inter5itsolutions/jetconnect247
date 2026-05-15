import { useLocation } from 'react-router-dom';

const sections = {
  privacy: [
    { title: '1. Engagement Overview', text: 'JetConnect247 is a premium private aviation platform. By accessing our services, you agree to comply with our operational standards and security protocols.' },
    { title: '2. Data & Privacy', text: 'We prioritize the discrete handling of all client information. All flight data is encrypted and accessible only to authorized mission controllers.' },
    { title: '3. Operational Reliability', text: 'Flight dispatch is subject to weather conditions and airspace availability. We maintain a "Speed Meets Reliability" benchmark for all global operations.' },
  ],
  terms: [
    { title: '1. Engagement Overview', text: 'JetConnect247 is a premium private aviation platform. By accessing our services, you agree to comply with our operational standards and security protocols.' },
    { title: '2. Data & Privacy', text: 'We prioritize the discrete handling of all client information. All flight data is encrypted and accessible only to authorized mission controllers.' },
    { title: '3. Operational Reliability', text: 'Flight dispatch is subject to weather conditions and airspace availability. We maintain a "Speed Meets Reliability" benchmark for all global operations.' },
  ],
};

export default function Legal() {
  const { pathname } = useLocation();
  const isPrivacy = pathname.includes('privacy');
  const content = isPrivacy ? sections.privacy : sections.terms;

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
        </h1>
        <p className="text-brand-soft-silver">Last Updated: May 15, 2026</p>
        <div className="space-y-12">
          {content.map(s => (
            <section key={s.title} className="space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-widest">{s.title}</h2>
              <p className="text-brand-soft-silver leading-relaxed">{s.text}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
