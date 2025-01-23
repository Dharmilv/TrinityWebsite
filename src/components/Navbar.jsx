import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-transparent backdrop-blur-sm' : 'bg-black'
    }`}>
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-center h-20">
          <div className="flex items-center justify-between space-x-24 text-xl">
            <Link to="/" className="text-white hover:text-gray-300">Events</Link>
            <Link to="/" className="text-white hover:text-gray-300">Team</Link>
            <Link to="/" className="text-white hover:text-gray-300">Score</Link>
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Py8lKfoQdGhtrkicnerCmQStMQLtOT.svg"
                alt="Trinity Logo"
                className="h-20 w-auto py-2"
              />
            </Link>
            
            <Link to="/" className="text-white hover:text-gray-300">Gallery</Link>
            <Link to="/" className="text-white hover:text-gray-300">Sponsors</Link>
            <Link to="/" className="text-white hover:text-gray-300">Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

