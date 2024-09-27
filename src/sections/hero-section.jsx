import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import backgroundImage from '../assets/bg.jpg'


export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen flex items-center justify-center text-center text-white w-full"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0 w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10 w-full" />
      <div className="relative z-20 max-w-4xl mx-auto px-4 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          TechConf 2024
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl mb-8"
        >
          Join us for the most innovative tech conference of the year
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button size="lg" variant="default">
            Register Now
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}