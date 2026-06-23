import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { whyChooseUs } from '../data/siteData'

const points = [
  'Certified and experienced physiotherapists',
  'Individualized rehabilitation programs',
  'Modern equipment and proven techniques',
  'Compassionate, patient-first approach',
]

const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
              alt="Physiotherapist examining a patient's knee"
              className="rounded-2xl object-cover w-full h-56 sm:h-64 shadow-soft"
            />
            <img
              src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=600&auto=format&fit=crop"
              alt="Therapist guiding patient through rehabilitation exercise"
              className="rounded-2xl object-cover w-full h-56 sm:h-64 shadow-soft mt-8"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-card px-6 py-4 text-center border border-primary-100">
            <p className="text-2xl font-bold text-teal-600">3 Years</p>
            <p className="text-xs text-primary-700/70 font-medium">Clinical Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About PhysioFix</span>
          <h2 className="section-title mb-5">
            Helping patients recover through personalized physiotherapy and
            rehabilitation programs.
          </h2>
          <p className="text-primary-800/70 text-lg leading-relaxed mb-7">
            At PhysioFix, we believe recovery is more than just treatment —
            it's a partnership. Our experienced team combines modern
            techniques with genuine, compassionate care to help every patient
            move, feel, and live better.
          </p>

          <ul className="space-y-3 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-teal-500 shrink-0 mt-0.5" />
                <span className="text-primary-900/80">{point}</span>
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn-primary">
            Learn More About Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Why Patients Choose Us</span>
          <h2 className="section-title">Why Choose PhysioFix</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-base p-7 text-center hover:shadow-card hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {i + 1}
              </div>
              <h3 className="font-bold text-primary-950 mb-2">{item.title}</h3>
              <p className="text-sm text-primary-700/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
