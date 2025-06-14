import { Instagram, Linkedin, Mail, Map, Phone, Send, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { useToast } from './hooks/use-toast'
const ContactSection = () => {
    const { toast } =useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: 'Message Sent!',
                description: "Thank you for your message. I'll get back to you soon.",
            })
            setIsSubmitting(false)
        },1500)
    }
  return (
    <section id='contact' className='py-24 px-4 relative '>
        <div className="container mx-auto max-w-5xl">
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In <span className='text-primary'> Touch</span>
            </h2>
            <p className='text-center mb-12 max-w-2xl mx-auto'>
                Have a question, idea, or just want to connect? We're always here to chat and would love to hear from you — drop us a message anytime!
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'> Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Email</h4>
                                <a href="mailto:vyommodi18@gmail.com" className="text-foreground/80 hover:text-primary max-w-0.5 transition-colors duration-300"> vyommodi18@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='mx-7'>
                                <h4 className="text-lg font-semibold mb-2"> Phone</h4>
                                <a href="tel:+916352794030" className="text-foreground/80 hover:text-primary  transition-colors duration-300"> +916352794030</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Map className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Location</h4>
                                <a className="text-foreground/80 hover:text-primary transition-colors duration-300"> Ahmedabad, Gujrat, India</a>
                            </div>
                        </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    <form action="" className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-2'> Your Name</label>
                            <input type="text" id='name' name='name' required className='w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary ' placeholder='Your Name'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium mb-2'> Your Email</label>
                            <input type="email" id='email' name='email' required className='w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary ' placeholder='name@example.com'/>
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium mb-2'> Your Message</label>
                            <textarea id='message' name='message' required className='w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none ' placeholder='I like to talk about...'/>
                        </div>
                        <button type='submit' disabled={isSubmitting} className='cosmic-button w-full flex items-center justify-center gap-2 ' onClick={handleSubmit}>
                            {isSubmitting? "Sending..." : "Send Message"}<Send size={16}/>
                        </button>
                        
                    </form>
                </div>
                </div>
                <div className="pt-8">
                    <h4 className='font-medium mb-4'> Connect With Me</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a href="https://www.linkedin.com/in/vyom-modi-9b0815275/" target='_blank'>
                            <Linkedin />
                        </a>    
                        <a href="https://x.com/modi_vyom69927" target='_blank'>
                            <Twitter />
                        </a>    
                        <a href="https://www.instagram.com/vyom_0.8/" target='_blank'>
                            <Instagram />
                        </a>    
                    </div>
                    
            </div>
        </div>
    </section>
  )
}

export default ContactSection
