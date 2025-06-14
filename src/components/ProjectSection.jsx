import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "HackAlert",
        description: "A simple blog web app built with React where users can write and publish their own blog posts.",
        image: "/projects/hackAlert.png",
        tags: ["React"],
        demoUrl: "https://crazybhai8.github.io/Hackalert/",
        githubUrl: "https://github.com/crazybhai8/Hackalert"
    },
    {
        id: 2,
        title: "File Guard",
        description: "A project enabling email OTP-based sign-up/login and allowing users to hide, view, and unhide hidden files on their system.",
        image: "/projects/fileGuard.png",
        tags: ["Java"],
        demoUrl: "https://crazybhai8.github.io/Hackalert/",
        githubUrl: "https://github.com/CrazyBhai8/Java-Project-FileGuard-using-Email-Authentication-MySQL"
    },
    {
        id: 3,
        title: "Travel With Us",
        description: "A responsive travel website UI built with HTML, CSS, and JavaScript, focusing purely on front-end design without any interactive features.",
        image: "/projects/travel.png",
        tags: ["Html", "Css", "Js"],
        demoUrl: "https://crazybhai8.github.io/Traveling-Website/",
        githubUrl: "https://github.com/crazybhai8/Traveling-Website"
    }
]

const ProjectSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'> Projects</span></h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my projects. Each project way carefully created to deliver the best user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={project.title} />
                        </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 text-xs border font-medium rounded-full ">{tag}</span>
                            ))}
                        </div>
                    
                        <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                        <p className='text-sm mb-4'>{project.description}</p>
                        <div className='flex  justify-between items-center'>
                                <div className="flex space-x-3 ">
                                    <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><ExternalLink size={20} /> </a>
                                    <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><Github size={20} /> </a>
                                </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='text-center mt-12'>
            <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/crazybhai8' target='_blank'>
                Check My Github <ArrowRight size={16} />
            </a>
        </div>
        </div>
        
    </section>
  )
}

export default ProjectSection
