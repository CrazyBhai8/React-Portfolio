import { Link } from 'lucide-react'
import React, { useState } from 'react'
const certificates = [
    { name: 'CCNA: Introduction to Networks', date: '17-05-2024',category: 'Cisco', image: '/certificates/CCNA.png', link: 'https://www.credly.com/badges/3ca4b609-b439-44c0-9d0b-e54cae38174f' },
    { name: 'Python 101 for Data Science', date: '03-04-2025',category: 'IBM', image: '/certificates/python_dataScience.png', link: 'https://courses.guni.skillsnetwork.site/certificates/aef9d6ecfdc54cbda18804bf779f70c0' },
    { name: 'Java Fundamentals', date: '11-11-2024',category: 'IBM', image: '/certificates/java_fundamentals.png', link: 'https://courses.guni.skillsnetwork.site/certificates/1fec52f3a0fd46ae8c9bcfba5545ab82' },
    { name: 'Introduction to SQL', date: '22-08-2024',category: 'DataCamp', image: '/certificates/sql_intro.png', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/40012b17fe9f7cb5fa96f36734f2c42fd89fa099' },
    { name: 'Data Manipulation in SQL', date: '25-10-2024',category: 'DataCamp', image: '/certificates/sql_data_manipulation.png', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/207f4d8d2489b3c82de9b3312323ef2acb0b879d' },
    { name: 'Introduction to Python', date: '03-04-2025',category: 'DataCamp', image: '/certificates/python_intro.png', link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/95687cb06592283e8d31f36ed3d443af8cf17b82' },
    { name: 'The Complete Certified in Cybersecurity (CC) course ISC2 124', date: '2024',category: 'Udemy', image: '/certificates/cc_course.png', link: 'https://www.udemy.com/certificate/UC-f9c8cd5c-a70f-47b9-bd8a-8bc084f59f4d/' },
    { name: "The Karma Foundetion Internship", date: "15 Days", category: "Job", image: "/certificates/karma_foun.png", link: "" },
]

const categories = ["All", "IBM", "Udemy", "DataCamp", "Cisco", "Job"]

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
                My <span className="text-primary">Certificates</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${
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
