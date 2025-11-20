import React from 'react';

export default function SkillsSection() {
  const categories = [
    { id: 1, title: 'Generative AI', learners: '1M+' },
    { id: 2, title: 'IT Certifications', learners: '14.4M+' },
    { id: 3, title: 'Data Science', learners: '8M+' },
  ];

  return (
    <section className="skills-section">
      <div className="skills-inner">
        <div className="skills-intro">
          <h2>Learn essential career and life skills</h2>
          <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
        </div>
        <div className="skills-cards">
          {categories.map(cat => (
            <div key={cat.id} className="skill-card">
              <div className="skill-image">[Category Image]</div>
              <div className="skill-content">
                <h3 className="skill-title">{cat.title}</h3>
                <p className="skill-learners">{cat.learners}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
