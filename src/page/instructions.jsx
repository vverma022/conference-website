import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, BookOpen, Calendar, FileText, Globe, Lock, MessageSquare, PenTool, Search, Upload } from "lucide-react"

export default function Instructions() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        International Conference on Smart and Distrubuted Computing 2025
      </h1>
      
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
            <li>All submissions will be handled electronically using Microsoft's CMT platform.</li>
            <li>Do not submit papers via email.</li>
            <li>By submitting a paper, authors agree to the policies of ICSDS-2025.</li>
            <li>The primary author must add details of all authors to the CMT portal.</li>
            <li>Include at least one primary area to which your paper belongs.</li>
            <li>You will be assigned a unique paper ID upon submission. Use this ID in all further communications.</li>
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
            <p>Articles with novel research contribution on the theme of the conference should be submitted. Review/Survey articles are not encouraged.</p>
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
            <p>The default language style is standard English only. Submit manuscripts in English language only.</p>
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
              <li>Title: First letter of each word except helping verbs and connectors should be uppercase.</li>
              <li>Avoid usage of first/second/third person (our, me, us, I, etc.).</li>
              <li>Proofread the paper for English usage (possibly by a native speaker).</li>
              <li>Avoid abbreviations in abstract.</li>
              <li>Include high-resolution figures (DPI above 500).</li>
              <li>Organize contents well: Title, objective, research gap, proposed methodology, and results should be inline.</li>
              <li>Include motivation and paper organization at the end of the introduction section.</li>
              <li>Number and caption all images and tables.</li>
              <li>Do not paste tables as figures/snapshots.</li>
              <li>Number all equations sequentially and discuss them in the text.</li>
              <li>Cite all images, tables, equations, and references in the text.</li>
              <li>Mention 5 to 8 keywords in the manuscript.</li>
              <li>Expand abbreviations on first usage only. Avoid non-standard abbreviations.</li>
              <li>Number all sections and subsections properly. Do not include headings beyond 3 levels.</li>
              <li>Include acknowledgements (if any) after the conclusion section.</li>
              <li>Keep author names and ordering identical in all places.</li>
              <li>Include name, affiliation, and e-mail of all authors in both manuscript and submission portal.</li>
              <li>Conclusion should be novel and supported by statistical remarks on experimental results.</li>
              <li>Ensure reference items are complete and cited.</li>
              <li>Use the provided word/LaTeX template and keep the manuscript within 10-15 pages.</li>
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
            <p>The review process will be strictly confidential. Misuse of confidential information is a severe professional failure. The Conference Organizers are not responsible for consequences when reviewers break confidentiality.</p>
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
            <p>Papers will undergo a single blind review process and be checked for plagiarism. Authors may be asked to revise their manuscript before final publication, even after the Conference.</p>
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
            <p>ICSDC-2025 respects Intellectual Property Rights. Papers with more than 18% similarity will be rejected. For a single source, the similarity index should not exceed 2%.</p>
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
            <p>Submissions should not overlap with prior publications or other concurrent submissions. Contact the Program Chairs for any clarifications.</p>
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
            <p>At least one author must register for the conference and present the paper if accepted. Only presented papers will be forwarded for publication.</p>
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
            <p>Accepted and presented papers will be submitted for publication to our publication partner (preferably in SCOPUS indexed proceedings). Keep visiting the conference website for updates on publication details.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}