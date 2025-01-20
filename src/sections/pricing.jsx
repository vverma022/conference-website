import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../components/ui/badge"
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react'
import { motion } from "framer-motion"

const pricingData = [
  {
    title: "Students",
    icon: GraduationCap,
    description: "Perfect for students looking to enhance their skills and knowledge.",
    domesticPrice: 8000,
    internationalPrice: 200,
  },
  {
    title: "Academicians",
    icon: BookOpen,
    description: "Ideal for researchers and educators in academic institutions.",
    domesticPrice: 8500,
    internationalPrice: 250,
  },
  {
    title: "Industrial",
    icon: Briefcase,
    description: "Tailored for professionals and organizations in the industry.",
    domesticPrice: 9000,
    internationalPrice: 300,
  },
]

export default function PricingTiers() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 bg-gray-100 w-full"
  >
    <div className="container mx-auto py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-4 text-black">Pricing Tiers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
          >
            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-primary rounded-full">
                    <tier.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{tier.title}</CardTitle>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-center py-1">
                    Domestic
                  </Badge>
                  <p className="text-3xl font-bold text-center">₹{tier.domesticPrice.toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-center py-1">
                    International
                  </Badge>
                  <p className="text-3xl font-bold text-center">${tier.internationalPrice} USD</p>
                </div>
              </CardContent>
              <CardFooter>
                <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md transition-colors">
                  Select Plan
                </button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
  )
}

