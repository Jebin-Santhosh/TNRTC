'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <>
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #FACC15 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FACC15] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FACC15] rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Taxi Icon */}
          <div className="mb-6 flex justify-center">
            <div className="text-6xl md:text-8xl animate-bounce" style={{ animationDuration: '2s' }}>
              🚕
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-[#FACC15] drop-shadow-lg">
            TNRTC
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300">
            ThalaiNagaram Road Transport Corporation
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-200 font-light">
            Reliable, Safe & Comfortable Rides
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-[#FACC15] text-[#0F172A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FDE047] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book Now
            </Link>
            <Link
              href="/careers"
              className="bg-transparent border-2 border-[#FACC15] text-[#FACC15] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FACC15] hover:text-[#0F172A] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              We're Hiring
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#0F172A]">Our </span>
            <span className="text-[#FACC15]">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Service 1: Local Taxi Service */}
          <div className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15] opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-[#0F172A] rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 text-center group-hover:text-[#FACC15] transition-colors duration-300">
                Local Taxi Service
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Quick and convenient local transportation for your daily commute needs. Available 24/7 with professional drivers.
              </p>
            </div>
          </div>

          {/* Service 2: City Rides */}
          <div className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15] opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
              <div className="bg-[#0F172A] rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 text-center group-hover:text-[#FACC15] transition-colors duration-300">
                City Rides
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Explore the city with our reliable city ride service. Perfect for shopping, dining, and sightseeing around town.
              </p>
            </div>
          </div>

          {/* Service 3: Event & Special Rides */}
          <div className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15] opacity-5 rounded-full -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
              <div className="bg-[#0F172A] rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold text-[#0F172A] mb-4 text-center group-hover:text-[#FACC15] transition-colors duration-300">
                Event & Special Rides
              </p>
              <p className="text-gray-600 text-center leading-relaxed">
                Make your special events memorable with our dedicated event transportation service. Weddings, parties, and more.
              </p>
            </div>
          </div>

        </div>


        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-[#FACC15] to-[#FDE047] text-[#0F172A] px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/40"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>

{/* Curved Divider Downwards */}
<div className="relative">
  <svg
    className="w-full h-[140px] drop-shadow-xl"
    viewBox="0 0 1440 140"
    preserveAspectRatio="none"
  >
    <path
      d="M0,80 C240,0 480,120 720,80 960,40 1200,100 1440,60 L1440,140 L0,140 Z"
      fill="#020617"
    />
  </svg>
</div>


{/* CLIENT REVIEWS SECTION */}
<section className="relative py-20 bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617] text-white overflow-hidden">
  
  {/* Section Title */}
  <div className="text-center mb-14">
    <h2 className="text-4xl md:text-5xl font-bold">
      CLIENT <span className="text-[#FACC15]">REVIEWS</span>
    </h2>
    <p className="text-gray-400 mt-3">What our customers say about TNRTC</p>
  </div>

  {/* Reviews Grid */}
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      {
        name: "John Durairaj",
        role: "Regular Customer",
        review:
          "Excellent service! The drivers are professional and always on time. My rides are smooth and safe every time.",
        stars: 5,
      },
      {
        name: "VJ Antony",
        role: "TNPD Head",
        review:
          "TNRTC has made my daily travel stress-free. Clean vehicles and polite drivers. Highly recommended!",
        stars: 5,
      },
      {
        name: "Justin",
        role: "Tour Package User",
        review:
          "Booked a full day tour package. The experience was amazing and the service was well organized.",
        stars: 4,
      },
    ].map((review, index) => (
      <div
        key={index}
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* Stars */}
        <div className="flex mb-3">
          {[...Array(review.stars)].map((_, i) => (
            <span key={i} className="text-[#FACC15] text-lg">★</span>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          “{review.review}”
        </p>

        <hr className="border-white/10 my-4" />

        {/* Name */}
        <h4 className="font-bold text-lg">{review.name}</h4>
        <p className="text-sm text-[#FACC15]">{review.role}</p>
      </div>
    ))}
  </div>

</section>
    </>
  )
}
