"use client";
import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Sara A.",
    role: "IGCSE Student",
    result: "Math grade improved from C to A",
    quote:
      "My tutor explained every topic clearly and gave me a structured plan. I became more confident before exams and my grade improved a lot.",
    rating: 5,
  },
  {
    name: "Ahmed R.",
    role: "A-Level Student",
    result: "Better exam confidence and weekly consistency",
    quote:
      "TuTurns helped me find the right tutor quickly. The lessons were organised, targeted, and actually matched my syllabus perfectly.",
    rating: 5,
  },
  {
    name: "Fatima K.",
    role: "O-Level Student",
    result: "Passed Physics with distinction",
    quote:
      "Before TuTurns I was really struggling with Physics. My tutor broke everything down step by step and I passed with a distinction.",
    rating: 5,
  },
  {
    name: "Parent of Year 10 Student",
    role: "Parent, Dubai",
    result: "Noticeable progress within 6 weeks",
    quote:
      "Communication was smooth, the tutor was professional, and we saw real improvement in understanding and test performance within weeks.",
    rating: 5,
  },
  {
    name: "Zain M.",
    role: "IB Student",
    result: "IB Math score improved by 2 grades",
    quote:
      "The tutor assigned to me was an IB specialist. Sessions were focused and I finally understood topics I had been stuck on for months.",
    rating: 5,
  },
  {
    name: "Parent of GCSE Student",
    role: "Parent, UK",
    result: "Child's confidence transformed",
    quote:
      "My daughter went from dreading revision to looking forward to her sessions. The tutor\'s patience and clarity made all the difference.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section section bg-gradient-subtle">
      <div className="container">
        <div className="testimonials-header">
          <span className="testimonials-kicker">Results &amp; Reviews</span>
          <h2 className="section-title">Families trust TuTurns to improve results</h2>
          <p className="section-subtitle">
            Personalised 1-on-1 tutoring for O-Levels, A-Levels, IGCSE, IB, and more.
            Real students. Real outcomes.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name + item.result}>
              <div className="testimonial-stars">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonial-result">✔ {item.result}</div>
              <div className="testimonial-person">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials-proofbar">
          <div className="proof-item">
            <strong>1,200+</strong>
            <span>Students supported</span>
          </div>
          <div className="proof-item">
            <strong>100+</strong>
            <span>Expert tutors</span>
          </div>
          <div className="proof-item">
            <strong>50+</strong>
            <span>Subjects covered</span>
          </div>
          <div className="proof-item">
            <strong>24h</strong>
            <span>Average match time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
