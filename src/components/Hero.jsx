import { motion } from 'framer-motion'

// Floating gold particle positions — deliberately irregular, not a grid,
// so they read as drifting light rather than a decorative pattern.
const PARTICLES = [
  { top: '18%', left: '10%', size: 5, delay: 0 },
  { top: '30%', left: '85%', size: 3, delay: 0.6 },
  { top: '68%', left: '6%', size: 4, delay: 1.1 },
  { top: '78%', left: '90%', size: 6, delay: 0.3 },
  { top: '12%', left: '55%', size: 3, delay: 1.6 },
  { top: '85%', left: '48%', size: 4, delay: 0.9 },
  { top: '45%', left: '95%', size: 3, delay: 1.3 },
  { top: '52%', left: '3%', size: 5, delay: 0.4 },
]

export default function Hero() {
  const scrollToDetails = () => {
    document.querySelector('#details')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-paper)] snap-section"
      
    >
      {/* soft radial backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, var(--color-beige) 0%, var(--color-paper) 65%)',
        }}
      />

      {/* floating gold particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[var(--color-gold)]"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, opacity: 0.5 }}
          animate={{ y: [0, -14, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* HERO IMAGE PLACEHOLDER — replace this div with an <img> of the couple */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-[520px] h-[520px] rounded-full border border-[var(--color-gold-soft)]" />
      </motion.div>

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-body text-xs md:text-sm tracking-[0.5em] uppercase text-[var(--color-sage-deep)] mb-6"
        >
          We're getting married
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="font-display text-[3.2rem] leading-[1.05] sm:text-7xl md:text-8xl text-[var(--color-ink)]"
        >
          Nikky <span className="italic text-[var(--color-gold)]">&amp;</span> Emily
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 1.1, ease: 'easeInOut' }}
          className="h-px bg-[var(--color-gold)] mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="font-display italic text-lg sm:text-xl text-[var(--color-ink-soft)] max-w-md mx-auto"
        >
          Together with their families, invite you to celebrate their wedding
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-[var(--color-ink-soft)] mt-6"
        >
          Trincomalee, Sri Lanka
        </motion.p>

        <motion.button
          type="button"
          onClick={scrollToDetails}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ y: -2 }}
          className="mt-14 inline-flex flex-col items-center gap-2 text-[var(--color-gold-deep)] focus:outline-none"
          aria-label="Scroll to wedding details"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Discover more</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.button>
      </div>
    </section>
  )
}
