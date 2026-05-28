import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, GraduationCap, Building2, HandshakeIcon, UserCheck, HelpCircle } from 'lucide-react';

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const interestOptions = [
  { value: 'investor', label: 'Strategic Investor', icon: Building2 },
  { value: 'airline', label: 'Airline Partner', icon: GraduationCap },
  { value: 'candidate', label: 'Training Candidate', icon: UserCheck },
  { value: 'infrastructure', label: 'Infrastructure Partner', icon: HandshakeIcon },
  { value: 'other', label: 'Other Inquiry', icon: HelpCircle },
];

export default function TrainingModal({ isOpen, onClose }: TrainingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Training Inquiry - ${formData.interest ? interestOptions.find(o => o.value === formData.interest)?.label : 'General'} - ${formData.organization || formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Organization: ${formData.organization}`,
      `Interest: ${interestOptions.find(o => o.value === formData.interest)?.label || 'Not specified'}`,
      '',
      `Message:`,
      formData.message,
    ].join('\n');
    window.location.href = `mailto:info@jetconnect247.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormData({ name: '', email: '', phone: '', organization: '', interest: '', message: '' });
    onClose();
  }, [formData, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-silver-blue/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-brand-silver-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">Get in Touch</h3>
                  <p className="text-xs text-brand-soft-silver">Pilot Training Center Inquiry</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5 text-brand-soft-silver" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Full Name *</label>
                <input required name="name" value={formData.name} onChange={handleChange} placeholder="Your full name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 ..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Organization</label>
                  <input name="organization" value={formData.organization} onChange={handleChange} placeholder="Company / Institution"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Interest Type *</label>
                  <select required name="interest" value={formData.interest} onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all text-brand-white appearance-none">
                    <option value="" disabled>Select interest...</option>
                    {interestOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver ml-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your inquiry..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 focus:border-brand-silver-blue focus:ring-1 focus:ring-brand-silver-blue outline-none transition-all placeholder:text-gray-300 resize-none" />
              </div>

              <button type="submit"
                className="w-full bg-brand-white text-white py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-silver-blue transition-all shadow-xl flex items-center justify-center gap-3 group">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
