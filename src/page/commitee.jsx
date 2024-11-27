import { Footer } from '@/sections/footer'
import { Navbarwithout } from '@/sections/navbarwithout'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


export default function Commitee(){

    const TechnicalCommitteeMembers = [
        { name: 'Dr. Vinay Kumar', role: 'IIIT-Raipur', image: '' },
        { name: 'Dr. Subrata Dutta', role: 'NIT-JSR', image: '' },
        { name: 'Dr. N. D. Jana', role: 'NIT-DGP', image: '' },
        { name: 'Dr. Santosh Kumar Vipparthi', role: 'IIT-Ropar', image: '' },
        { name: 'Prof. K. K. Pattanaik', role: 'IIITM-Gwalior', image: '' },
        { name: 'Dr. R. K. Verma', role: 'IIIT-Lucknow', image: '' },
        { name: 'Dr. Shubhra Jain', role: 'IIIT-Lucknow', image: '' },
        { name: 'Dr. Swalpa Kumar Roy', role: 'AGEMC', image: '' },
        { name: 'Dr. Rana Mukherji', role: 'The ICFAI University Jaipur', image: '' },
        { name: 'Dr. Ruhul Amin', role: 'IIIT Naya Raipur', image: '' },
        { name: 'Dr. Arijit Nandi', role: 'Eurecat, Barcelona, Spain', image: '' },
        { name: 'Dr. Sanjit Kumar Roy', role: 'Uppsala University', image: '' },
        { name: 'Dr. Ravishankar Mehta', role: 'IIIT Bhagalpur', image: '' }
      ];
      const InternationalAdvisoryCommittee = [
        { name: 'Prof. Keshav Dahal', role: 'UWS', image: '' },
        { name: 'Dr. Ayodji Salau', role: 'Nigeria', image: '' },
        { name: 'Dr. Ting Tin Tin', role: 'INTI International University Malaysia', image: '' },
        { name: 'Dr. Pranay Bhardwaj', role: 'New York University, Abudhabi', image: '' },
        { name: 'Dr. Vikas Jaiman', role: 'PassApp-Berlin', image: '' },
        { name: 'Mr. Ankit Kumar Sharma', role: 'HCL Tech-California', image: '' }
      ];
      const nationalAdvisoryCommittee = [
        { name: 'Dr. Sudesh Kumar Prajapati', role: '', image: '' },
        { name: 'Prof. D. A. Khan', role: 'NIT-JSR', image: '' },
        { name: 'Mr. Kuldeep', role: 'NIC, Sikkim', image: '' },
        { name: 'Dr. Anshul Verma', role: 'BHU', image: '' },
        { name: 'Dr. Debojyaty Banik', role: 'SRU', image: '' },
        { name: 'Dr. Krishan Kumar Sethi', role: 'NIT Patna', image: '' },
        { name: 'Dr. Geeta Sikka', role: 'NIT-D', image: '' },
        { name: 'Dr. Atul Tripathi', role: 'GGSIU', image: '' },
        { name: 'Dr. Shailendra', role: 'Bennett University', image: '' },
        { name: 'Dr. Parul Tomar', role: 'YMCA', image: '' },
        { name: 'Dr. Krishan Pal Sharma', role: 'NIT Jalandhar', image: '' },
        { name: 'Dr. Djhanraj Rajesh', role: 'Symbiosis Pune', image: '' },
        { name: 'Dr. Vinod Kumar Singh', role: 'NIT-JSR', image: '' }
      ];

  return (
    <>
    <Navbarwithout />
    <div className='pt-4'>
    <h1 className="text-4xl font-bold mb-4 text-center">Commitee Members</h1>
    <p className="text-center m-3">These are the Commitee Members for the International Comfernce on Smart and Distributed Computing 2025</p>
    </div>
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Committee</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {TechnicalCommitteeMembers.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* International Advisory Committee Section */}
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">International Advisory Committee</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {InternationalAdvisoryCommittee.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* National Advisory Committee Section */}
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">National Advisory Committee</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {nationalAdvisoryCommittee.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
  )
}
