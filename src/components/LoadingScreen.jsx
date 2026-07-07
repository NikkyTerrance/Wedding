import { motion, AnimatePresence } from 'framer-motion'
import Monogram from './Monogram.jsx'

/**
 * LoadingScreen — full-screen entrance overlay.
 *
 * This component is intentionally self-contained: it only needs a
 * boolean `isLoading` prop to know whether to show itself, so it can
 * be swapped out later for a custom animation without touching the
 * rest of the app. Just replace the JSX inside the motion.div below.
 *
 * Usage:
 *   const [isLoading, setIsLoading] = useState(true)
 *   <LoadingScreen isLoading={isLoading} />
 */
export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-paper)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* faint sage backdrop wash */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 45%, var(--color-beige) 0%, var(--color-paper) 70%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <Monogram size={110} />

            <motion.p
              className="font-display italic text-[var(--color-ink-soft)] text-lg tracking-wedding uppercase"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              Nikky &amp; Emily
            </motion.p>

            <motion.div
              className="h-px bg-[var(--color-gold)]"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 2, duration: 0.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
