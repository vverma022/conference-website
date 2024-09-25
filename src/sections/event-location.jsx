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
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1628614993851!5m2!1sen!2sus"
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
              TechConf Center
              <br />
              123 Innovation Street
              <br />
              New York, NY 10001
            </p>
            <p className="text-gray-600">
              Located in the heart of New York City, the TechConf Center offers state-of-the-art facilities and
              easy access to public transportation, hotels, and restaurants.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}