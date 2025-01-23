import Navbar from '../components/Navbar'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url('/background.png')`,
      }}
    >
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>

        <Footer />
      </div>
    </div>
  )
}

