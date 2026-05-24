import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, X, ArrowRight } from 'lucide-react';

export default function TrainingPromo() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();
  const isTrainingPage = location.pathname === '/training';

  useEffect(() => {
    if (isTrainingPage || dismissed) return;
    const timer = setTimeout(() => setShow(true), 20000);
    return () => clearTimeout(timer);
  }, [isTrainingPage, dismissed]);

  if (isTrainingPage) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed right-4 bottom-32 z-50 max-w-xs"
        >
          <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl p-5">
            <button
              onClick={() => { setShow(false); setDismissed(true); }}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4 text-brand-soft-silver" />
            </button>

            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-silver-blue/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-brand-silver-blue" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-silver-blue">New</p>
                <h4 className="text-sm font-bold tracking-tight mt-0.5">Pilot Training Center</h4>
              </div>
            </div>

            <p className="text-xs text-brand-soft-silver leading-relaxed mb-4">
              West Africa's first commercial aviation training facility. Opening 2031 in Lagos & Calabar.
            </p>

            <Link
              to="/training"
              onClick={() => setShow(false)}
              className="flex items-center justify-between w-full px-4 py-3 bg-brand-white text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-silver-blue transition-all"
            >
              Explore Training
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
