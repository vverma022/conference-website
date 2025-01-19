import { Footer } from '@/sections/footer'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


export default function Commitee(){

    const TechnicalCommitteeMembers = [
        { name: 'Dr. Vinay Kumar', role: 'IIIT-Raipur', image: 'https://www.iiitnr.ac.in/sites/default/files/faculty_photo/vkj.jpg?height=200&width=200' },
        { name: 'Dr. Subrata Dutta', role: 'NIT-JSR', image: 'https://www.nitjsr.ac.in/backend/uploads/Faculty/CS106/profile/5fa86fc6-7ea5-4c7b-b017-e810746495e7.png?height=200&width=200' },
        { name: 'Dr. N. D. Jana', role: 'NIT-DGP', image: 'https://nitdgp.ac.in/uploads/386fff51724013622aad348f3146aca0.jpeg?height=200&width=200' },
        { name: 'Dr. Santosh Kumar Vipparthi', role: 'IIT-Ropar', image: 'https://skvipparthi.github.io/img/skv.jpg?height=200&width=200' },
        { name: 'Prof. K. K. Pattanaik', role: 'IIITM-Gwalior', image: 'https://iiitm.ac.in/images/demo/teachers/1679281910_KKPattanaik%20(2).jpg?height=200&width=200' },
        { name: 'Dr. R. K. Verma', role: 'IIIT-Lucknow', image: 'https://iiitl.ac.in/wp-content/uploads/2021/08/Dr.-Rahul-Kr.-Verma-300x277.jpg?height=200&width=200' },
        { name: 'Dr. Shubhra Jain', role: 'IIIT-Lucknow', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=WRmdy3UAAAAJ&citpid=1?height=200&width=200' },
        { name: 'Dr. Swalpa Kumar Roy', role: 'AGEMC', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=1WVrFGwAAAAJ&citpid=1?height=200&width=200' },
        { name: 'Dr. Rana Mukherji', role: 'The ICFAI University Jaipur', image: 'https://saiconference.com/Computing/Thumbnail/f7ab7bae-bd00-401b-bdc8-64206213538d?height=200&width=200' },
        { name: 'Dr. Ruhul Amin', role: 'IIIT Naya Raipur', image: 'https://www.iiitnr.ac.in/sites/default/files/faculty_photo/ruhul_photo%20%281%29.jpg?height=200&width=200' },
        { name: 'Dr. Arijit Nandi', role: 'Eurecat, Barcelona, Spain', image: '' },
        { name: 'Dr. Sanjit Kumar Roy', role: 'Uppsala University', image: 'https://mp.uu.se/image/full_image?img_id=993295477&t=1693816585303?height=200&width=200' },
        { name: 'Dr. Ravishankar Mehta', role: 'IIIT Bhagalpur', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=SDmfEg0AAAAJ&citpid=4?height=200&width=200' }
      ];
      const InternationalAdvisoryCommittee = [
        { name: 'Prof. Keshav Dahal', role: 'UWS', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yIkdopsAAAAJ&citpid=3?height=200&width=200' },
        { name: 'Dr. Ayodji Salau', role: 'Nigeria', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=bvUoKrsAAAAJ&citpid=8?height=200&width=200' },
        { name: 'Dr. Ting Tin Tin', role: 'INTI International University Malaysia', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=0ZM3lGIAAAAJ&citpid=1?height=200&width=200' },
        { name: 'Dr. Pranay Bhardwaj', role: 'New York University, Abudhabi', image: '' },
        { name: 'Dr. Vikas Jaiman', role: 'PassApp-Berlin', image: 'https://vjaiman.gitlab.io/vikas_pic.jpg?height=200&width=200' },
        { name: 'Mr. Ankit Kumar Sharma', role: 'HCL Tech-California', image: '' }
      ];
      const nationalAdvisoryCommittee = [
        { name: 'Dr. Sudesh Kumar Prajapati', role: '', image: '' },
        { name: 'Prof. D. A. Khan', role: 'NIT-JSR', image: 'https://www.nitjsr.ac.in/backend/uploads/Faculty/CA104/profile/0c34d489-4cab-4aca-b8ce-8fb9ebc1de85.png?height=200&width=200' },
        { name: 'Mr. Kuldeep', role: 'NIC, Sikkim', image: '' },
        { name: 'Dr. Anshul Verma', role: 'BHU', image: 'https://bhu.ac.in/Content/Photos/Faculties/FA000043.jpeg?height=200&width=200' },
        { name: 'Dr. Debojyaty Banik', role: 'SRU', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=YKc7Kz0AAAAJ&citpid=8?height=200&width=200' },
        { name: 'Dr. Krishan Kumar Sethi', role: 'NIT Patna', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Hql1qicAAAAJ&citpid=1?height=200&width=200' },
        { name: 'Dr. Geeta Sikka', role: 'NIT-D', image: 'https://nitdelhi.ac.in/wp-content/uploads/2024/07/Geeta_Sikka-2.jpg?height=200&width=200' },
        { name: 'Dr. Atul Tripathi', role: 'GGSIU', image: '' },
        { name: 'Dr. Shailendra', role: 'Bennett University', image: '' },
        { name: 'Dr. Parul Tomar', role: 'YMCA', image: 'https://jcboseust.irins.org/assets/profile_images/187152.jpg?height=200&width=200' },
        { name: 'Dr. Krishan Pal Sharma', role: 'NIT Jalandhar', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=QM9qltUAAAAJ&citpid=2?height=200&width=200' },
        { name: 'Dr. Djhanraj Rajesh', role: 'Symbiosis Pune', image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=8t9sO-QAAAAJ&citpid=2?height=200&width=200' },
        { name: 'Dr. Vinod Kumar Singh', role: 'NIT-JSR', image: '' }
      ];

  return (
    <div className="pt-16 flex flex-col min-h-screen w-full bg-white">
    <div className='pt-4'>
    <h1 className="text-4xl font-bold mb-4 text-center text-black">Commitee Members</h1>
    <p className="text-center m-3 text-black">These are the Commitee Members for the International Comfernce on Smart and Distributed Computing 2025</p>
    </div>
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Technical Committee</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {TechnicalCommitteeMembers.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* International Advisory Committee Section */}
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">International Advisory Committee</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {InternationalAdvisoryCommittee.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
              <p className="text-gray-600 ">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* National Advisory Committee Section */}
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">National Advisory Committee</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {nationalAdvisoryCommittee.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}
