"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground px-6 py-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
            <span className="text-primary font-bold text-lg font-['Poppins']">B</span>
          </div>
          <span className="font-bold text-xl font-['Poppins']">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {SITE_CONFIG.navigation.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="font-['Poppins'] hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Button className="bg-secondary text-primary font-bold font-['Poppins'] hover:bg-secondary/90 px-6 hidden md:inline-flex">
          Get Started
        </Button>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary text-primary-foreground px-6 pb-4">
          <div className="flex flex-col space-y-4 mt-2">
            {SITE_CONFIG.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-['Poppins'] block py-2 hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-secondary text-primary font-bold font-['Poppins'] hover:bg-secondary/90 px-6 mt-2" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
