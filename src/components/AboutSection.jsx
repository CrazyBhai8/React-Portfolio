import { Briefcase, Bug, Code } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
    return (
        <section id="about" className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md:text-4xl font-bold md:mb-11 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl md:text-3xl font-semibold'>I'm Vyom Modi, a web development and bug hunting enthusiast.</h3>
                        <p className='text-muted-foreground'>
                            Over time, I''ve reported several bugs through bug bounty platforms, learning how real-world systems work — and sometimes break. This hands-on experience has taught me to think like both a builder and a breaker.
                        </p>

                        <p className='text-muted-foreground'>
                            I'm always looking to improve my skills, work on interesting projects, and stay up to date with the latest in development and cybersecurity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className='cosmic-button'>Get In Touch</a>
                            <a href="/cv.pdf" target='_blank' rel="noopener noreferrer" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>Download CV</a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>Web Development</h4>
                                    <p className='text-foreground'>
                                        Creating responsive and web application modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bug className='h-6 w-6 text-primary' />
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>Bug Hunting</h4>
                                    <p className='text-foreground'>
                                        Identifying and reporting security vulnerabilities in web applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>
                                <div className="text-left">
                                    <h4 className='font-semibold text-lg'>Work Experience</h4>
                                    <p className='text-foreground'>
                                        Studying with experience in web development and bug hunting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection
