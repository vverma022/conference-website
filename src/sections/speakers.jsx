import { color, motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const committeeMembers = [
  {name: 'Prof. Surbhi Bhatia Khan', college: 'University of Salford, Manchester, U.K.', image: '/Surbhipicture-2.jpg' },
  { name: 'Dr. Arka Prokash Mazumdar', college: 'Malaviya National Institute of Technology, Jaipur, India', image: 'https://mnit.ac.in/PortalProfile/images/faculty/mnitjas205.png?height=200&width=200' },
  {name: 'Dr. Satyendra Singh Chouhan', college: 'Malaviya National Institute of Technology, Jaipur, India', image: '/ssc.jpeg' },
  {name: 'Dr. Dinesh Kumar Tyagi', college: 'Malaviya National Institute of Technology, Jaipur, India', image: '/dkt.jpeg' },
  { name: 'Dr. E.S. Pilli', college: 'Malaviya National Institute of Technology, Jaipur, India', image: 'https://mnit.ac.in/PortalProfile/images/faculty/mnitjas200.png?height=200&width=200' },
  { name: 'Dr. Debojyaty Banik', college: 'Anurag University, Hyderabad, India', image: '/Bannik.JPG?height=200&width=200' },
  { name: 'Dr. Subrata Dutta', college: 'National Institute of Technology Jamshedpur, Jamshedpur, India', image: 'https://www.nitjsr.ac.in/backend/uploads/Faculty/CS106/profile/5fa86fc6-7ea5-4c7b-b017-e810746495e7.png?height=200&width=200' },
  { name: 'Dr. Geeta Sikka', college: 'National Institute of Technology Delhi, Delhi, India', image: 'https://nitdelhi.ac.in/wp-content/uploads/2024/07/Geeta_Sikka-2.jpg?height=200&width=200' },
  { name: 'Dr. Isha Pathak', college: 'Indian Institute of Information Technology Kota, Kota, India', image: 'https://files.iiitkota.ac.in/images/faculty/isha.webp?height=200&width=200' },
  { name: 'Dr. Atul Tripathi', college: 'Guru Gobind Singh Indraprastha University, Delhi, India', image: '/atul.jpeg?height=200&width=200' },
  { name: 'Dr. Bhavna Saini', college: 'Central University of Rajasthan, Ajmer, India', image: 'https://www.curaj.ac.in/sites/default/files/styles/150_150/public/bhav_0.jpg?itok=39-UWU8B?height=200&width=200' },
  { name: 'Dr. Ajay Nehra', college: 'Indian Institute of Information Technology Kota, Kota, India', image: 'https://files.iiitkota.ac.in/images/faculty/ajaynehra.webp?height=200&width=200' },
  { name: 'Dr. Rajesh Ranjan', college: 'The LNM Institute of Information Technology Jaipur, Jaipur, India', image: '/random.jpeg?height=200&width=200' },
  { name: 'Dr. Krishan Kumar Sethi', college: 'National Institute of Technology Patna, Patna, India', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Hql1qicAAAAJ&citpid=1' },
  
]

export function Speakers() {
  return (
    <section className="py-20 gradientbg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-black"
        >
          SESSION CHAIRS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <Avatar className="w-36 h-36 mx-auto mb-4 ring-4 ring-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <AvatarImage 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-xl font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <motion.h3 
                className="text-lg font-bold mb-2 text-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {member.name}
              </motion.h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.college}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}