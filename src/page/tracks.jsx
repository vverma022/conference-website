
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaNetworkWired, 
  FaRobot, 
  FaShieldAlt, 
  FaLeaf,
  FaBolt 
} from "react-icons/fa";

export default function TracksPage() {
  const tracks = [
    {
      title: "Intelligent Power Electronics and Smart Energy Systems for Distributed Computing",
      icon: <FaBolt className="text-3xl text-black" />,
      topics: [
        "AI and Digital Twin Applications in Power Electronics and Smart Grids",
        "Vehicle-to-Grid (V2G) and Grid-to-Vehicle (G2V) Control Strategies",
        "High-Gain DC–DC Converters for Renewable and Distributed Energy Systems",
        "Cybersecurity and Privacy in Distributed Energy and Power Electronics Systems",
        "Automation and Intelligent Control for Smart and Sustainable Energy",
      ],
    },
    {
      title: "Emerging Trends in Smart Computing",
      icon: <FaLaptopCode className="text-3xl text-black" />,
      topics: [
        "Smart Computing Paradigms",
        "Algorithms for Smart Computing",
        "Artificial Intelligence and Machine Learning in Smart Computing",
        "Security and Privacy in Smart Computing",
        "Internet of Things and Cyber-Physical Systems",
        "Communication Technologies for Smart Computing",
        "Low Power Communication and Computing",
        "Interdisciplinary Approaches in Smart Computing",
      ],
    },
    {
      title: "Advances in Distributed and Decentralized Computing",
      icon: <FaNetworkWired className="text-3xl text-black" />,
      topics: [
        "Algorithms and Theoretical Foundations of Distributed Computing",
        "Scheduling and Resource Management in Distributed Systems",
        "Blockchain Technology and Smart Contracts",
        "Artificial Intelligence and Machine Learning in Distributed Systems",
        "Cloud Computing and Virtualization Technologies",
        "Mobile Computing and Edge Intelligence",
        "Federated Learning and Distributed AI",
      ],
    },
    {
      title: "Automation and Intelligent Systems",
      icon: <FaRobot className="text-3xl text-black" />,
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
      icon: <FaShieldAlt className="text-3xl text-black" />,
      topics: [
        "Security Challenges in Smart Systems",
        "Security Frameworks for Distributed Systems",
        "Blockchain Security and Cryptographic Protocols",
        "Trust Management in Smart and Distributed Systems",
        "Privacy-Preserving Technologies in Smart Computing",
        "Digital Forensics and Cybercrime Investigation",
      ],
    },
    {
      title: "Smart and Distributed Computing for Sustainability",
      icon: <FaLeaf className="text-3xl text-black" />,
      topics: [
        "Green Computing and Energy-Efficient Technologies",
        "Distributed Energy Systems and Microgrid Management",
        "Smart Energy Management and Optimization",
        "Climate Monitoring and Disaster Prediction using Distributed Systems",
        "Smart Waste Management and Recycling Technologies",
        "Distributed IoT for Traffic and Environmental Monitoring",
        "Artificial Intelligence and IoT for Sustainable Agriculture",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 gradientbg w-full mt-4"
    >
      <div className="container mx-auto px-8">
        <h1 className="text-3xl font-semibold mb-16 text-center text-black tracking-wide">
          CONFERENCE TRACKS
        </h1>
        <div className="grid gap-8 max-w-5xl mx-auto">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                {track.icon}
                <h2 className="text-2xl font-semibold text-black">
                  {track.title}
                </h2>
              </div>
              <ul className="list-disc pl-8 space-y-3">
                {track.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="text-gray-700 hover:text-black transition-colors duration-200">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}