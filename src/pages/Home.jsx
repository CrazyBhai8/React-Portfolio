import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CertificateSection from '../components/CertificateSection';
import CursorFollower from '../components/CursorFollower';
import ExperienceSection from '../components/ExperienceSection';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* theme Toggle */}
      <CursorFollower />
      <ThemeToggle />

      {/* Backgraound Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <CertificateSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home;