import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react';

export default function CTAButton() {
  return (
    <section className="py-10 px-3 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-brand-silver-blue py-12 p-6 md:p-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-8"
          >
            <h2 className="text-2xl md:text-7xl font-bold tracking-tighter text-white">Your Flight. Your Terms.</h2>
            <p className="text-white/80 text-md md:text-xl font-light  mx-auto">
              Ready to experience the next level of private aviation? Our team is standing by 24/7 to curate your next mission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link to="/quote" className="w-full sm:w-auto bg-white text-brand-white md:px-12 py-3 md:py-5 rounded-full font-bold  uppercase tracking-widest hover:bg-gray-100 transition-all">
                Request a Quote
              </Link>
              <a href="tel:+234800JET247" className="flex items-center gap-4 text-white font-bold md:text-lg group">
                <div className="w-6 h-6 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <Phone className="w-3 h-3 md:w-5 md:h-5" />
                </div>
                +234 806 938 1523
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
