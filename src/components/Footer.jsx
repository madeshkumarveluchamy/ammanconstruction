import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{ 
        backgroundColor: '#14181F', 
        color: 'rgba(255, 255, 255, 0.78)',
        paddingTop: '65px',
        paddingBottom: '35px',
      }}
    >
      <div className="container-custom">
        <div className="row g-4 g-lg-5 mb-5 text-center text-lg-start">
          {/* Column 1: Logo & Address */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mb-4 d-flex justify-content-center justify-content-lg-start">
              <a href="#home" className="d-inline-block text-decoration-none">
                <img 
                  src="/assets/brand-logo.webp" 
                  alt="The Amman Constructions" 
                  style={{ maxHeight: '46px', width: 'auto' }}
                />
              </a>
            </div>

            <h4 
              className="fs-5 fw-semibold text-white mb-2"
              style={{ fontFamily: 'var(--font-body)', fontSize: '20px' }}
            >
              Address
            </h4>
            <p 
              className="mb-3 mx-auto mx-lg-0"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.68,
                color: 'rgba(255, 255, 255, 0.72)',
                maxWidth: '320px',
              }}
            >
              Building enduring hillside spaces with integrity, craftsmanship, and timeless harmony with the Nilgiri and Palani hills ecosystem.
            </p>

            <div className="d-flex flex-column align-items-center align-items-lg-start gap-2" style={{ fontSize: '15px', fontFamily: 'var(--font-body)' }}>
              <a 
                href="mailto:theammanconstruction@gmail.com" 
                className="d-inline-flex align-items-center gap-2 text-decoration-none"
                style={{ color: 'rgba(255, 255, 255, 0.88)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)')}
              >
                <Mail size={17} color="#FC3F04" />
                <span>theammanconstruction@gmail.com</span>
              </a>

              <a 
                href="tel:9087654321" 
                className="d-inline-flex align-items-center gap-2 text-decoration-none"
                style={{ color: 'rgba(255, 255, 255, 0.88)', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)')}
              >
                <Phone size={17} color="#FC3F04" />
                <span>9087654321</span>
              </a>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div className="col-6 col-md-3 col-lg-2 offset-lg-1">
            <h4 
              className="fs-5 fw-semibold text-white mb-3"
              style={{ fontFamily: 'var(--font-body)', fontSize: '20px' }}
            >
              Pages
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '15px', fontFamily: 'var(--font-body)' }}>
              <li>
                <a 
                  href="#home" 
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
                >
                  About us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Utilities */}
          <div className="col-6 col-md-3 col-lg-2">
            <h4 
              className="fs-5 fw-semibold text-white mb-3"
              style={{ fontFamily: 'var(--font-body)', fontSize: '20px' }}
            >
              Utilities
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '15px', fontFamily: 'var(--font-body)' }}>
              <li>
                <a 
                  href="#privacy" 
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
                >
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  className="text-decoration-none"
                  style={{ color: 'rgba(255, 255, 255, 0.78)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FC3F04')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4 
              className="fs-5 fw-semibold text-white mb-3"
              style={{ fontFamily: 'var(--font-body)', fontSize: '20px' }}
            >
              Follow us on
            </h4>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FC3F04';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Instagram"
              >
                <i className="bi bi-instagram fs-6"></i>
              </a>

              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FC3F04';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Facebook"
              >
                <i className="bi bi-facebook fs-6"></i>
              </a>

              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FC3F04';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Pinterest"
              >
                <i className="bi bi-pinterest fs-6"></i>
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FC3F04';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="X (formerly Twitter)"
              >
                <i className="bi bi-twitter-x fs-6"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright line */}
        <div 
          className="text-center pt-4"
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '15px',
            fontFamily: 'var(--font-body)',
            color: 'rgba(255, 255, 255, 0.65)',
          }}
        >
          &copy; 2026 The Amman Constructions All rights reserved.
        </div>
      </div>
    </footer>
  );
}
