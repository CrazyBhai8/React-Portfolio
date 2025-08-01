import { Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Experience", href: "#experience"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Certificates", href: "#certificates"},
    {name: "Contact", href: "#contact"},
    {name: "Don't Go", href: "/testing"},
]



const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'}`}>
        <div className="container flex items-center justify-between">
            <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
                <span className='relative z-10'>
                    <span className='text-glow text-foreground'>Vyom</span>Portfolio
                </span>
            </a>

            {/* desktop nav */}
            <div className='hidden mr-5 md:flex p-2 space-x-8'>
                {navItems.map((item, key) => (
                    <a href={item.href} key={key} className='text-foreground/80 hover:text-primary transition-colors duration-300'>{item.name}</a>
                ))}
            </div>
            
            {/* mobile nav */}

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}  className='md:hidden p-2 mr-5 text-foreground z-50 ' aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}> {isMenuOpen ? <X size={24} />: <Menu size={24} /> } </button>

            <div className= {`fixed w-screen h-screen inset-0  bg-background/95  backdrop-blur-md flex-col flex z-40 justify-center items-center transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} `}>
                <div className='flex flex-col space-y-8 text-xl'>
                    {navItems.map((item, key) => (
                        <a href={item.href} key={key} className='text-foreground/80 hover:text-primary transition-colors duration-300' onClick={() => setIsMenuOpen(false)}>{item.name}</a>
                    ))}
                </div>
                    <Link to="/testing">Go to Testing</Link>
            </div>

        </div>
    </nav>
  )
}

export default Navbar
