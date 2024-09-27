import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

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
          className="text-3xl font-bold mb-8 text-center"
        >
          Register for TechConf 2024
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="w-full md:w-1/3 max-w-sm"
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="list-disc list-inside">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2 text-sm">{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select {plan.name}</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
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
            <Select>
              <option value="">Select Ticket Type</option>
              <option value="early-bird">Early Bird</option>
              <option value="regular">Regular</option>
              <option value="vip">VIP</option>
            </Select>
          </div>
          <div className="mb-4">
            <Input type="text" placeholder="Company/Organization" />
          </div>
          <div className="mb-4">
            <Select>
              <option value="">Select Industry</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Complete Registration
          </Button>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Register