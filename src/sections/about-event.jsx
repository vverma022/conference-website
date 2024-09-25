import { motion } from 'framer-motion'

export function AboutEvent() {
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
          About the Event
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg mb-6"
        >
          TechConf 2024 is a premier technology conference bringing together industry leaders, innovators, and
          enthusiasts from around the world. Over the course of three days, attendees will have the opportunity to
          participate in keynote speeches, workshops, and networking events focused on the latest advancements in
          artificial intelligence, blockchain, cybersecurity, and more.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg"
        >
          Whether you're a seasoned professional or just starting your tech journey, TechConf 2024 offers
          something for everyone. Join us to learn, connect, and be inspired by the future of technology.
        </motion.p>
      </div>
    </motion.section>
  )
}