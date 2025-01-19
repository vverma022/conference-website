import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const plans = [
  {
    name: 'Early Bird',
    price: '$499',
    description: 'Limited time offer for early registrations',
    features: ['Access to all keynotes', 'Workshop participation', 'Networking events', 'Conference swag'],
  },
  {
    name: 'Regular',
    price: '$699',
    description: 'Standard conference registration',
    features: ['Access to all keynotes', 'Workshop participation', 'Networking events', 'Conference swag', 'Lunch included'],
  },
  {
    name: 'VIP',
    price: '$999',
    description: 'Premium conference experience',
    features: ['Access to all keynotes', 'Workshop participation', 'Exclusive VIP networking events', 'Premium conference swag', 'Lunch and dinner included', 'One-on-one sessions with speakers'],
  },
]

const  Register = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white w-full"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-black"
        >
          Register for ICSDC 2025
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <Input type="text" placeholder="Full Name" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Email Address" />
          </div>
          <div className="mb-4">
            <Input type="text" placeholder="Company/Organization" />
          </div>
          <Button disabled className="w-full relative hover:text-transparent">
        Opening Soon
    </Button>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Register