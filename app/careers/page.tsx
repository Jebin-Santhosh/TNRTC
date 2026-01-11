'use client'

import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Link from 'next/link'
import { useState } from 'react'


const benefits = [
  {
    title: 'High Salary',
    description: 'Competitive compensation package',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Stress-Free Work Environment',
    description: 'Supportive and positive atmosphere',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Flexible Working Hours',
    description: 'Work-life balance that suits you',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Friendly Team',
    description: 'Collaborative and welcoming colleagues',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
]

const requirements = [
  'Valid Driving License Issued By The TNRTO',
  'Basic Knowledge Of City Routes and Area',
  'Good Communication Skills',
  'Basic Driving and parking skills',
]

export default function CareersPage() {
  const [showApplyForm, setShowApplyForm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [applicationData, setApplicationData] = useState({
    characterName: "",
    phone: "",
    age: "",
    discord: "",
    reason: "",
  })

  const handleApplicationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    })
  }

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      await addDoc(collection(db, "jobApplications"), {
        ...applicationData,
        position: "Taxi Driver Trainee",
        createdAt: Timestamp.now(),
      })
  
      setShowSuccess(true)
  
      setApplicationData({
        characterName: "",
        phone: "",
        age: "",
        discord: "",
        reason: "",
      })
  

    } catch (error) {
      console.error("Error submitting application:", error)
      alert("Something went wrong. Try again.")
    }
  }
  
  
  return (
    <>


{/* Page Header */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#020617] text-white py-16 sm:py-20">
  <div className="container mx-auto px-4 flex flex-col items-center text-center">

    {/* Emoji Badge */}
    <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] animate-bounce">
      📢 <span className="font-semibold">Job Opening Alert !!</span> 
      <span className="font-semibold">🚖</span>
    </div>

    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FACC15]">
      We Are Hiring💼
    </h1>

    {/* Subtitle */}
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
      Join our team and help provide reliable transportation services to the ThalaiNagram community ✨
    </p>

  </div>
</section>



      {/* Job Listing Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Job Card */}
            <div className="relative overflow-hidden bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 sm:p-8 md:p-12 transition-transform duration-300 hover:-translate-y-2">
            {/* Soft Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#FACC15]/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FACC15]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>


              {/* Job Title */}
              <div className="text-center mb-8">
                <div className="inline-block bg-[#FACC15] bg-opacity-10 rounded-full p-4 mb-4">
                  <svg className="w-16 h-16 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">Taxi Driver Trainee</h2>
                <p className="text-gray-600 text-lg">Full-time Position</p>
              </div>

              {/* Benefits Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center">
                  <svg className="w-6 h-6 text-[#FACC15] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                     key={index}
                     className="group flex items-start space-x-4 p-5 bg-gray-50 rounded-xl hover:bg-[#FACC15]/10 transition-all duration-300 hover:shadow-md"
                    >

                      <svg
                        className="w-7 h-7 text-[#FACC15] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {benefit.icon}
                      </svg>
                      <div>
                        <h4 className="font-semibold text-[#0F172A]">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

{/* Requirements Section */}
<div className="mb-10">
  <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center">
    <svg className="w-6 h-6 text-[#FACC15] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
    Requirements
  </h3>

  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {requirements.map((req, index) => (
      <li
        key={index}
        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#FACC15]/10 transition-all duration-300"
      >
        <span className="mt-1 text-[#FACC15]">✔</span>
        <span className="text-gray-700">{req}</span>
      </li>
    ))}
  </ul>
</div>


              {/* Apply Now Button */}
              <div className="text-center">
              <button
                onClick={() => setShowApplyForm(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACC15] to-[#FDE047] text-[#0F172A] px-12 py-4 rounded-xl font-bold text-lg shadow-lg shadow-yellow-400/40 hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {showApplyForm && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-xl rounded-2xl p-8 shadow-2xl relative">

      {/* Close Button */}
      <button
        onClick={() => setShowApplyForm(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-2 text-[#0F172A]">
        Taxi Driver Trainee Job Application
      </h2>
      <p className="text-gray-600 mb-6">
        Fill the form below to apply for Taxi Driver Trainee position
      </p>

      <form className="space-y-4" onSubmit={handleApplicationSubmit}>

      <input
  type="text"
  name="characterName"
  value={applicationData.characterName}
  onChange={handleApplicationChange}
  placeholder="Your IC Character Name"
  required
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FACC15]"
/>

<input
  type="tel"
  name="phone"
  value={applicationData.phone}
  onChange={handleApplicationChange}
  placeholder="Your IC Phone Number"
  required
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FACC15]"
/>

<input
  type="number"
  name="age"
  value={applicationData.age}
  onChange={handleApplicationChange}
  placeholder="Age"
  required
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FACC15]"
/>

<input
  type="text"
  name="discord"
  value={applicationData.discord}
  onChange={handleApplicationChange}
  placeholder="Discord Username"
  required
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FACC15]"
/>

<textarea
  rows={3}
  name="reason"
  value={applicationData.reason}
  onChange={handleApplicationChange}
  placeholder="Why do you want this job?"
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FACC15]"
/>


        <button
          type="submit"
          className="w-full bg-[#FACC15] text-[#0F172A] py-3 rounded-lg font-bold hover:bg-[#FDE047] transition"
        >
          Submit Application
        </button>

      </form>

      {showSuccess && (
  <p className="mt-4 text-center text-green-700 font-semibold text-lg">
    ✅ Thanks For Your Interest!  
    <br />
    Our HR Team Will Get Back To You Soon !!
  </p>
)}

    </div>
  </div>
)}



    </>
  )
}
