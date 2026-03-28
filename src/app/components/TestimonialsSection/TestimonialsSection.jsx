"use client";
import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Mariam Al-Farsi",
    role: "IGCSE Student • Dubai",
    subject: "Mathematics",
    result: "Grade jumped from C to A in 8 weeks",
    quote:
      "I was failing my IGCSE Maths practice papers and felt completely lost. My TuTurns tutor restructured everything — gave me a topic-by-topic plan, worked through past papers with me, and explained each mistake clearly. I went from a C to an A in 8 weeks and sat my real exam with actual confidence.",
    rating: 5,
    initial: "M",
    color: "#0a4d7c",
  },
  {
    name: "Omar Siddiqui",
    role: "A-Level Student • UK",
    subject: "Physics & Chemistry",
    result: "Predicted A*A after 3 months of sessions",
    quote:
      "I was predicted C grades in both Physics and Chemistry and my university offer was at risk. Within three months of weekly sessions with my TuTurns tutor I was predicted A*A. The tutor knew the syllabus inside out and always matched the lessons to exactly what my school was covering.",
    rating: 5,
    initial: "O",
    color: "#1a6fa8",
  },
  {
    name: "Aisha Rahman",
    role: "O-Level Student • Abu Dhabi",
    subject: "English Literature",
    result: "Gained full marks in coursework component",
    quote:
      "Essay writing was my weakest area and I had no idea how to structure an analysis. My tutor went through every technique step by step, marked my drafts personally, and helped me understand what examiners actually want. I got full marks in my coursework and dramatically improved my exam responses.",
    rating: 5,
    initial: "A",
    color: "#f59e0b",
  },
  {
    name: "Hassan & Zara’s Mother",
    role: "Parent of Two • Sharjah, UAE",
    subject: "Maths • Biology",
    result: "Both children improved within 6 weeks",
    quote:
      "I enrolled both my children — one doing O-Levels, one doing IGCSE Biology. TuTurns matched them with separate tutors within a day. Both improved noticeably within six weeks and the communication from TuTurns throughout was excellent. I recommend them to every parent I know.",
    rating: 5,
    initial: "H",
    color: "#10b981",
  },
  {
    name: "Yusuf Karimi",
    role: "IB Student • London, UK",
    subject: "IB Mathematics HL",
    result: "Score improved from 4 to 6 out of 7",
    quote:
      "IB Maths HL nearly broke me. I’d tried other platforms but the tutors weren’t IB specialists. TuTurns matched me with someone who had actually taught IB Maths for years. My score went from a 4 to a 6 and I understood the Internal Assessment process for the first time.",
    rating: 5,
    initial: "Y",
    color: "#7c3aed",
  },
  {
    name: "Priya Menon",
    role: "Parent • Birmingham, UK",
    subject: "GCSE Science",
    result: "Went from failing mocks to passing final exams",
    quote:
      "My daughter came home crying after her mock results. We contacted TuTurns that same evening and had a tutor confirmed the next morning. She went from failing her mocks to passing her final exams with room to spare. The speed, the care, and the quality of the tutor were all outstanding.",
    rating: 5,
    initial: "P",
    color: "#e11d48",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section section bg-gradient-subtle">
      <div className="container">
        <div className="testimonials-header">
          <span className="testimonials-kicker">Real Results • Real Families</span>
          <h2 className="section-title">Students &amp; parents trust TuTurns to deliver results</h2>
          <p className="section-subtitle">
            Every testimonial below is from a real student or parent. Specific outcomes, real subjects, real progress.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-top">
                <div className="testimonial-avatar" style={{ background: item.color }}>
                  {item.initial}
                </div>
                <div>
                  <div className="testimonial-stars">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <div className="testimonial-subject">{item.subject}</div>
                </div>
              </div>

              <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>

              <div className="testimonial-result">✔️ {item.result}</div>

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
            <strong>4.9 / 5</strong>
            <span>Average tutor rating</span>
          </div>
          <div className="proof-item">
            <strong>100+</strong>
            <span>Expert tutors</span>
          </div>
          <div className="proof-item">
            <strong>98%</strong>
            <span>Would recommend us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
