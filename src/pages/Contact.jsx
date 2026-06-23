import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, AlertCircle, Loader2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_CONTACT_TEMPLATE_ID,
} from '../config/emailConfig'

const initialState = { name: '', email: '', subject: '', message: '' }

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    detail: '+92 342 9713847',
    href: 'tel:+923429713847',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'noman.khan15481@gmail.com',
    href: 'mailto:noman.khan15481@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Clinic Location',
    detail: 'Rawalpindi, Islamabad, Pakistan',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    detail: 'Mon - Sat: 9:00 AM - 8:00 PM',
    href: null,
  },
]

const Contact = () => {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSendError('')
    setIsSending(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Form Message',
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setSubmitted(true)
    } catch (error) {
      console.error('EmailJS send error:', error)
      setSendError(
        "We couldn't send your message right now. Please try again, or reach us directly by phone or WhatsApp."
      )
    } finally {
      setIsSending(false)
    }
  }

  const handleReset = () => {
    setFormData(initialState)
    setErrors({})
    setSubmitted(false)
    setSendError('')
  }

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Have a question or want to schedule a visit? Reach out anytime — proudly serving patients across DHA, Bahria Town, Islamabad and Rawalpindi."
        breadcrumb="Contact"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              const content = (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-950 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-primary-700/70 text-sm leading-relaxed">
                      {info.detail}
                    </p>
                  </div>
                </div>
              )
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="card-base p-6 hover:shadow-card"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-soft border border-primary-100 h-64"
            >
              <iframe
                title="PhysioFix Clinic Location"
                src="https://www.google.com/maps?q=Rawalpindi,Islamabad,Pakistan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="card-base p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-primary-950 mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-primary-700/70 mb-8 leading-relaxed max-w-md">
                  Thank you for reaching out, {formData.name.split(' ')[0] || 'there'}.
                  Our team will respond to your message as soon as possible.
                </p>
                <button onClick={handleReset} className="btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base p-6 sm:p-10" noValidate>
                <h3 className="text-2xl font-bold text-primary-950 mb-6">
                  Send Us a Message
                </h3>

                {sendError && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 mb-6 text-sm">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{sendError}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-primary-900 mb-2">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl border bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 ${
                        errors.name ? 'border-red-400' : 'border-primary-100'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-primary-900 mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 ${
                        errors.email ? 'border-red-400' : 'border-primary-100'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-primary-900 mb-2">
                    Subject <span className="text-primary-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-xl border border-primary-100 bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-primary-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl border bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 resize-none ${
                      errors.message ? 'border-red-400' : 'border-primary-100'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSending} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact
