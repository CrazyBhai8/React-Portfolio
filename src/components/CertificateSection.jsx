import { Link } from 'lucide-react'
import React, { useState } from 'react'
import { categories, certificates } from "../data/certificates";

const CertificateSection = () => {
    const [activeCategory, setActiveCategory] = useState("All")

    const filterCertificates = certificates.filter((certificate) => {
        if (activeCategory === "All") return true
        return certificate.category === activeCategory
    })
    
    return (
        <section id="certificates" className=' px-4 relative'>
            <div className="container mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Certification</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 rounded-full cursor-pointer font-semibold transition-colors duration-300 ${
                    activeCategory === category
                        ? "bg-primary text-white"
                        : "bg-muted text-foreground"
                    }`}
                >
                    {category}
                </button>
                ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterCertificates.map((certificate, key) => (
                <div
                    key={key}
                    className="group  rounded-xl bg-card overflow-hidden shadow-md card-hover transition-shadow duration-300"
                >
                    <div className="w-full aspect-[4/3] bg-muted overflow-hidden">
                    <a href={certificate.link} target='_blank'>
                    <img
                        src={certificate.image}
                        alt={certificate.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    </a>
                    </div>
                    <div className='p-6'>
                        <h3 className='text-xl text-left font-semibold'>{certificate.name}</h3>
                        <p className='text-sm text-right'>{certificate.date}</p>
                    <div className=''>
                        <a href={certificate.link} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'> <Link /> </a>
                    </div>
                    </div>
                </div>

                ))}
            </div>
            </div>

        </section>
    )
}

export default CertificateSection
