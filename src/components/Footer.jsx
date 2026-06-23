import { Link } from 'react-router-dom'
import { Activity, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="px-6 sm:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-teal-400 text-white">
              <Activity size={22} />
            </span>
            <span className="text-xl font-bold text-white tracking-tight">
              Physio<span className="text-teal-400">Fix</span>
            </span>
          </Link>
          <p className="text-primary-200/80 text-sm leading-relaxed">
            Helping patients across DHA, Bahria Town, and Islamabad-Rawalpindi
            recover through personalized physiotherapy and rehabilitation
            programs designed around your unique needs.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://www.facebook.com/share/19Hxm5ZcP2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-900 hover:bg-teal-500 transition-colors duration-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-900 hover:bg-teal-500 transition-colors duration-300"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
            <li><Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            <li><Link to="/appointment" className="hover:text-teal-400 transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Our Services</h4>
          <ul className="space-y-3 text-sm">
            <li className="text-primary-200/80">Back &amp; Neck Pain</li>
            <li className="text-primary-200/80">Joint &amp; Knee Pain</li>
            <li className="text-primary-200/80">Sports Injuries</li>
            <li className="text-primary-200/80">Sciatica Treatment</li>
            <li className="text-primary-200/80">Paralysis Rehabilitation</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-teal-400 mt-0.5 shrink-0" />
              <span className="text-primary-200/80">+92 342 9713847</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-teal-400 mt-0.5 shrink-0" />
              <span className="text-primary-200/80">noman.khan15481@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-teal-400 mt-0.5 shrink-0" />
              <span className="text-primary-200/80">
                Rawalpindi, Islamabad, Pakistan
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-900/80 px-6 sm:px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-300/70">
        <p>© {year} PhysioFix. All rights reserved.</p>
        <p>Designed with care for your recovery journey.</p>
      </div>
    </footer>
  )
}

export default Footer
