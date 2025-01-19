import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Footer } from "@/sections/footer"
import { Cloud, Network, Brain, Stethoscope,Leaf, Bot } from "lucide-react"

export default function Component() {
  const tracks = [{
    title: "Distributed Computing",
    icon: Cloud,
    topics: [
      "Cloud Computing",
      "Fog Computing",
      "Edge Computing",
      "Grannular Computing",
      "Clusters and HPC",
      "Blockchains",
      "Distributed log management",
    ],
  },
  {
    title: "Constraint Networks",
    icon: Network,
    topics: [
      "IoT",
      "WSN",
      "IIoT",
      "5G/6G Communication",
      "Green Communication",
      "SDIoT",
    ],
  },
  {
    title: "Computational Intelligence in Distributed Computing",
    icon: Brain,
    topics: [
      "XAI in DC",
      "Trustworthy AI in DC",
      "Distributed ML and DL",
      "Federated Learning",
      "CI in service management",
    ],
  },
  {
    title: "Smart Computing in Biomedical and Healthcare",
    icon: Stethoscope,
    topics: [
      "Distributed healthcare systems for remote diagnostics and telemedicine",
      "Smart medical devices for patient monitoring in underserved areas",
      "Federated learning for secure and privacy-preserving healthcare data analysis",
      "AI-powered drug discovery and personalized medicine using distributed computing",
    ],
  },
  {
    title: "Smart Computing in Industrial Automation",
    icon: Bot,
    topics: [
      "Distributed AI for predictive maintenance in manufacturing",
      "IoT-enabled smart factories for energy and resource optimization",
      "Blockchain for tracking sustainable manufacturing practices",
      "Decentralized platforms for collaborative industrial innovation",
      "Digital Twin",
    ]
  },
    {
      title: "Smart Computing in Industrial Automation",
      icon: Bot,
      topics: [
        "Distributed AI for predictive maintenance in manufacturing",
        "IoT-enabled smart factories for energy and resource optimization",
        "Blockchain for tracking sustainable manufacturing practices",
        "Decentralized platforms for collaborative industrial innovation",
        "Digital Twin",
      ],
    },
    {
      title: "Smart Computing in Environmental Sustainability Planning",
      icon: Leaf,
      topics: [
        "Distributed energy systems and microgrids for renewable energy optimization",
        "Smart energy management using IoT and AI for energy efficiency",
        "Distributed systems for real-time climate monitoring and disaster prediction",
        "Smart waste management and recycling using edge computing and AI",
        "Blockchain for carbon credit tracking and sustainable resource usage",
        "Distributed IoT for traffic optimization and air quality monitoring",
        "Smart transportation systems powered by distributed AI",
        "Blockchain for decentralized identity management in smart cities",
        "IoT-based distributed systems for water quality monitoring",
        "Smart water usage analytics using AI for conservation efforts",
      ],
    },
  ]

  return (
    <div className="pt-16 flex flex-col min-h-screen w-full bg-gray-50">
    <div className="container mx-auto p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-black">Conference Tracks</h1>
      <p className="text-center m-3 text-black">These are the Conference tracks for the ICSDC 2025</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <Card key={index} className="flex flex-col h-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <track.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-black">
                Track {index + 1}: {track.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <ScrollArea className="h-full pr-4">
                <ul className="space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm flex items-center text-black">
                      <div className="w-2 h-2 rounded-full bg-primary/60 mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
     <Footer />
     </div>
  )
}