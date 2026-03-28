"use client";
import React, { useEffect, useRef, useState } from "react";
import "./HowItWork.css";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../Counter/Counter"));

const steps = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: "Post Your Learning Needs",
    description: "Share your tutor requirements with us. Our experts will analyze it and match you with the perfect tutors.",
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8a3 3 0 0 0 0 6" />
      </svg>
    ),
    title: "Get Tutor Applications",
    description: "Receive curated applications from the best tutors within 48 hours, closely matching your requirements.",
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Select & Start Learning",
    description: "Choose the best tutor, book a demo session, and begin your journey to academic excellence.",
  },
];

const HowItWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <>
      <section className="how-section" ref={sectionRef}>
        <div className="how-bg-pattern"></div>
        
        <div className={`how-container ${isVisible ? "visible" : ""}`}>
          <div className="how-header">
            <span className="how-label">Simple Process</span>
            <h2 className="how-title">
              How It <span className="title-gradient">Works</span>
            </h2>
            <p className="how-subtitle">
              Getting started with TuTurns is easy. Follow these simple steps to find your perfect tutor.
            </p>
          </div>

          <div className="steps-container">
            {/* Connection Line */}
            <div className="steps-line">
              <div 
                className="steps-line-progress" 
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            <div className="steps-grid">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-card ${activeStep === index ? "active" : ""}`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <div className="step-indicator"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Counter />
    </>
  );
};

export default HowItWork;
