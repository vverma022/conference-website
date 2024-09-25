import { HeroSection } from '@/sections/hero-section'
import { AboutEvent } from '@/sections/about-event'
import { OrganizingCommittee } from '@/sections/organizing-committee'
import { EventLocation } from '@/sections/event-location'
import { FAQ } from '@/sections/faq'
import { ContactUs } from "../sections/contact-us"


const ConferencePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutEvent />
      <OrganizingCommittee />
      <EventLocation />
      <FAQ />
      <ContactUs />
    </div>
  )
}

  export default ConferencePage