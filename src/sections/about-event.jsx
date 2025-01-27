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
          className="text-3xl font-semibold mb-8 text-center text-black"
        >
          ABOUT THE EVENT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg mb-6 text-black text-center"
        >
          School of Computing and Intelligent Systems, Manipal University Jaipur, India is organizing the International Conference on Smart and Distributed Computing (ICSDC-2025). The conference invites industry professionals, academics, and researchers to submit original, high-quality, and previously unpublished research papers. The event focuses on tackling research challenges within the fields of Smart and Distributed Computing.
          The conference will serve as a platform for presenting key research and literature in the fields of Engineering and Technology, with a particular emphasis on Distributed Computing. This gathering will enable leading experts to share their insights, offer guidance, and address participants’ questions and concerns.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-black text-center"
        >
          Whether you're a seasoned professional or just starting your tech journey, ICSDC 2025 offers
          something for everyone. Join us to learn, connect, and be inspired by the future of technology.
        </motion.p>
      </div>
    </motion.section>
  )
}