import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function EventLocation() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Event Location
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <div className="aspect-w-18 aspect-h-14">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914116!2d75.56265937549001!3d26.843855176688248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1731313661213!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="w-full md:w-1/2 md:pl-8"
          >
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 mr-2 text-primary" />
              <h3 className="text-xl font-semibold">Conference Venue</h3>
            </div>
            <p className="text-lg mb-4">
              Manipal Uinversity Jaipur
              <br />
              Dehmi Kalan
              <br />
              Jaipur, RJ 303007
            </p>
            <p className="text-gray-600">
              Located on the highway connecting Jaipur-Ajmer, Manipal University Jaipur is a beautiful campus with all the modern facilities. The campus is spread over 122 acres of land and is surrounded by lush greenery.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}