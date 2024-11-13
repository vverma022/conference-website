import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Footer } from "@/sections/footer"
import { Cloud, Network, Brain, Stethoscope,Leaf, Bot } from "lucide-react"

export default function Component() {
  const tracks = [
    {
      title: "Distributed Computing",
      icon: Cloud,
      topics: [
        "Cloud Computing",
        "Fog Computing",
        "Edge Computing",
        "Grannular",
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
        "Industry 5.0",
        "5G/6G Communication",
        "Green Communication",
        "SDIoT",
      ],
    },
    {
      title: "Computational Intelligent in DC",
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
      title: "DC in Biomedical and Healthcare",
      icon: Stethoscope,
      topics: [
        "Biomedical SP and instrumentation",
        "Wearable sensors and healthcare monitoring",
        "healthcare informatics",
        "Drug design",
        "Digital twin in healthcare",
      ],
    },
    {
      title: "Automation",
      icon: Bot,
      topics: [
        "Vehicular communication",
        "UAV / UWV / Swarm",
        "Robotics",
        "Industrial Automation",
        "Digital Twin",
      ],
    },
    {
      title: "DC in SDG",
      icon: Leaf,
      topics: ["Sustainable Development Goals"],
    },
  ]

  return (
    <>
    <div className="container mx-auto p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">Conference Tracks</h1>
      <p className="text-center m-3">These are the Conference tracks for the ICSDC 2025</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <Card key={index} className="flex flex-col h-[300px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <track.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">
                Track {index + 1}: {track.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <ScrollArea className="h-full pr-4">
                <ul className="space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm flex items-center">
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
     </>
  )
}