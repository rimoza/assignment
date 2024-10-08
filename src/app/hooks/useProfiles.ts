'use client'

import { useState, useEffect } from 'react'

interface Profile {
  id: number
  name: string
  role: string
  experience: string
  salary: string
  skills: string[]
  languages: string[]
  education: string
  availability: string
  imageUrl: string
}

export function useProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/profiles')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch profiles')
        }
        return res.json()
      })
      .then((data: Profile[]) => {
        setProfiles(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  return { profiles, isLoading, error }
}
