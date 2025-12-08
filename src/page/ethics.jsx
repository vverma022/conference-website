import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, CheckCircle, Scale } from 'lucide-react'

// Ethics guidelines data structure
const ethicsGuidelines = {
  authors: {
    title: "For Authors",
    icon: <BookOpen className="h-5 w-5" />,
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
    icon: <Scale className="h-5 w-5" />,
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
    icon: <CheckCircle className="h-5 w-5" />,
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

const reviewProcess = [
  {
    title: "1. Submission and Initial Screening",
    details: [
      "All manuscripts must be submitted through the designated conference submission platform within the specified deadline.",
      "The editorial team performs a preliminary check for scope, formatting, plagiarism (using Turnitin/iThenticate), and completeness.",
      "Papers not adhering to the formatting guidelines or exceeding the similarity threshold are returned to authors for correction or desk rejected."
    ]
  },
  {
    title: "2. Reviewer Assignment",
    details: [
      "Each paper is assigned to at least two independent, subject-matter expert reviewers selected from the technical program committee or invited reviewers pool.",
      "Reviewer allocation adheres strictly to the policy that no single reviewer is assigned more than 10 papers to maintain fairness, reduce bias, and ensure adequate attention to each manuscript.",
      "Reviewers evaluate manuscripts based on key criteria: Originality, Technical quality, Clarity, Relevance, and Significance.",
      "Reviewers categorize their decision as: Accept, Minor Revisions, Major Revisions, or Reject."
    ]
  },
  {
    title: "3. Review Reports Submission",
    details: [
      "Reviewers submit their detailed evaluation reports and recommendations through the online system.",
      "All review reports will be submitted to Taylor and Francis once available, particularly after the acceptance notification phase, to facilitate transparency and quality assurance of the publication process."
    ]
  },
  {
    title: "4. Decision and Revision",
    details: [
      "Based on the reviewers’ feedback, the editorial board makes the final decision.",
      "Accepted papers are sent for final formatting and camera-ready submission.",
      "Papers requiring revision are returned to authors for addressing reviewer comments before final acceptance.",
      "Rejected papers are accompanied by constructive feedback where possible."
    ]
  },
  {
    title: "5. Final Compilation and Submission to CRC",
    details: [
      "All accepted and camera-ready papers undergo a final technical check and are compiled into the conference proceedings volume."
    ]
  }
]

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
          PUBLICATION ETHICS & PROCESS
        </h1>
        <p className="text-black text-center mb-8">
          Ensuring integrity, transparency, and ethical standards in academic publishing
        </p>

        {/* Ethics Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(ethicsGuidelines).map(([key, guideline]) => (
            <Card key={key} className="shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  {guideline.icon}
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

        {/* Review Process Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card className="shadow-lg border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-black">Review & Submission Process</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              {reviewProcess.map((step, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <h3 className="text-lg font-semibold text-black mb-2">{step.title}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-black text-sm leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Additional Information Footer */}
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
