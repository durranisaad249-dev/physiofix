import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      <p className="text-7xl font-extrabold text-primary-200">404</p>
      <h1 className="text-2xl md:text-3xl font-bold text-primary-950 mt-4 mb-3">
        Page Not Found
      </h1>
      <p className="text-primary-700/70 mb-8 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <HomeIcon size={18} />
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
