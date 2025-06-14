import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap items-center justify-between'>
        <p className='text-sm '>Copyright &copy; {new Date().getFullYear()} Vyom Modi. All right reserved.</p>

        <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300'>
            <ArrowUp size={20}/>
        </a>
    </footer>
  )
}

export default Footer
