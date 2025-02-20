import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"
import { motion } from "framer-motion"


const conferenceDates = [
  { date: "June 15", day: "Mon" },
  { date: "June 16", day: "Tue" },
  { date: "June 17", day: "Wed" },
  { date: "June 18", day: "Thu" },
]

export default function ConferenceDates() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 gradientbg"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-semibold mb-8 text-center text-black"
        >
          DATES
        </motion.h2>
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 animate-scroll-horizontal flex">
          {conferenceDates.concat(conferenceDates).map((item, index) => (
            <Card key={index} className="flex-shrink-0 mx-2 w-40">
              <CardContent className="flex items-center justify-center p-3 h-full">
                <CalendarDays className="mr-2 h-5 w-5 text-primary" />
                <div className="text-center">
                  <p className="font-semibold">{item.date}</p>
                  <p className="text-xs text-muted-foreground">{item.day}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </motion.section>
  )
}

