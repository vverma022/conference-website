import GlobeDemo from "./globe"
import { motion } from "framer-motion"


export default function LocationSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 gradientbgt"
    >
      <div className="container mx-auto px-4">
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-semibold mb-8 text-center text-black"
        >
          EVENT LOCATION
        </motion.h2>
    <div className="flex flex-col md:flex-row items-center justify-center gap-16">
      {/* Globe Section */}
      <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center">
        <GlobeDemo />
      </div>
      {/* Information Section */}
      <div className="w-full md:w-1/2 space-y-6">
  <h3 className="text-xl font-semibold text-black">
   ABOUT THE LOCATION
  </h3>
  <p className="text-black leading-relaxed">
    Nestled in the vibrant heart of Rajasthan, Manipal University Jaipur offers a harmonious blend of 
    state-of-the-art facilities and breathtaking scenic surroundings. As one of India's premier educational 
    institutions, it provides an ideal setting for engaging and inspiring conferences.
  </p>
  <div className="space-y-4">
    {/* Address */}
    <div className="flex items-start text-black">
      <svg
        className="w-5 h-5 mr-3 mt-1"
        fill="none"
        stroke="green"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0z"
        ></path>
      </svg>
      <span>
        <strong>ADDRESS:</strong> Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
      </span>
    </div>
  </div>
</div>
    </div>
  </div>
      </motion.section>
  )
}

