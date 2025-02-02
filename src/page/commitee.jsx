import { Footer } from '@/sections/footer'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'


export default function Commitee(){

    const TechnicalCommitteeMembers = [
        { 
          name: 'Dr. Vinay Kumar', 
          role: 'Indian Institute of Information Technology, Raipur', 
          image: 'https://www.iiitnr.ac.in/sites/default/files/faculty_photo/vkj.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Subrata Dutta', 
          role: 'National Institute of Technology, Jamshedpur', 
          image: 'https://www.nitjsr.ac.in/backend/uploads/Faculty/CS106/profile/5fa86fc6-7ea5-4c7b-b017-e810746495e7.png?height=200&width=200' 
        },
        { 
          name: 'Dr. N. D. Jana', 
          role: 'National Institute of Technology, Durgapur', 
          image: 'https://nitdgp.ac.in/uploads/386fff51724013622aad348f3146aca0.jpeg?height=200&width=200' 
        },
        { 
          name: 'Dr. Santosh Kumar Vipparthi', 
          role: 'Indian Institute of Technology, Ropar', 
          image: 'https://skvipparthi.github.io/img/skv.jpg?height=200&width=200' 
        },
        { 
          name: 'Prof. K. K. Pattanaik', 
          role: 'Indian Institute of Information Technology and Management, Gwalior', 
          image: 'https://iiitm.ac.in/images/demo/teachers/1679281910_KKPattanaik%20(2).jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. R. K. Verma', 
          role: 'Indian Institute of Information Technology, Lucknow', 
          image: 'https://iiitl.ac.in/wp-content/uploads/2021/08/Dr.-Rahul-Kr.-Verma-300x277.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Shubhra Jain', 
          role: 'Indian Institute of Information Technology, Lucknow', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=WRmdy3UAAAAJ&citpid=1?height=200&width=200' 
        },
        { 
          name: 'Dr. Swalpa Kumar Roy', 
          role: 'Advanced Global Education and Management Council (AGEMC)', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=1WVrFGwAAAAJ&citpid=1?height=200&width=200' 
        },
        { 
          name: 'Dr. Rana Mukherji', 
          role: 'The ICFAI University, Jaipur', 
          image: 'https://saiconference.com/Computing/Thumbnail/f7ab7bae-bd00-401b-bdc8-64206213538d?height=200&width=200' 
        },
        { 
          name: 'Dr. Ruhul Amin', 
          role: 'Indian Institute of Information Technology, Naya Raipur', 
          image: 'https://www.iiitnr.ac.in/sites/default/files/faculty_photo/ruhul_photo%20%281%29.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Arijit Nandi', 
          role: 'Eurecat, Barcelona, Spain', 
          image: '/Ajit.JPG?height=200&width=200' 
        },
        { 
          name: 'Dr. Sanjit Kumar Roy', 
          role: 'Uppsala University, Sweden', 
          image: 'https://mp.uu.se/image/full_image?img_id=993295477&t=1693816585303?height=200&width=200' 
        },
        { 
          name: 'Dr. Ravishankar Mehta', 
          role: 'Indian Institute of Information Technology, Bhagalpur', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=SDmfEg0AAAAJ&citpid=4?height=200&width=200' 
        }
      ];
      const InternationalAdvisoryCommittee = [
        { 
          name: 'Prof. Keshav Dahal', 
          role: 'University of the West of Scotland (UWS)', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yIkdopsAAAAJ&citpid=3?height=200&width=200' 
        },
        { 
          name: 'Dr. Ayodji Salau', 
          role: 'Nigeria', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=bvUoKrsAAAAJ&citpid=8?height=200&width=200' 
        },
        { 
          name: 'Dr. Ting Tin Tin', 
          role: 'INTI International University, Malaysia', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=0ZM3lGIAAAAJ&citpid=1?height=200&width=200' 
        },
        { 
          name: 'Dr. Pranay Bhardwaj', 
          role: 'New York University, Abu Dhabi', 
          image: '/Pranay.jpeg?height=200&width=200' 
        },
        { 
          name: 'Dr. Vikas Jaiman', 
          role: 'PassApp, Berlin', 
          image: 'https://vjaiman.gitlab.io/vikas_pic.jpg?height=200&width=200' 
        },
        { 
          name: 'Mr. Ankit Kumar Sharma', 
          role: 'HCL Technologies, California', 
          image: '/Ankit.JPG?height=200&width=200' 
        }
      ];
      const nationalAdvisoryCommittee = [
        { 
          name: 'Dr. Sudesh Kumar Prajapati', 
          role: 'Indira Gandhi National Tribal University, Amarkantak', 
          image: '/Sudesh.jpeg?height=200&width=200' 
        },
        { 
          name: 'Prof. D. A. Khan', 
          role: 'National Institute of Technology, Jamshedpur', 
          image: 'https://www.nitjsr.ac.in/backend/uploads/Faculty/CA104/profile/0c34d489-4cab-4aca-b8ce-8fb9ebc1de85.png?height=200&width=200' 
        },
        { 
          name: 'Mr. Kuldeep', 
          role: 'National Informatics Centre, Sikkim', 
          image: '' 
        },
        { 
          name: 'Dr. Anshul Verma', 
          role: 'Banaras Hindu University (BHU)', 
          image: 'https://bhu.ac.in/Content/Photos/Faculties/FA000043.jpeg?height=200&width=200' 
        },
        { 
          name: 'Dr. Debojyaty Banik', 
          role: 'Sri Ramachandra University (SRU)', 
          image: '/Bannik.JPG?height=200&width=200' 
        },
        { 
          name: 'Dr. Krishan Kumar Sethi', 
          role: 'National Institute of Technology, Patna', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Hql1qicAAAAJ&citpid=1?height=200&width=200' 
        },
        { 
          name: 'Dr. Geeta Sikka', 
          role: 'National Institute of Technology, Delhi', 
          image: 'https://nitdelhi.ac.in/wp-content/uploads/2024/07/Geeta_Sikka-2.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Atul Tripathi', 
          role: 'Guru Gobind Singh Indraprastha University (GGSIU)', 
          image: '' 
        },
        { 
          name: 'Dr. Shailendra', 
          role: 'Bennett University', 
          image: '' 
        },
        { 
          name: 'Dr. Parul Tomar', 
          role: 'J. C. Bose University of Science and Technology, YMCA', 
          image: 'https://jcboseust.irins.org/assets/profile_images/187152.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Krishan Pal Sharma', 
          role: 'National Institute of Technology, Jalandhar', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=QM9qltUAAAAJ&citpid=2?height=200&width=200' 
        },
        { 
          name: 'Dr. Djhanraj Rajesh', 
          role: 'Symbiosis International University, Pune', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=8t9sO-QAAAAJ&citpid=2?height=200&width=200' 
        },
        { 
          name: 'Dr. Binod Kumar Singh', 
          role: 'National Institute of Technology, Jamshedpur', 
          image: '/Binod.JPG?height=200&width=200' 
        }
      ];

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 gradientbg w-full"
  >
    <div className="pt-4">
      <h1 className="text-3xl font-semibold mb-4 text-center text-black">
        COMMITTEE MEMBERS
      </h1>
      <p className="text-center m-3 text-black">
        These are the Committee Members for the International Conference on Smart and Distributed Computing 2025
      </p>
    </div>
  
    {/* International Advisory Committee Section */}
    <section className="py-10 gradeintbgt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          INTERNATIONAL ADVISORY COMMITTEE
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {InternationalAdvisoryCommittee.map((member) => (
            <li key={member.name}>
              <span className="font-semibold">{member.name}</span> - {member.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  
    {/* National Advisory Committee Section */}
    <section className="py-10 gradeintbg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          NATIONAL ADVISORY COMMITTEE
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {nationalAdvisoryCommittee.map((member) => (
            <li key={member.name}>
              <span className="font-semibold">{member.name}</span> - {member.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  
    {/* Technical Committee Section */}
    <section className="py-10 gradeintbgt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          TECHNICAL COMMITTEE
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {TechnicalCommitteeMembers.map((member) => (
            <li key={member.name}>
              <span className="font-semibold">{member.name}</span> - {member.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  
    <Footer />
  </motion.section>
  )
}
