import { Phone, Clock, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AppointmentForm from '../components/AppointmentForm'

const infoCards = [
  {
    icon: Phone,
    title: 'Call Us',
    detail: '+92 342 9713847',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    detail: 'Mon - Sat: 9:00 AM - 8:00 PM',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    detail: 'Rawalpindi, Islamabad',
  },
]

const Appointment = () => {
  return (
    <>
      <PageHeader
        title="Book Your Appointment"
        subtitle="Fill out the form below and our team will get in touch to confirm your session."
        breadcrumb="Book Appointment"
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {infoCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="card-base p-6 text-center hover:shadow-card"
              >
                <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-primary-950 text-sm mb-1">
                  {card.title}
                </h3>
                <p className="text-primary-700/70 text-sm">{card.detail}</p>
              </div>
            )
          })}
        </div>

        <AppointmentForm />
      </section>
    </>
  )
}

export default Appointment
