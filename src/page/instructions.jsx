import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, BookOpen, Calendar, FileText, Globe, Lock, MessageSquare, PenTool, Search, Upload } from "lucide-react"
import { Footer } from "@/sections/footer"
import { Navbarwithout } from "@/sections/navbarwithout"

export default function Instructions() {
  return (
    <>
    <Navbarwithout />
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        International Conference on Smart and Distrubuted Computing 2025
      </h1>
      <p> ICSDC 2025 invites original research contributions from diverse fields as outlined in the conference's topics. Authors must clearly articulate the context of their work. Submissions are accepted until the paper submission deadline, after which new papers cannot be registered, though edits to existing submissions will still be allowed. </p>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Important Dates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Papers must be submitted on or before the last date of paper submission. After this deadline, you will not be able to register new papers, however you will be able to edit the information of existing submitted papers.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-6 w-6" />
            Submission Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>All submissions will be handled electronically using Microsoft's CMT platform.Papers sent via email will not be accepted</li>
            <li>The primary author ensures that all co-author details are accurately added to the CMT portal to facilitate communication.</li>
            <li>Authors must specify a primary track or area for their submission during submission</li>
            <li>Upon submission, each paper will be assigned a unique Paper ID, which must be referenced in all future communications</li>
            <li>By submitting a paper, authors agree to adhere to all ICSDC 2025 policies</li>


          </ul>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="article-types">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Article Types
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>ICSDC 2025 seeks submissions featuring novel research contributions relevant to the conference themes.  Review or survey articles are not encouraged</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="language-style">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Language Style
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>Submissions must be in English. Manuscripts should adhere to standard English usage and be thoroughly proofread before submission</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="manuscript-preparation">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <PenTool className="h-5 w-5" />
              Manuscript Preparation Guidelines
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-decimal pl-6 space-y-2">
 <li>Title: Capitalize the first letter of each word, excluding helping verbs and connectors.</li>
<li>Avoid first/second/third person usage (e.g., our, me, us, I).</li>	
<li>Proofread for proper English, preferably by a native speaker.</li>
<li>Do not use abbreviations in the abstract. </li>	
<li>Use high-resolution images (DPI 500). Blurred images are not acceptable.</li>	
<li>Ensure a structured manuscript:  Title, Objectives, Research Gap, Proposed Methodology, Results, etc., must flow logically.</li>	 
<li>Include Motivation and Paper Organization in the introduction section. </li>	
<li>Number all images, tables, and equations sequentially and provide suitable captions. </li>	
<li>Do not use images of tables; all tables must be created natively in text. </li>	
<li>Cite all figures, tables, equations, and references in the manuscript text. </li>	
<li>Provide 5 8 keywords and expand non-standard abbreviations on first use. </li>	
<li>Structure headings to a maximum of 3 levels, with proper numbering. </li>	
<li>Acknowledgments, if applicable, should follow the conclusion section. </li>	
<li>Author names and orders must match across the manuscript, submission portal, and consent forms. </li>	
<li>Include all authors' names, affiliations, and emails in the manuscript and submission portal. </li>	
<li>The Conclusion must be novel and statistically supported by results.</li> 
<li>Ensure references are complete, accurate, and cited in the text. </li>
<li>Follow the provided template (Word/LaTeX) and adhere to a  10 15 page limit. </li>  
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="confidentiality">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Confidentiality
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-justify">The peer review process will be strictly confidential. The conference organizers will address breaches of confidentiality by reviewers or others. </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="review-process">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Review Process
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>ICSDC 2025 employs a single-blind review process. Submissions will undergo plagiarism checks (preferably with Turnitin). Papers exceeding 18% similarity or with more than 2% similarity per source will be rejected. Revisions based on review comments are mandatory. Further revisions may be requested even after acceptance. </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="plagiarism">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Plagiarism
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>ICSDC 2025 enforces a strict policy against plagiarism and unethical practices. Any submission violating these principles will be rejected and reported. </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dual-submissions">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Dual/Double Submissions
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>Submissions must not overlap with prior publications or concurrent submissions. Concurrent submissions must be cited, and differences must be explicitly justified. Authors may contact the Program Chairs for clarification. </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="attendance">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Attendance Responsibilities
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>At least one author of each accepted paper must register and present the paper at the conference.  Only presented papers will be forwarded for publication. </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="publication">
          <AccordionTrigger className="text-lg font-semibold">
            <span className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Publication
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>All accepted and presented papers will be submitted to our publication partner for potential inclusion in SCOPUS-indexed proceedings. Proof will be shared with the corresponding author for verification before publication. For updates on publication details, visit the conference website regularly. </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-center">We look forward to your participation in ICSDC 2025! </p>
    </div>
    <Footer />
    </>
  )
}