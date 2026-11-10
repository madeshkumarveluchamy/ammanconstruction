import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Handshake, 
  Compass, 
  Clock, 
  PenTool 
} from 'lucide-react';

const reasons = [
  {
    id: 1,
    icon: Users,
    title: 'EXPERIENCED TEAM',
    description: '37+ years of experience and a team of highly skilled professionals.',
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: 'QUALITY ASSURANCE',
    description: 'ISO 9001:2015 certified, ensuring premium quality in every project.',
  },
  {
    id: 3,
    icon: Handshake,
    title: 'TRANSPARENCY & TRUST',
    description: 'Our project tracking system and commitment to clear communication.',
  },
  {
    id: 4,
    icon: Compass,
    title: 'VASTU-COMPLIANT HOMES',
    description: 'Expertise in creating Vastu-compliant homes that bring harmony and positivity.',
  },
  {
    id: 5,
    icon: Clock,
    title: 'ON-TIME DELIVERY',
    description: 'We understand the importance of meeting deadlines.',
  },
  {
    id: 6,
    icon: PenTool,
    title: 'PERSONALIZED APPROACH',
    description: 'Dedicated architects and project managers cater to your unique needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-py" style={{ backgroundColor: 'var(--color-bg-sand)' }}>
      <div className="container-custom">
        {/* Centered Header */}
        <div className="text-center mb-5">
          <span className="section-tag d-block">Why Choose us</span>
          {/* Big Title in Bauhaus */}
          <h2 className="section-title mb-3">
            BUILT ON TRUST<br />
            <span className="text-orange">CRAFTED WITH CARE</span>
          </h2>
          <p className="section-description mx-auto text-center" style={{ maxWidth: '720px' }}>
            The Amman Constructions builds enduring spaces with integrity, craftsmanship and an uncompromised commitment to a better tomorrow.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="row g-4 g-lg-5 justify-content-center">
          {reasons.map((reason) => {
            const IconComp = reason.icon;
            return (
              <div key={reason.id} className="col-12 col-md-6 col-lg-4 text-center">
                <div 
                  className="p-3 h-100 d-flex flex-column align-items-center"
                  style={{
                    transition: 'transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* Icon */}
                  <div 
                    className="mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      color: 'var(--color-primary-orange)',
                    }}
                  >
                    <IconComp size={42} strokeWidth={1.75} />
                  </div>

                  {/* Title (Standard sans font, NOT Bauhaus) */}
                  <h3 
                    className="fw-bold text-uppercase mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '18px',
                      letterSpacing: '0.04em',
                      color: 'var(--color-text-dark)',
                    }}
                  >
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="mb-0 text-secondary"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      lineHeight: 1.6,
                      maxWidth: '300px',
                      color: '#4B5563',
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
