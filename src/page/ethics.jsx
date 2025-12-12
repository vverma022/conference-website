import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, CheckCircle, Scale, AlertTriangle, Shield } from 'lucide-react'

// Ethics guidelines data structure
const ethicsGuidelines = {
  authors: {
    title: "Responsibilities of Authors",
    icon: <BookOpen className="h-5 w-5" />,
    items: [
      {
        title: "Original Research",
        description: "Authors are expected to present original research that has not been published elsewhere. All data, methods, and findings should be accurately reported, without fabrication, falsification, or inappropriate data manipulation."
      },
      {
        title: "Proper Attribution",
        description: "Authors must properly acknowledge the contributions of others, including citing relevant work. Plagiarism, in any form, is unacceptable and will result in the rejection of the submitted paper."
      },
      {
        title: "Conflict of Interest",
        description: "Authors should disclose any potential conflicts of interest that might influence the results or interpretation of their work."
      },
      {
        title: "No Concurrent Submission",
        description: "Submitting the same manuscript to multiple conferences or journals simultaneously is considered unethical and is strictly prohibited."
      }
    ]
  },
  reviewers: {
    title: "Responsibilities of Reviewers",
    icon: <Scale className="h-5 w-5" />,
    items: [
      {
        title: "Fair & Objective Feedback",
        description: "Reviewers play a critical role in the peer review process and are expected to provide fair, objective, and constructive feedback on submitted manuscripts."
      },
      {
        title: "Impartial Evaluation",
        description: "They should evaluate the work based on its intellectual content without regard to race, gender, sexual orientation, religious belief, ethnic origin, citizenship, or political philosophy of the authors."
      },
      {
        title: "Confidentiality",
        description: "Reviewers must maintain the confidentiality of the manuscripts they review and must not use information obtained during the peer review process for personal gain."
      },
      {
        title: "Conflict of Interest",
        description: "Any potential conflicts of interest should be disclosed to the editorial board, and reviewers should recuse themselves from the review process if they feel unable to provide an impartial evaluation."
      }
    ]
  },
  editors: {
    title: "Responsibilities of Editorial Board",
    icon: <CheckCircle className="h-5 w-5" />,
    items: [
      {
        title: "Publication Integrity",
        description: "The editorial board is responsible for ensuring the integrity of the publication process. They should make decisions on submissions based solely on the academic merit of the work and its relevance to the conference's scope."
      },
      {
        title: "Fair Review Process",
        description: "The editorial board must ensure that the review process is conducted fairly, confidentially, and without bias."
      },
      {
        title: "Ethical Oversight",
        description: "They are responsible for identifying and addressing any ethical issues that may arise, such as suspected plagiarism, data manipulation, or conflicts of interest."
      },
      {
        title: "Transparency & Action",
        description: "The board is committed to maintaining transparency throughout the publication process and will take appropriate action in cases of malpractice, which may include rejecting manuscripts, issuing retractions, or reporting misconduct to the authors' institutions."
      }
    ]
  }
}

// Ethical Misconduct section
const ethicalMisconduct = {
  title: "Handling Ethical Misconduct",
  icon: <AlertTriangle className="h-5 w-5" />,
  description: "The conference takes ethical misconduct seriously and has established procedures to address such issues. If unethical behaviour is suspected, the editorial board will investigate the matter thoroughly.",
  actions: [
    "Rejection of the manuscript",
    "Notifying the authors' institutions",
    "Banning the authors from future participation in the conference"
  ],
  footer: "All investigations and actions will be conducted in accordance with the principles of fairness, confidentiality, and transparency."
}

// Plagiarism Prevention section
const plagiarismPrevention = {
  title: "Plagiarism Prevention",
  icon: <Shield className="h-5 w-5" />,
  description: "To maintain the integrity of the conference proceedings, all submitted manuscripts will be screened for plagiarism using specialized detection software.",
  policies: [
    "Manuscripts found to have a similarity index exceeding 10% will be scrutinized",
    "Authors may be asked to revise or provide explanations for the overlaps",
    "Instances of confirmed plagiarism will lead to the rejection of the manuscript",
    "Further disciplinary actions may be taken in cases of confirmed plagiarism"
  ]
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

        {/* Ethical Misconduct & Plagiarism Prevention Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
          {/* Handling Ethical Misconduct */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black">
                {ethicalMisconduct.icon}
                {ethicalMisconduct.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">{ethicalMisconduct.description}</p>
              <p className="text-black font-semibold mb-2">If misconduct is confirmed, appropriate actions will be taken:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                {ethicalMisconduct.actions.map((action, index) => (
                  <li key={index} className="text-black text-sm">{action}</li>
                ))}
              </ul>
              <p className="text-black text-sm italic">{ethicalMisconduct.footer}</p>
            </CardContent>
          </Card>

          {/* Plagiarism Prevention */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black">
                {plagiarismPrevention.icon}
                {plagiarismPrevention.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black mb-4">{plagiarismPrevention.description}</p>
              <p className="text-black font-semibold mb-2">Our plagiarism policies:</p>
              <ul className="list-disc pl-5 space-y-1">
                {plagiarismPrevention.policies.map((policy, index) => (
                  <li key={index} className="text-black text-sm">{policy}</li>
                ))}
              </ul>
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
