"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { HiDownload, HiMenu, HiX } from "react-icons/hi"

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
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Download PDF Button */}
          <div className="hidden md:block">
            <Button onClick={handlePrint} className="print:hidden">
              <HiDownload className="w-4 h-4" />
              Download PDF
            </Button>
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
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium px-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button onClick={handlePrint} className="w-full print:hidden">
                <HiDownload className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
