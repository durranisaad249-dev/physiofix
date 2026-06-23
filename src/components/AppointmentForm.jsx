import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  CheckCircle2,
  Send,
  User,
  Phone,
  Mail,
  Cake,
  Stethoscope,
  Calendar,
  MessageSquare,
  AlertCircle,
  Loader2,
  UserCircle,
} from 'lucide-react'
import { treatmentOptions } from '../data/siteData'
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_APPOINTMENT_TEMPLATE_ID,
} from '../config/emailConfig'

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  age: '',
  treatment: '',
  therapistPreference: 'No Preference',
  date: '',
  message: '',
}

const AppointmentForm = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  const [sendError, setSendError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!formData.age.trim()) newErrors.age = 'Age is required'
    if (!formData.treatment) newErrors.treatment = 'Please select a treatment'
    if (!formData.date) newErrors.date = 'Please choose a preferred date'
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
        EMAILJS_APPOINTMENT_TEMPLATE_ID,
        {
          patient_name: formData.name,
          patient_phone: formData.phone,
          patient_email: formData.email,
          patient_age: formData.age,
          treatment: formData.treatment,
          therapist_preference: formData.therapistPreference,
          appointment_date: formData.date,
          message: formData.message || 'No additional message provided.',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setSubmitted(true)
    } catch (error) {
      console.error('EmailJS send error:', error)
      setSendError(
        "We couldn't submit your appointment request right now. Please try again, or call/WhatsApp us directly to book."
      )
    } finally {
      setIsSending(false)
    }
  }

  const handleReset = () => {
    setFormData(initialFormState)
    setErrors({})
    setSubmitted(false)
    setSendError('')
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="card-base p-10 text-center max-w-xl mx-auto"
      >
        <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl font-bold text-primary-950 mb-3">
          Appointment Request Received!
        </h3>
        <p className="text-primary-700/70 mb-8 leading-relaxed">
          Thank you, {formData.name.split(' ')[0] || 'there'}! Our team will
          contact you shortly at {formData.phone || 'your provided number'} to
          confirm your appointment for{' '}
          <span className="font-semibold text-primary-900">
            {formData.treatment}
          </span>
          .
        </p>
        <button onClick={handleReset} className="btn-primary">
          Book Another Appointment
        </button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-base p-6 sm:p-10 max-w-3xl mx-auto"
      noValidate
    >
      {sendError && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 mb-6 text-sm">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <span>{sendError}</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="sm:col-span-2 sm:col-span-1">
          <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-primary-900 mb-2">
            <User size={16} className="text-teal-500" />
            Patient Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 rounded-xl border bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 ${
              errors.name ? 'border-red-400' : 'border-primary-100'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-primary-900 mb-2">
            <Phone size={16} className="text-teal-500" />
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="03XX-XXXXXXX"
            className={`w-full px-4 py-3 rounded-xl border bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 ${
              errors.phone ? 'border-red-400' : 'border-primary-100'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-primary-900 mb-2">
            <Mail size={16} className="text-teal-500" />
            Email
          </label>
          <input
            id="email"
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

        <div>
          <label htmlFor="age" className="flex items-center gap-2 text-sm font-semibold text-primary-900 mb-2">
            <Cake size={16} className="text-teal-500" />
            Age
          </label>
          <input
            id="age"
            name="age"
            type="number"
            min="0"
            max="120"
            value={formData.age}
            onChange={handleChange}
            placeholder="Your age"
            className={`w-full px-4 py-3 rounded-xl border bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 ${
              errors.age ? 'border-red-400' : 'border-primary-100'
            }`}
          />
          {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
        </div>

        <div>
          <label htmlFor="treatment" className="flex items-center gap-2 text-sm font-semibold text-primary-900 mb-2">
            <Stethoscope size={16} className="text-teal-500" />
            Select Treatment
          </label>
          <select
            id="treatment"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 ${
              errors.treatment ? 'border-red-400' : 'border-primary-100'
            }`}
          >
            <option value="">Choose a treatment</option>
            {treatmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.treatment && <p className="text-red-500 text-xs mt-1">{errors.treatment}</p>}
        </div>

        <div>
          <label htmlFor="therapistPreference" className="flex items-center gap-2 text-sm font-semibold text-primary-900 mb-2">
            <UserCircle size={16} className="text-teal-500" />
            Preferred Therapist
          </label>
          <select
            id="therapistPreference"
            name="therapistPreference"
            value={formData.therapistPreference}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-primary-100 bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400"
          >
            <option value="No Preference">No Preference</option>
            <option value="Female Therapist">Female Therapist</option>
            <option value="Male Therapist">Male Therapist</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold text-primary-900 mb-2">
            <Calendar size={16} className="text-teal-500" />
            Appointment Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 ${
              errors.date ? 'border-red-400' : 'border-primary-100'
            }`}
          />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-primary-900 mb-2">
            <MessageSquare size={16} className="text-teal-500" />
            Message <span className="text-primary-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your condition..."
            className="w-full px-4 py-3 rounded-xl border border-primary-100 bg-primary-50/40 focus:bg-white outline-none transition-all focus:ring-2 focus:ring-teal-400 resize-none"
          />
        </div>
      </div>

      <button type="submit" disabled={isSending} className="btn-primary w-full mt-8 disabled:opacity-60 disabled:cursor-not-allowed">
        {isSending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Appointment Request
          </>
        )}
      </button>
    </form>
  )
}

export default AppointmentForm
