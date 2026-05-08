import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section style={{
        minHeight: '100vh',
        backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className="flex items-center justify-center text-white">
        <div className="bg-black/60 p-10 rounded-3xl text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Advanced Dental Care For Your Perfect Smile
          </h1>

          <p className="mb-8 text-lg">
            Premium dental clinic in Mumbai with modern technology and pain-free treatment.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/919876543210"
              className="bg-blue-600 hover:bg-blue-800 transition px-6 py-4 rounded-full"
            >
              Book Appointment
            </a>

            <Link
              to="/services"
              className="bg-white text-black px-6 py-4 rounded-full"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Teeth Cleaning',
            'Root Canal',
            'Dental Implants',
            'Braces',
            'Teeth Whitening',
            'Smile Design',
          ].map((service) => (
            <div
              key={service}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop"
                alt={service}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>

                <p className="text-gray-600 mb-6">
                  Modern and comfortable treatment with advanced equipment.
                </p>

                <a
                  href="https://wa.me/919876543210"
                  className="bg-blue-600 hover:bg-blue-800 transition text-white px-5 py-3 rounded-full inline-block"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function About() {
  return (
    <div className="py-24 px-6 text-center">
      <h1 className="text-5xl font-bold mb-6">About SmileCare</h1>
      <p className="max-w-3xl mx-auto text-lg text-gray-600">
        SmileCare Dental Clinic offers modern premium dental care in Mumbai with experienced dentists and advanced treatment.
      </p>
    </div>
  )
}

function Services() {
  return (
    <div className="py-24 px-6 text-center">
      <h1 className="text-5xl font-bold mb-6">Dental Services</h1>
      <p className="text-lg text-gray-600">Complete smile care solutions.</p>
    </div>
  )
}

function Contact() {
  return (
    <div className="py-24 px-6 text-center">
      <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        Mumbai, India | +91 9876543210
      </p>

      <a
        href="https://wa.me/919876543210"
        className="bg-blue-600 text-white px-6 py-4 rounded-full"
      >
        WhatsApp Booking
      </a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-blue-600">
            SmileCare
          </Link>

          <nav className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <a
        href="https://wa.me/919876543210"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl"
      >
        WhatsApp
      </a>
    </>
  )
}
