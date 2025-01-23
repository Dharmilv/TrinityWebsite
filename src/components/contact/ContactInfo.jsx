import { Instagram, Globe } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 w-full max-w-xl">
      <div className="mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7307233098066!2d72.83563631469864!3d19.12646478705911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1645524815197!5m2!1sen!2sin"
          className="w-full h-64 rounded-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="text-white space-y-4">
        <p className="text-center">
          No.U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Marg,<br />
          Opp. Cooper Hospital, Vile Parle (West), Mumbai-400 056. India
        </p>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div className=''>
            <div className='text-center'>
              <p className="text-lg">Name</p>
              <p className="text-sm text-gray-400">Position</p>
              <p className="text-sm">+91 98XXX XXXXX</p>
            </div>
            <div className='text-center pt-4'>
              <p className="text-lg">Name</p>
              <p className="text-sm text-gray-400">Position</p>
              <p className="text-sm">+91 98XXX XXXXX</p>
            </div>
            </div>
            <div className="flex flex-col items-center space-y-8">
              <a href="https://instagram.com/djsce.trinity" className="text-white hover:text-cyan-400">
                <div className="flex flex-col items-center">
                  <Instagram size={24} />
                  <span className="mt-2">@djsce.trinity</span>
                </div>
              </a>
              <a href="mailto:djscetrinity@gmail.com" className="text-white hover:text-cyan-400">
                <div className="flex flex-col items-center">
                  <Globe size={24} />
                  <span className="mt-2">djscetrinity@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

