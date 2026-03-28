"use client";
import React, { useState } from "react";
import "./HomeFaq.css";

const PHONE = "971504463928";
const PHONE_DISPLAY = "+971 50 446 3928";

const faqs = [
  {
    q: "How quickly can I get matched with a tutor?",
    a: "Most families are matched with a suitable, verified tutor within 24 hours depending on subject, level, and schedule preferences.",
  },
  {
    q: "Which curricula and exam boards do you support?",
    a: "We cover O-Levels, A-Levels, IGCSE, IB, SAT, ACT, and a wide range of school and university subjects across UK and UAE curricula.",
  },
  {
    q: "Are the tutoring sessions online or in person?",
    a: "We primarily offer flexible online 1-on-1 tutoring, allowing faster matching and access to specialist tutors regardless of your location.",
  },
  {
    q: "How do I ask about fees or tutor availability?",
    a: "Call or WhatsApp us on " + PHONE_DISPLAY + " and we will guide you based on your subject, level, and preferred schedule. No commitment required.",
  },
  {
    q: "Is there a free consultation before committing?",
    a: "Yes. We offer a free initial consultation so you can discuss your needs, ask about tutors, and get matched before making any payment.",
  },
  {
    q: "What if the tutor is not the right fit?",
    a: "We will work with you to reassign a more suitable tutor at no extra cost. Your satisfaction and your child's progress are our priority.",
  },
];

const HomeFaq = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="homefaq section">
      <div className="container homefaq-wrap">
        {/* Left */}
        <div className="homefaq-left">
          <span className="homefaq-kicker">FAQs</span>
          <h2 className="section-title">Questions parents and students ask most</h2>
          <p className="section-subtitle">
            Can't find your answer here? Call or WhatsApp us directly.
          </p>
          <a href={`tel:+${PHONE}`} className="homefaq-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call {PHONE_DISPLAY}
          </a>
        </div>

        {/* Accordion */}
        <div className="homefaq-list">
          {faqs.map((item, i) => (
            <div
              className={`homefaq-card ${open === i ? "homefaq-card--open" : ""}`}
              key={item.q}
            >
              <button
                className="homefaq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <svg
                  className="homefaq-chevron"
                  width="18" height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {open === i && (
                <div className="homefaq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
