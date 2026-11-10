import React from 'react';

export default function RootedPresence({ onExplorePresence }) {
  return (
    <section 
      id="presence"
      className="position-relative overflow-hidden"
      style={{
        backgroundImage: `url('/assets/mountain-morning-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '620px',
        padding: '90px 0',
      }}
    >
      {/* Subtle warm wash overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(180deg, rgba(251, 241, 230, 0.4) 0%, rgba(251, 241, 230, 0.15) 50%, rgba(251, 241, 230, 0.4) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom position-relative z-1">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column: 3D Kodaikanal Map Cutout with Pins */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div 
              className="position-relative d-inline-block"
              style={{
                maxWidth: '640px',
                width: '100%',
              }}
            >
              <img 
                src="/assets/kodai-map-cutout.webp" 
                alt="Map of Kodaikanal showing Amman Constructions presence across key landmarks" 
                className="img-fluid d-block mx-auto"
                style={{
                  maxHeight: '520px',
                  width: 'auto',
                  filter: 'drop-shadow(0 14px 28px rgba(0, 0, 0, 0.22))',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="col-12 col-lg-6 mobile-center-content text-center text-lg-start">
            <div className="ps-lg-3">
              <span className="section-tag with-line">OUR PRESENCE</span>
              
              {/* Big Title in Bauhaus */}
              <h2 className="section-title mb-4">
                ROOTED IN<br />
                <span className="text-orange">KODAIKANAL</span>
              </h2>

              <p 
                className="section-description mb-4 pb-2 mx-auto mx-lg-0"
                style={{ 
                  color: '#2D3748', 
                  fontSize: '16px', 
                  lineHeight: 1.75,
                  fontFamily: 'var(--font-body)',
                }}
              >
                The Amman Constructions creates premium spaces across Kodaikanal, combining local understanding with modern design. From residential homes to holiday villas and commercial spaces, we bring thoughtful construction to every corner of this beautiful hill town. From residential homes to holiday villas and commercial spaces, we bring thoughtful construction to every corner of this beautiful hill town.
              </p>

              <div className="btn-wrapper d-flex justify-content-center justify-content-lg-start">
                <button 
                  type="button" 
                  onClick={onExplorePresence}
                  className="btn-brand-orange"
                  style={{
                    padding: '12px 34px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    letterSpacing: '0.02em',
                    textTransform: 'lowercase',
                    boxShadow: '0 4px 16px rgba(252, 63, 4, 0.3)'
                  }}
                >
                  view more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
