import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className="container max-w-4xl mx-auto text-center z-10"></div>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                    <span className='opacity-0 animate-fade-in '>Hi, I'm </span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'>Vyom</span>
                    <span className='text-gradient opacity-0 animate-fade-in-delay-2'> Modi</span>
                </h1>

                <p className='text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 mx-auto animate-fade-in-delay-3'>
                   I'm passionate about building websites and exploring security vulnerabilities. 
                   I''ve reported several bugs through bug bounty platforms and love combining 
                   development with ethical hacking.
                </p>

                <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                    <a href='#projects' className='cosmic-button'>
                        view My Work
                    </a>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'> Scorll</span>
                <ArrowDown className='w-5 h-5 text-primary' />

            </div>
    </section>
  )
}

export default HeroSection
