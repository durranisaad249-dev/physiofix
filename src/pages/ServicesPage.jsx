import { Link } from 'react-router-dom'
import { CalendarCheck, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import VideoShowcase from '../components/VideoShowcase'
import FAQ from '../components/FAQ'

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Our Physiotherapy Services"
        subtitle="From chronic pain to sports injuries, our comprehensive treatments are designed around your recovery — serving DHA, Bahria Town, and the greater Islamabad-Rawalpindi region."
        breadcrumb="Services"
      />

      <div className="px-6 sm:px-10 lg:px-20 -mt-2 mb-2">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 bg-teal-50 border border-teal-100 text-teal-800 rounded-2xl px-6 py-4 text-center text-sm sm:text-base font-medium">
          <Users size={20} className="shrink-0" />
          <span>
            We offer both <strong>male and female physiotherapists</strong> —
            choose your preferred therapist when booking your appointment.
          </span>
        </div>
      </div>

      <Services showAll />

      <VideoShowcase />

      <FAQ />

      <section className="section-padding bg-gradient-to-br from-primary-700 to-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-primary-50/90 text-lg mb-8">
            Book a consultation and our specialists will create the right
            treatment plan for your condition.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-full shadow-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <CalendarCheck size={20} />
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
