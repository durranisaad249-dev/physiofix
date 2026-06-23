import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const PageHeader = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-32 pb-16 px-6 sm:px-10 lg:px-20 text-center">
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute top-10 -left-16 w-60 h-60 bg-primary-200/30 rounded-full blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 text-sm text-primary-700/60 mb-4">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary-900 font-medium">{breadcrumb}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-950 leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-800/70 text-lg leading-relaxed">{subtitle}</p>
        )}
      </motion.div>
    </section>
  )
}

export default PageHeader
