import { Description } from '@radix-ui/react-toast'
import React from 'react'

const experience = [
    {id:1, company:"Soluner Tech Solutions", position:"MERN Stack Developer", duration:"June 2025 - Present", logo:"/company%20logos/solunertech.svg"},
    {id:2, company:"The Karma Foundation", position:"Volunteer", duration:"June 2024 - June 2024", description:`- Conducted sessions in rural schools promoting reading habits. <br>- Helped students improve communication and confidence. <br> - Supported educational initiatives driven by college programs` , logo: "/company%20logos/Karma-Foundation-Logo.webp"},
]

const ExperienceSection = () => {
  return (
    <section id='experience' className='py-24 px-4'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> Work <span className='text-primary'> Experience </span></h2>
            <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                Here is a quick summary of my work experiences.
            </p> 

            <div className="grid grid-rows-1 gap-8">
                {experience.map((experience, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 p-6">
                            <div className="flex flex-col items-center text-center">
                                <img src={experience.logo} loading="lazy" alt="Logo" className='w-20 h-20 rounded-full object-contain mb-2' />
                                <h2 className='font-semibold hover:text-primary transition-colors duration-300'>{experience.company}</h2>
                            </div>
                            <div>
                                <h2 className='text-2xl font-semibold hover:text-primary transition-colors duration-300'>{experience.position}</h2>
                                <p className="text-sm mt-2 text-left" dangerouslySetInnerHTML={{ __html: experience.description }}/>
                            </div>
                            <div>
                                <p className='text-sm'>{experience.duration}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
        
    </section>
  )
}

export default ExperienceSection
