import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const committeeMembers = [
  {name: 'Prof (Dr.) Abhishek Kumar', role: 'Post Doc, UCLM Spain, Asst. Director, CSE, UIEChandigarh University', image: '/keynote/Picture1.png'},
  {name: 'Dr. Avinash Panwar', role: 'Director Computer Centre, Head of Department, Department of Computer Science, Mohanlal Sukhadia University, Udaipur', image: '/keynote/Picture2.jpg'},
  {name: 'Dr. Suman Kumar Ghosh', role: 'York St. John University, London', image: '/keynote/Picture3.png'},
  {name: 'Prof (Dr.) Debajyoty Banik', role: 'Director (R&C), Anurag University', image: '/keynote/Picture4.jpg'},
  {name: 'Prof (Dr.) Surbhi Bhatia Khan', role: 'University of Salford, UK', image: '/keynote/Picture5.jpg'},

]

export function KeynoteSpeakers() {
  return (
    <section className="py-20 gradientbgt">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-black"
        >
          KEYNOTE SPEAKERS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <Avatar className="w-40 h-40 mx-auto mb-4 ring-4 ring-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <AvatarImage 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <motion.h3 
                className="text-2xl font-bold mb-3 text-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {member.name}
              </motion.h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xs mx-auto">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}