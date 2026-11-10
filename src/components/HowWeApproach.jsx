import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Planning',
    icon: '/assets/process-step-1.webp',
    description: 'We understand your vision, site conditions and requirements to create a clear and practical plan for your project.',
  },
  {
    step: '02',
    title: 'Design',
    icon: '/assets/process-step-2.webp',
    description: 'Our experts develop functional, aesthetic and sustainable designs that match your lifestyle and budget.',
  },
  {
    step: '03',
    title: 'Construction',
    icon: '/assets/process-step-3.webp',
    description: 'With skilled teams and quality materials, we bring your design to life with precision and timely execution.',
  },
  {
    step: '04',
    title: 'Handover',
    icon: '/assets/process-step-4.webp',
    description: 'We deliver a space that meets the highest standards of quality, ensuring your complete satisfaction.',
  },
];

export default function HowWeApproach() {
  return (
    <section 
      id="process"
      className="position-relative overflow-hidden" 
      style={{ 
        backgroundImage: `url('/assets/process-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        minHeight: '660px',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="container-custom position-relative z-1">
        {/* Section Header */}
        <div className="mb-5 mobile-center-content text-center text-lg-start" style={{ maxWidth: '640px' }}>
          <span className="section-tag with-line">our Process</span>
          <h2 className="section-title mb-3">
            HOW WE <span className="text-orange">APPROACH</span>
          </h2>
          <p className="section-description mx-auto mx-lg-0" style={{ color: '#2D3748' }}>
            The Amman Constructions builds enduring spaces with integrity, craftsmanship and an uncompromised commitment to a better tomorrow.
          </p>
        </div>

        {/* Desktop View: Full-Fidelity Flowchart with Exact Column Alignment (Screen >= 992px) */}
        <div 
          className="d-none d-lg-block position-relative mt-4"
          style={{ maxWidth: '1060px' }}
        >
          {/* User's Flowchart Image */}
          <div className="w-100 mb-2">
            <img 
              src="/assets/flowchart.webp" 
              alt="How We Approach flowchart timeline" 
              className="w-100 d-block"
              style={{
                height: 'auto',
                filter: 'drop-shadow(0 4px 12px rgba(252, 63, 4, 0.12))',
              }}
            />
          </div>

          {/* 4 Step Text Columns positioned under each node */}
          <div className="position-relative w-100" style={{ minHeight: '160px' }}>
            {steps.map((item, idx) => {
              const nodePositions = ['5.4%', '36.0%', '65.2%', '95.8%'];
              const transforms = [
                'translateX(-15%)',
                'translateX(-50%)',
                'translateX(-50%)',
                'translateX(-85%)',
              ];

              return (
                <div 
                  key={item.step}
                  className="position-absolute text-center"
                  style={{
                    left: nodePositions[idx],
                    transform: transforms[idx],
                    width: '240px',
                    maxWidth: '24vw',
                  }}
                >
                  <h3 
                    className="fw-bold mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '20px',
                      color: '#14181F',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="mb-0 text-secondary"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14.5px',
                      lineHeight: 1.6,
                      color: '#4A5568',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Vertical Step Cards with Icons & Centered Alignment (Screen < 992px) */}
        <div className="d-lg-none mt-4">
          <div className="row g-4 justify-content-center text-center">
            {steps.map((item) => (
              <div key={item.step} className="col-12 col-sm-6">
                <div className="d-flex flex-column align-items-center h-100 px-3 text-center mobile-center-content">
                  {/* Step Pin & Number with Icon */}
                  <div 
                    className="mb-3 d-flex align-items-center justify-content-center"
                    style={{ height: '130px' }}
                  >
                    <img 
                      src={item.icon} 
                      alt={`Step ${item.step}: ${item.title}`}
                      style={{
                        height: '120px',
                        width: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.08))',
                      }}
                    />
                  </div>

                  {/* Step Title (Standard sans font, NOT Bauhaus) */}
                  <h3 
                    className="fw-bold mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '20px',
                      color: '#14181F',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p 
                    className="mb-0 text-secondary"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14.5px',
                      lineHeight: 1.65,
                      color: '#4A5568',
                      maxWidth: '280px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}