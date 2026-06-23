import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const areas = [
  'DHA Islamabad',
  'Bahria Town',
  'Bahria Phase 8',
  'Gulberg Greens',
  'PWD Housing Society',
  'Rawalpindi Cantt',
  'Saddar Rawalpindi',
  'Adyala Road',
  'I-8 / I-9 / I-10',
  'F-10 / F-11',
  'G-13 / G-14',
  'Soan Garden',
]

const ServiceAreas = () => {
  return (
    <section className="py-14 px-6 sm:px-10 lg:px-20 bg-white border-y border-primary-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wide mb-3">
          <MapPin size={16} />
          Areas We Serve
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-950 mb-3">
          Proudly Treating Patients Across Islamabad &amp; Rawalpindi
        </h2>
        <p className="text-primary-700/70 max-w-2xl mx-auto mb-9">
          From DHA and Bahria Town to every neighborhood in between, PhysioFix
          brings expert physiotherapy care close to home for families across
          the twin cities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {areas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="px-4 py-2 rounded-full bg-primary-50 text-primary-800 text-sm font-medium border border-primary-100 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors duration-200"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
