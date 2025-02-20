import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import backgroundImage from '../assets/Manipal.jpeg'
import Video from '../assets/mujvideo.mp4'


export function HeroSection() {
  const handleScrollToRegister = () => {
    const section = document.getElementById('register');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen flex items-center justify-center text-center text-white w-full"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0 w-full"
      >
        <video
    className="absolute inset-0 w-full h-full object-cover"
    src={Video}
    autoPlay
    loop
    muted
    playsInline
    poster={backgroundImage} // Fallback image
  >
    Your browser does not support the video tag.
  </video>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10 w-full" />
      <div className="relative z-20 max-w-4xl mx-auto px-4 w-full">
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-5xl md:text-4xl font-bold mb-4"
        >
          ICSDC 2025
        </motion.h2> */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl sm:text-5xl md:text-4xl font-semibold mb-4"
        >
          International Conference on Smart and Distributed Computing (ICSDC 2025)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4"
        >
          MANIPAL UNIVERSITY JAIPUR
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="sm:text-lg md:text-lg font-semibold mb-8"
        >
         31 October - 1 November 2025
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* <Button size="lg" disable variant="outline" className="text-black" >
      Registration Soon
    </Button> */}
        </motion.div>
      </div>
    </motion.section>
  )
}