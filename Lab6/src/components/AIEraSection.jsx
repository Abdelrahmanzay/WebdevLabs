import React from 'react';

export default function AIEraSection() {
  const benefits = [
    'Learn AI and more',
    'Practice with AI coaching',
    'Prep for a certification',
    'Advance your career',
  ];

  return (
    <section className="ai-era-section">
      <div className="ai-era-inner">
        <div className="ai-era-content">
          <h2>Reimagine your career in the AI era</h2>
          <p>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
          <ul className="ai-benefits">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="benefit-item">{benefit}</li>
            ))}
          </ul>
          <button className="btn secondary">Learn more</button>
          <p className="pricing-info">Starting at £E204.00/month</p>
        </div>
        <div className="ai-era-visual">[Visual collage placeholder]</div>
      </div>
    </section>
  );
}
