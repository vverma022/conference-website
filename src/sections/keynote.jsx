import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const committeeMembers = [
  { name: 'Dr. Debasis Das', role: 'IIT-Jodhpur', image: 'https://typeset-prod-media-server.s3.amazonaws.com/author-images/debasis-das-2/fbff7bd1-5d7a-4182-a098-60356b8d1eb0/author.webp?height=200&width=200' },
  { name: 'Prof. D. P. Vidyarthi', role: 'JNU', image: 'https://www.jnu.ac.in/sites/default/files/styles/medium/public/faculty_images/dpv.png?itok=O0TET7Jh?height=200&width=200' },
  { name: 'Dr. Gaurav Somani', role: 'CURAJ', image: 'https://lh5.googleusercontent.com/UBLZUwIuUx-64G5JaPk6uy3XKIQsbPKhfMphNplXogs0ZmVO-6f8mfLUlWFMHJqc1TF8D04okrZ07AdvEVRYW5GRPHJknYDmm4oqZjoRnMnAq84KKJ8jF-nTzpBjlKJfTQ=w1280?height=200&width=200' },

]

export function KeynoteSpeakers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Keynote Speakers
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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