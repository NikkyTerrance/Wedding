import { motion } from 'framer-motion'

/**
 * Monogram — an interlocking "N & E" line-drawing.
 *
 * Used as the centrepiece of the loading screen and echoed, smaller,
 * in the hero and footer. The stroke "writes itself" once on mount.
 */
export default function Monogram({ size = 120, animate = true, className = '' }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.4, ease: 'easeInOut', delay: i * 0.25 }, opacity: { duration: 0.3, delay: i * 0.25 } },
    }),
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={animate ? 'hidden' : 'visible'}
      animate="visible"
    >
      {/* outer ring */}
      <motion.circle
        cx="60"
        cy="60"
        r="52"
        stroke="var(--color-gold)"
        strokeWidth="1"
        custom={0}
        variants={draw}
      />
      {/* N */}
      <motion.path
        d="M38 78 V42 L58 78 V42"
        stroke="var(--color-gold)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        custom={0.6}
        variants={draw}
      />
      {/* ampersand flourish */}
      <motion.path
        d="M58 60 C63 60 63 52 58 52 C53 52 52 58 58 62 C64 66 64 72 58 74 C53 76 50 71 52 66"
        stroke="var(--color-sage-deep)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        custom={1.1}
        variants={draw}
      />
      {/* E */}
      <motion.path
        d="M66 42 H82 M66 42 V78 H83 M66 60 H79"
        stroke="var(--color-gold)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        custom={1.5}
        variants={draw}
      />
    </motion.svg>
  )
}
