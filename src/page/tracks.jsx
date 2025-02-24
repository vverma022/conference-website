import { FocusCards } from "@/components/ui/focus-cards";
import { Footer } from "../sections/footer";
import { motion } from "framer-motion";

export default function TracksPage() {
  const cards = [
    {
      title: "Emerging Trends in Smart Computing",
      src: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8MXwwfHx8MA%3D%3D",
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
      src: "https://plus.unsplash.com/premium_photo-1673709635882-3bd099a72359?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBoYXJkd2FyZXxlbnwwfDF8MHx8fDA%3D",
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
      src: "https://plus.unsplash.com/premium_photo-1682144827510-bbe3cd636253?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXV0b21hdGlvbnxlbnwwfDF8MHx8fDA%3D",
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
      src: "https://images.unsplash.com/photo-1719255418097-acf2f18306ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN5YmVyc2VjdXJpdHl8ZW58MHwxfDB8fHww",
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
      src: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfDF8MHx8fDA%3D",
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
    className="py-16 gradientbg w-full"
  >
     <div className="container mx-auto p-4 gradientbg min-h-screen">
     <h1 className="text-3xl font-semibold mb-6 text-center text-black">CONFERENCE TRACKS</h1>
        <FocusCards cards={cards} />
      </div>
  </motion.section>
  );
}