import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const committeeMembers = [
  { name: 'Dr. Arka Prokash Mazumdar', college: 'Malaviya National Institute of Technology Jaipur', image: 'https://mnit.ac.in/PortalProfile/images/faculty/mnitjas205.png?height=200&width=200' },
  { name: 'Dr. E.S Pilli', college: 'Malaviya National Institute of Technology Jaipur', image: 'https://mnit.ac.in/PortalProfile/images/faculty/mnitjas200.png?height=200&width=200' },
  { name: 'Dr. Deepak Ranjan Nayak', college: 'Malaviya National Institute of Technology Jaipur', image: 'https://mnit.ac.in/PortalProfile/images/faculty/mnitjas341.png?height=200&width=200' },
  { name: 'Dr. Debojyaty Banik', college: 'SRU', image: '/Bannik.JPG?height=200&width=200' },
  { name: 'Dr. Subrata Dutta', college: 'National Institute of Technology Jamshedpur', image: 'https://www.nitjsr.ac.in/backend/uploads/Faculty/CS106/profile/5fa86fc6-7ea5-4c7b-b017-e810746495e7.png?height=200&width=200' },
  { name: 'Dr. Geeta Sikka', college: 'National Institute of Technology Delhi', image: 'https://nitdelhi.ac.in/wp-content/uploads/2024/07/Geeta_Sikka-2.jpg?height=200&width=200' },
  { name: 'Dr. Isha Pathak', college: 'Indian Institute of Information Technology Kota.', image: 'https://files.iiitkota.ac.in/images/faculty/isha.webp?height=200&width=200' },
  { name: 'Dr. Atul Tripathi', college: 'Guru Gobind Singh Indraprastha University', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Dr. Bhavna Saini', college: 'Central University of Rajasthan', image: 'https://www.curaj.ac.in/sites/default/files/styles/150_150/public/bhav_0.jpg?itok=39-UWU8B?height=200&width=200' },
  { name: 'Dr. Ajay Nehra', college: 'Indian Institute of Information Technology Kota.', image: 'https://files.iiitkota.ac.in/images/faculty/ajaynehra.webp?height=200&width=200' },
  { name: 'Dr. Rajesh Ranjan', college: 'The LNM Institute of Information Technology Jaipur', image: '/rajesh.jpeg?height=200&width=200' },
  { name: 'Dr. Krishan Kumar Sethi', college: 'National Institute of Technology Patna', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Hql1qicAAAAJ&citpid=1?height=200&width=200' },

]

export function Speakers() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-8 text-center text-black"
        >
          SESSION CHAIRS
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center text-black"
            >
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.college}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}