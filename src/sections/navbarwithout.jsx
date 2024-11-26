import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../components/ui/dropdown-menu'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.jpeg'


export function Navbarwithout() {
  return (
    <nav className="bg-white shadow-md top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex">
      <a href="#home" className="flex-shrink-0 flex items-center" onClick={() => scrollToSection('home')}>
        <img src={Logo} alt="ICSDC Logo" className="w-10 h-10 mr-2" /> {/* Adjust width and height as needed */}
        <span className="text-xl font-bold text-primary">ICSDC 2025</span>
      </a>
    </div>
      </div>
      </div>
    </nav>
  )
}