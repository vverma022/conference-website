import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold">TechConf 2024</span>
            <p className="text-gray-300 text-base">
              The premier technology conference bringing together industry leaders and innovators.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-300 hover:text-white">
                      Venue
                    </Link>
                  </li>
                </ul>
              </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-4">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 ICSDC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}