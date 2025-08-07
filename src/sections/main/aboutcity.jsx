import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const jaipurInfo = [
    {
        image: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW1iZXIlMjBGb3J0fGVufDB8fDB8fHww",
        title: "AMBER FORT",
        description:
          "Amber Fort, located 11 km from Jaipur, is an architectural masterpiece that showcases a blend of Rajput and Mughal styles. Built with red sandstone and marble, the fort is known for its majestic halls, like the Diwan-e-Aam (Hall of Public Audience) and Diwan-e-Khas (Hall of Private Audience). The Sheesh Mahal (Hall of Mirrors) is particularly captivating, with its intricate mirror work that reflects light to illuminate the entire room. Visitors can also enjoy an elephant ride up the hill or attend the mesmerizing Light and Sound Show, which narrates the fort's rich history.",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1661901647310-4deafc6f29a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGF3YSUyME1haGFsfGVufDB8fDB8fHww",
        title: "HAWA MAHAL",
        description:
          "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is a five-story pink sandstone structure designed to resemble the crown of Lord Krishna. Its 953 intricately designed windows, or jharokhas, were created to allow royal ladies to observe street festivals and daily life while maintaining their privacy. The design ensures a natural air conditioning effect, keeping the interiors cool even during the summer. The palace is an architectural marvel and a symbol of Jaipur's unique heritage, best viewed in the early morning when the sunlight bathes its façade.",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1691031430107-79076cba9d5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eSUyMHBhbGFjZSUyMGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
        title: "CITY PALACE",
        description:
          "Situated in the heart of Jaipur, the City Palace complex is a splendid example of regal opulence. Built by Maharaja Sawai Jai Singh II, it comprises a series of courtyards, gardens, and buildings. Key attractions include the Chandra Mahal, which houses a museum with royal artifacts, and Mubarak Mahal, known for its exquisite textiles and costumes. The palace also features intricately carved gates, such as the Peacock Gate, and offers a glimpse into the grandeur of Rajasthan's royal history. Visitors can also enjoy stunning views of the city from the palace's upper levels.",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1697730309688-cc2a3a573494?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFudGFyJTIwbWFudGFyfGVufDB8fDB8fHww",
        title: "JANTAR MANTAR",
        description:
          "Built by Maharaja Sawai Jai Singh II in 1734, Jantar Mantar is an astronomical observatory and a UNESCO World Heritage Site. The site features a collection of 19 architectural instruments, including the world's largest stone sundial, the Samrat Yantra. These instruments were designed to measure time, predict eclipses, and observe celestial phenomena with remarkable precision. Jantar Mantar showcases the scientific advancements of its time and offers visitors a fascinating insight into the interplay of astronomy, mathematics, and architecture.",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1697730296129-eb26df35b40b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmFoYXJnYXJoJTIwRm9ydHxlbnwwfHwwfHx8MA%3D%3D",
        title: "NAHARGARH FORT",
        description:
          "Nahargarh Fort, meaning 'Abode of Tigers,' was built in 1734 by Maharaja Sawai Jai Singh II. Perched on the Aravalli Hills, it served as a retreat for the royal family and a defense fortification. The fort's architecture includes ornate structures like the Madhavendra Bhavan, a royal residence with interconnected rooms and frescoes. Visitors flock here for its panoramic views of Jaipur, particularly at sunset. Today, it is a popular picnic spot and an iconic landmark that captures the essence of the city's history and scenic beauty.",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1697729736491-dc377241a0ec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Sm9oYXJpJTIwQmF6YWFyJTIwYW5kJTIwQmFwdSUyMEJhemFhcnxlbnwwfHwwfHx8MA%3D%3D",
        title: "JOHARI BAZAAR & BAPU BAZAAR",
        description:
          "Jaipur's bustling bazaars are a sensory delight, offering a glimpse into the city's vibrant culture. Johari Bazaar is a paradise for jewelry lovers, featuring handcrafted gold and silver ornaments, precious gemstones, and traditional kundan and meenakari designs. Bapu Bazaar is known for its colorful textiles, leather goods, and mojari footwear. The bazaars also offer an array of handicrafts, souvenirs, and traditional Rajasthani items. Exploring these markets is a must for visitors looking to experience Jaipur's artistry, craftsmanship, and lively atmosphere.",
      },
]

export default function JaipurInfo() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % jaipurInfo.length)
    }, 10000) // Change content every 10 seconds
    return () => clearInterval(interval)
  }, [])

  const handlePrevious = () => {
    setActiveIndex((current) => (current - 1 + jaipurInfo.length) % jaipurInfo.length)
  }

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % jaipurInfo.length)
  }

  return (
    <div className="w-full py-16 gradientbgt">
                  <h1 className="text-3xl font-semibold mb-12 text-center text-black">
        ABOUT JAIPUR
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl mx-auto px-4">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
          <h2 className="text-3xl font-semibold mb-6 text-center bg-clip-text text-black">
            {jaipurInfo[activeIndex].title}
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            {jaipurInfo[activeIndex].description}
          </p>
          <div className="flex justify-center mt-8 gap-6">
            <Button 
              onClick={handlePrevious} 
              variant="outline" 
              size="icon"
              className="hover:bg-pink-50 transition-colors duration-300 border-pink-200 hover:border-pink-300"
            >
              <ChevronLeft className="h-5 w-5 text-pink-600" />
            </Button>
            <Button 
              onClick={handleNext} 
              variant="outline" 
              size="icon"
              className="hover:bg-pink-50 transition-colors duration-300 border-pink-200 hover:border-pink-300"
            >
              <ChevronRight className="h-5 w-5 text-pink-600" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-[1.02] duration-300">
            <img
              src={jaipurInfo[activeIndex].image || "/placeholder.svg"}
              alt={jaipurInfo[activeIndex].title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

