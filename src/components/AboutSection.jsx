import { Briefcase, Code, User } from 'lucide-react'
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
                        <h3 className='text-2xl md:text-3xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <p className='text-muted-foreground'>
                            Lorem ipsum dolor sit amet adipisicing elit. Reprehenderit odit commodi voluptatum expedita maiores, nulla, ullam error velit ea minus obcaecati nam fuga!
                        </p>

                        <p className='text-muted-foreground'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui eveniet aliquam maiores atque ad itaque eius aliquid dolor, reiciendis, voluptate totam?
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className='cosmic-button'>Get In Touch</a>
                            <a href="#projects" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>Download CV</a>
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
                                    <User className='h-6 w-6 text-primary' />
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
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>
                                    <div className="text-left">
                                        <h4 className='font-semibold text-lg'>Web Development</h4>
                                        <p className='text-foreground'>
                                            Creating responsive and web application modern frameworks. 
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
