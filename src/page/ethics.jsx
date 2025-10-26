import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen } from 'lucide-react'

// Ethics guidelines data structure
const ethicsGuidelines = {
  authors: {
    title: "For Authors",
    items: [
      {
        title: "Originality",
        description: "Work must be original and not plagiarized. Proper citation is mandatory for all sources."
      },
      {
        title: "Concurrent Submission",
        description: "Manuscripts should not be submitted to multiple journals simultaneously."
      },
      {
        title: "Data and Consent",
        description: "Authors must be prepared to provide evidence of informed consent for studies involving human participants, particularly vulnerable populations or those involving donated organs."
      },
      {
        title: "Conflict of Interest",
        description: "Authors must disclose any potential conflicts of interest."
      }
    ]
  },
  reviewers: {
    title: "For Reviewers",
    items: [
      {
        title: "Confidentiality",
        description: "Maintain confidentiality of manuscripts and never use them for personal gain."
      },
      {
        title: "Objectivity",
        description: "Conduct reviews based on evidence and without bias."
      },
      {
        title: "Conflict of Interest",
        description: "Decline to review any manuscript where a conflict of interest exists and inform the editor."
      },
      {
        title: "Promptness",
        description: "Inform the editor if a thorough and timely review is not possible."
      },
      {
        title: "Suggestions",
        description: "Point out relevant published work that has not been cited."
      }
    ]
  },
  editors: {
    title: "For Editors",
    items: [
      {
        title: "Fairness",
        description: "Give unbiased consideration to all manuscripts and make decisions based on their merits."
      },
      {
        title: "Confidentiality",
        description: "Keep the peer-review process confidential."
      },
      {
        title: "Misconduct",
        description: "Investigate credible allegations of misconduct in consultation with Taylor & Francis."
      },
      {
        title: "Corrections",
        description: "Ensure appropriate corrections are published if convincing evidence of an error is found in a published article."
      }
    ]
  }
}

export default function Ethics() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 gradientbg w-full mt-4"
    >
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="text-3xl font-semibold text-center mb-6 text-black">
          PUBLICATION ETHICS
        </h1>
        <p className="text-black text-center mb-8">
          Ensuring integrity, transparency, and ethical standards in academic publishing
        </p>

        {/* Ethics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(ethicsGuidelines).map(([key, guideline]) => (
            <Card key={key} className="shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <BookOpen className="h-5 w-5" />
                  {guideline.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {guideline.items.map((item, index) => (
                    <li key={index} className="text-black">
                      <strong className="text-black">{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="bg-gray-50 border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-black">
                Commitment to Excellence
              </h3>
              <p className="text-black leading-relaxed">
                Our conference is committed to maintaining the highest standards of publication ethics. 
                We follow the guidelines set by the Committee on Publication Ethics (COPE) and work in 
                partnership with Taylor & Francis to ensure transparency and integrity in all academic 
                publications. Any concerns regarding ethical issues should be reported to the editorial 
                board immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}
