"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  const [time, setTime] = useState(new Date())
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
  }

  const navItems = [
    { name: "ABOUT", path: "/#about" },
    { name: "WORK", path: "/#work" },
    { name: "RESUME", path: "/resume" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center neo-blur",
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
          "transition-all duration-700 ease-in-out",
        )}
      >
        <div className="flex items-center space-x-1.5">
          <Link href="/">
            <div className="w-6 h-6 border border-white/40 flex items-center justify-center text-white font-mono font-medium">
              S
            </div>
          </Link>
          <span className="hidden md:inline-block text-white/70 text-sm font-mono">
            HYDERABAD, INDIA — {formatTime(time)}
          </span>
          <span className="md:hidden inline-block text-white/70 text-sm font-mono">{formatTime(time)}</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "text-sm font-mono transition-opacity duration-300 hover:opacity-70",
                pathname === item.path ? "text-white" : "text-white/70",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link href="/#contact" className="text-white/90 text-sm font-mono flex items-center">
            <span className="mr-1">→</span> LET'S TALK
          </Link>

          {/* Hamburger menu button - only visible on mobile */}
          <button
            className="ml-4 md:hidden text-white/90 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 md:hidden flex flex-col justify-center",
          "transition-all duration-500 ease-in-out",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center space-y-8 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "text-xl font-mono transition-opacity duration-300 hover:opacity-70",
                pathname === item.path ? "text-white" : "text-white/70",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-white/90 text-xl font-mono flex items-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="mr-2">→</span> LET'S TALK
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar

