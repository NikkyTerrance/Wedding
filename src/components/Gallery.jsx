import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LeafDivider from './LeafDivider.jsx'
import photo1 from '../assets/im1.jpg'
import photo2 from '../assets/im2.jpg'
import photo3 from '../assets/im3.jpg'
import photo4 from '../assets/im4.jpg'
import photo5 from '../assets/im5.jpeg'
import photo6 from '../assets/im6.JPG'
import photo7 from '../assets/im7.jpg'
import photo8 from '../assets/im8.JPG'

// Replace `src` with real photo paths later — everything else (grid,
// hover state, lightbox) will keep working unchanged.
const PHOTOS = [
  { id: 1, src: photo1, alt: 'Wedding gallery photo 1' },
  { id: 2, src: photo2, alt: 'Wedding gallery photo 2' },
  { id: 3, src: photo3, alt: 'Wedding gallery photo 3' },
  { id: 4, src: photo4, alt: 'Wedding gallery photo 4' },
  { id: 5, src: photo5, alt: 'Wedding gallery photo 5' },
  { id: 6, src: photo6, alt: 'Wedding gallery photo 6' },
  { id: 7, src: photo7, alt: 'Wedding gallery photo 7' },
  { id: 8, src: photo8, alt: 'Wedding gallery photo 8' },
]

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null)

  return (
    <section id="gallery" className="relative bg-[var(--color-sage)]/15 py-28 px-6 snap-section">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body text-xs tracking-[0.5em] uppercase text-[var(--color-sage-deep)]"
        >
          Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-[var(--color-ink)] mt-3"
        >
          Moments We Cherish
        </motion.h2>
        <LeafDivider tone="sage" className="mt-8" />
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {PHOTOS.map((photo, i) => (
          <motion.button
            key={photo.id}
            type="button"
            onClick={() => setActivePhoto(photo)}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-square overflow-hidden rounded-sm bg-[var(--color-beige)] border border-[var(--color-gold-soft)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
          >
            {photo.src ? (
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-display italic text-sm text-[var(--color-sage-deep)]">
                  Photo {photo.id}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-[var(--color-ink)]/0 hover:bg-[var(--color-ink)]/10 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[var(--color-ink)]/90 flex items-center justify-center px-6"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-xl w-full aspect-[4/5] bg-[var(--color-beige)] rounded-sm flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {activePhoto.src ? (
                <img src={activePhoto.src} alt={activePhoto.alt} className="w-full h-full object-cover object-top rounded-sm" />
              ) : (
                <span className="font-display italic text-[var(--color-sage-deep)]">
                  Photo {activePhoto.id}
                </span>
              )}
              <button
                type="button"
                aria-label="Close photo"
                onClick={() => setActivePhoto(null)}
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-[var(--color-paper)] text-[var(--color-ink)] flex items-center justify-center shadow-md"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
