import Hero from '../components/Hero'
import Stats from '../components/Stats'
import ServiceAreas from '../components/ServiceAreas'
import Services from '../components/Services'
import About from '../components/About'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'
import drNomanKhan from '../assets/dr-noman-khan.jpeg'

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ServiceAreas />
      <Services />
      <About />
      <Reviews />
      <FAQ />

      <section className="section-padding bg-gradient-to-br from-primary-700 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-card border-8 border-white/20">
              <img
                src={drNomanKhan}
                alt="Dr. Noman Khan - PhysioFix Physiotherapist"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-primary-50/90 text-lg mb-8">
              Book your appointment today and take the first step toward a
              pain-free, active life.
            </p>
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-full shadow-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <CalendarCheck size={20} />
              Book Appointment Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
