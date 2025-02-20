import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Footer } from "@/sections/footer"
import { Cloud, Lightbulb,Shield, Leaf , Rocket } from "lucide-react"
import { motion } from "framer-motion"

export default function Component() {
  const tracks = [
    {
      title: "Emerging Trends in Smart Computing",
      icon: Lightbulb,
      topics: [
        "Smart Computing Paradigms",
        "Algorithms for Smart Computing",
        "Artificial Intelligence and Machine Learning in Smart Computing",
        "Security and Privacy in Smart Computing",
        "Internet of Things and Cyber-Physical Systems",
        "Communication Technologies for Smart Computing",
        "Low Power Communication and Computing",
        "Interdisciplinary Approaches in Smart Computing"
      ]
    },
    {
      title: "Advances in Distributed and Decentralized Computing",
      icon: Cloud,
      topics: [
        "Algorithms and Theoretical Foundations of Distributed Computing",
        "Scheduling and Resource Management in Distributed Systems",
        "Blockchain Technology and Smart Contracts",
        "Artificial Intelligence and Machine Learning in Distributed Systems",
        "Cloud Computing and Virtualization Technologies",
        "Mobile Computing and Edge Intelligence",
        "Federated Learning and Distributed AI"
      ]
    },
    {
      title: "Automation and Intelligent Systems",
      icon: Rocket,
      topics: [
        "Industry 5.0 and Cyber-Physical Systems",
        "Artificial Intelligence in Healthcare and Medical Systems",
        "Smart Agriculture and Precision Farming",
        "Smart Cities and Intelligent Urban Systems",
        "Vehicular Networks and Autonomous Systems",
        "Digital Twin Technologies for Automation"
      ]
    },
    {
      title: "Security, Privacy, and Trust in Smart & Distributed Systems",
      icon: Shield,
      topics: [
        "Security Challenges in Smart Systems",
        "Security Frameworks for Distributed Systems",
        "Blockchain Security and Cryptographic Protocols",
        "Trust Management in Smart and Distributed Systems",
        "Privacy-Preserving Technologies in Smart Computing",
        "Digital Forensics and Cybercrime Investigation"
      ]
    },
    {
      title: "Smart and Distributed Computing for Sustainability",
      icon: Leaf,
      topics: [
        "Green Computing and Energy-Efficient Technologies",
        "Distributed Energy Systems and Microgrid Management",
        "Smart Energy Management and Optimization",
        "Climate Monitoring and Disaster Prediction using Distributed Systems",
        "Smart Waste Management and Recycling Technologies",
        "Distributed IoT for Traffic and Environmental Monitoring",
        "Artificial Intelligence and IoT for Sustainable Agriculture"
      ]
    }
  ]

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 gradientbg w-full"
  >
    <div className="container mx-auto p-4 gradientbg min-h-screen">
      <h1 className="text-3xl font-semibold mb-4 text-center text-black">CONFERENCE TRACKS</h1>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <Card key={index} className="flex flex-col h-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <track.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg text-black">
                Track {index + 1}: {track.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-auto overflow-y-auto">
                <ul className="space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm flex items-center text-black">
                      <div className="w-2 h-2 rounded-full bg-primary/60 mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
         
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
     <Footer />
     </motion.section>
  )
}