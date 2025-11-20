import React from 'react';

export default function TrustedCompanies() {
  const companies = [
    'Volkswagen',
    'Samsung',
    'Cisco',
    'Vimeo',
    'P&G',
    'Hewlett Packard Enterprise',
    'Citi',
    'Ericsson',
  ];

  return (
    <section className="trusted-companies-section">
      <div className="trusted-inner">
        <p className="trusted-text">Trusted by over 17,000 companies and millions of learners around the world</p>
        <div className="company-logos">
          {companies.map((name, idx) => (
            <div key={idx} className="company-logo" aria-label={name}>
              {/* In a real app this would be an <img> with src */}
              <span className="logo-placeholder">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
