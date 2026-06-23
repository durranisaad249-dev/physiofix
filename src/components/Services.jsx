import { motion } from 'framer-motion'
import { services } from '../data/siteData'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i % 4) * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

const Services = ({ showAll = false }) => {
  const list = showAll ? services : services.slice(0, 8)

  return (
    <section className="section-padding bg-primary-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">What We Treat</span>
          <h2 className="section-title">Our Physiotherapy Services</h2>
          <p className="mt-4 text-primary-800/70 text-lg">
            Comprehensive, evidence-based treatments tailored to your specific
            condition and recovery goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="card-base p-7 group hover:shadow-card hover:border-teal-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center text-primary-600 mb-5 group-hover:from-primary-600 group-hover:to-teal-500 group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-primary-950 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-primary-700/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
