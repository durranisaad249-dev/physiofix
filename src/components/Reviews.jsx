import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/siteData'

const Reviews = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Patient Stories</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="mt-4 text-primary-800/70 text-lg">
            Real stories from real patients who trusted us with their
            recovery journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="card-base p-8 relative hover:shadow-card"
            >
              <Quote className="absolute top-6 right-6 text-primary-100" size={48} />
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    fill={idx < review.rating ? 'currentColor' : 'none'}
                    strokeWidth={idx < review.rating ? 0 : 1.5}
                  />
                ))}
              </div>
              <p className="text-primary-900/80 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-teal-400 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary-950 text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-primary-700/60">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
