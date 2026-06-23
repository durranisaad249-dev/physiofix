import { motion } from 'framer-motion'
import { stats } from '../data/siteData'

const Stats = () => {
  return (
    <section className="relative -mt-10 z-10 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-card border border-primary-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-primary-100">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center py-8 px-4"
          >
            <p className="text-3xl md:text-4xl font-extrabold text-primary-700">
              {stat.value}
            </p>
            <p className="text-sm text-primary-700/60 font-medium mt-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
