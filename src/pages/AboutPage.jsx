import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, CalendarCheck, Award, Users, HeartHandshake } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { whyChooseUs } from '../data/siteData'
import drNomanKhan from '../assets/dr-noman-khan.jpeg'
import drManahilMumtaz from '../assets/dr-manahil-mumtaz.svg'
import drMuqadas from '../assets/dr-muqadas.svg'

const therapists = [
  {
    name: 'Dr. Noman Khan',
    role: 'Lead Physiotherapist',
    image: drNomanKhan,
  },
  {
    name: 'Dr. Manahil Mumtaz',
    role: 'Physiotherapist',
    image: drManahilMumtaz,
  },
  {
    name: 'Dr. Muqadas',
    role: 'Physiotherapist',
    image: drMuqadas,
  },
]

const milestones = [
  { icon: Award, label: '3 Years', desc: 'Of clinical excellence' },
  { icon: Users, label: '500+ Patients', desc: 'Successfully treated' },
  { icon: HeartHandshake, label: '98% Recovery', desc: 'Patient success rate' },
]

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About PhysioFix"
        subtitle="Dedicated to helping patients across DHA, Bahria Town, and Islamabad-Rawalpindi move better, feel stronger, and live pain-free."
        breadcrumb="About"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=900&auto=format&fit=crop"
              alt="PhysioFix clinic interior with modern rehabilitation equipment"
              className="rounded-3xl shadow-card w-full h-[420px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-title mb-5">
              Dedicated to Restoring Movement and Confidence
            </h2>
            <p className="text-primary-800/70 leading-relaxed mb-5">
              PhysioFix was founded with a simple mission — to make
              high-quality physiotherapy accessible, effective, and genuinely
              caring. Over the past few years, we've helped hundreds of patients
              recover from injuries, chronic pain, and mobility challenges
              through personalized, evidence-based treatment.
            </p>
            <p className="text-primary-800/70 leading-relaxed mb-7">
              Our team of therapists combines clinical expertise with
              modern rehabilitation technology, ensuring every patient
              receives a treatment plan built specifically around their body
              and goals.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {milestones.map((m) => {
                const Icon = m.icon
                return (
                  <div key={m.label} className="text-center p-4 rounded-2xl bg-primary-50/60">
                    <Icon className="text-teal-600 mx-auto mb-2" size={24} />
                    <p className="font-bold text-primary-950 text-sm">{m.label}</p>
                    <p className="text-xs text-primary-700/60 mt-1">{m.desc}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-primary-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">
              Helping Patients Recover Through Personalized Care
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-base p-7 hover:shadow-card hover:-translate-y-1"
              >
                <CheckCircle2 className="text-teal-500 mb-4" size={28} />
                <h3 className="font-bold text-primary-950 mb-2">{item.title}</h3>
                <p className="text-sm text-primary-700/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">Meet Our Therapists</span>
            <h2 className="section-title">Meet our Expert Therapists</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {therapists.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-base overflow-hidden text-center hover:shadow-card group"
              >
                <div className="overflow-hidden h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-primary-950 text-lg">{member.name}</h3>
                  <p className="text-teal-600 text-sm font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-700 to-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Start Your Recovery Together
          </h2>
          <p className="text-primary-50/90 text-lg mb-8">
            Schedule a consultation with our expert team and take the first
            step toward lasting relief.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-full shadow-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <CalendarCheck size={20} />
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage
