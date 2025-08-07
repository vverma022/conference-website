import { CalendarDays } from "lucide-react"
import { motion } from "framer-motion"


const conferenceDates = [
  { date: "15 April 2025", day: "Call for Paper" },
  { date: "1 September 2025", day: "Submission Deadline" },
  { date: "1 October 2025", day: "Acceptance Notification" },
  { date: "15 October 2025", day: "Registration Deadline" },
];

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
        IMPORTANT DATES
      </motion.h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
          {conferenceDates.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 border rounded-lg p-4 text-center bg-white/50 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center justify-center mb-3">
                <CalendarDays className="h-6 w-6 text-primary" />
              </div>
              <p className="font-semibold text-black">{item.date}</p>
              <p className="text-sm text-muted-foreground">{item.day}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
  )
}

