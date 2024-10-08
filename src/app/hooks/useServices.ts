'use client'

import { useState, useEffect } from 'react'

export interface Service {
  id: number
  name: string
  description: string
  iconName: string
}

export function useServices() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then(setServices)
  }, [])

  return { services }
}
