'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='relative'>
      <div className='flex justify-between items-center mb-10 px-4 py-4 md:py-0'>
        <Image src='/navLogo.svg' alt='logo' width={100} height={100} />
        
        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-4'>
          <Link
            href='#'
            className='flex items-center text-lg font-bold hover:underline'
          >
            채용
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className="ml-1"
            >
              <path
                d='M7.90629 11.3334C7.77494 11.3336 7.64849 11.2835 7.55296 11.1934L2.80629 6.44002C2.75717 6.39425 2.71777 6.33905 2.69044 6.27772C2.66311 6.21638 2.64842 6.15017 2.64723 6.08304C2.64605 6.0159 2.6584 5.94922 2.68355 5.88696C2.70869 5.8247 2.74612 5.76814 2.7936 5.72067C2.84108 5.67319 2.89764 5.63576 2.9599 5.61061C3.02216 5.58546 3.08884 5.57311 3.15598 5.5743C3.22311 5.57548 3.28932 5.59018 3.35065 5.6175C3.41199 5.64483 3.46719 5.68423 3.51296 5.73336L7.91296 10.1334L12.493 5.72669C12.5876 5.63466 12.7143 5.58316 12.8463 5.58316C12.9783 5.58316 13.105 5.63466 13.1996 5.72669C13.2933 5.82044 13.3459 5.94752 13.3459 6.08002C13.3459 6.21252 13.2933 6.33961 13.1996 6.43336L8.26629 11.1867C8.21983 11.2349 8.16381 11.2728 8.10181 11.2981C8.03981 11.3234 7.97321 11.3354 7.90629 11.3334Z'
                fill='white'
              />
            </svg>
          </Link>
          <Link href='#' className='text-lg font-bold hover:underline'>
            해외 개발자 활용 서비스
          </Link>
        </nav>
        
        <div className='hidden md:block'>
          <Button variant='primary'>문의하기</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className='md:hidden absolute top-full left-0 right-0 bg-[#3795E8] py-4 px-4 z-50'>
          <Link
            href='#'
            className='block py-2 text-lg font-bold text-white hover:underline'
          >
            채용
          </Link>
          <Link
            href='#'
            className='block py-2 text-lg font-bold text-white hover:underline'
          >
            해외 개발자 활용 서비스
          </Link>
          <div className='mt-4'>
            <Button variant='primary' fullWidth>문의하기</Button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar