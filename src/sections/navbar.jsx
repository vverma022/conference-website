import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../components/ui/dropdown-menu'
import { Route, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'

const navItems = [
  { name: 'Home', href: 'about' },
  {name: 'Tracks', Route: '/tracks'},
  {name: 'Instructions to Authors', Route: '/instructions'},
  // { name: 'Keynote Speakers', href: 'keynotespeakers' },
  {name: 'Commitee', Route: '/commitee'},
  { name: 'Location', href: 'location'},
  // { name: 'Session Speakers', href: 'speakers' },
  { name: 'Contact us', href: 'contact-us' },
 
  
 

]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const Navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex">
      <a href="/" className="flex-shrink-0 flex items-center" onClick={() => scrollToSection('home')}>
        <img src={Logo} alt="ICSDC Logo" className="w-10 h-10 mr-2" /> {/* Adjust width and height as needed */}
        <span className="text-xl font-bold text-primary">ICSDC 2025</span>
      </a>
    </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`/#${item.href}`}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-primary hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.Route) {
                    Navigate(item.Route);
                  } else {
                    if (window.location.pathname !== '/') {
                      Navigate('/');
                      setTimeout(() => scrollToSection(item.href), 100);
                    } else {
                      scrollToSection(item.href);
                    }
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
      >
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-primary hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                if (item.Route) {
                  Navigate(item.Route);
                } else {
                  if (window.location.pathname !== '/') {
                    Navigate('/');
                    setTimeout(() => scrollToSection(item.href), 100);
                  } else {
                    scrollToSection(item.href);
                  }
                }
                setIsOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}