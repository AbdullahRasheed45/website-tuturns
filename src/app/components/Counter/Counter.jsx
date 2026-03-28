"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Counter.css";
import counterImage from "../../../../public/images/counter_image.png";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));
const CountUp = dynamic(() => import("react-countup"));
const SubjectCards = dynamic(() => import("../SubjectCards/SubjectCards"));

const stats = [
  { number: 1200, suffix: "+", label: "Students", icon: "👨‍🎓" },
  { number: 100, suffix: "+", label: "Expert Tutors", icon: "👩‍🏫" },
  { number: 50, suffix: "+", label: "Courses", icon: "📚" },
  { number: 98, suffix: "%", label: "Satisfaction", icon: "⭐" },
];

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counterOn, setCounterOn] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCounterOn(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="counter-section" ref={sectionRef}>
        <div className="counter-bg">
          <div className="counter-gradient"></div>
          <div className="counter-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className={`counter-container ${isVisible ? "visible" : ""}`}>
          <div className="counter-content">
            <span className="counter-label">Our Impact</span>
            <h2 className="counter-title">
              Transform Your Life Through{" "}
              <span className="title-highlight">Learning</span>
            </h2>
            <p className="counter-description">
              From doctors to engineers, from space scientists to programmers,
              it all starts with one step. Join thousands of students who have
              achieved their dreams with TuTurns.
            </p>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <span className="stat-icon">{stat.icon}</span>
                  <div className="stat-number">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.5}
                        delay={0.2}
                      />
                    )}
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="counter-image-wrapper">
            <div className="image-glow"></div>
            <div className="counter-image">
              <Image
                src={counterImage}
                alt="Students learning with TuTurns"
                fill
                quality={90}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain" }}
              />
            </div>
            
            {/* Floating Elements */}
            <div className="floating-badge badge-1">
              <span className="badge-icon">🎓</span>
              <span className="badge-text">Certified Tutors</span>
            </div>
            <div className="floating-badge badge-2">
              <span className="badge-icon">🌟</span>
              <span className="badge-text">5-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      <SubjectCards />
    </>
  );
};

export default Counter;
