import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const footerLinks = {
  training: [
    { label: 'Programs', to: '/training' },
    { label: 'Facilities', to: '/training' },
    { label: 'Partner With Us', to: '/training' },
    { label: 'FAQ', to: '/training' },
  ],
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Main Site', to: '/' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
  ],
};

export default function TrainingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-silver-blue/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-brand-silver-blue" />
            </div>
            <div>
              <p className="text-brand-white font-bold text-sm">Pilot Training Center</p>
              <p className="text-brand-soft-silver text-[10px] uppercase tracking-widest">JetConnect 24/7</p>
            </div>
          </div>
          <p className="text-brand-soft-silver text-sm leading-relaxed max-w-xs">
            West Africa's first commercial aviation training facility building world-class pilot training infrastructure in Lagos and Abuja.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-silver-blue transition-colors group">
                <Icon className="w-5 h-5 text-brand-soft-silver group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-brand-white font-semibold mb-6 uppercase tracking-widest text-xs capitalize">{title}</h4>
            <ul className="space-y-4 text-sm">
              {links.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-brand-soft-silver hover:text-brand-silver-blue transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="text-brand-white font-semibold mb-6 uppercase tracking-widest text-xs">Contact</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-3 text-brand-soft-silver">
              <Phone className="w-4 h-4 text-brand-silver-blue shrink-0" />
              <span className="text-brand-white font-medium">+234 806 938 1523</span>
            </li>
            <li className="flex items-center gap-3 text-brand-soft-silver">
              <Mail className="w-4 h-4 text-brand-silver-blue shrink-0" />
              <span className="text-brand-white font-medium">info@jetconnect247.com</span>
            </li>
            <li className="flex items-start gap-3 text-brand-soft-silver">
              <MapPin className="w-4 h-4 text-brand-silver-blue mt-1 shrink-0" />
              <span>
                Lagos & Abuja, Nigeria
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-brand-soft-silver uppercase tracking-widest">© {currentYear} JETCONNECT247 PILOT TRAINING CENTER. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[10px] text-brand-soft-silver uppercase tracking-widest">
          <Link to="/terms" className="hover:text-brand-silver-blue transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-brand-silver-blue transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
