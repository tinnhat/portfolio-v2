'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ExpCard from '@/components/ExpCards'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const auraRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateAuraPosition = (e: MouseEvent) => {
      if (auraRef.current) {
        auraRef.current.style.setProperty('--mouse-x', `${e.clientX}px`)
        auraRef.current.style.setProperty('--mouse-y', `${e.clientY}px`)
      }
    }
    window.addEventListener('pointermove', updateAuraPosition)

    return () => {
      window.removeEventListener('pointermove', updateAuraPosition)
    }
  }, [])
  return (
    <main>
      <Head>
        <style jsx global>{`
          body {
            font-family: '${inter.style.fontFamily}';
          }
        `}</style>
      </Head>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div ref={auraRef} className="mouse-aura" />
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Nav />
          <main className="flex flex-col pt-6 lg:pt-24 lg:w-1/2 lg:py-24 gap-8">
            <About />
            <ExpCard />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </main>
  )
}
