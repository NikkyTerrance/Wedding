import { motion } from 'framer-motion'
import LeafDivider from './LeafDivider.jsx'

const EVENTS = [
  {
    label: 'The Wedding Mass',
    time: '09:30 AM',
    venue: "St Mary's Cathedral",
    place: 'Trincomalee, Sri Lanka',
    note: 'A quiet ceremony of vows, blessed within the cathedral walls.',
    icon: (
      <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 6 V16 M15 11 H25" strokeLinecap="round" />
        <path d="M11 34 V20 C11 15 15 12 20 12 C25 12 29 15 29 20 V34" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 34 H32" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'The Wedding Lunch',
    //time: '1:00 PM',
    venue: 'JKAB Beach Resort',
    place: 'Trincomalee, Sri Lanka',
    note: 'An afternoon of feasting and celebration by the shore.',
    icon: (
      <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 22 C8 30 14 34 20 34 C26 34 32 30 32 22" strokeLinecap="round" />
        <path d="M8 22 H32" strokeLinecap="round" />
        <path d="M13 22 C13 14 16 9 20 6 C24 9 27 14 27 22" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function WeddingDetails() {
  return (
    <section id="details" className="relative bg-[var(--color-sage)]/15 py-28 px-6 snap-section">
      <div className="max-w-5xl mx-auto text-center" >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body text-xs tracking-[0.5em] uppercase text-[var(--color-sage-deep)]"
        >
          When &amp; Where
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-[var(--color-ink)] mt-3"
        >
          Wedding Day Details
        </motion.h2>

        <LeafDivider className="mt-8" />

        <div className="grid md:grid-cols-2 gap-8 mt-16 text-left">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[var(--color-paper)] rounded-sm p-10 border border-[var(--color-gold-soft)] shadow-[0_10px_30px_-15px_rgba(43,38,32,0.25)] transition-shadow duration-500 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.35)]"
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[var(--color-gold-soft)] flex items-center justify-center text-[var(--color-gold)] transition-transform duration-500 group-hover:rotate-12">
                {event.icon}
              </div>

              <p className="font-body text-xs tracking-[0.35em] uppercase text-[var(--color-sage-deep)] mb-4">
                {event.time}
              </p>
              <h3 className="font-display text-3xl text-[var(--color-ink)] mb-2">{event.label}</h3>
              <p className="font-display italic text-lg text-[var(--color-gold-deep)]">{event.venue}</p>
              <p className="font-body text-sm text-[var(--color-ink-soft)] mt-1">{event.place}</p>

              <div className="h-px w-12 bg-[var(--color-gold)] my-6 transition-all duration-500 group-hover:w-20" />

              <p className="font-body text-sm text-[var(--color-ink-soft)] leading-relaxed">{event.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
