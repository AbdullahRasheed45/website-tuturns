"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ExploreUs.css";
import exploreUs from "../../../../public/images/exploreUs_image.jpg";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));
const HowItWork = dynamic(() => import("../HowItWork/HowItWork"));

const ExploreUs = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    { icon: "🎯", text: "Personalized Learning" },
    { icon: "📚", text: "Expert Tutors" },
    { icon: "🌍", text: "Learn Anywhere" },
  ];

  return (
    <>
      <section className="explore-section" ref={sectionRef}>
        <div className="explore-bg-accent"></div>
        
        <div className={`explore-container ${isVisible ? "visible" : ""}`}>
          <div className="explore-content">
            <span className="explore-label">About TuTurns</span>
            <h2 className="explore-title">
              Where Learning Takes a{" "}
              <span className="title-accent">New Turn</span>
            </h2>
            <p className="explore-subtitle">
              Online education platform that fits for everyone
            </p>
            <p className="explore-description">
              TuTurns is your trusted partner for academic excellence, covering
              O-Level, A-Level, IGCSE, and various primary to secondary boards.
              Explore more about us to learn how we can support your educational
              journey.
            </p>

            <div className="explore-features">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-text">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="explore-cta">
              <span>Explore More</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="explore-image-wrapper">
            <div className="image-decoration"></div>
            <div className="explore-image">
              <Image
                src={exploreUs}
                alt="Student learning with TuTurns"
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="image-badge">
              <span className="badge-number">5+</span>
              <span className="badge-text">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      <HowItWork />
    </>
  );
};

export default ExploreUs;
