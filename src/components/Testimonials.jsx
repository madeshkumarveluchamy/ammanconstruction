import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    location: 'Kodaikanal ,TN',
    avatar: '/assets/reviewer-avatar.webp',
    text: 'Amman Constructions delivered excellent quality with great attention to detail. The entire process was smooth, and the final result exceeded our expectations. Amman Constructions delivered excellent quality with great attention to detail. The entire process was smooth, and the final result exceeded our expectations.',
  },
  {
    id: 2,
    name: 'Ramesh Kumar',
    location: 'Kodaikanal ,TN',
    avatar: '/assets/reviewer-avatar.webp',
    text: 'Amman Constructions delivered excellent quality with great attention to detail. The entire process was smooth, and the final result exceeded our expectations. Amman Constructions delivered excellent quality with great attention to detail. The entire process was smooth, and the final result exceeded our expectations.',
  },
  {
    id: 3,
    name: 'Ramesh Kumar',
    location: 'Kodaikanal ,TN',
    avatar: '/assets/reviewer-avatar.webp',
    text: 'Amman Constructions delivered excellent quality with great attention to detail. The entire process was smooth, and the final result exceeded our expectations. Amman Constructions delivered excellent quality with great attention to detail. The entire process was smooth, and the final result exceeded our expectations.',
  },
  {
    id: 4,
    name: 'Ramesh Kumar',
    location: 'Kodaikanal ,TN',
    avatar: '/assets/reviewer-avatar.webp',
    text: 'Amman Constructions delivered excellent quality with great attention to detail. The entire process was smooth, and the final result exceeded our expectations. Amman Constructions delivered excellent quality with great attention to detail. The entire process was smooth, and the final result exceeded our expectations.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section-py" style={{ backgroundColor: 'var(--color-bg-sand)' }}>
      <div className="container-custom">
        {/* Centered Header */}
        <div className="text-center mb-5">
          <span className="section-tag d-block">Reviews</span>
          {/* Big Title in Bauhaus */}
          <h2 className="section-title mb-3">
            ROOTED IN<br />
            <span className="text-orange">KODAIKANAL</span>
          </h2>
          <p className="section-description mx-auto text-center" style={{ maxWidth: '720px' }}>
            The Amman Constructions builds enduring spaces with integrity, craftsmanship and an uncompromised commitment to a better tomorrow.
          </p>
        </div>

        {/* 4 Review Cards */}
        <div className="row g-4 justify-content-center">
          {reviews.map((item, index) => (
            <div key={`${item.id}-${index}`} className="col-12 col-sm-6 col-lg-3">
              <div 
                className="card h-100 border-0 rounded-3 shadow-sm hover-lift p-4 d-flex flex-column justify-content-between text-start"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(20, 24, 31, 0.06)',
                }}
              >
                <div>
                  {/* 5 Golden Stars */}
                  <div className="d-flex align-items-center gap-1 mb-3 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      lineHeight: 1.68,
                      color: '#4B5563',
                      textAlign: 'left',
                    }}
                  >
                    {item.text}
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="d-flex align-items-center gap-3 pt-3 border-top" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                  <div 
                    className="rounded-circle overflow-hidden flex-shrink-0"
                    style={{
                      width: '46px',
                      height: '46px',
                      border: '1.5px solid var(--color-primary-orange)',
                    }}
                  >
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div>
                    <h4 
                      className="fs-6 fw-bold mb-0"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        color: 'var(--color-text-dark)',
                      }}
                    >
                      {item.name}
                    </h4>
                    <span 
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: '#6B7280',
                      }}
                    >
                      {item.location}
                    </span>
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
