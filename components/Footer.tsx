import { Link } from 'react-router-dom';
import { Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/company/jetconnect247', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/jet_connect247', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/2348069381523', label: 'WhatsApp' },
];

const footerLinks = {
  explore: [
    { label: 'Our Fleet', to: '/fleet' },
    { label: 'Executive Travel', to: '/services' },
    { label: 'Medical Evacuation', to: '/services' },
    { label: 'Cargo & Logistics', to: '/services' },
  ],
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Insights', to: '/' },
    { label: 'Privacy Policy', to: '/privacy' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 lg:pt-20 pb-8 lg:pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-20">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-5 lg:space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <LazyImage src="/assets/logo2.png" alt="JetConnect247" className="h-5 lg:h-6 w-auto" />
          </Link>
          <p className="text-brand-soft-silver text-sm leading-relaxed max-w-xs">
            Redefining aviation across Africa with World-class pilot training & modern luxury private air travel built on speed and reliability
          </p>
          <div className="flex gap-3 lg:gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-silver-blue transition-colors group"
                aria-label={label}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-brand-soft-silver group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */} 
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-brand-white font-semibold mb-5 lg:mb-6 uppercase tracking-widest text-xs">{title}</h4>
            <ul className="space-y-3 lg:space-y-4 text-sm">
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
          <h4 className="text-brand-white font-semibold mb-5 lg:mb-6 uppercase tracking-widest text-xs">Support</h4>
          <ul className="space-y-3 lg:space-y-4 text-sm">
            <li className="flex items-center gap-3 text-brand-soft-silver">
              <Phone className="w-4 h-4 text-brand-silver-blue shrink-0" />
              <span>+234 913 236 0363</span>
            </li>
            <li className="flex items-center gap-3 text-brand-soft-silver">
              <Mail className="w-4 h-4 text-brand-silver-blue shrink-0" />
              <span>fly@jetconnect247.com</span>
            </li>
            <li className="flex items-start gap-3 text-brand-soft-silver">
              <MapPin className="w-4 h-4 text-brand-silver-blue mt-1 shrink-0" />
              <span className="leading-relaxed">
                2nd Floor, Landmark House,
                52-54 Isaac John Street, GRA Ikeja,
                Lagos, Nigeria.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 lg:pt-10 border-t border-gray-200 flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-4 lg:gap-6">
        <p className="text-[10px] text-brand-soft-silver uppercase tracking-widest text-center sm:text-left">© {currentYear} JETCONNECT247. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 lg:gap-8 text-[10px] text-brand-soft-silver uppercase tracking-widest">
          <Link to="/terms" className="hover:text-brand-silver-blue transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-brand-silver-blue transition-colors">Security Information</Link>
        </div>
      </div>
    </footer>
  );
}
