import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const committeeMembers = [
  { name: 'Dr. Jane Smith', role: 'Conference Chair', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Prof. John Doe', role: 'Program Director', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Ms. Emily Brown', role: 'Logistics Coordinator', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Mr. Michael Lee', role: 'Sponsorship Manager', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Dr. Jane Smith', role: 'Conference Chair', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Prof. John Doe', role: 'Program Director', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Ms. Emily Brown', role: 'Logistics Coordinator', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Mr. Michael Lee', role: 'Sponsorship Manager', image: '/placeholder.svg?height=200&width=200' },

]

export function Speakers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Speakers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}