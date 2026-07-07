import { motion } from 'framer-motion'
import Monogram from './Monogram.jsx'

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-ink)] text-[var(--color-beige)] py-20 px-6 text-center snap-section" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <Monogram size={72} animate={false} />

        <h3 className="font-display text-3xl tracking-wide">Nikky &amp; Emily</h3>

        <div className="font-body text-sm tracking-[0.15em] uppercase text-[var(--color-gold-soft)] flex flex-col sm:flex-row gap-2 sm:gap-6">
          <span>St Mary's Cathedral · 10:00 AM</span>
          <span className="hidden sm:inline">•</span>
          <span>JKAB Beach Resort · 1:00 PM</span>
        </div>

        <p className="font-body text-xs tracking-[0.15em] uppercase text-[var(--color-beige)]/60">
          Trincomalee, Sri Lanka
        </p>

        <div className="h-px w-16 bg-[var(--color-gold)]/50 my-2" />

        <p className="font-display italic text-lg max-w-md text-[var(--color-beige)]/90">
          "With hearts full of gratitude, we look forward to sharing this day with you."
        </p>

        <p className="font-body text-[11px] tracking-[0.2em] uppercase text-[var(--color-beige)]/40 mt-8">
          Made with love for our wedding day
        </p>
      </motion.div>
    </footer>
  )
}
