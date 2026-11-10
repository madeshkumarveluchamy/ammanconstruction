import React from 'react';

export default function Hero({ onExplore }) {
  return (
    <section 
      id="home" 
      className="position-relative text-white d-flex flex-column justify-content-between"
      style={{
        minHeight: '780px',
        height: '100vh',
        maxHeight: '920px',
        backgroundImage: `linear-gradient(90deg, rgba(14, 18, 23, 0.8) 0%, rgba(14, 18, 23, 0.58) 46%, rgba(14, 18, 23, 0.2) 100%), url('/assets/hero-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '140px',
        paddingBottom: '50px'
      }}
    >
      <div className="container-custom flex-grow-1 d-flex flex-column justify-content-center my-auto">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-7 text-center text-lg-start">
            {/* Small Top Badge */}
            <div className="mb-3 mb-md-4 d-flex justify-content-center justify-content-lg-start">
              <span 
                className="d-inline-flex align-items-center px-3 py-1 rounded-1"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(11px, 1.8vw, 15px)',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase'
                }}
              >
                BUILT ON A TRUST ROOTED IN KODAI
              </span>
            </div>

            {/* Main Headline with Bauhaus Font for Big Title */}
            <h1 
              className="section-title text-uppercase mb-3 mb-md-4"
              style={{
                fontFamily: 'var(--font-bauhaus)',
                fontSize: 'clamp(2.4rem, 4.8vw, 3.375rem)',
                lineHeight: 1.12,
                letterSpacing: '0.02em',
                textShadow: '0 2px 14px rgba(0,0,0,0.45)',
                color: '#FFFFFF'
              }}
            >
              SPACES FOR A<br />
              <span style={{ color: 'var(--color-primary-orange)' }}>
                BETTER TOMMOROW
              </span>
            </h1>

            {/* Subtitle / Intro text with clean body font */}
            <p 
              className="mb-4 mb-lg-5 mx-auto mx-lg-0"
              style={{
                maxWidth: '560px',
                fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              The Amman Constructions builds enduring spaces with integrity, craftsmanship and an uncompromised commitment to a better tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Stamp Badge (KODAI / EST 1989) */}
      <div className="container-custom mt-2 d-flex justify-content-center justify-content-lg-start">
        <div className="d-inline-flex align-items-center">
          <div 
            className="d-flex flex-column align-items-center justify-content-center text-center rounded-circle"
            style={{
              width: '92px',
              height: '92px',
              border: '2px solid rgba(252, 63, 4, 0.95)',
              backgroundColor: 'rgba(20, 24, 31, 0.55)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
              color: '#FFFFFF'
            }}
          >
            <span 
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '14px', 
                fontWeight: 700, 
                letterSpacing: '0.15em',
                color: 'var(--color-primary-orange)'
              }}
            >
              KODAI
            </span>
            <span 
              style={{ 
                fontFamily: 'var(--font-body)',
                fontSize: '11px', 
                fontWeight: 600, 
                letterSpacing: '0.08em',
                color: 'rgba(255, 255, 255, 0.95)',
                marginTop: '1px'
              }}
            >
              EST 1989
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
