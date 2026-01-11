'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-[#0F172A] text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="TNRTC Logo"
                width={200}
                height={80}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#FACC15] transition-all duration-200 px-2 py-1 rounded hover:bg-white hover:bg-opacity-10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobileMenuBtn"
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none hover:text-[#FACC15] transition-colors duration-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobileMenu"
          className={`md:hidden mt-4 pb-4 space-y-2 border-t border-gray-700 pt-4 ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 px-2 rounded-lg hover:text-[#FACC15] hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
