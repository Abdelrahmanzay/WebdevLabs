import React from 'react';

export default function CourseList() {
  const courses = [
    {
      id: 1,
      title: 'The AI Engineer Course 2025: Complete AI Engineer Bootcamp',
      instructor: '365 Careers',
      rating: 4.6,
      reviews: '10,801 ratings',
      price: '£349.99',
      badge: 'Bestseller',
    },
    {
      id: 2,
      title: 'Intro to AI Agents and Agentic AI',
      instructor: '365 Careers',
      rating: 4.4,
      reviews: '895 ratings',
      price: '£349.99',
      badge: 'Bestseller',
    },
    {
      id: 3,
      title: 'Artificial Intelligence (AI) Foundations for Developers',
      instructor: 'Rahul Rajat Singh',
      rating: 5.0,
      reviews: '21 ratings',
      price: '£349.99',
      badge: 'Highest Rated',
    },
    {
      id: 4,
      title: 'The Complete Guide To AI Powered Salesforce Development',
      instructor: 'Matt Gerry',
      rating: 4.8,
      reviews: '74 ratings',
      price: '£349.99',
      badge: 'Hot & New',
    },
  ];

  return (
    <section className="course-list-section">
      <div className="course-list-inner">
        <h2>Skills to transform your career and life</h2>
        <p className="course-list-sub">From critical skills to technical topics, Udemy supports your professional development.</p>

        <div className="course-tabs">
          <button className="tab-btn active">Artificial Intelligence (AI)</button>
          <button className="tab-btn">Python</button>
          <button className="tab-btn">Microsoft Excel</button>
          <button className="tab-btn">AI Agents & Agentic AI</button>
          <button className="tab-btn">Digital Marketing</button>
          <button className="tab-btn">Amazon AWS</button>
        </div>

        <div className="course-cards">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-thumb">[Course Thumbnail]</div>
              <div className="course-meta">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-instructor">{course.instructor}</div>
                <div className="course-rating">
                  <span className="rating-score">{course.rating}</span>
                  <span className="rating-reviews">{course.reviews}</span>
                </div>
                <div className="course-price">{course.price}</div>
                {course.badge && <span className="course-badge">{course.badge}</span>}
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="show-all-link">Show all Artificial Intelligence (AI) courses →</a>
      </div>
    </section>
  );
}
