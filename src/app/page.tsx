import { Suspense } from 'react'

import ServiceButtons from './components/ServiceButtons'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function Home() {
  return (
    <>
      <div className='bg-gradient-to-b from-[#00C2CB] to-[#3795E8] min-h-screen text-white p-8'>
        <div className='container mx-auto'>
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div>Loading services...</div>}>
              <ServiceButtons />
            </Suspense>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}