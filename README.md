# PhysioFix — Physiotherapy Clinic Website

A premium, fully responsive frontend website for a physiotherapy clinic,
built with React + Vite, Tailwind CSS, React Router DOM, Framer Motion and
Lucide Icons. Serving DHA, Bahria Town, and the greater Islamabad &
Rawalpindi area.

## Tech Stack

- React.js (JSX) + Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React Icons
- EmailJS (real email delivery from the Contact and Appointment forms)
- Facebook Video Plugin (official embed for the Services page video section)

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL printed in your terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Setting Up Real Email Delivery (Required)

The Contact form and Appointment form use **EmailJS** to send real emails to
`noman.khan15481@gmail.com`. Until you add your own EmailJS keys, submitting
either form will show an error message instead of "Message Sent" — this is
intentional, so the site never falsely claims a message was sent when it
wasn't.

**Setup steps (5 minutes, free):**

1. Go to https://www.emailjs.com and sign up (free plan: 200 emails/month).
2. **Add an Email Service**: Email Services → Add New Service → choose
   **Gmail** → connect it with `noman.khan15481@gmail.com`. Copy the
   **Service ID**.
3. **Create two Email Templates** (Email Templates → Create New Template):
   - One for the **Contact form** — set "To Email" to
     `noman.khan15481@gmail.com`. Use variables `{{from_name}}`,
     `{{from_email}}`, `{{subject}}`, `{{message}}` in the body.
   - One for the **Appointment form** — set "To Email" to
     `noman.khan15481@gmail.com`. Use variables `{{patient_name}}`,
     `{{patient_phone}}`, `{{patient_email}}`, `{{patient_age}}`,
     `{{treatment}}`, `{{therapist_preference}}`, `{{appointment_date}}`,
     `{{message}}` in the body.
   - Copy each **Template ID**.
4. Get your **Public Key**: Account → General → copy the Public Key.
5. Open `src/config/emailConfig.js` and replace the four placeholder values:

```js
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
export const EMAILJS_CONTACT_TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID'
export const EMAILJS_APPOINTMENT_TEMPLATE_ID = 'YOUR_APPOINTMENT_TEMPLATE_ID'
```

Save the file, restart `npm run dev`, and both forms will send real emails.

## Facebook Video Section (Services Page)

The Services page includes a "Watch Our Therapy Sessions" section that
embeds two Facebook reels directly using Facebook's official Video Plugin
(`src/components/VideoShowcase.jsx`). The videos stay hosted on Facebook and
play through Facebook's own embedded player — nothing is downloaded or
re-hosted.

Currently embedded:
- `https://www.facebook.com/reel/876987888301853`
- `https://www.facebook.com/reel/1362234512275803`

**Important:** Facebook's embed only works correctly if each reel's privacy
setting is **Public**. If a reel is private or restricted, the embed box
will appear blank for site visitors — double check the visibility setting
on both reels in Facebook.

To swap in different videos later, just edit the `reels` array at the top of
`src/components/VideoShowcase.jsx` with the new Facebook video/reel URLs.

## Project Structure

```
src/
├── assets/
│   ├── dr-noman-khan.jpeg
│   ├── dr-manahil-mumtaz.svg
│   └── dr-muqadas.svg
│
├── config/
│   └── emailConfig.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── ServiceAreas.jsx
│   ├── Services.jsx
│   ├── VideoShowcase.jsx
│   ├── About.jsx
│   ├── Reviews.jsx
│   ├── FAQ.jsx
│   ├── AppointmentForm.jsx
│   ├── PageHeader.jsx
│   ├── ScrollToTop.jsx
│   └── WhatsAppButton.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── Appointment.jsx
│   ├── Contact.jsx
│   ├── Blog.jsx
│   └── NotFound.jsx
│
├── data/
│   └── siteData.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Notes

- WhatsApp button is set to `+92 342 9713847` in
  `src/components/WhatsAppButton.jsx` — tapping it opens a chat directly with
  that number.
- Contact details (phone, email, Rawalpindi/Islamabad location) live in
  `src/components/Footer.jsx`, `src/pages/Contact.jsx`, and
  `src/pages/Appointment.jsx`.
- Facebook icon in the footer links directly to
  `https://www.facebook.com/share/19Hxm5ZcP2/`. The Twitter icon has been
  removed.
- The About page features three therapists side by side: Dr. Noman Khan,
  Dr. Manahil Mumtaz, and Dr. Muqadas. The two female therapists use
  original illustrated avatars (`dr-manahil-mumtaz.svg`, `dr-muqadas.svg`)
  depicting a professional woman wearing a hijab — replace these with real
  photos in `src/assets/` when available, keeping the same filenames, or
  update the imports in `src/pages/AboutPage.jsx`.
- The Services page states that both male and female physiotherapists are
  available, and the Appointment form includes a "Preferred Therapist"
  dropdown (No Preference / Female Therapist / Male Therapist) which is
  included in the email sent for each booking.
- The homepage includes an "Areas We Serve" section (DHA, Bahria Town, and
  surrounding Islamabad/Rawalpindi neighborhoods) for local SEO and customer
  targeting.
