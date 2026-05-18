import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import LazyImage from '@/components/LazyImage';

const articles = [
  {
    title: 'The Future of Business Aviation in Nigeria: 2026 and Beyond',
    category: 'Industry Insights',
    date: 'May 10, 2026',
    author: 'Capt. Ibrahim Musa',
    excerpt: 'Exploring how regulatory changes and infrastructure developments are reshaping the private air travel landscape in West Africa.',
    image: '/assets/IMG-20251114-WA0013.jpg',
  },
  {
    title: 'Global 7500: Why it Remains the Ultimate Long-Range Business Jet',
    category: 'Fleet Review',
    date: 'April 28, 2026',
    author: 'Sarah Jenkins',
    excerpt: 'An in-depth look at the performance, design, and passenger experience of the world\'s longest range business aircraft.',
    image: '/assets/IMG-20251114-WA0003.jpg',
  },
  {
    title: 'Medical Evacuation: The Critical Infrastructure Behind Every Mission',
    category: 'Operations',
    date: 'April 15, 2026',
    author: 'Dr. Amaka Okafor',
    excerpt: 'Understanding the complex medical and logistical synchronization required for high-stakes air ambulance operations.',
    image: '/assets/IMG-20251114-WA0009.jpg',
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <SectionHeading badge="Aviation Insights" title="The JetConnect" highlight="Journal" />
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-soft-silver" />
            <input
              placeholder="Search insights..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-4 pl-12 pr-4 outline-none focus:border-brand-silver-blue transition-all text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full"
            >
              <div className="h-60 overflow-hidden">
                <LazyImage src={article.image} wrapperClassName="w-full h-full" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={article.title} />
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-silver-blue">{article.category}</span>
                  <span className="text-[10px] text-brand-soft-silver uppercase tracking-widest">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight group-hover:text-brand-silver-blue transition-colors">{article.title}</h3>
                <p className="text-brand-soft-silver text-sm font-light leading-relaxed flex-grow">{article.excerpt}</p>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-silver-blue/20" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-silver">{article.author}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-silver-blue group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
