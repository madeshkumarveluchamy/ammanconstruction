import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, defaultService = 'Residential Construction' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{
        backgroundColor: 'rgba(20, 24, 31, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        animation: 'fadeIn 0.2s ease-in-out',
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3 shadow-lg p-4 p-md-5 position-relative w-100"
        style={{
          maxWidth: '540px',
          borderRadius: '16px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          type="button" 
          onClick={onClose}
          className="btn btn-link position-absolute top-0 end-0 p-3 text-secondary text-decoration-none"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <CheckCircle2 size={54} color="#FC3F04" className="mb-3" />
            <h3 className="fs-4 fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Call Request Received!
            </h3>
            <p className="text-secondary small mb-0">
              Our Kodaikanal engineering team will connect with you within 24 hours to discuss your project requirements.
            </p>
          </div>
        ) : (
          <div>
            <span className="section-tag d-block text-orange mb-1">Get in Touch</span>
            <h3 
              className="fs-4 fw-bold mb-2 text-uppercase"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}
            >
              Book a Consultation
            </h3>
            <p className="text-secondary small mb-4">
              Speak with our senior architects and structural planners about your hillside space in Kodaikanal.
            </p>

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <div>
                <label className="form-label small fw-semibold text-dark mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ramesh Kumar"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ fontSize: '14px', padding: '10px 14px' }}
                />
              </div>

              <div className="row g-2">
                <div className="col-12 col-sm-6">
                  <label className="form-label small fw-semibold text-dark mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 90876 54321"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ fontSize: '14px', padding: '10px 14px' }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label small fw-semibold text-dark mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@example.com"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ fontSize: '14px', padding: '10px 14px' }}
                  />
                </div>
              </div>

              <div>
                <label className="form-label small fw-semibold text-dark mb-1">Interested Service</label>
                <select 
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ fontSize: '14px', padding: '10px 14px' }}
                >
                  <option value="Residential Construction">Residential Construction</option>
                  <option value="Commercial Construction">Commercial Construction</option>
                  <option value="Institutional Buildings">Institutional Buildings</option>
                  <option value="Turnkey Solutions">Turnkey Solutions</option>
                  <option value="Resorts & Hospitality">Resorts & Hospitality</option>
                  <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                  <option value="Infrastructure Development">Infrastructure Development</option>
                </select>
              </div>

              <div>
                <label className="form-label small fw-semibold text-dark mb-1">Project Details or Location</label>
                <textarea 
                  rows="3"
                  placeholder="Tell us about your plot location, desired square footage, or hillside vision..."
                  className="form-control"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ fontSize: '14px', padding: '10px 14px' }}
                ></textarea>
              </div>

              <div className="mt-2">
                <button 
                  type="submit" 
                  className="btn-brand-orange w-100 py-2 fs-6 text-uppercase"
                  style={{ letterSpacing: '0.04em' }}
                >
                  Confirm & Schedule Call
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
