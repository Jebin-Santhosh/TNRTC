'use client'

import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [type, setType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    if (!type) {
      alert("Please select Feedback or Complaint")
      return
    }
  
    try {
      await addDoc(collection(db, type), {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        type: type,
        createdAt: serverTimestamp(),
      })
  
      setShowSuccess(true)
      setFormData({ name: '', phone: '', message: '' })
      setType("")
  
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
  
    } catch (error) {
      console.error("Firebase Error:", error)
      alert("Failed to submit. Try again.")
    }
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#FACC15]">Contact Us📞</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, or support
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
  {/* CENTER TEXT */}
  <div className="text-center flex flex-col items-center mt-6 mb-12">
    <h2 className="text-5xl font-bold text-[#0F172A] mb-3">
      Champions of our success story
    </h2>

    <div className="w-24 h-1 bg-[#FACC15] mb-6 rounded-full"></div>

    <p className="text-gray-700 leading-relaxed max-w-xl mx-auto">
    TNRTC has come a long way since its inception. Founded by Mr. MiniBot, with a vision to build a reliable and efficient transportation system, TNRTC has grown through dedication, discipline, and a strong commitment to quality service. We have created a trustworthy network for our community, and our constant goal is to improve and redefine the travel experience for our customers.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 justify-center">

      {/* Left Image + NAME */}
      <div className="flex justify-center lg:justify">
        <div className="flex flex-col items-center">
        <Image
        src="/minibot.png"
        alt="Mr. MiniBot"
        width={320}
        height={320}
        className="rounded-3xl border-8 border-[#FACC15] shadow-2xl"
      />
          <h3 className="mt-4 text-xl font-bold text-[#0F172A]">
            Mr.MiniBot
          </h3>
          <p className="text-gray-600 text-sm">
            TNRTC Founder
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE + NAME */}
      <div className="flex justify-center lg:justify">
        <div className="flex flex-col items-center">
        <Image
        src="/boss.jpg"
        alt="Jebin Santhosh"
        width={320}
        height={320}
        className="rounded-3xl border-8 border-[#FACC15] shadow-2xl"
      />
          <h3 className="mt-4 text-xl font-bold text-[#0F172A]">
            Jebin Santhosh
          </h3>
          <p className="text-gray-600 text-sm">
            TNRTC Boss
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


{/* Contact Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* LEFT – OFFICE CARD */}
      <div className="relative bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#020617] rounded-3xl shadow-2xl p-10 overflow-hidden">

        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #FACC15 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">
           <span className="text-white">VISIT OUR </span>
           <span className="text-[#FACC15]">TNRTC</span>{' '}
           <span className="text-cyan-400">OFFICE</span>
          </h2>

          <p className="text-gray-300 mb-6">
            Visit our office for bookings, support, or direct assistance from our team.
          </p>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FACC15]/10 text-[#FACC15] font-semibold mb-10">
            🕒 Open 10 AM - 2 AM
          </span>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#FACC15]/20 p-3 rounded-xl">📍</div>
              <div>
                <p className="text-white font-semibold">TNRTC Office Location</p>
                <p className="text-gray-300 text-sm">8041, TNRTC Bus Stand, ThalaiNagaram</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#FACC15]/20 p-3 rounded-xl">📞</div>
              <div>
                <p className="text-white font-semibold">Contact</p>
                <a href="tel:6803" className="text-gray-300 hover:text-[#FACC15]">
                  6803
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT – Feedback / COMPLAINT FORM */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-[#0F172A] mb-1">
       Your Experience Is Our Success !!
      </h2>
      <p className="mt-0 text-gray-600">
      📝 Leave your message below </p>


        {/* Type Selector */}
        <div className="mb-6">
        <select
  value={type}
  onChange={(e) => setType(e.target.value)}
  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm 
             focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:border-[#FACC15] 
             hover:border-[#FACC15]/50 transition-all duration-300 cursor-pointer"
>
  <option value="">-- Select Here --</option>
  <option value="feedback">⭐ Feedback</option>
  <option value="complaint">⚠️ Complaint</option>
</select>


        </div>

        {type && (
  <form onSubmit={handleSubmit} className="space-y-6">

    <input
      name="name"
      required
      value={formData.name}
      onChange={handleChange}
      placeholder="Character Name"
      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FACC15]"
    />

    <input
      name="phone"
      required
      value={formData.phone}
      onChange={handleChange}
      placeholder="IC Phone Number"
      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FACC15]"
    />

    <textarea
      name="message"
      rows={5}
      required
      value={formData.message}
      onChange={handleChange}
      placeholder={
        type === 'feedback'
          ? 'Write your valuable feedback here...'
          : 'What issue have you faced?'
      }
      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#FACC15]"
    />

<button
  type="submit"
  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#FACC15] to-[#FDE047] px-6 py-4 font-bold text-[#0F172A] text-lg shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-yellow-400/50 active:scale-[0.98]"
>
  {/* Shine animation */}
  <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>

  {/* Button content */}
  <span className="relative flex items-center justify-center gap-2">
    Submit
  </span>
</button>


  </form>
)}


        {showSuccess && (
          <p className="mt-6 text-green-700 font-semibold">
            ✅ Thank you! Your submission has been received.
          </p>
        )}
      </div>

    </div>
  </div>
</section>
    </>
  )
}
