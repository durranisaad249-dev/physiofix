// ============================================================
// EmailJS Configuration
// ============================================================
// Keys are read from environment variables (.env file) instead
// of being hardcoded, so real API keys are never committed to
// GitHub. See .env.example for the variable names you need.
//
// Setup:
// 1. Sign up at https://www.emailjs.com (free plan: 200 emails/month)
// 2. Add an Email Service (Gmail) connected to noman.khan15481@gmail.com
//    -> copy the Service ID
// 3. Create two Email Templates (one for Contact, one for Appointment)
//    -> set "To Email" field in each template to noman.khan15481@gmail.com
//    -> copy each Template ID
// 4. Get your Public Key from Account > General
// 5. Copy .env.example to a new file named .env
// 6. Paste your real keys into .env (this file is gitignored and
//    will never be pushed to GitHub)
// 7. On Vercel, add the same 4 variables under
//    Project Settings -> Environment Variables
// ============================================================

export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
export const EMAILJS_CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || ''
export const EMAILJS_APPOINTMENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_APPOINTMENT_TEMPLATE_ID || ''

export const CLINIC_RECEIVING_EMAIL = 'noman.khan15481@gmail.com'

if (
  !EMAILJS_PUBLIC_KEY ||
  !EMAILJS_SERVICE_ID ||
  !EMAILJS_CONTACT_TEMPLATE_ID ||
  !EMAILJS_APPOINTMENT_TEMPLATE_ID
) {
  // eslint-disable-next-line no-console
  console.warn(
    '[PhysioFix] EmailJS environment variables are missing. ' +
      'Copy .env.example to .env and fill in your real EmailJS keys, ' +
      'or set them in Vercel under Project Settings > Environment Variables.'
  )
}
