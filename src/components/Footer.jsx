import { ArrowUp, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap items-center justify-between'>
            <p className='text-sm '>Copyright &copy; {new Date().getFullYear()} Vyom Modi. All right reserved.</p>

            <div className='flex space-x-4 justify-between items-center'>
                    <div className='flex space-x-4 justify-center'>
                        <a 
                            href="https://github.com/crazybhai8" 
                            target="_blank" 
                            aria-label="Github Profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
                            >
                            <Github size={20} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/vyom-modi-9b0815275/" 
                            target="_blank" 
                            aria-label="LinkedIn Profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
                            >
                            <Linkedin size={20} />
                        </a>

                        <div className="flex gap-4">
                        <a 
                            href="https://x.com/modi_vyom69927" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Twitter Profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
                        >
                            <Twitter size={20} />
                        </a>
                        <a 
                            href="https://www.instagram.com/vyom_0.8/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram Profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
                        >
                            <Instagram size={20} />
                        </a>
                        </div>
                    </div>
                
                <a href="#hero" className=' inline-flex items-center justify-center rounded-full w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300'>
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
    )
}

export default Footer
