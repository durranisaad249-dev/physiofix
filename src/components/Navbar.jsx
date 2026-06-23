import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Activity, CalendarCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative font-medium text-sm transition-colors duration-200 ${
      isActive ? 'text-primary-700' : 'text-primary-900/80 hover:text-primary-700'
    }`

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft py-3'
          : 'bg-white/60 backdrop-blur-sm py-5'
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-20">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setIsOpen(false)}>
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 text-white shadow-soft">
            <Activity size={22} />
          </span>
          <span className="text-xl font-bold text-primary-950 tracking-tight">
            Physio<span className="text-teal-600">Fix</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === '/'}>
              {({ isActive }) => (
                <span className="flex flex-col items-center gap-1">
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="h-1 w-1 rounded-full bg-teal-500"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Link to="/appointment" className="btn-primary">
            <CalendarCheck size={18} />
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden text-primary-900 p-2 rounded-lg hover:bg-primary-50 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-primary-100 mt-3"
          >
            <div className="flex flex-col px-6 sm:px-10 py-6 gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-medium text-base ${
                      isActive ? 'text-primary-700' : 'text-primary-900/80'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/appointment"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full"
              >
                <CalendarCheck size={18} />
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
