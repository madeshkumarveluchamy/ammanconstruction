import React, { useState } from 'react';

export default function PreFooterNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section 
      style={{ 
        backgroundColor: '#14181F', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        paddingTop: '60px',
        paddingBottom: '50px',
        color: '#FFFFFF',
      }}
    >
      <div className="container-custom">
        <div className="row align-items-center g-4 justify-content-between text-center text-lg-start">
          {/* Left: Mission & ISO Badge */}
          <div className="col-12 col-lg-6">
            <p 
              className="mb-3 fw-light mx-auto mx-lg-0"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.88)',
                maxWidth: '540px',
              }}
            >
              Building enduring hillside spaces with integrity, craftsmanship, and timeless harmony with the Nilgiri and Palani hills ecosystem.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
              <span 
                className="px-3 py-1 rounded-1 text-uppercase fw-semibold"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  color: 'var(--color-primary-orange)',
                  backgroundColor: 'rgba(252, 63, 4, 0.12)',
                  border: '1px solid rgba(252, 63, 4, 0.35)',
                }}
              >
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Right: Newsletter Signup Form */}
          <div className="col-12 col-lg-5">
            <div className="ps-lg-3">
              <label 
                htmlFor="newsletter-input" 
                className="d-block mb-2 text-white fw-medium text-center text-lg-start"
                style={{ fontFamily: 'var(--font-body)', fontSize: '16px', letterSpacing: '0.02em' }}
              >
                Sign in to our news letter
              </label>

              {subscribed ? (
                <div 
                  className="alert alert-success py-2 px-3 mb-0 rounded-2"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34D399', fontSize: '14px' }}
                >
                  ✓ Thank you! You have been subscribed to our newsletter.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
                  <input
                    id="newsletter-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="form-control"
                    style={{
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.22)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      padding: '12px 16px',
                      borderRadius: '4px',
                    }}
                  />
                  <button 
                    type="submit" 
                    className="btn btn-light fw-semibold px-4 flex-shrink-0"
                    style={{
                      fontFamily: 'var(--font-body)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      padding: '12px 26px',
                      backgroundColor: '#FFFFFF',
                      color: '#14181F',
                      border: 'none',
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
