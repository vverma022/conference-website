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
  {name: 'Ethics', Route: '/ethics'},
  { name: 'Location', href: 'location'},
  // { name: 'Session Speakers', href: 'speakers' },
  { name: 'Contact us', href: 'contact-us' },
]

const goals = [
  {
      imageUrl: "/sdc/download.png",
      title: "Good Health and Well-being",
      description: "Ensure healthy lives and promote well-being for all at all ages.",
    },
    {
      imageUrl: "/sdc/download 9.png",
      title: "Quality Education",
      description:
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
    },
    {
      imageUrl: "/sdc/download 11.png",
      title: "Responsible Consumption and Production",
      description: "Ensure sustainable consumption and production patterns.",
    },
    {
      imageUrl: "/sdc/13.svg.png",
      title: "Climate Action",
      description: "Take urgent action to combat climate change and its impacts.",
    },
    {
      imageUrl: "/sdc/17.svg.png",
      title: "Partnerships for the Goals",
      description: "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
    },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md shadow-md">
    <div className="max-w-full mx-auto px-3 sm:px-5 lg:px-6">
      <div className="flex justify-between h-16 items-center">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-3">
          <a
            href="/"
            className="flex items-center space-x-2"
            onClick={() => scrollToSection('home')}
          >
            <img src={Logo} alt="ICSDC Logo" className="w-8 h-8 rounded-full shadow-md" />
            <span className="text-lg font-bold text-primary">ICSDC 2025</span>
          </a>
          {/* SDG Icons */}
          <div className="flex space-x-1">
            {goals.map((goal, index) => (
              <div key={index} className="w-6 h-6">
                <img
                  src={goal.imageUrl || "/placeholder.svg"}
                  alt={goal.title}
                  className="w-full h-full object-cover rounded-sm shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
  
        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`/#${item.href}`}
              className="text-gray-600 hover:text-primary px-2 py-1 text-sm font-medium border-b-2 border-transparent hover:border-primary transition"
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
  
        {/* Mobile Menu Button */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-md text-gray-600 hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  
    {/* Mobile Menu */}
    <motion.div
      className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1, height: 'auto' },
        closed: { opacity: 0, height: 0 },
      }}
    >
      <div className="pt-2 pb-2 space-y-1 bg-white/40 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.href}`}
            className="block pl-3 pr-4 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-primary transition"
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