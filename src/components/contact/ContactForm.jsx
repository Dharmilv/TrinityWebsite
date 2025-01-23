export default function ContactForm() {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 w-full max-w-2xl">
      <form className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 "
        />
        
        <div className="flex gap-4">
          <select className="w-20 bg-white/10 border border-white/20 rounded-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 ">
            <option>Ms</option>
            <option>Mr</option>
            <option>Dr</option>
          </select>
          
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <input
            type="text"
            placeholder="Surname"
            className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <input
          type="text"
          placeholder="Institute Name"
          className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          placeholder="Graduation Year"
          className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <select className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
          <option value="">Select an event you wish to register for</option>
          <option value="event1">Event 1</option>
          <option value="event2">Event 2</option>
          <option value="event3">Event 3</option>
        </select>

        <button
          type="submit"
          className="w-full bg-cyan-400 text-black font-semibold rounded-full py-3 px-6 hover:bg-cyan-300 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  )
}

