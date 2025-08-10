import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const committeeMembers = [
  { name: 'Sh. S. Vaitheeswaran', role: 'Chief Patron', Position: 'Chairperson, Manipal University Jaipur, India', image: 'https://icicv.co.in/wp-content/uploads/2023/08/Mr.-S.-Vaitheeswaran.jpg?height=200&width=200' },
  { name: 'Prof. N. N. Sharma', role: 'Patron', Position: 'President, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/img/N%20N%20Sharma.png?height=200&width=200' },
  { name: 'Prof. Karunakar Kotegar A', role: 'Co-Patron', Position: 'Pro-President, Manipal University Jaipur, India', image: 'https://www.manipal.edu/content/dam/manipal/mu/mit/images/computer_applications_mit/KK.jpg.transform/manipal-edu-transform-width-height-528px/image.jpg?height=200&width=200' },
  { name: 'Prof. Amit Soni', role: 'Co-Patron', Position: 'Registrar, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/23/273.jpg?height=200&width=200' },
  { name: 'Prof. Kuldip Singh Sangwan', role: 'General Chair', Position: 'Dean FoE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/foe/img/Dr%20Kuldip%20Singh.jpg?height=200&width=200' },
  { name: 'Prof. Roheet Bhatnagar', role: 'General Co-Chair', Position: 'Associate Dean, SCSE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/12/151.jpg?height=200&width=200' },
  { name: 'Prof. Vijaypal Singh Dhaka', role: 'General Co-Chair', Position: 'Professor & Dean (Quality & Accreditation), Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/133.jpg' },
  { name: 'Prof. Sunil Kumar', role: 'Program Chair', Position: 'HoD CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/135.jpg?height=200&width=200' },
  { name: 'Mr. Aditya Narayan Hati', role: 'Convenor', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/645.jpg?height=200&width=200' },
  { name: 'Dr. Pramod Singh Rathore', role: 'Convenor', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/301.jpg' },
  { name: 'Dr. Amit Kumar Sharma', role: 'Organizing Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/315.jpg' },
  { name: 'Dr. Preeti Narooka', role: 'Organizing Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/13/89.jpg?height=200&width=200' },
  { name: 'Dr. Amit Chaurasia', role: 'Organising Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/280.jpg' },
  { name: 'Dr. Arvind Dhaka', role: 'Technical Session Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/317.jpg' },
  { name: 'Dr. Lal Pratap Verma', role: 'Technical Session Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/281.jpg' },
  { name: 'Dr. Sandeep Sharma', role: 'Publication Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/292.jpg' },
  { name: 'Dr. Vijay Shankar Sharma', role: 'Publication Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/285.jpg' },
  { name: 'Dr. Arjun Singh', role: 'Industry Chair', Position: 'CCE, Manipal University Jaipur, India', image: "https://jaipur.manipal.edu/admin/photo/3/faculty/16/143.jpg"},
  { name: 'Dr. Ghanshyam Raghuwanshi', role: 'Finance Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/270.jpg'},
  { name: 'Dr. Shalini Pathak', role: 'Publicity Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/312.jpg' },
  { name: 'Dr. Somya Rakesh Goyal', role: 'Publicity Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/274.jpg?height=200&width=200' },
  { name: 'Mr. Vivek Sharma', role: 'Transport and Logistics Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/278.jpg' }
]

export function OrganizingCommittee() {
  return (
    <section className="py-20 gradientbgt">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-black"
        >
          ORGANIZING COMMITTEE
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-white shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <AvatarImage 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
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
              <p className="text-gray-600 text-sm leading-relaxed mb-1">
                {member.Position}
              </p>
              <p className="text-orange-600 font-semibold text-xs">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}