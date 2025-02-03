import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactUs() {
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
          Contact Us
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
      <div className="mb-4">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Person to Contact" />
          </SelectTrigger>
          <SelectContent>
            {people.map((person, index) => (
              <SelectItem key={index} value={person.email}>
                {person.name} - {person.email}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mb-4">
        <Input type="text" placeholder="Dr. Sunil Kumar" />
      </div>
      <div className="mb-4">
        <Input type="email" placeholder="kumar.sunil@jaipur.manipal.edu"/>
      </div>
      <div className="mb-4">
        <Input type="text" placeholder="Dr. Amit Kumar Sharma" />
      </div>
      <div className="mb-4">
        <Input type="email" placeholder="amit.sharma@jaipur.manipal.edu"/>
      </div>
      <div className="mb-4">
        <Input type="text" placeholder="Subject" />
      </div>
      <div className="mb-4">
        <Textarea placeholder="Your Message" rows={4} />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
        </motion.form>
      </div>
    </motion.section>
  )
}