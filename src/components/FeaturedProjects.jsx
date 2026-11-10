import React from 'react';

const projects = [
  {
    id: 1,
    image: '/assets/project-1.webp',
    category: 'FEATURED PROJECTS',
    title: 'The Amman Constructions builds enduring spaces with integrity',
    tag: 'Luxury Hill Villa',
  },
  {
    id: 2,
    image: '/assets/project-2.webp',
    category: 'FEATURED PROJECTS',
    title: 'The Amman Constructions builds enduring spaces with integrity',
    tag: 'Kodai Stone Manor',
  },
  {
    id: 3,
    image: '/assets/project-3.webp',
    category: 'FEATURED PROJECTS',
    title: 'The Amman Constructions builds enduring spaces with integrity',
    tag: 'Contemporary Timber Retreat',
  },
];

export default function FeaturedProjects({ onSelectProject }) {
  return (
    <section 
      id="projects" 
      style={{ 
        backgroundColor: '#FBF1E6',
        paddingTop: 'clamp(90px, 8vw, 140px)', /* Distinct, generous gap above featured projects */
        paddingBottom: '90px'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-5 mobile-center-content text-center text-lg-start">
          <span className="section-tag with-line">FEATURED PROJECTS</span>
          <h2 className="section-title mb-3">
            OUR FEATURED <span className="text-orange">PROJECTS</span>
          </h2>
          <p className="section-description mx-auto mx-lg-0">
            The Amman Constructions builds enduring spaces with integrity, craftsmanship and an uncompromised commitment to a better tomorrow.
          </p>
        </div>

        {/* Projects 3-Card Grid */}
        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div 
                className="card h-100 border-0 rounded-3 shadow-sm hover-lift overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(20, 24, 31, 0.06)',
                }}
              >
                {/* Image Container */}
                <div 
                  className="overflow-hidden"
                  style={{ height: '260px' }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: 'transform 0.4s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column justify-content-between text-center text-lg-start">
                  <div>
                    <span 
                      className="text-uppercase fw-semibold d-block mb-2"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        letterSpacing: '0.06em',
                        color: '#6B7280',
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 
                      className="fw-normal mb-4"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        lineHeight: 1.6,
                        color: 'var(--color-text-dark)',
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <button 
                      type="button" 
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="btn-brand-orange"
                      style={{
                        fontSize: '14px',
                        padding: '10px 22px',
                        borderRadius: '4px',
                        textTransform: 'lowercase',
                      }}
                    >
                      view more projects
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
