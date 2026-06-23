import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag, CalendarCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { blogPosts } from '../data/siteData'

const blogImages = {
  'benefits-of-physiotherapy':
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=700&auto=format&fit=crop',
  'back-pain-prevention':
    'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=700&auto=format&fit=crop',
  'sports-injury-recovery':
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=700&auto=format&fit=crop',
}

const Blog = () => {
  return (
    <>
      <PageHeader
        title="PhysioFix Blog"
        subtitle="Helpful insights, tips and guides from our physiotherapy experts to support your recovery."
        breadcrumb="Blog"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="card-base overflow-hidden hover:shadow-card group"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={blogImages[post.id]}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-4 text-xs text-primary-700/60 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={14} />
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-primary-700/70 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm cursor-pointer group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-700 to-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have More Questions About Your Recovery?
          </h2>
          <p className="text-primary-50/90 text-lg mb-8">
            Our team is here to guide you. Book a session and get personalized
            advice from our specialists.
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

export default Blog
