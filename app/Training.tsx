import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { GraduationCap, Monitor, Award, Clock, Shield, Globe, Building2, HandshakeIcon, ArrowRight, ChevronRight, PhoneCall, Target, TrendingUp, Users, MapPin, BarChart3, Plane, BookOpen, Wrench, Headphones } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import LazyImage from '@/components/LazyImage';
import WhatsAppButton from '@/components/WhatsAppButton';

const highlights = [
  {
    icon: Monitor,
    title: 'Advanced Full-Flight Simulator',
    description: 'State-of-the-art full-flight simulator training platform designed to meet international aviation standards.',
  },
  {
    icon: Award,
    title: 'Airline-Focused Programs',
    description: 'Comprehensive recurrent certification programs tailored for regional airlines and commercial operators.',
  },
  {
    icon: Clock,
    title: '24/7 Operational Capability',
    description: 'Round-the-clock training availability designed for regional scalability and maximum flexibility.',
  },
  {
    icon: Shield,
    title: 'Safety-First Framework',
    description: 'Internationally aligned training framework prioritizing safety, compliance, and operational excellence.',
  },
  {
    icon: Globe,
    title: 'Strategic Vision',
    description: 'Positioning Nigeria as a leading aviation training hub in Africa with world-class infrastructure.',
  },
  {
    icon: TrendingUp,
    title: 'Institutional Scale',
    description: 'Long-term infrastructure project built for institutional impact and industry-wide transformation.',
  },
];

const trainingPrograms = [
  {
    icon: Monitor,
    title: 'Full-Flight Simulator Training',
    description: 'Advanced simulator-based training for type ratings, recurrent certification, and proficiency checks on Airbus and Boeing platforms.',
    features: ['Type Rating Courses', 'Recurrent Training', 'License Proficiency Checks', 'Emergency Procedures'],
  },
  {
    icon: BookOpen,
    title: 'Airline Pilot Programs',
    description: 'Comprehensive training pathways for commercial pilots including APS MCC, MCC-JOC, and airline-specific induction programs.',
    features: ['APS MCC Certification', 'Crew Resource Management', 'Airline Induction Training', 'Jet Orientation'],
  },
  {
    icon: Wrench,
    title: 'Technical & Maintenance Training',
    description: 'Specialized training for aviation maintenance engineers and technical personnel aligned with global regulatory standards.',
    features: ['Aircraft Systems Training', 'Maintenance Procedures', 'Regulatory Compliance', 'Safety Management'],
  },
  {
    icon: Headphones,
    title: 'Crew & Operations Training',
    description: 'Integrated training solutions for cabin crew, dispatchers, and operations personnel to ensure end-to-end operational excellence.',
    features: ['Cabin Crew Training', 'Dispatch Training', 'Operations Management', 'Safety & Emergency Drills'],
  },
];

const partnerTypes = [
  { icon: Building2, label: 'Strategic Investors' },
  { icon: HandshakeIcon, label: 'Aviation Industry Partners' },
  { icon: Users, label: 'Airline Operators' },
  { icon: Target, label: 'Infrastructure & Technology Providers' },
  { icon: Globe, label: 'Institutional Stakeholders' },
];

export default function Training() {
  return (
    <section>
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-32 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://assets.mixkit.co/videos/6758/6758-720.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest">
              <GraduationCap className="w-4 h-4" />
              Pilot Training Center
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              West Africa's First{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                Commercial Aviation
              </span>{' '}
              Training Facility
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
              JetConnect 24/7 Pilot Training Center building world-class, simulator based pilot training
              infrastructure in Lagos and Calabar to serve airlines and pilots across West and Central Africa.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-sm hover:bg-blue-100 transition-all shadow-xl"
              >
                Partner With Us <HandshakeIcon className="w-4 h-4" />
              </Link>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Training Locations', value: '2', sub: 'Lagos & Calabar' },
              { label: 'Target Completion', value: '2031', sub: 'Phase 1 Operational' },
              { label: 'Project Investment', value: '$112M+', sub: 'Infrastructure Build-Out' },
              { label: 'Simulator Capacity', value: '24/7', sub: 'Full-Flight Simulators' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-5xl font-bold tracking-tighter text-brand-silver-blue">{stat.value}</p>
                <p className="text-lg font-bold mt-2">{stat.label}</p>
                <p className="text-sm text-brand-soft-silver font-light">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview with Image */}
      <section id="overview" className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <SectionHeading
                badge="Our Mission"
                title="Redefining Pilot Training"
                highlight="in West Africa"
                description="Designed to serve regional airlines, commercial pilots, and aviation operators with advanced recurrent training reducing the need for African pilots to travel abroad for critical certifications."
              />
              <p className="text-brand-soft-silver leading-relaxed font-light text-lg">
                The platform is being developed as a modern, safety-driven aviation ecosystem combining
                advanced flight simulation technology, professional training standards, operational excellence,
                and strategic airline partnerships under one integrated environment.
              </p>
              <p className="text-brand-soft-silver leading-relaxed font-light text-lg">
                With a strong focus on reliability, regulatory alignment, and long-term industry impact,
                JetConnect 24/7 is positioning itself to become a key aviation training hub for West
                and Central Africa with strategic locations in Lagos and Calabar providing
                unparalleled access to the region's aviation industry.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                <LazyImage
                  src="/assets/training-simulator.jpg"
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover"
                  alt="Flight Simulator Training"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-brand-silver-blue/10 backdrop-blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            badge="Training Programs"
            title="Comprehensive"
            highlight="Pilot & Crew Training"
            description="From full-flight simulator certification to airline crew training our programs cover every aspect of modern aviation training."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 md:p-10 rounded-[2rem] hover:border-brand-silver-blue/40 transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-silver-blue/10 flex items-center justify-center shrink-0 group-hover:bg-brand-silver-blue/20 transition-colors">
                    <program.icon className="w-7 h-7 text-brand-silver-blue" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold tracking-tight">{program.title}</h3>
                    <p className="text-brand-soft-silver font-light leading-relaxed">{program.description}</p>
                    <ul className="grid grid-cols-2 gap-2 pt-2">
                      {program.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-brand-white">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-silver-blue shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Images */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            badge="Our Facilities"
            title="World-Class Training"
            highlight="Environment"
            description="Purpose-built training facilities designed to deliver the highest standards of aviation education and simulator-based learning."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: '/assets/training-facility.jpg', title: 'Modern Training Hub', subtitle: 'Lagos & Calabar locations' },
              { src: '/assets/training-instructor.jpg', title: 'Expert Instructors', subtitle: 'Experienced aviation professionals' },
              { src: '/assets/training-team.jpg', title: 'Industry Partnerships', subtitle: 'Airlines & regulatory bodies' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg mb-6">
                  <LazyImage
                    src={item.src}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={item.title}
                  />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="text-brand-soft-silver text-sm font-light">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            badge="Project Highlights"
            title="World-Class Training"
            highlight="Infrastructure"
            description="Built with a long-term institutional vision — strengthening aviation capacity, pilot proficiency, and training accessibility across the region."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 md:p-10 rounded-[2rem] hover:border-brand-silver-blue/40 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-silver-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-silver-blue/20 transition-colors">
                  <item.icon className="w-7 h-7 text-brand-silver-blue" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-4">{item.title}</h3>
                <p className="text-brand-soft-silver font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom/Training Image Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src="/assets/training-classroom.jpg"
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover"
            alt="Aviation Training"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            More Than a Training Center —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Africa's Aviation Future
            </span>
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            JetConnect 24/7 Pilot Training Center is an ambitious aviation infrastructure project focused on
            building a world-class simulator-based pilot training ecosystem for West and Central Africa —
            designed to reduce the region's dependence on overseas training facilities.
          </p>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeading
            badge="Partnership & Investment"
            title="Build With Us."
            highlight="Shape the Future."
            description="JetConnect 24/7 welcomes engagement from partners who share the vision of creating a globally respected aviation training institution."
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partnerTypes.map((partner, i) => (
              <motion.div
                key={partner.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center hover:border-brand-silver-blue/40 transition-all duration-500 group"
              >
                <partner.icon className="w-10 h-10 text-brand-silver-blue mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-bold tracking-tight">{partner.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-brand-silver-blue via-accent-blue to-brand-silver-blue p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <GraduationCap className="w-16 h-16 text-white/80 mx-auto" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                Interested in Partnering, Investing, or Supporting the Project?
              </h2>
              <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
                Connect with us to explore collaboration opportunities and become part of building one of
                Africa's most ambitious aviation training initiatives.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-all shadow-xl"
                >
                  <PhoneCall className="w-4 h-4" />
                  Get in Touch
                </Link>
                <a
                  href="tel:+234800JET247"
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  +234 (0) 800 JET 247
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
