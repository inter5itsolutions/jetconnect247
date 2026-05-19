import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppButton from '@/components/WhatsAppButton';

const contactSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Invalid phone number'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const offices = [
  {
    region: 'Africa',
    lines: [
      '2nd Floor, Landmark House',
      '52-54 Isaac John Street, GRA Ikeja',
      'Lagos, Nigeria.',
    ],
    icon: MapPin,
  },
  {
    region: 'Middle East',
    lines: [
      'Jet Connect Services FZE',
      'Office - C1 - 1F - SF7404,',
      'Ajman Free Zone, Ajman, UAE.',
    ],
    icon: MapPin,
  },
];

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'fly@jetconnect247.com', href: 'mailto:fly@jetconnect247.com' },
  { icon: Phone, label: 'Phone', value: '+234 806 938 1523', href: 'tel:+2348069381523' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/jetconnect247', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/jet_connect247', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/2348069381523', label: 'WhatsApp' },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSending(true);
    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_default',
          template_id: 'template_default',
          user_id: 'user_default',
          template_params: {
            from_name: data.name,
            from_email: data.email,
            from_phone: data.phone,
            subject: data.subject,
            message: data.message,
          },
        }),
      });
    } catch {
      // EmailJS fallback — open default mail client
      const mailto = `mailto:fly@jetconnect247.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`)}`;
      window.open(mailto, '_blank');
    }
    setIsSending(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center space-y-8"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Message Sent</h1>
            <p className="text-brand-soft-silver text-lg leading-relaxed">
              Thank you for reaching out. A member of our concierge team will respond within 24 hours.
            </p>
          </div>
          <a href="/contact"
            className="inline-block bg-brand-silver-blue text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-accent-blue transition-all shadow-lg"
          >
            Send Another Message
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 px-6 md:px-12">
      <WhatsAppButton />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <SectionHeading
          badge="Get in Touch"
          title="Seamless Travel,"
          highlight="One Call Away"
          description="Whether you need a last-minute charter or a complex itinerary, our team is standing by 24/7."
          align="center" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            {/* Offices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {offices.map(office => (
                <div key={office.region} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-silver-blue/10 flex items-center justify-center">
                    <office.icon className="w-5 h-5 text-brand-silver-blue" />
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-widest text-brand-silver-blue">{office.region}</h3>
                  <address className="not-italic text-brand-soft-silver text-sm leading-relaxed space-y-1">
                    {office.lines.map((line, i) => <p key={i}>{line}</p>)}
                  </address>
                </div>
              ))}
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <h3 className="font-bold text-sm uppercase tracking-widest text-brand-soft-silver">Reach Us</h3>
              <div className="space-y-4">
                {contactMethods.map(method => (
                  <a key={method.label} href={method.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-silver-blue/10 flex items-center justify-center group-hover:bg-brand-silver-blue/20 transition-colors">
                      <method.icon className="w-5 h-5 text-brand-silver-blue" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-brand-soft-silver font-medium">{method.label}</p>
                      <p className="font-semibold text-brand-white">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-widest text-brand-soft-silver">Connect With Us</h3>
              <div className="flex gap-3">
                {socialLinks.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-brand-silver-blue hover:text-white transition-all group"
                  >
                    <link.icon className="w-5 h-5 text-gray-500 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8 md:p-12 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Send a Message</h3>
                <p className="text-brand-soft-silver text-sm">Fill out the form below and our team will get back to you promptly.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Full Name" error={errors.name}>
                  <input {...register('name')} placeholder="Your name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 outline-none focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue transition-all placeholder:text-gray-300" />
                </FormField>
                <FormField label="Email Address" error={errors.email}>
                  <input {...register('email')} placeholder="you@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 outline-none focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue transition-all placeholder:text-gray-300" />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Phone Number" error={errors.phone}>
                  <input {...register('phone')} placeholder="+234 ..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 outline-none focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue transition-all placeholder:text-gray-300" />
                </FormField>
                <FormField label="Subject" error={errors.subject}>
                  <input {...register('subject')} placeholder="How can we help?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 outline-none focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue transition-all placeholder:text-gray-300" />
                </FormField>
              </div>

              <FormField label="Message" error={errors.message}>
                <textarea {...register('message')} rows={5} placeholder="Tell us about your travel requirements..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 outline-none focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue transition-all placeholder:text-gray-300 resize-none" />
              </FormField>

              <button type="submit" disabled={isSending}
                className="w-full bg-brand-silver-blue text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-accent-blue transition-all shadow-lg shadow-brand-silver-blue/20 flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {isSending ? (
                  <span className="flex items-center gap-3">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    Sending...
                  </span>
                ) : (
                  <><Send className="w-4 h-4" /> Submit Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: any; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold uppercase tracking-widest text-brand-soft-silver">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
}
