import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'

import { TextHoverEffect } from './ui/text-hover-effect'
import Image from 'next/image'
import Features from './features-3'

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section className="px-6 lg:px-12 py-24 flex flex-col justify-between items-center">
          <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-10 mt-30">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
                AI-powered cardiac clarity
              </h1>

              <p className="mt-6 text-lg font-semibold line-spacing-tight text-muted-foreground">
                Check your cardio future risk with our machine learning model.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/form">
                  <Button size="lg" className="rounded-full">
                    Lets Start
                  </Button>
                </Link>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img src="./heart.png" alt='heart image' width={400} height={400} className='scale-200' />
            </div>

          </div>
          <div className='w-full'>

          <Features />
          </div>
        </section>


      </main>

    </>
  )
}
