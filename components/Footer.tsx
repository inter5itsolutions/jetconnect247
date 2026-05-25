import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

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
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <LazyImage src="/assets/logo2.png" alt="JetConnect247" className="h-4 md:h-6 w-auto" />
          </Link>
          <p className="text-brand-soft-silver text-sm leading-relaxed max-w-xs">
            Redefining aviation across Africa with World-class pilot training & modern luxury private air travel built on speed and reliability
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
          <h4 className="text-brand-white font-semibold mb-6 uppercase tracking-widest text-xs">Support</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 text-brand-soft-silver">
              <Phone className="w-4 h-4 text-brand-silver-blue shrink-0" />
              <span>+234 806 938 1523</span>
            </li>
            <li className="flex items-center gap-3 text-brand-soft-silver">
              <Mail className="w-4 h-4 text-brand-silver-blue shrink-0" />
              <span>fly@jetconnect247.com</span>
            </li>
            <li className="flex items-start gap-3 text-brand-soft-silver">
              <MapPin className="w-4 h-4 text-brand-silver-blue mt-1 shrink-0" />
              <span>
                2nd Floor, Landmark House,
                52-54 Isaac John Street, GRA Ikeja,
                Lagos, Nigeria.,
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-brand-soft-silver uppercase tracking-widest">© {currentYear} JETCONNECT247. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[10px] text-brand-soft-silver uppercase tracking-widest">
          <Link to="/terms" className="hover:text-brand-silver-blue transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-brand-silver-blue transition-colors">Security Information</Link>
        </div>
      </div>
    </footer>
  );
}
