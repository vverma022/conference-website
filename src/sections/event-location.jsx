import { motion } from "framer-motion";
import GlobeDemo from "../components/globe";

export function EventLocation() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 gradientbgt"
  >
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-semibold mb-8 text-black"
      >
        EVENT LOCATION
      </motion.h2>
  
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Globe Section */}
        <div className="w-full md:w-1/2 h-[400px] flex items-center justify-center">
          <GlobeDemo />
        </div>
  
        {/* Information Section */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h3 className="text-2xl font-semibold text-black">ABOUT<span className="text-orange-400"> MANIPAL </span></h3>
          <p className="text-black leading-relaxed">
  Nestled in the vibrant landscape of Rajasthan, Manipal University Jaipur (MUJ) blends tradition with modernity, standing as a beacon of innovation and excellence. Spanning 122 acres of architectural brilliance, the university fosters creativity, inquiry, and entrepreneurship. With a global perspective, MUJ offers diverse programs across engineering, management, law, design, sciences, and humanities, shaping future leaders through interdisciplinary learning and cutting-edge research.
</p>

<p className="text-black leading-relaxed">
  MUJ’s state-of-the-art laboratories, futuristic incubation centers, and dynamic cultural ecosystem create a thriving community of innovators and change-makers. Rooted in academic excellence and driven by limitless possibilities, MUJ is more than an institution—it’s an experience that inspires, transforms, and redefines the future.
</p>
          {/* Address */}
          <div className="flex items-start text-black">
            <svg
              className="w-5 h-5 mr-2 mt-1"
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
  </motion.section>
  )
}