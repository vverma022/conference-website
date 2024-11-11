import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const committeeMembers = [
  { name: 'Prof. Vijaypal Singh Dhaka', role: 'Program Chair',Position: 'Director of SCIS, MUJ',image: 'https://jaipur.manipal.edu/foe/img/vs-dhaka.jpg?height=200&width=200' },
  { name: 'Prof. Sunil Kumar', role: 'Program Co-Chair',Position: 'HoD of CCE, MUJ', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/135.jpg?height=200&width=200' },
  { name: 'Dr. Kuldip Singh Sangwan', role: 'General Chair',Position: 'Dean of FoE, MUJ', image: 'https://jaipur.manipal.edu/foe/img/Dr%20Kuldip%20Singh.jpg?height=200&width=200' },
  { name: 'Dr. Anil Kumar', role: 'Chief Patron',Position: 'Chairperson, MUJ', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Dr. Anil Kumar', role: 'Patron',Position: 'Persident, MUJ', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Dr. Anil Kumar', role: 'Co-Patron',Position: 'Pro-President, MUJ', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Dr. Anil Kumar', role: 'Co-Patron',Position: 'Registrar, MUJ', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Mr. Abhishek Narwaria', role: 'Convener',Position: 'Asst Professor in CCE, MUJ', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/311.jpg?height=200&width=200' },
  { name: 'Mr. Aditya Narayan Hati', role: 'Convener',Position: 'Asst Professor in CCE, MUJ', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/645.jpg?height=200&width=200' },
  { name: 'Dr. Somya Rakesh Goyal', role: 'Convener',Position: 'Asst Professor in CCE, MUJ', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/274.jpg?height=200&width=200' },

  
]

export function OrganizingCommittee() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Organizing Committee
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              <h2 className="text-gray-600 font-semibold">{member.Position}</h2>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}