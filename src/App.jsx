import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesRibbon from './components/ServicesRibbon';
import AboutLegacy from './components/AboutLegacy';
import StatsBanner from './components/StatsBanner';
import FeaturedProjects from './components/FeaturedProjects';
import RootedPresence from './components/RootedPresence';
import WhyChooseUs from './components/WhyChooseUs';
import HowWeApproach from './components/HowWeApproach';
import Testimonials from './components/Testimonials';
import PreFooterNewsletter from './components/PreFooterNewsletter';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Residential Construction');

  const handleOpenBooking = (serviceName = 'Residential Construction') => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      {/* 1. Header / Navbar */}
      <Navbar onBookCall={() => handleOpenBooking('Consultation Call')} />

      <main className="flex-grow-1">
        {/* 2. Hero Section */}
        <Hero onExplore={() => handleOpenBooking('Hero Enquiry')} />

        {/* 3. Services Ribbon */}
        <ServicesRibbon />

        {/* 4. About Us: Crafting a Legacy */}
        <AboutLegacy onLearnMore={() => handleOpenBooking('Legacy & Architecture Consultation')} />

        {/* 5. Stats Banner */}
        <StatsBanner />

        {/* 6. Featured Projects */}
        <FeaturedProjects onSelectProject={(project) => handleOpenBooking(`Project: ${project.tag}`)} />

        {/* 7. Our Presence: Rooted in Kodaikanal */}
        <RootedPresence onExplorePresence={() => handleOpenBooking('Kodaikanal Presence & Land Planning')} />

        {/* 8. Why Choose Us: Built on Trust, Crafted with Care */}
        <WhyChooseUs />

        {/* 9. Our Process: How We Approach */}
        <HowWeApproach />

        {/* 10. Reviews: Rooted in Kodaikanal */}
        <Testimonials />

        {/* 11. Pre-Footer Mission & Newsletter */}
        <PreFooterNewsletter />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Interactive Booking Modal */}
      <BookingModal 
        isOpen={modalOpen} 
        onClose={handleCloseBooking} 
        defaultService={selectedService}
      />
    </div>
  );
}
