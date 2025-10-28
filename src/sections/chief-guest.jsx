import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// ChiefGuest renders a highlighted single-person section for the event's chief guest.
// It mirrors the visual language used by the Keynote section for consistency,
// but focuses on one distinguished guest.
export function ChiefGuest() {
  const chiefGuest = {
    name: 'Prof (Dr.) Parag Rughani',
    role: 'Dean, School of Cyber Security and Digital Forensics',
    image: '/cg.jpeg', // Fallback image from public; AvatarFallback will handle initials if missing
  }

  return (
    <section id="chiefguest" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-900"
        >
          CHIEF GUEST
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center rounded-2xl p-8 shadow-sm"
        >
          <div className="relative mb-6">
            <Avatar className="w-40 h-40 mx-auto mb-4 ring-4 ring-white shadow-2xl">
              <AvatarImage 
                src={chiefGuest.image}
                alt={chiefGuest.name}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                {chiefGuest.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-2 text-gray-800"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {chiefGuest.name}
          </motion.h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl">
            {chiefGuest.role}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ChiefGuest


