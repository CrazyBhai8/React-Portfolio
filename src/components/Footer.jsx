import { ArrowUp, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-12 px-4 bg-card border-t border-border mt-12'>
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                
                <p className='text-sm'>
                    &copy; {new Date().getFullYear()} Vyom Modi. All rights reserved.
                </p>

                <div className='flex-1 flex justify-center items-center'>
                    <p className='text-sm font-semibold max-w-md text-center hover:text-primary/80 transition-colors duration-300'>
                        "I am not who you think I am; <br />
                        I am not who I think I am; <br />
                        I am who I think, you think I am."
                    </p>
                </div>

                <div className='flex space-x-3 items-center'>
                    <a href="https://github.com/crazybhai8" target="_blank" aria-label="Github Profile"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/vyom-modi-9b0815275/" target="_blank" aria-label="LinkedIn Profile"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://x.com/modi_vyom69927" target="_blank" aria-label="Twitter Profile"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
                        <Twitter size={20} />
                    </a>
                    <a href="https://www.instagram.com/vyom_0.8/" target="_blank" aria-label="Instagram Profile"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
                        <Instagram size={20} />
                    </a>
                    <a href="#hero" aria-label="Back to top"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
                        <ArrowUp size={20} />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
