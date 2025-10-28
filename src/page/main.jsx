import { HeroSection } from '@/sections/main/hero-section'
import { AboutEvent } from '@/sections/about-event'
import { PublicationPartners } from '@/sections/publication-partners'
import { EventLocation } from '@/sections/main/event-location'
import { FAQ } from '@/sections/faq'
import { Navbar } from "../sections/navbar"
import { KeynoteSpeakers } from '@/sections/keynote'
import { ChiefGuest } from '@/sections/chief-guest'
import SDCGoalsSection from '@/sections/sdcgoals'
import JaipurInfo from '@/sections/main/aboutcity'

import ConferenceDates from '@/sections/main/dates'


const ConferencePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow pt-16">
        <section id="home">
          <HeroSection />
        </section>
        <section id="dates">
          <ConferenceDates />
        </section>
        <section id="publication-partners">
          <PublicationPartners />
        </section>
        <section id="about">
          <AboutEvent />
        </section>
        <section id="chiefguest">
          <ChiefGuest />
        </section>
        <section id="keynotespeakers">
          <KeynoteSpeakers />
        </section>
        <section id="speakers">
        </section>
        {/* <section id="committee">
          <OrganizingCommittee />
        </section> */}
        <section id="location">
          <EventLocation />
        </section>
        <section>
          <JaipurInfo />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        {/* <section id="register">
          <Register />
        </section> */}
        {/* <section id="contact">
          <ContactUs />
        </section>  */}
        <section>
         <SDCGoalsSection />
        </section>
      </main>
    </div>
  )
}

  export default ConferencePage