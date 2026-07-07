import { motion } from 'framer-motion'
import LeafDivider from './LeafDivider.jsx'

// Replace this placeholder copy with your real story whenever you're ready.
const CHAPTERS = [
  {
    year: 'How we met',
    title: 'A chance introduction',
    text: 'Replace this with the story of how Nikky and Emily first met — the place, the moment, the small detail neither of you forgot.',
  },
  {
    year: 'Falling in love',
    title: 'Somewhere along the way',
    text: 'Replace this with a memory from early on — a trip, a joke that became "yours," the moment it started to feel like forever.',
  },
  {
    year: 'The proposal',
    title: 'A question, answered',
    text: 'Replace this with the story of the proposal — where it happened, who was in on it, and what was said.',
  },
]

export default function Story() {
  return (
    <section id="story" className="relative bg-[var(--color-paper)] py-28 px-6 snap-section">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body text-xs tracking-[0.5em] uppercase text-[var(--color-sage-deep)]"
        >
          Our Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-[var(--color-ink)] mt-3"
        >
          Every Love Has a Beginning
        </motion.h2>
        <LeafDivider className="mt-8" />
      </div>

      <div className="max-w-4xl mx-auto mt-16 flex flex-col gap-20">
        {CHAPTERS.map((chapter, i) => {
          const reverse = i % 2 === 1
          return (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${reverse ? 'md:flex-row-reverse' : ''}`}
            >
              {/* IMAGE PLACEHOLDER — swap for a real photograph */}
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/5] w-full max-w-sm mx-auto bg-[var(--color-beige)] border border-[var(--color-gold-soft)] rounded-sm flex items-center justify-center">
                  <span className="font-display italic text-[var(--color-sage-deep)]">Photo coming soon</span>
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="font-body text-xs tracking-[0.35em] uppercase text-[var(--color-gold-deep)] mb-3">
                  {chapter.year}
                </p>
                <h3 className="font-display text-3xl text-[var(--color-ink)] mb-4">{chapter.title}</h3>
                <p className="font-body text-[var(--color-ink-soft)] leading-relaxed">{chapter.text}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
