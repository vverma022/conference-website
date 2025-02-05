import { Footer } from '@/sections/footer'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import { OrganizingCommittee } from '@/sections/organizing-committee';


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
          role: ' Alipurduar Govt. Engineering & Management College, Alipur, India', 
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
        },
        {
          name: 'Dr. Dhruba Joyti Kalita',
          role: 'Indian Institute of Technology Gandhinagar, Gandhinagar, India',
        },
        {
          name: 'Dr. Sk Md Obaidullah',
          role: 'Aliah University, Kolkata, India',
          image: '',
        },
        {
          name: 'Dr. Arunangshu Pal',
          role: 'ICFAI University, Tripura, India',
          image: '',
        },
        {
          name: 'Dr. Sandipan Dhar',
          role: 'Indian Institute of Technology, Bombay, India',
        },
        {
        name: 'Dr. Sanjay Kumar',
        role: 'SRM University AP, Amravati, India',
        image: '',
        },
      ];
      const InternationalAdvisoryCommittee = [
        {
       name: 'Dr. Shitharth Selvarajan',
        role:'Leeds Beckett University, Leeds, U.K.',
        image: '',

        },

        {
          name: 'Prof. Fatos Xhafa',
          role: 'Universitat Politècnica de Catalunya, Barcelona, Spain',
          image: '',
        },
        {
          name: 'Dr. Laia Subirats',
          role: 'Open University of Catalonia, Barcelona, Spain',
          image: '',
        },
        {
          name: 'Dr. Muhammad Fazal',
          role: 'Melbourne Institute of Technology, Australia',
          email: 'mfazal@mit.edu.au',
        },
        {
          name: 'Prof. Muna Elsadig',
          role: 'Princess Nourah bint Abdulrahman University, Riyadh, Saudi Arabia',
          email: 'Memohamedahmed@pnu.edu.sa',
        },
        {
          name: 'Mariyam Aysha Bivi',
          role: 'King Khalid University, Gregar, Abha 61421, Saudi Arabia',
          email: 'aysha@kku.edu.sa',
        },
        {
          name: 'Dr. Shakila Basheer',
          role: 'Princess Nourah bint Abdulrahman University, Riyadh, Saudi Arabia',
          email: 'sbbasheer@pnu.edu.sa',
        },
        {
          name: 'Dr. Hasmat Malik',
          role: 'Universiti Teknologi Malaysia (UTM), Malaysia',
          email: 'hasmat@utm.my, hasmat@fke.utm.my',
        },
        {
          name: 'Dr. Thippa Reddy Gadekallu',
          role: 'College of Information Science and Engineering, Jiaxing University, Jiaxing 314001, China',
          email: 'thippa@zhongda.cn, krish.chaitanya143@gmail.com',
        },
        {
          name: 'Prof. Jaejeung Kim',
          role: 'Department of Computer Science and Engineering, Chungnam National University, Daejeon, South Korea',
          email: 'jjkim@cnu.ac.kr',
        },
        {
          name: 'Dr. Saurabh Singh',
          role: 'Department of AI and Big Data, Woosong University, Daejeon, South Korea',
          email: 'singh.saurabh@wsu.ac.kr',
        },
        {
          name: 'Prof. Mohammed Abdulaziz Alsubhi',
          role: 'Department of Computer Science, University College in Umluj, University of Tabuk, Saudi Arabia',
          email: 'malsubhi@ut.edu.sa',
        },
        {
          name: 'Prof. Abdullatif Saleh Alfaqiri',
          role: 'Department of Computer, Applied College, Taibah University, Saudi Arabia',
          email: 'afaqiri@taibahu.edu.sa',
        },
        {
          name: 'Prof. Mohammad Zubair Khan',
          role: 'Department of Computer Science and Information, Taibah University, Madinah, Saudi Arabia',
          email: 'mkhanb@taibahu.edu.sa',
        },
        {
          name: 'Dr. Arfat Ahmad Khan',
          role: 'Department of Computer Science, College of Computing, Khon Kaen University, Thailand',
          email: 'arfatkhan@kku.ac.th',
        },
        {
          name: 'Dr. Adil Rasool',
          role: 'Associate Professor, Department of Computer, Bakhtar University, Kabul, Afghanistan',
          email: 'adilrasool@bakhtar.edu.af',
        },
        {
          name: 'Prof. Keshav Dahal',
          role: 'University of the West of Scotland (UWS), Paisley, Scotland',
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yIkdopsAAAAJ&citpid=3?height=200&width=200'
        },
        {
          name: 'Dr. Ting Tin Tin',
          role: 'INTI International University, Nilai, Malaysia',
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=0ZM3lGIAAAAJ&citpid=1?height=200&width=200'
        },
        {
          name: 'Dr. Pranay Bhardwaj',
          role: 'New York University, Abu Dhabi, UAE',
          image: '/Pranay.jpeg?height=200&width=200'
        },
        {
          name: 'Dr. Vikas Jaiman',
          role: 'PassApp, Berlin, Germany',
          image: 'https://vjaiman.gitlab.io/vikas_pic.jpg?height=200&width=200'
        },
        {
          name: 'Mr. Ankit Kumar Sharma',
          role: 'HCL Technologies, California, USA',
          image: '/Ankit.JPG?height=200&width=200'
        },
        {
          name: 'Dr. Dijana Capeska Bogatinoska',
          role: 'University for Information Science and Technology, Saint Paul the Apostle, Ohrid, Republic of North Macedonia',
          image: ''
        },
        {
          name: 'Dr. Hamurabi Gamboa Rosales',
          role: 'Universidad Autónoma de Zacatecas, Zacatecas, Mexico',
          image: ''
        },
        {
          name: 'Dr. Ladislav Polak',
          role: 'Brno University of Technology, Brno, Czech Republic',
          image: ''
        },
        {
          name: 'Dr. Edmar Candeia Gurjao',
          role: 'Federal University of Campina Grande (UFCG), Campina Grande, Brazil',
          image: ''
        },
        {
          name: 'Dr. Farid Nait-Abdesselam',
          role: 'Department of Computer Science, Paris Cité University, Paris, France',
          image: '',
        },
        {
          name: 'Dr. Suman Ghosh',
          role: 'Huawei Finland Research Center, Helsinki, Finland',
          image: '',
        },
        {
          name: 'Dr. Eleonora De Fillipi',
          role: 'University of Strasbourg, Strasbourg, France',
          image: '',
        },
        {
          name: 'Dr. Mihnea Tufis',
          role: 'Eurecat, Barcelona, Spain',
          image: '',
        },
        {
          name: 'Dr. Rohit Kumar',
          role: 'AstreZenica, Barcelona, Spain',
          image: '',
        },
        {
          name: 'Dr. Naveen Kumar Meena',
          role: 'Beca Limited, Sydney, Australia',
          image: '',
        },
        {
          name: 'Dr. Nishit Aman',
          role: 'Chulalongkorn University, Bangkok, Thailand',
          image: '',
        },
        {
          name: 'Dr. Vishal Mathur',
          role: 'American International University, Kuwait',
          image: '',
        },
      ];
      const nationalAdvisoryCommittee = [
        { 
          name: 'Dr. Sudesh Kumar Prajapati', 
          role: 'Indira Gandhi National Tribal University, Amarkantak, India', 
          image: '/Sudesh.jpeg?height=200&width=200' 
        },
        { 
          name: 'Prof. D. A. Khan', 
          role: 'National Institute of Technology, Jamshedpur, India', 
          image: 'https://www.nitjsr.ac.in/backend/uploads/Faculty/CA104/profile/0c34d489-4cab-4aca-b8ce-8fb9ebc1de85.png?height=200&width=200' 
        },
        { 
          name: 'Mr. Kuldeep', 
          role: 'National Informatics Centre, Sikkim, India', 
          image: '' 
        },
        { 
          name: 'Dr. Anshul Verma', 
          role: 'Banaras Hindu University (BHU), Varanasi, India', 
          image: 'https://bhu.ac.in/Content/Photos/Faculties/FA000043.jpeg?height=200&width=200' 
        },
        { 
          name: 'Dr. Debojyaty Banik', 
          role: 'Sri Ramachandra University (SRU), Chennai, India', 
          image: '/Bannik.JPG?height=200&width=200' 
        },
        { 
          name: 'Dr. Krishan Kumar Sethi', 
          role: 'National Institute of Technology, Patna, India', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=Hql1qicAAAAJ&citpid=1?height=200&width=200' 
        },
        { 
          name: 'Dr. Geeta Sikka', 
          role: 'National Institute of Technology, Delhi, India', 
          image: 'https://nitdelhi.ac.in/wp-content/uploads/2024/07/Geeta_Sikka-2.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Atul Tripathi', 
          role: 'Guru Gobind Singh Indraprastha University (GGSIU), Delhi, India', 
          image: '' 
        },
        { 
          name: 'Dr. Shailendra Pratap Singh', 
          role: 'Bennett University, Greater Noida, India', 
          image: '' 
        },
        { 
          name: 'Dr. Parul Tomar', 
          role: 'J. C. Bose University of Science and Technology, YMCA, Faridabad, India', 
          image: 'https://jcboseust.irins.org/assets/profile_images/187152.jpg?height=200&width=200' 
        },
        { 
          name: 'Dr. Krishan Pal Sharma', 
          role: 'National Institute of Technology, Jalandhar, India', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=QM9qltUAAAAJ&citpid=2?height=200&width=200' 
        },
        { 
          name: 'Dr. Djhanraj Rajesh', 
          role: 'Symbiosis International University, Pune, India', 
          image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=8t9sO-QAAAAJ&citpid=2?height=200&width=200' 
        },
        { 
          name: 'Dr. Binod Kumar Singh', 
          role: 'National Institute of Technology, Jamshedpur, India', 
          image: '/Binod.JPG?height=200&width=200' 
        },
        {name: 'Dr. Prasenjit Das',
        role: 'smartData Enterprises, Panchkula, India',
        image: '',
        },
        {name: 'Prof. Rashmi Agarwal',
        role: 'Manav Rachna University, Faridabad, India',
        image: '',
        },
        {
          name: 'Dr. Shobit Srivastava',
          role: 'Dr. Ram Manohar Lohia Avadh University, Ayodhya, India',
          image: '',
        },
        {
          name: 'Prof. Abhishek Pandey',
          role: 'Chandigarh University, Chandigarh, India',
          image: '',
        },
        {
          name: 'Dr. Geetanjali Rathee',
          role: 'Netaji Subhas Institute of Technology, New Delhi, India',
          email: 'geetanjali.rathee123@gmail.com',
        },
        {
          name: 'Dr. Sandeep Kumar Panda',
          role: 'ICFAI University, Hyderabad, India',
          email: 'sandeeppanda@ifheindia.org',
        },
        {
          name: 'Dr. Aditya Gupta',
          role: 'Thapar Institute of Engineering & Technology, Patiala, Punjab, India',
          email: 'aditya.gupta@thaper.edu',
        },
        {
          name: 'Dr. Vibha Jain',
          role: 'Chitkara University, Chandigarh, India',
          email: 'jvibha0@gmail.com',
        },
        {
          name: 'Dr. Monu Bhagat',
          role: 'India Institute of Technology Kharagpur, Kharagpur, India',
          email: 'monu98041@gmail.com',
        },
        {
          name: 'Dr. Saumitra Gangwar',
          role: 'Bennet University, Delhi, India',
          email: 'saumitragangwar@gmail.com',
        },
        {
          name: 'Prof. N. C. Barwar',
          role: 'MBM University, Jodhpur, India',
          email: 'ncbarwar@gmail.com',
        },
      ];

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 gradientbgt w-full"
  >
    <div className="pt-4">
      <h1 className="text-3xl font-semibold mb-4 text-center text-black">
        COMMITTEE MEMBERS
      </h1>
    </div>
  
    {/* International Advisory Committee Section */}
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-10 gradientbgt w-full"
  >
    <section className=" gradeintbg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          INTERNATIONAL ADVISORY COMMITTEE
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {InternationalAdvisoryCommittee.map((member) => (
            <li key={member.name}>
              <span className="font-semibold">{member.name}</span><span> </span>{member.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
    </ motion.section>
  
    {/* National Advisory Committee Section */}
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-10 gradientbg w-full"
  >
    <section className="gradeintbgt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          NATIONAL ADVISORY COMMITTEE
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {nationalAdvisoryCommittee.map((member) => (
            <li key={member.name}>
              <span className="font-semibold">{member.name}</span> {member.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
    </motion.section>
  
    {/* Technical Committee Section */}
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-10 gradientbgt w-full"
  >
    <section className="gradeintbg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          TECHNICAL COMMITTEE
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {TechnicalCommitteeMembers.map((member) => (
            <li key={member.name}>
              <span className="font-semibold">{member.name}</span> {member.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
    </motion.section>

    <OrganizingCommittee />
  
    <Footer />
  </motion.section>
  )
}
