import { HeroSection } from '@/sections/hero-section'
import { AboutEvent } from '@/sections/about-event'
import { OrganizingCommittee } from '@/sections/organizing-committee'
import { EventLocation } from '@/sections/event-location'
import { FAQ } from '@/sections/faq'
import { Footer } from "../sections/footer"
import { Navbar } from "../sections/navbar"
import Register from "../sections/registration"
import { Speakers } from '@/sections/speakers'
import { KeynoteSpeakers } from '@/sections/keynote'

const ConferencePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow pt-16">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutEvent />
        </section>
        <section id="keynotespeakers">
          <KeynoteSpeakers />
        </section>
        <section id="speakers">
          <Speakers />
        </section>
        <section id="committee">
          <OrganizingCommittee />
        </section>
        <section id="location">
          <EventLocation />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="register">
          <Register />
        </section>
        {/* <section id="contact">
          <ContactUs />
        </section>  */}
      </main>
      <Footer />
    </div>
  )
}

  export default ConferencePage