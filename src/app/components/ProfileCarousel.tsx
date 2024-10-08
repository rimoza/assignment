'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { useProfiles } from '../hooks/useProfiles'
import ProfileCard from './ProfileCard'
import Button from './Button'

const ProfileCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const { profiles, isLoading, error } = useProfiles()

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1))
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className='relative max-w-5xl mx-auto pr-20'>
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold fade-in'>
        월 100만원
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        {profiles.slice(0, 3).map((profile, index) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            name={profile.name}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      <Button
        onClick={handlePrev}
        variant='outline'
        className='absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 fade-in'
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant='outline'
        onClick={handleNext}
        className='absolute right-10 top-1/2 transform -translate-y-1/2 rounded-full p-2 fade-in'
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  )
}

export default ProfileCarousel
