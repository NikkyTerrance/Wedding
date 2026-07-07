import { motion } from 'framer-motion'

/**
 * LeafDivider — the site's signature ornament.
 *
 * A single hand-drawn gold line that unfurls into two symmetrical
 * areca-palm fronds, nodding to the coastal Trincomalee setting.
 * It "draws itself" the first time it scrolls into view, and can be
 * flipped for use above or below a section.
 *
 * Props:
 *  - flip: mirrors the ornament vertically (for use at the top of a section)
 *  - tone: 'gold' | 'sage' — stroke colour
 *  - className: layout/spacing overrides from the parent
 */
export default function LeafDivider({ flip = false, tone = 'gold', className = '' }) {
  const stroke = tone === 'sage' ? 'var(--color-sage-deep)' : 'var(--color-gold)'

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.6, ease: 'easeInOut' }, opacity: { duration: 0.4 } },
    },
  }

  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <motion.svg
        width="220"
        height="56"
        viewBox="0 0 220 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* central spine */}
        <motion.path
          d="M10 28 H210"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          variants={draw}
        />
        {/* left frond cluster */}
        <motion.path
          d="M60 28 C50 18, 38 14, 26 16 C38 20, 46 24, 60 28"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M60 28 C50 38, 38 42, 26 40 C38 36, 46 32, 60 28"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          variants={draw}
        />
        {/* right frond cluster */}
        <motion.path
          d="M160 28 C170 18, 182 14, 194 16 C182 20, 174 24, 160 28"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M160 28 C170 38, 182 42, 194 40 C182 36, 174 32, 160 28"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          variants={draw}
        />
        {/* central diamond */}
        <motion.path
          d="M110 22 L116 28 L110 34 L104 28 Z"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
        />
      </motion.svg>
    </div>
  )
}
