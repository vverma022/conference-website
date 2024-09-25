import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'When and where is TechConf 2024 taking place?',
    answer:
      'TechConf 2024 will be held from September 15-17, 2024, at the TechConf Center in New York City.',
  },
  {
    question: 'How can I register for the conference?',
    answer:
      'You can register for TechConf 2024 through our online registration portal. Early bird discounts are available until March 31, 2024.',
  },
  {
    question: 'What topics will be covered at TechConf 2024?',
    answer:
      'TechConf 2024 will cover a wide range of topics including AI, machine learning, blockchain, cybersecurity, cloud computing, and more. A detailed schedule will be available closer to the event date.',
  },
  {
    question: 'Are there opportunities for networking at the conference?',
    answer:
      'Yes, TechConf 2024 offers numerous networking opportunities including dedicated networking sessions, social events, and an interactive conference app for attendees to connect.',
  },
]

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}