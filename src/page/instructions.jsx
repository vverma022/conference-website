import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, BookOpen, Calendar, FileText, Globe, Lock, MessageSquare, PenTool, Search, Upload } from "lucide-react"
import { Footer } from "@/sections/footer"
import { motion } from "framer-motion"
import PricingTiers from "@/sections/pricing"
import CardContentCalender from "@/components/addtocalender"

export default function Instructions() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 gradientbg w-full"
  >
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-semibold text-center mb-6 text-black">
        INTERNATIONAL CONFERENCE ON SMART AND DISTRIBUTED COMPUTING 2025
      </h1>
      <p className="text-black text-center"> ICSDC 2025 invites original research contributions from diverse fields as outlined in the conference's topics. Authors must clearly articulate the context of their work. Submissions are accepted until the paper submission deadline, after which new papers cannot be registered, though edits to existing submissions will still be allowed. </p>
      <PricingTiers />
      <Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2 text-black">
      <Calendar className="h-6 w-6" />
      Important Dates
    </CardTitle>
  </CardHeader>
  <CardContent>
  <CardContentCalender />
</CardContent>
</Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Upload className="h-6 w-6" />
            Submission Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>All submissions will be handled electronically using Microsoft's CMT platform.Papers sent via email will not be accepted</li>
            <li>The primary author ensures that all co-author details are accurately added to the CMT portal to facilitate communication.</li>
            <li>Authors must specify a primary track or area for their submission during submission</li>
            <li>Upon submission, each paper will be assigned a unique Paper ID, which must be referenced in all future communications</li>
            <li>By submitting a paper, authors agree to adhere to all ICSDC 2025 policies</li>


          </ul>
        </CardContent>
      </Card>
      <div className="w-full">
  <div className="mb-4">
    <h2 className="text-lg font-semibold text-black flex items-center gap-2">
      <PenTool className="h-5 w-5" />
      Manuscript Preparation Guidelines
    </h2>
    <ul className="list-decimal pl-6 space-y-2 text-black">
      <li>Title: Capitalize the first letter of each word, excluding helping verbs and connectors.</li>
      <li>Avoid first/second/third person usage (e.g., our, me, us, I).</li>
      <li>Proofread for proper English, preferably by a native speaker.</li>
      <li>Do not use abbreviations in the abstract.</li>
      <li>Use high-resolution images (DPI 500). Blurred images are not acceptable.</li>
      <li>Ensure a structured manuscript: Title, Objectives, Research Gap, Proposed Methodology, Results, etc., must flow logically.</li>
      <li>Include Motivation and Paper Organization in the introduction section.</li>
      <li>Number all images, tables, and equations sequentially and provide suitable captions.</li>
      <li>Do not use images of tables; all tables must be created natively in text.</li>
      <li>Cite all figures, tables, equations, and references in the manuscript text.</li>
      <li>Provide 5–8 keywords and expand non-standard abbreviations on first use.</li>
      <li>Structure headings to a maximum of 3 levels, with proper numbering.</li>
      <li>Acknowledgments, if applicable, should follow the conclusion section.</li>
      <li>Author names and orders must match across the manuscript, submission portal, and consent forms.</li>
      <li>Include all authors' names, affiliations, and emails in the manuscript and submission portal.</li>
      <li>The Conclusion must be novel and statistically supported by results.</li>
      <li>Ensure references are complete, accurate, and cited in the text.</li>
      <li>Follow the provided template (Word/LaTeX) and adhere to a 10–15 page limit.</li>
      <li>ICSDC 2025 seeks submissions featuring novel research contributions relevant to the conference themes. Review or survey articles are not encouraged.</li>
      <li>Submissions must be in English. Manuscripts should adhere to standard English usage and be thoroughly proofread before submission.</li>
      <li>The peer review process will be strictly confidential. The conference organizers will address breaches of confidentiality by reviewers or others.</li>
      <li>ICSDC 2025 employs a single-blind review process. Submissions will undergo plagiarism checks (preferably with Turnitin). Papers exceeding 15% similarity or with more than 2% similarity per source will be rejected. Revisions based on review comments are mandatory. Further revisions may be requested even after acceptance.</li>
      <li> Submissions must not overlap with prior publications or concurrent submissions. Concurrent submissions must be cited, and differences must be explicitly justified. Authors may contact the Program Chairs for clarification.</li>
      <li>  At least one author of each accepted paper must register and present the paper at the conference. Only presented papers will be forwarded for publication.</li>
    </ul>
  </div>
  <div>
    <h2 className="text-lg font-semibold text-black flex items-center gap-4">
      <BookOpen className="h-5 w-5" />
      Publication
    </h2>
    <p className="text-black">
      All accepted and presented papers will be submitted to our publication partner for potential inclusion in SCOPUS-indexed proceedings.
    </p>
  </div>
</div>
      <p className="text-center text-black">We look forward to your participation in ICSDC 2025! </p>
    </div>
    </motion.section>
  )
}