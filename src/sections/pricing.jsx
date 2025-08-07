import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "../components/ui/badge"
import { GraduationCap, Briefcase , PersonStandingIcon } from 'lucide-react'
import { motion } from "framer-motion"

const pricingData = [
  {
    title: "Students UG/PG and PhD scholars",
    icon: GraduationCap,
    description: "Perfect for students looking to enhance their skills and knowledge.",
    domesticPrice: 10000,
    internationalPrice: 200,
  },
  {
    title: "Academic/Industrial Professionals",
    icon: Briefcase,
    description: "Tailored for professionals",
    domesticPrice: 11000,
    internationalPrice: 300,
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
          >
            <Card className="w-full h-full flex flex-col">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-primary rounded-full">
                    <tier.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{tier.title}</CardTitle>
                </div>
                <CardDescription className="text-center">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center py-1">
                    National
                  </Badge>
                  <p className="text-3xl text-center">₹{tier.domesticPrice.toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-center py-1">
                    International
                  </Badge>
                  <p className="text-3xl text-center">${tier.internationalPrice}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center flex-shrink-0">
                <p className="flex font-light items-center text-center text-xs justify-center">Prices including GST</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
  )
}

