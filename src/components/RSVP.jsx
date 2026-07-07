import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LeafDivider from './LeafDivider.jsx'

const INITIAL_FORM = {
  name: '',
  email: '',
  guests: 1,
  attending: 'yes',
  message: '',
}

/**
 * submitRSVP — the single place that talks to a backend.
 *
 * Right now it just resolves after a short delay so the UI has
 * something real to await. When you're ready, swap the body of this
 * function for a call to Firebase, Supabase, MongoDB, or an email
 * service (e.g. EmailJS, Resend) — the form itself never needs to change.
 */
async function submitRSVP(formData) {
  // Example (Supabase):
  // const { error } = await supabase.from('rsvps').insert([formData])
  // if (error) throw error

  // Example (Firebase Firestore):
  // await addDoc(collection(db, 'rsvps'), formData)

  // Example (a REST/email endpoint):
  // await fetch('/api/rsvp', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData),
  // })

  await new Promise((resolve) => setTimeout(resolve, 900))
  return { ok: true }
}

export default function RSVP() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  const handleChange = (field) => (e) => {
    const value = field === 'guests' ? Number(e.target.value) : e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (form.guests < 1 || form.guests > 10) next.guests = 'Enter a number between 1 and 10.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      await submitRSVP(form)
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      console.error('RSVP submission failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="rsvp" className="relative bg-[var(--color-beige)] py-28 px-6 snap-section">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-body text-xs tracking-[0.5em] uppercase text-[var(--color-sage-deep)]"
        >
          Join Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-[var(--color-ink)] mt-3"
        >
          Reserve Your Seat
        </motion.h2>
        <LeafDivider className="mt-8 mb-12" />

        <div className="relative">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--color-paper)] border border-[var(--color-gold-soft)] rounded-sm px-8 py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 14 }}
                  className="w-14 h-14 mx-auto rounded-full border border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold)] text-2xl mb-6"
                >
                  ✓
                </motion.div>
                <h3 className="font-display text-2xl text-[var(--color-ink)] mb-2">Thank you!</h3>
                <p className="font-body text-[var(--color-ink-soft)]">
                  Your RSVP has been received. We can't wait to celebrate with you.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm tracking-[0.2em] uppercase text-[var(--color-gold-deep)] underline underline-offset-4"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                noValidate
                className="bg-[var(--color-paper)] border border-[var(--color-gold-soft)] rounded-sm px-6 sm:px-10 py-10 text-left flex flex-col gap-6"
              >
                <Field label="Full name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="Jane Doe"
                    className={inputClasses(errors.name)}
                  />
                </Field>

                <Field label="Email address" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="jane@example.com"
                    className={inputClasses(errors.email)}
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Number of guests" error={errors.guests}>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={form.guests}
                      onChange={handleChange('guests')}
                      className={inputClasses(errors.guests)}
                    />
                  </Field>

                  <Field label="Will you attend?">
                    <div className="flex gap-3 mt-1">
                      {['yes', 'no'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, attending: option }))}
                          className={`flex-1 py-3 rounded-sm border text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                            form.attending === option
                              ? 'bg-[var(--color-gold)] border-[var(--color-gold)] text-[var(--color-paper)]'
                              : 'border-[var(--color-gold-soft)] text-[var(--color-ink-soft)] hover:border-[var(--color-gold)]'
                          }`}
                        >
                          {option === 'yes' ? 'Joyfully yes' : "Can't attend"}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>

                <Field label="Message for the couple (optional)">
                  <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    rows={4}
                    placeholder="Leave a wish, a memory, or a note..."
                    className={inputClasses() + ' resize-none'}
                  />
                </Field>

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 self-center px-10 py-3.5 rounded-sm bg-[var(--color-gold)] text-[var(--color-paper)] text-sm tracking-[0.25em] uppercase transition-opacity duration-300 disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send RSVP'}
                </motion.button>

                {status === 'error' && (
                  <p className="text-center text-sm text-red-600">
                    Something went wrong. Please try again in a moment.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-ink-soft)]">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}

function inputClasses(error) {
  return `w-full bg-transparent border-b py-2.5 font-body text-[var(--color-ink)] placeholder:text-[var(--color-ink-soft)]/50 focus:outline-none transition-colors duration-300 ${
    error ? 'border-red-400' : 'border-[var(--color-gold-soft)] focus:border-[var(--color-gold)]'
  }`
}
