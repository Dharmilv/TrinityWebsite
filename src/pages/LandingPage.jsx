
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigate = useNavigate()

  useEffect(() => {
    // Navigate to home after 4 seconds
    const timer = setTimeout(() => {
      navigate('/home')
    }, 4000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="relative w-[600px] aspect-[2/1]">
        {/* Animated Logo Container */}
        <motion.div
          className="w-full h-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            rotate: [0, 5, -5, 0], // Subtle rotation animation
          }}
          transition={{
            duration: 2,
            rotate: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }
          }}
        >
          {/* Original Trinity Logo */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Py8lKfoQdGhtrkicnerCmQStMQLtOT.svg"
            alt="Trinity Logo"
            className="w-full h-full object-contain"
            style={{ width: '600px', height: '300px' }}
          />
        </motion.div>

        {/* Glowing effect behind the logo */}
        <motion.div
          className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Loading bar */}
        <motion.div
          className="absolute -bottom-10 left-0 right-0 h-1 bg-gradient-to-r from-[#52B788] via-[#FFD600] to-[#5BC0EB]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}


export default LandingPage;