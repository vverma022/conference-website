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
      <li>The ICSDC 2025 seeks submissions featuring novel research contributions relevant to the conference themes. Review or survey articles are not encouraged. Submissions must not overlap with prior publications or concurrent submissions. Concurrent submissions must be cited, and differences must be explicitly justified. Authors may contact the Program Chairs for clarification. Furthermore, authors should disclose any potential conflicts of interest that might influence the results or interpretation of their work.</li>
      <li>Submitting the same manuscript to multiple conferences or journals simultaneously is considered unethical and is strictly prohibited.</li>
      <li>Include all authors&apos; names, affiliations, and emails in the manuscript and submission portal. Author names and orders must match the manuscript, submission portal, and consent forms.</li>
      <li>Capitalize the first letter of each word, excluding helping verbs and connectors in the title. Proofread for proper English, preferably by a native speaker. Use high-resolution images (DPI 500). Blurred images are not acceptable.</li>
      <li>Number all images, tables, and equations sequentially and provide suitable captions. Do not use images of tables; all tables must be created natively in text.</li>
      <li>Cite all figures, tables, equations, and references in the manuscript text. Ensure references are complete and accurate.</li>
      <li>Follow the provided <a href="https://docs.google.com/document/d/1F05oK_7kpSVh8SDXxaAhAu-ZBLu1Sv7D/edit?usp=drivesdk&ouid=102304621689665627522&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">template</a> (Word/LaTeX) and adhere to a 5-page limit.</li>
      <li>Submissions will undergo plagiarism checks (preferably with Turnitin). Manuscripts found to have a similarity index exceeding 10% will be scrutinized, and authors may be asked to revise or provide explanations for the overlaps. Instances of confirmed plagiarism will lead to the rejection of the manuscript and may result in further disciplinary actions.</li>
      <li>All submitted manuscripts will undergo a rigorous double-blind peer review process to ensure impartiality and scholarly quality. Authors must ensure that their submissions do not reveal their identity, either directly or indirectly. The review process will be conducted in strict confidence, and reviewer identities will not be disclosed at any stage.</li>
      <li>At least one author of each accepted paper must register and present the paper at the conference. Only presented papers will be forwarded for publication.</li>
      <li>The ICSDC 2025 takes ethical misconduct seriously and has established procedures to address such issues. If unethical behaviour is suspected, the editorial board will investigate the matter thoroughly. If misconduct is confirmed, appropriate actions will be taken, which may include the rejection of the manuscript, notifying the authors&apos; institutions, and banning the authors from future participation in the conference. All investigations and actions will be conducted in accordance with the principles of fairness, confidentiality, and transparency.</li>
    </ul>
  </div>
  <div>
    <h2 className="text-lg font-semibold text-black flex items-center gap-4">
      <BookOpen className="h-5 w-5" />
      Publication
    </h2>
    <p className="text-black">
    All accepted and presented papers will be submitted to CRC Press Conference Proceedings (SCOPUS-indexed).
    </p>
  </div>
</div>
      <p className="text-center text-black">We look forward to your participation in ICSDC 2025! </p>
    </div>
    </motion.section>
  )
}