'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LoadingScreen from '@/components/LoadingScreen'

export default function RootPage() {
  const router = useRouter()

  const handleLoadingComplete = () => {
    // Redirect to /home after loading completes
    router.push('/home')
  }

  return <LoadingScreen onComplete={handleLoadingComplete} />
}
