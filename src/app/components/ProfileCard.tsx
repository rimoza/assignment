'use client'

import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import Button from './Button'

const ProfileCard = ({ profile, name, isActive }: any) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-6 transition-all duration-300  w-[292px] h-[408px] ${
        isActive ? 'z-10 scale-105 shadow-2xl' : 'scale-95 opacity-70'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex flex-col items-center mb-4'>
        <div className='relative'>
          <div className='rounded-full bg-gray-200 overflow-hidden'>
            <img
              src={profile.avatar}
              alt={profile.name}
              className='w-24 h-24 object-cover'
            />
          </div>
          <div className='absolute bottom-0 right-0'>
            <ReactCountryFlag
              countryCode={profile.country}
              svg
              style={{ width: '1.5em', height: '1.5em' }}
            />
          </div>
        </div>
        <h3 className='text-xl text-center text-black font-bold'>{profile.name}</h3>
        <p className='text-xl text-blue-600 font-bold mb-8'>
          {profile.title} • {profile.experience}
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-2 mb-4'>
        {profile.skills.map((skill: any, index: any) => (
          <span
            key={index}
            className='inline-block border-2 rounded-md px-2 py-2 text-xl text-gray-700'
          >
            {skill}
          </span>
        ))}
      </div>
      <div className='flex justify-center gap-2 mb-4'>
        {profile.languages.map((lang: any, index: any) => (
          <span
            key={index}
            className='inline-block border-2 rounded-md px-2 py-2 text-base leading-3 text-gray-700'
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProfileCard;