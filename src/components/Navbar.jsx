import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Details', href: '#details' },
  { label: 'Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  //{ label: 'RSVP', href: '#rsvp' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-[var(--color-paper)]/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-gold-soft)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="font-display text-xl tracking-widest text-[var(--color-ink)]"
        >
          N <span className="text-[var(--color-gold)]">&amp;</span> E
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-body text-sm tracking-[0.15em] uppercase text-[var(--color-ink-soft)] hover:text-[var(--color-gold-deep)] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-6 justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded"
        >
          <span
            className={`block h-px bg-[var(--color-ink)] transition-transform duration-300 ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px bg-[var(--color-ink)] transition-transform duration-300 ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* mobile menu */}
      <motion.ul
        initial={false}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-[var(--color-paper)] border-t border-[var(--color-gold-soft)]"
      >
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block px-8 py-4 font-body text-sm tracking-[0.15em] uppercase text-[var(--color-ink-soft)] hover:text-[var(--color-gold-deep)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.header>
  )
}
