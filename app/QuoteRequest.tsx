import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { useState, useCallback } from 'react';
import { CheckCircle, Plane, ArrowRight, User, Mail, Phone, MapPin, Calendar, Users, Shield, Plus, Trash2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppButton from '@/components/WhatsAppButton';
import AirportInput from '@/components/AirportInput';

const legSchema = z.object({
  departure: z.string().min(3, 'Departure airport is required'),
  destination: z.string().min(3, 'Destination airport is required'),
  date: z.string().min(1, 'Date is required'),
}).superRefine((data, ctx) => {
  if (data.departure && data.destination && data.departure === data.destination) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['destination'], message: 'Destination must differ from departure' });
  }
});

const quoteSchema = z.object({
  tripType: z.enum(['one-way', 'round-trip', 'multi-city']),
  legs: z.array(legSchema).min(1),
  returnDate: z.string().optional(),
  passengers: z.number().min(1, 'At least 1 passenger').max(20, 'Max 20 passengers'),
  aircraftPreference: z.string().optional(),
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Invalid phone number'),
  notes: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.tripType === 'round-trip' && !data.returnDate) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['returnDate'], message: 'Return date is required for round trips' });
  }
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const perks = [
  { icon: MapPin, title: 'Global Operations', desc: 'Lagos, London, Dubai, Geneva' },
  { icon: Shield, title: 'Argus Certified', desc: 'Gold-rated safety protocols' },
  { icon: Clock, title: 'Rapid Dispatch', desc: 'Wheels-up in under 4 hours' },
];

const tripTypes = [
  { value: 'one-way' as const, label: 'One Way' },
  { value: 'round-trip' as const, label: 'Round Trip' },
  { value: 'multi-city' as const, label: 'Multi-City' },
];

function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function QuoteRequest() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { control, register, handleSubmit, formState: { errors }, watch, setValue } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      tripType: 'one-way',
      legs: [{ departure: '', destination: '', date: '' }],
      passengers: 1,
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'legs' });

  const tripType = watch('tripType');

  const onSubmit = useCallback(() => {
    setTimeout(() => setIsSubmitted(true), 1500);
  }, []);

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
      <WhatsAppButton />
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
            <p className="text-xs text-brand-soft-silver leading-relaxed italic">{'"Providing uncompromised reliability for Africa\'s most discerning travelers."'}</p>
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
                  {tripTypes.map(type => (
                    <label key={type.value} className="cursor-pointer">
                      <input type="radio" {...register('tripType')} value={type.value} className="peer sr-only" />
                      <div className="py-4 px-6 rounded-xl border border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-widest text-center transition-all peer-checked:bg-brand-white peer-checked:text-white peer-checked:border-brand-white">
                        {type.label}
                      </div>
                    </label>
                  ))}
                </div>

                {/* Legs */}
                <div className="space-y-6">
                  {fields.map((field, index) => (
                    <div key={field.id} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-soft-silver">
                          {tripType === 'multi-city' ? `Leg ${index + 1}` : 'Route'}
                        </span>
                        {tripType === 'multi-city' && fields.length > 1 && (
                          <button type="button" onClick={() => remove(index)}
                            className="p-2 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-all">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <AirportInput
                          value={field.departure}
                          onChange={(iata) => setValue(`legs.${index}.departure`, iata, { shouldValidate: true })}
                          placeholder="Search departure airport..."
                          label="From"
                          error={errors.legs?.[index]?.departure?.message}
                        />
                        <AirportInput
                          value={field.destination}
                          onChange={(iata) => setValue(`legs.${index}.destination`, iata, { shouldValidate: true })}
                          placeholder="Search destination airport..."
                          label="To"
                          error={errors.legs?.[index]?.destination?.message}
                        />
                      </div>

                      <div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Departure Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver pointer-events-none" />
                            <input type="date" {...register(`legs.${index}.date`)}
                              className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all" />
                          </div>
                          {errors.legs?.[index]?.date && (
                            <p className="text-red-500 text-xs mt-1">{errors.legs?.[index]?.date?.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Leg (multi-city only) */}
                {tripType === 'multi-city' && (
                  <button type="button" onClick={() => append({ departure: '', destination: '', date: '' })}
                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-xs font-bold uppercase tracking-widest text-brand-soft-silver hover:border-brand-silver-blue hover:text-brand-silver-blue transition-all flex items-center justify-center gap-3">
                    <Plus className="w-4 h-4" /> Add Another Leg
                  </button>
                )}

                {/* Return Date (round-trip only) */}
                {tripType === 'round-trip' && (
                  <div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Return Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver pointer-events-none" />
                        <input type="date" {...register('returnDate')}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all" />
                      </div>
                      {errors.returnDate && <p className="text-red-500 text-xs mt-1">{errors.returnDate.message}</p>}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Passengers</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver pointer-events-none" />
                      <input type="number" {...register('passengers', { valueAsNumber: true })} min={1} max={20}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all" />
                    </div>
                    {errors.passengers && <p className="text-red-500 text-xs mt-1">{errors.passengers.message}</p>}
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-8 pt-10 border-t border-gray-100">
                <div className="flex items-center gap-3 border-l-2 border-brand-silver-blue pl-4">
                  <User className="w-4 h-4 text-brand-silver-blue" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-soft-silver">Executive Information</h3>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver pointer-events-none" />
                    <input {...register('name')} placeholder="Executive/Company Name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300" />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver pointer-events-none" />
                      <input {...register('email')} placeholder="concierge@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300" />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver pointer-events-none" />
                      <input {...register('phone')} placeholder="+234 ..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300" />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
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
