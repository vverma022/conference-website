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
  { name: 'Dr. Somya Rakesh Goyal', role: 'Program Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/274.jpg?height=200&width=200' }, 
  { name: 'Mr. Aditya Narayan Hati', role: 'Program Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/645.jpg?height=200&width=200' },
  { name: 'Dr. Lal Pratap Verma', role: 'Technical Session Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/281.jpg' },
  { name: 'Dr. Arvind Dhaka ', role: 'Technical Session Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/317.jpg' },
  { name: 'Dr. Amit Chaurasia', role: 'Technical Session Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/280.jpg' },
  { name: 'Dr. Anshika Malsaria', role: 'Technical Session Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/291.jpg' },

  { name: 'Dr.Satyabrata Roy', role: 'Publication Chair', Position: 'CSE, Manipal University Jaipur, India', image: 'https://media.licdn.com/dms/image/v2/C5603AQHekYPAYtxmeg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1599676288947?e=2147483647&v=beta&t=xxVWomQkKTORd7CxUhkGF2k3FniC4nsphXfSCMVx1Qc' },
  {name: 'Dr. Arjun Singh',role:'Industry Chair', Position: 'CCE, Manipal University Jaipur', image: "https://jaipur.manipal.edu/admin/photo/3/faculty/16/143.jpg"},
  { name: 'Dr. Shalini Phatak', role: 'Publicity Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/312.jpg' },
  {name: 'Dr. Ghanshyam Raghuwanshi', role: 'Finance Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/270.jpg'},
  { name: 'Dr. Amit Kumar Sharma', role: 'Organizing Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/315.jpg' },
  { name: 'Dr. Vijay Shankar Sharma', role: 'Organizing Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/285.jpg' },
  { name: 'Dr. Sadineni Lakshminarayana', role: 'Organizing Co-Chair', Position: 'CCE, Manipal University Jaipur, India', image: 'https://jaipur.manipal.edu/admin/photo/3/faculty/16/309.jpg' },
]

export function OrganizingCommittee() {
  return (
    <section className="py-16 gradientbgt">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-8 text-center text-black"
        >
          ORGANIZING COMMITTEE
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              <h3 className="text-xl mb-2">{member.name}</h3>
              <h2 className="text-gray-600 ">{member.Position}</h2>
              <p className=''>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}