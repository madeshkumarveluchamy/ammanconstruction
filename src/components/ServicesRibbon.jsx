import React from 'react';

const services = [
  {
    id: 1,
    title: 'Residential\nConstruction',
    icon: '/assets/icon-service-1.webp',
  },
  {
    id: 2,
    title: 'Commercial\nConstruction',
    icon: '/assets/icon-service-2.webp',
  },
  {
    id: 3,
    title: 'Instutional\nBuildings',
    icon: '/assets/icon-service-3.webp',
  },
  {
    id: 4,
    title: 'Turnkey\nSolutions',
    icon: '/assets/icon-service-4.webp',
  },
  {
    id: 5,
    title: 'Esports &\nHospitality',
    icon: '/assets/icon-service-5.webp',
  },
  {
    id: 6,
    title: 'Renovation &\nRemodeling',
    icon: '/assets/icon-service-6.webp',
  },
  {
    id: 7,
    title: 'Infrastructure\nDevelopment',
    icon: '/assets/icon-service-7.webp',
  },
];

export default function ServicesRibbon() {
  return (
    <section 
      id="services"
      className="py-4 py-md-5"
      style={{
        backgroundColor: '#FBF1E6',
        borderTop: '1px solid #D9D9D9',
        borderBottom: '1px solid #D9D9D9',
      }}
    >
      <div className="container-custom">
        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              {/* Service Item */}
              <div 
                className="d-flex flex-column align-items-center justify-content-center text-center px-2 py-3 flex-grow-1"
                style={{
                  minWidth: '130px',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Authentic Black Outline Icon */}
                <div 
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{ height: '52px' }}
                >
                  <img 
                    src={service.icon} 
                    alt={service.title.replace('\n', ' ')}
                    style={{
                      maxHeight: '48px',
                      maxWidth: '52px',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* Service Title */}
                <h3 
                  className="mb-0 fw-medium"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    lineHeight: '1.35',
                    color: '#14181F',
                    whiteSpace: 'pre-line',
                    letterSpacing: '0.01em',
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Exact Orange Vertical Divider Line between items */}
              {index !== services.length - 1 && (
                <div 
                  className="d-none d-lg-block flex-shrink-0"
                  style={{
                    width: '1.5px',
                    height: '48px',
                    backgroundColor: '#FC3F04',
                    opacity: 0.9,
                    margin: '0 4px',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
