import { motion } from 'framer-motion'

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.39.7 4.617 1.91 6.49L4 29l7.69-1.866A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.78 9.78 0 0 1-4.99-1.366l-.358-.213-4.555 1.106 1.124-4.434-.234-.372A9.77 9.77 0 0 1 5.273 15c0-5.91 4.82-10.727 10.731-10.727 5.91 0 10.727 4.818 10.727 10.727 0 5.91-4.817 10.727-10.727 10.727Zm5.892-8.034c-.323-.162-1.91-.943-2.207-1.05-.296-.108-.512-.162-.728.162-.215.323-.834 1.05-1.022 1.265-.188.215-.377.242-.7.081-.323-.162-1.364-.502-2.598-1.604-.96-.857-1.609-1.915-1.797-2.238-.188-.323-.02-.498.143-.66.162-.162.377-.42.566-.63.188-.21.25-.36.377-.6.125-.242.063-.45-.02-.612-.082-.162-.737-1.778-1.01-2.435-.27-.65-.546-.563-.752-.573l-.643-.012c-.215 0-.566.08-.866.404-.296.323-1.13 1.105-1.13 2.692 0 1.587 1.157 3.121 1.318 3.336.162.215 2.231 3.41 5.41 4.645 3.176 1.235 3.176.823 3.747.77.566-.054 1.91-.78 2.18-1.534.27-.753.27-1.4.188-1.534-.08-.135-.296-.215-.617-.378Z" />
  </svg>
)

const WhatsAppButton = () => {
  const phoneNumber = '923429713847'
  const message = encodeURIComponent(
    "Hi PhysioFix! I'd like to know more about your physiotherapy treatments."
  )
  const link = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-card flex items-center justify-center text-white animate-pulse-slow"
    >
      <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
    </motion.a>
  )
}

export default WhatsAppButton
