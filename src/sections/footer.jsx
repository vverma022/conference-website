import ContactForm from './contact-usbetter';
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';


export function Footer() {
  
  return (
    <section id="contact-us">
  <footer className="bg-gray-800 text-white w-full">
    <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-16">
        <div className="space-y-8 xl:col-span-1">
          <span className="text-2xl font-bold">INTERNATIONAL CONFERENCE ON SMART AND DISTRIBUTED COMPUTING 2025</span>
          {/* <p className="text-gray-400 text-base">
            For queries, contact: <a href="mailto:hod.cce@jaipur.manipal.edu" className="underline">hod.cce@jaipur.manipal.edu</a>
          </p> */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LinkedinIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className=" xl:col-start-3"> 
         <ContactForm />
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4">
        <p className="text-base text-gray-400 xl:text-center">
          &copy; 2025 ICSDC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</section>
  );
}