'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface LoadingScreenProps {
  onComplete?: () => void
  redirectTo?: string
}

export default function LoadingScreen({ onComplete, redirectTo }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Call onComplete or redirect after a brief delay
          setTimeout(() => {
            if (onComplete) {
              onComplete()
            } else if (redirectTo) {
              router.push(redirectTo)
            } else {
              router.push('/home')
            }
          }, 500)
          return 100
        }
        // Accelerate progress (faster at start, slower at end)
        const increment = prev < 50 ? 2 : prev < 80 ? 1.5 : 0.8
        return Math.min(prev + increment, 100)
      })
    }, 50) // Update every 50ms for smooth animation

    return () => clearInterval(interval)
  }, [onComplete, redirectTo, router])

  // Animated dots effect
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === '') return '.'
        if (prev === '.') return '..'
        if (prev === '..') return '...'
        return ''
      })
    }, 500) // Change dots every 500ms

    return () => clearInterval(dotsInterval)
  }, [])

  // Calculate car position based on progress (from left to right)
  const carPosition = `${progress}%`

  return (
    <div className="fixed inset-0 bg-[#0F172A] flex items-center justify-center z-50 overflow-hidden">
      {/* Background with trees */}
      <div className="absolute inset-0">
        {/* Trees on left side */}
        <div className="absolute left-0 bottom-32 w-32 h-64 opacity-30">
          {[...Array(3)].map((_, i) => (
            <div
              key={`left-tree-${i}`}
              className="absolute"
              style={{
                left: `${i * 40}px`,
                bottom: `${i * 20}px`,
              }}
            >
              <div className="text-4xl">🌳</div>
            </div>
          ))}
        </div>

        {/* Trees on right side */}
        <div className="absolute right-0 bottom-32 w-32 h-64 opacity-30">
          {[...Array(3)].map((_, i) => (
            <div
              key={`right-tree-${i}`}
              className="absolute"
              style={{
                right: `${i * 40}px`,
                bottom: `${i * 20}px`,
              }}
            >
              <div className="text-4xl">🌳</div>
            </div>
          ))}
        </div>
      </div>

      {/* Road Background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gray-800">
        {/* Street Lights on Left Side - Horizontal */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`left-light-${i}`}
            className="absolute bottom-32"
            style={{
              left: `${(i + 1) * 15}%`,
            }}
          >
            {/* Pole */}
            <div className="w-1 h-16 bg-gray-600 mx-auto"></div>
            {/* Light */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FACC15] rounded-full shadow-lg"
              style={{
                boxShadow: '0 0 20px rgba(250, 204, 21, 0.6)',
              }}
            ></div>
          </div>
        ))}

        {/* Street Lights on Right Side - Horizontal */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`right-light-${i}`}
            className="absolute bottom-32"
            style={{
              right: `${(i + 1) * 15}%`,
            }}
          >
            {/* Pole */}
            <div className="w-1 h-16 bg-gray-600 mx-auto"></div>
            {/* Light */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FACC15] rounded-full shadow-lg"
              style={{
                boxShadow: '0 0 20px rgba(250, 204, 21, 0.6)',
              }}
            ></div>
          </div>
        ))}

        {/* Road Lines - Center dashed line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5">
          {[...Array(20)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-full bg-yellow-400 w-12"
              style={{
                left: `${i * 5}%`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Road Markings - Side lines */}
        <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-yellow-400 opacity-50"></div>
        <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-yellow-400 opacity-50"></div>
      </div>

      {/* Car Animation on Road - Moving from left to right */}
      <div className="absolute bottom-40 left-0 right-0 h-20">
        <div
          className="absolute bottom-0 text-5xl md:text-7xl transition-all duration-75 ease-linear"
          style={{
            left: carPosition,
            transform: 'translateX(-50%) scaleX(-1)', // Flip car to face right
          }}
        >
          🚗
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 -mt-16 md:-mt-20">
        {/* Car Animation above TNRTC text - Yellow Taxi */}
        <div className="mb-8 relative h-24">
          <div
            className="absolute bottom-0 transition-all duration-75 ease-linear"
            style={{
              left: carPosition,
              transform: 'translateX(-50%)',
              width: '100px',
              height: '100px',
            }}
          >
            <svg
              viewBox="0 0 120 100"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}
            >
              {/* Taxi Body - Yellow with gradient effect */}
              <defs>
                <linearGradient id="taxiBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FDE047" />
                  <stop offset="50%" stopColor="#FACC15" />
                  <stop offset="100%" stopColor="#EAB308" />
                </linearGradient>
                <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              
              {/* Main Body */}
              <rect x="10" y="45" width="100" height="40" rx="8" fill="url(#taxiBodyGradient)" />
              
              {/* Roof */}
              <rect x="20" y="20" width="80" height="30" rx="6" fill="url(#taxiBodyGradient)" />
              
              {/* Checkered Pattern on Side */}
              <g opacity="0.9">
                {/* Black squares */}
                <rect x="35" y="50" width="8" height="8" fill="#0F172A" />
                <rect x="51" y="50" width="8" height="8" fill="#0F172A" />
                <rect x="67" y="50" width="8" height="8" fill="#0F172A" />
                <rect x="43" y="66" width="8" height="8" fill="#0F172A" />
                <rect x="59" y="66" width="8" height="8" fill="#0F172A" />
                <rect x="75" y="66" width="8" height="8" fill="#0F172A" />
                {/* White squares */}
                <rect x="43" y="50" width="8" height="8" fill="#FFFFFF" />
                <rect x="59" y="50" width="8" height="8" fill="#FFFFFF" />
                <rect x="35" y="66" width="8" height="8" fill="#FFFFFF" />
                <rect x="51" y="66" width="8" height="8" fill="#FFFFFF" />
                <rect x="67" y="66" width="8" height="8" fill="#FFFFFF" />
              </g>
              
              {/* Taxi Light/Sign on Roof */}
              <rect x="50" y="12" width="20" height="8" rx="2" fill="#E5E7EB" />
              <rect x="52" y="14" width="16" height="4" rx="1" fill="#FACC15" />
              
              {/* Windows */}
              <rect x="25" y="25" width="22" height="18" rx="3" fill="url(#windowGradient)" />
              <rect x="53" y="25" width="22" height="18" rx="3" fill="url(#windowGradient)" />
              <rect x="81" y="25" width="22" height="18" rx="3" fill="url(#windowGradient)" />
              
              {/* Window Frames */}
              <rect x="25" y="25" width="22" height="18" rx="3" fill="none" stroke="#0F172A" strokeWidth="1" opacity="0.3" />
              <rect x="53" y="25" width="22" height="18" rx="3" fill="none" stroke="#0F172A" strokeWidth="1" opacity="0.3" />
              <rect x="81" y="25" width="22" height="18" rx="3" fill="none" stroke="#0F172A" strokeWidth="1" opacity="0.3" />
              
              {/* Wheels */}
              <circle cx="25" cy="90" r="10" fill="#1F2937" />
              <circle cx="95" cy="90" r="10" fill="#1F2937" />
              <circle cx="25" cy="90" r="6" fill="#4B5563" />
              <circle cx="95" cy="90" r="6" fill="#4B5563" />
              <circle cx="25" cy="90" r="3" fill="#6B7280" />
              <circle cx="95" cy="90" r="3" fill="#6B7280" />
              
              {/* Headlight */}
              <circle cx="110" cy="55" r="5" fill="#FDE047" />
              <circle cx="110" cy="60" r="3" fill="#FFFFFF" />
              
              {/* Side Mirror */}
              <ellipse cx="15" cy="50" rx="3" ry="5" fill="#FACC15" />
            </svg>
          </div>
        </div>

        {/* Brand Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="TNRTC Logo"
              width={500}
              height={200}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Progress Bar with slide-in animation */}
        <div className="max-w-md mx-auto mb-4 animate-slide-up">
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#FACC15] to-[#FDE047] rounded-full transition-all duration-75 ease-linear shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Percentage with scale animation */}
        <p className="text-2xl md:text-3xl font-bold text-[#FACC15] animate-scale-in">
          {Math.round(progress)}%
        </p>

        {/* Loading Text with animated dots */}
        <p className="text-sm md:text-base text-gray-400 mt-2 animate-fade-in">
          Loading your journey
          <span className="inline-block w-8 text-left">{dots}</span>
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FACC15] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FACC15] rounded-full opacity-5 blur-3xl"></div>
    </div>
  )
}
