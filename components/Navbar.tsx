"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { HiDownload, HiMenu, HiX } from "react-icons/hi"
import { SiUpwork } from "react-icons/si"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#summary", label: "Summary" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const handlePrint = () => {
    window.print()
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90 backdrop-blur-sm"
      } border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors">
            Desalegn Mamo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button onClick={handlePrint} variant="outline" className="print:hidden text-gray-600 border-gray-300 hover:bg-gray-50">
              <HiDownload className="w-4 h-4 mr-2" />
              CV
            </Button>
            
            <a
              href="https://upwork.com/freelancers/~01cbccbc9717a61377"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#14a800] hover:bg-[#119100] text-white text-sm font-medium rounded-md transition-colors shadow-sm hover:shadow-md"
            >
              <SiUpwork className="w-4 h-4" />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-600" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-3 flex flex-col gap-3">
                <a
                  href="https://upwork.com/freelancers/~01cbccbc9717a61377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#14a800] hover:bg-[#119100] text-white font-medium rounded-md transition-colors"
                >
                  <SiUpwork className="w-4 h-4" />
                  Hire Me on Upwork
                </a>
                
                <Button onClick={handlePrint} variant="outline" className="w-full print:hidden justify-center">
                  <HiDownload className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
