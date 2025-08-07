import { motion } from 'framer-motion'
import CRCLogo from '../assets/CRC_Press_Logo-image-removebg-preview.png'
import TaylorFrancisLogo from '../assets/taylor-and-francis-group-vector-logo-removebg-preview.png'

export function PublicationPartners() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white gradientbgt"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-semibold mb-8 text-center text-black"
        >
          PUBLICATION PARTNERS
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center"
          >
            <img
              src={CRCLogo}
              alt="CRC Press Logo"
              className="h-24 md:h-32 object-contain"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">CRC Press</p>
          </motion.div>

          {/* Taylor & Francis Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center"
          >
            <img
              src={TaylorFrancisLogo}
              alt="Taylor & Francis Group Logo"
              className="h-24 md:h-32 object-contain"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">Taylor & Francis Group</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
