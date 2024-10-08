'use client'

import { useState, useEffect, useRef } from 'react'
import Button from './Button'
import { useServices } from '../hooks/useServices'
import { Globe, Image, Package, Crosshair } from 'lucide-react'

const iconMap = {
  'Overseas Marketing': Globe,
  Publisher: Image,
  'Cad Win': Package,
  'Overseas Sales': Crosshair,
}

export default function ServiceButtons() {
  const { services } = useServices()
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const visibleServices = 5

  useEffect(() => {
    if (!services.length) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [services])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${
        (currentIndex * 100) / visibleServices
      }%)`
    }
  }, [currentIndex])

  if (!services) return <div>Loading services...</div>

  const extendedServices = [...services, ...services.slice(0, visibleServices)]

  return (
    <div className='w-full overflow-hidden'>
      <div
        ref={containerRef}
        className='flex transition-transform duration-500 ease-in-out'
        style={{
          width: `${(extendedServices.length * 100) / visibleServices}%`,
        }}
      >
        {extendedServices.map((service, index) => {
          const IconComponent =
            iconMap[service.name as keyof typeof iconMap] || Globe
          return (
            <div
              key={`${service.id}-${index}`}
              className='w-full max-w-xs flex-shrink-0 px-2'
            >
              <Button
                variant='accent'
                fullWidth
                icon={IconComponent}
                className='text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap overflow-hidden text-ellipsis py-4 bg-white/30 text-white border-none items-start'
              >
                {service.name}
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
