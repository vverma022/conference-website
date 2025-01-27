import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqItems = [
  {
    question: 'When and where is ICSDC 2025 taking place?',
    answer:
      'The Dates for the International Conference for Smart and Distributed Computing are yet to be announced.',
  },
  {
    question: 'How can I register for the conference?',
    answer:
      'You can register for ISDC 2025 through our online registration portal once it is online',
  },
  {
    question: 'What topics will be covered at ISDC 2025?',
    answer:
      'ISDC 2025 will cover a wide range of topics including AI, machine learning, blockchain, cybersecurity, cloud computing, and more. A detailed schedule will be available closer to the event date.',
  },
  {
    question: 'Are there opportunities for networking at the conference?',
    answer:
      'Yes, ISDC 2025 offers numerous networking opportunities including dedicated networking sessions, social events, and an interactive conference app for attendees to connect.',
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
          className="text-3xl font-semibold mb-8 text-center text-black"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto text-black">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-center" >{item.question}</AccordionTrigger>
                <AccordionContent className="text-center">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}