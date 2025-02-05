import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../components/ui/badge"
import { GraduationCap, BookOpen, Briefcase , PersonStandingIcon } from 'lucide-react'
import { motion } from "framer-motion"

const pricingData = [
  {
    title: "Students UG/PG",
    icon: GraduationCap,
    description: "Perfect for students looking to enhance their skills and knowledge.",
    domesticPrice: 10000,
    internationalPrice: 200,
  },
  {
    title: "Academicians",
    icon: BookOpen,
    description: "Ideal for researchers and educators in academic institutions.",
    domesticPrice: 11000,
    internationalPrice: 300,
  },
  {
    title: "Academic Professionals",
    icon: Briefcase,
    description: "Tailored for professionals",
    domesticPrice: 12000,
    internationalPrice: 400,
  },
  {
    title: "Visitors",
    icon: PersonStandingIcon,
    description: "People who are passionate about the field and want to learn more.",
    domesticPrice: 4000,
    internationalPrice: 100,
  }
]

export default function PricingTiers() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 w-full"
  >
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-semibold text-center mb-4 text-black">Registration Fees</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <CardTitle className="text-xl font-semibold">{tier.title}</CardTitle>
                </div>
                <CardDescription className="text-center">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center py-1">
                    Domestic
                  </Badge>
                  <p className="text-3xl text-center">₹{tier.domesticPrice.toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center py-1">
                    International
                  </Badge>
                  <p className="text-3xl  text-center">${tier.internationalPrice} USD</p>
                </div>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
  )
}

