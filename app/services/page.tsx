'use client'

import { useState } from 'react'
import Link from 'next/link'

const tripPackages = [
  {
    id: 1,
    name: 'City Tour Package',
    duration: '4 Hours',
    basePrice: 2500,
    price: '₹2,500',
    description: 'Explore the city landmarks and popular attractions',
    features: [
      'Professional driver guide',
      'Air-conditioned vehicle',
      'Flexible itinerary',
      'Photo stops included',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
    popular: false,
  },
  {
    id: 2,
    name: 'Full Day Tour',
    duration: '8 Hours',
    basePrice: 4500,
    price: '₹4,500',
    description: 'Complete city exploration with extended coverage',
    features: [
      'Full day service',
      'Multiple destinations',
      'Lunch break included',
      'Hotel pickup & drop',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    popular: true,
  },
  {
    id: 3,
    name: 'Heritage Tour',
    duration: '6 Hours',
    basePrice: 3500,
    price: '₹3,500',
    description: 'Discover historical sites and cultural heritage',
    features: [
      'Heritage site visits',
      'Cultural insights',
      'Museum entries',
      'Expert commentary',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
      />
    ),
    popular: false,
  },
  {
    id: 4,
    name: 'Beach & Coastal Tour',
    duration: '5 Hours',
    basePrice: 3000,
    price: '₹3,000',
    description: 'Relaxing beach visits and coastal attractions',
    features: [
      'Beach access',
      'Scenic coastal drive',
      'Water activities',
      'Sunset viewing',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999"
      />
    ),
    popular: false,
  },
  {
    id: 5,
    name: 'Night City Tour',
    duration: '3 Hours',
    basePrice: 2000,
    price: '₹2,000',
    description: 'Experience the city lights and nightlife',
    features: [
      'Evening tour',
      'City lights viewing',
      'Night markets',
      'Entertainment spots',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646"
      />
    ),
    popular: false,
  },
  {
    id: 6,
    name: 'Custom Tour Package',
    duration: 'Flexible',
    basePrice: 0,
    price: 'Custom',
    description: 'Design your own itinerary with personalized routes',
    features: [
      'Customizable route',
      'Flexible timing',
      'Multiple stops',
      'Personalized service',
    ],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11"
      />
    ),
    popular: false,
  },
]

export default function ServicesPage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

  return (
    <>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FACC15]">Trip & Tour Packages🌍</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Select from our handpicked tour packages or design a trip your way
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-300">
          <div className="flex items-center gap-2">
            🚕 <span>Choice of Vehicles</span>
          </div>
          <div className="flex items-center gap-2">
            🗺️ <span>Adventurous Routes</span>
          </div>
          <div className="flex items-center gap-2">
            ⏱️ <span>Thrilling Experience</span>
              </div>
            </div>

        </div>

{/* <div className="mt-10 flex gap-4 justify-center">
  <button className="bg-[#FACC15] text-[#0F172A] px-8 py-3 rounded-xl font-bold">
    View Packages
  </button>
  <button className="border border-[#FACC15] text-[#FACC15] px-8 py-3 rounded-xl">
    Create Custom Trip
  </button>
</div> */}

      </section>


      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {tripPackages.map((pkg) => {
              const isComingSoon = true

              return (
                <div key={pkg.id} className="relative overflow-hidden rounded-2xl">

                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 blur-md opacity-50">

                    <div className="flex justify-center mb-6">
                      <div className="bg-[#FACC15]/10 rounded-2xl p-4">
                        <svg className="w-12 h-12 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {pkg.icon}
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-center text-[#0F172A] mb-2">
                      {pkg.name}
                    </h3>

                    <div className="flex justify-center gap-4 mb-4">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {pkg.duration}
                      </span>
                      <span className="text-[#FACC15] font-bold">
                        {pkg.price}
                      </span>
                    </div>

                    <p className="text-gray-600 text-center mb-6">
                      {pkg.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <span className="text-[#FACC15] mr-2">✓</span> {f}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-[#FACC15] text-[#0F172A] py-3 rounded-lg font-bold">
                      Select Package
                    </button>
                  </div>

  {/* ===== COMING SOON OVERLAY ===== */}
  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
    <div className="w-[160%] bg-[#FACC15] text-[#0F172A] text-lg font-extrabold tracking-widest py-3 rotate-[-20deg] text-center shadow-xl">
      COMING SOON
    </div>
  </div>
</div>
              )
            })}

          </div>
        </div>
      </section>
    </>
  )
}
