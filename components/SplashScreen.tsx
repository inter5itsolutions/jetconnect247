import { motion, AnimatePresence } from 'motion/react';

interface Props {
  show: boolean;
}

export default function SplashScreen({ show }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            <img
              src="/assets/logo.png"
              alt="JetConnect247"
              className="h-16 md:h-20 w-auto"
            />
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-brand-silver-blue"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
              Preparing your experience
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
