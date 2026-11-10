import React from 'react';

export default function AboutLegacy({ onLearnMore }) {
  return (
    <section id="about" className="section-py" style={{ backgroundColor: 'var(--color-bg-sand)' }}>
      <div className="container-custom">
        <div className="row align-items-center g-5">
          {/* Left Column: Text Content */}
          <div className="col-12 col-lg-6 mobile-center-content text-center text-lg-start">
            <div className="pe-lg-4">
              <span className="section-tag with-line">About us</span>
              
              {/* Big Title in Bauhaus */}
              <h2 className="section-title mb-4">
                CRAFTING A LEGACY<br />
                <span className="text-orange ">WITH A SUSTAINABLE VISION</span>
              </h2>

              <p 
                className="section-description mb-4 pb-2 mx-auto mx-lg-0"
                style={{ 
                  color: '#4B5563', 
                  fontSize: '16px', 
                  lineHeight: 1.75,
                }}
              >
                The Amman Constructions builds enduring spaces with integrity, craftsmanship and an uncompromised commitment to a better tomorrow. The Amman Constructions builds enduring spaces with integrity, craftsmanship and an uncompromised commitment to a better tomorrow. The Amman Constructions builds enduring spaces with integrity, craftsmanship and an uncompromised commitment to a better tomorrow.
              </p>

              <div className="btn-wrapper d-flex justify-content-center justify-content-lg-start">
                <button 
                  type="button" 
                  onClick={onLearnMore}
                  className="btn-brand-orange"
                  style={{
                    padding: '11px 32px',
                    borderRadius: '4px',
                    fontSize: '16px',
                    letterSpacing: '0.02em',
                    textTransform: 'lowercase'
                  }}
                >
                  view more
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo */}
          <div className="col-12 col-lg-6 text-center">
            <div className="position-relative d-inline-block w-100">
              <div 
                className="overflow-hidden shadow-lg mx-auto"
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 16px 36px rgba(20, 24, 31, 0.12)',
                  maxWidth: '580px',
                }}
              >
                <img 
                  src="/assets/about-legacy.webp" 
                  alt="Crafting a legacy in Kodaikanal hills" 
                  className="img-fluid w-100 d-block"
                  style={{
                    minHeight: '340px',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
