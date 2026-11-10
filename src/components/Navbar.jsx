import React, { useState, useEffect } from 'react';

export default function Navbar({ onBookCall }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-custom">
        <div className="d-flex align-items-center justify-content-between">
          {/* Brand Logo */}
          <a href="#home" className="d-inline-flex align-items-center text-decoration-none">
            <img 
              src="/assets/brand-logo.webp" 
              alt="The Amman Constructions" 
              className="navbar-brand-logo"
              style={{ maxHeight: '46px', width: 'auto' }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            <a href="#home" className="nav-link-custom active">HOME</a>
            <a href="#about" className="nav-link-custom">ABOUT</a>
            <a href="#services" className="nav-link-custom">SERVICES</a>
            <a href="#projects" className="nav-link-custom">PROJECTS</a>
            <a href="#blog" className="nav-link-custom">BLOG</a>
          </nav>

          {/* Desktop Action Button */}
          <div className="d-none d-lg-block">
            <button 
              type="button" 
              onClick={onBookCall}
              className="btn-brand-orange btn-brand-pill text-uppercase"
              style={{ fontSize: '13px', letterSpacing: '0.06em', padding: '11px 26px' }}
            >
              BOOK A CALL
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="btn btn-link text-white d-lg-none p-2 fs-2 text-decoration-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{ color: '#FC3F04' }}
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div 
            className="d-lg-none mt-3 p-4 rounded-3 shadow-lg"
            style={{ 
              backgroundColor: 'rgba(20, 24, 31, 0.98)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'fadeIn 0.2s ease-in-out'
            }}
          >
            <nav className="d-flex flex-column gap-3 mb-4">
              <a 
                href="#home" 
                className="nav-link-custom" 
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </a>
              <a 
                href="#about" 
                className="nav-link-custom" 
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#services" 
                className="nav-link-custom" 
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a 
                href="#projects" 
                className="nav-link-custom" 
                onClick={() => setMobileMenuOpen(false)}
              >
                PROJECTS
              </a>
              <a 
                href="#blog" 
                className="nav-link-custom" 
                onClick={() => setMobileMenuOpen(false)}
              >
                BLOG
              </a>
            </nav>
            <button 
              type="button" 
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="btn-brand-orange btn-brand-pill w-100 text-uppercase"
              style={{ fontSize: '13px', letterSpacing: '0.06em', padding: '12px 24px' }}
            >
              BOOK A CALL
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
