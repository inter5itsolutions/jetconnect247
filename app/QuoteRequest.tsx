import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle, Plane, ArrowRight, User, Mail, Phone, MapPin, Calendar, Users, Shield } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const quoteSchema = z.object({
  flightType: z.enum(['one-way', 'round-trip', 'multi-leg']),
  departure: z.string().min(2, 'Departure city is required'),
  destination: z.string().min(2, 'Destination city is required'),
  departureDate: z.string().min(1, 'Date is required'),
  returnDate: z.string().optional(),
  passengers: z.number().min(1).max(20),
  aircraftPreference: z.string().optional(),
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Invalid phone number'),
  notes: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const perks = [
  { icon: MapPin, title: 'Global Operations', desc: 'Lagos, London, Dubai, Geneva' },
  { icon: Shield, title: 'Argus Certified', desc: 'Gold-rated safety protocols' },
  { icon: Clock, title: 'Rapid Dispatch', desc: 'Wheels-up in under 4 hours' },
];

const flightTypes = ['one-way', 'round-trip', 'multi-leg'] as const;

export default function QuoteRequest() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { flightType: 'one-way', passengers: 1 },
  });

  const onSubmit = () => {
    setTimeout(() => setIsSubmitted(true), 1500);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white border border-gray-200 shadow-xl p-12 rounded-[3rem] text-center space-y-8"
        >
          <div className="w-20 h-20 bg-brand-silver-blue/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-brand-silver-blue" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Request Received</h2>
            <p className="text-brand-soft-silver leading-relaxed">Your inquiry has been transmitted to our 24/7 Operations Center. A Senior Concierge will contact you within 15 minutes.</p>
          </div>
          <a href="/" className="block w-full py-4 bg-brand-silver-blue text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent-blue transition-all">Return Home</a>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-12">
          <SectionHeading title="Plan Your" highlight="Next Mission" description="Complete the executive inquiry form. Our team specializes in complex logistical routing and discrete global travel." />

          <div className="space-y-8">
            {perks.map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-silver-blue/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-brand-silver-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">{item.title}</h4>
                  <p className="text-xs text-brand-soft-silver uppercase tracking-widest mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-silver-blue">Instant Contact</p>
            <p className="text-2xl font-bold">+234 (0) 800 JET 247</p>
            <p className="text-xs text-brand-soft-silver leading-relaxed italic">"Providing uncompromised reliability for Africa's most discerning travelers."</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="bg-white border border-gray-200 shadow-lg rounded-[2.5rem] p-8 md:p-12 space-y-10">
              {/* Flight Details */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 border-l-2 border-brand-silver-blue pl-4">
                  <Plane className="w-4 h-4 text-brand-silver-blue" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-soft-silver">Flight Parameters</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {flightTypes.map(type => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" {...register('flightType')} value={type} className="peer sr-only" />
                      <div className="py-4 px-6 rounded-xl border border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-widest text-center transition-all peer-checked:bg-brand-white peer-checked:text-white peer-checked:border-brand-white">
                        {type.replace('-', ' ')}
                      </div>
                    </label>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Departure City" error={errors.departure}>
                    <Input icon={MapPin} register={register('departure')} placeholder="e.g. Lagos, Nigeria" />
                  </Field>
                  <Field label="Destination City" error={errors.destination}>
                    <Input icon={MapPin} register={register('destination')} placeholder="e.g. Geneva, Switzerland" />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Departure Date" error={errors.departureDate}>
                    <Input icon={Calendar} register={register('departureDate')} type="date" />
                  </Field>
                  <Field label="Passengers">
                    <Input icon={Users} register={register('passengers', { valueAsNumber: true })} type="number" />
                  </Field>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-8 pt-10 border-t border-gray-100">
                <div className="flex items-center gap-3 border-l-2 border-brand-silver-blue pl-4">
                  <User className="w-4 h-4 text-brand-silver-blue" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-soft-silver">Executive Information</h3>
                </div>

                <Field label="Full Name" error={errors.name}>
                  <Input icon={User} register={register('name')} placeholder="Executive/Company Name" />
                </Field>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Email Address" error={errors.email}>
                    <Input icon={Mail} register={register('email')} placeholder="concierge@example.com" />
                  </Field>
                  <Field label="Phone Number" error={errors.phone}>
                    <Input icon={Phone} register={register('phone')} placeholder="+234 ..." />
                  </Field>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100">
                <button type="submit" className="w-full bg-brand-white text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-silver-blue transition-all shadow-xl flex items-center justify-center gap-4 group">
                  Confirm Mission Parameters
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-6 text-brand-soft-silver uppercase text-[9px] tracking-[0.3em]">
                  <Shield className="w-3 h-3" />
                  Your data is encrypted and secure
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Shared form sub-components */
function Field({ label, error, children }: { label: string; error?: any; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
}

function Input({ icon: Icon, register, placeholder, type = 'text' }: { icon: any; register: any; placeholder?: string; type?: string }) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver" />
      <input {...register} type={type} placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300" />
    </div>
  );
}

function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}


