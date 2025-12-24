import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import DitherShader from './ui/dither-shader'
import { TextHoverEffect } from './ui/text-hover-effect'

export default function HeroSection() {
    return (
        <>
        <main className="overflow-hidden">
  <section className="px-6 lg:px-12 py-24">
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
          <Link href= "/form">
          <Button size="lg" className="rounded-full">
            Lets Start 
          </Button>
          </Link>
         
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
          relative overflow-hidden rounded-2xl border
          shadow-[0_0_25px_rgba(220,38,38,0.35)]
          animate-glow
          hover:shadow-[0_0_55px_rgba(220,38,38,0.8)]
          transition-shadow duration-500
          max-w-full
        "
      >
        <DitherShader
          src="https://imgs.search.brave.com/rvSusUtj-mH4SQBHLipduzmd8_MsBFCf6qoan9jA-7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS83Lzc1/L2VxYjZuWC5qcGc"
          gridSize={2}
          ditherMode="bayer"
          colorMode="grayscale"
          animated
          className=" h-80 w-[320px]
      sm:h-96 sm:w-105
      lg:h-105 lg:w-130"
        />
      </div>

    </div>
  </section>

  {/* TEXT EFFECT */}
  <div className="h-40 flex items-center justify-center">
    <TextHoverEffect text="CARDIO CHECK" />
  </div>
</main>

        </>
    )
}
