import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarCheck, PhoneCall, ShieldCheck, Star } from 'lucide-react'
import drNomanKhan from '../assets/dr-noman-khan.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-10 lg:px-20">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <ShieldCheck size={16} />
            Serving DHA, Bahria Town &amp; All of Islamabad-Rawalpindi
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-950 leading-tight tracking-tight"
          >
            Restore Your Movement,{' '}
            <span className="text-teal-600">Regain Your Life</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-6 text-lg text-primary-800/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Professional physiotherapy treatments designed to reduce pain,
            improve mobility and help you recover — proudly serving patients
            across DHA, Bahria Town, and the greater Islamabad &amp; Rawalpindi
            area.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link to="/appointment" className="btn-primary w-full sm:w-auto">
              <CalendarCheck size={18} />
              Book Appointment
            </Link>
            <Link to="/contact" className="btn-secondary w-full sm:w-auto">
              <PhoneCall size={18} />
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="mt-10 flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="flex -space-x-3">
              {['A', 'B', 'F', 'U'].map((letter) => (
                <div
                  key={letter}
                  className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-sm font-semibold text-primary-700"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-primary-800/70 font-medium">
                500+ patients trust PhysioFix
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/50 to-teal-200/50 rounded-[2.5rem] blur-2xl" />
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card border-8 border-white animate-float">
            <img
              src={drNomanKhan}
              alt="Dr. Noman Khan - PhysioFix Physiotherapist"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 sm:left-0 bg-white rounded-2xl shadow-card px-5 py-4 flex items-center gap-3 border border-primary-100"
          >
            <div className="w-11 h-11 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-primary-950">98% Recovery</p>
              <p className="text-xs text-primary-700/70">Patient success rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
