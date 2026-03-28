"use client";
import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import Image1 from "../../../../public/images/homePage_image1.png";
import Image2 from "../../../../public/images/homePage_image2.png";
import Image3 from "../../../../public/images/homePage_image3.png";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));
const TypeAnimation = dynamic(() =>
  import("react-type-animation").then((module) => module.TypeAnimation)
);

const ExploreUs = dynamic(() => import("../ExploreUs/ExploreUs"));

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Floating shapes for background
  const shapes = [
    { size: 120, top: "10%", left: "5%", delay: 0, color: "var(--primary)" },
    { size: 80, top: "60%", left: "8%", delay: 1, color: "var(--accent)" },
    { size: 60, top: "30%", right: "10%", delay: 0.5, color: "var(--primary-light)" },
    { size: 100, top: "70%", right: "5%", delay: 1.5, color: "var(--primary-lighter)" },
  ];

  return (
    <>
      <section className="hero" ref={heroRef}>
        {/* Animated Background */}
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
          {shapes.map((shape, i) => (
            <div
              key={i}
              className="floating-shape"
              style={{
                width: shape.size,
                height: shape.size,
                top: shape.top,
                left: shape.left,
                right: shape.right,
                animationDelay: `${shape.delay}s`,
                background: `linear-gradient(135deg, ${shape.color}15, ${shape.color}05)`,
                border: `1px solid ${shape.color}20`,
              }}
            />
          ))}
        </div>

        <div className="hero-container">
          {/* Left Content */}
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Trusted by 1200+ Students Worldwide</span>
            </div>

            <h1 className="hero-title">
              A Good{" "}
              <span className="hero-title-highlight">
                Education
                <svg className="highlight-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,8 T200,6" stroke="url(#gradient)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--accent)" />
                      <stop offset="100%" stopColor="var(--accent-light)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              is Always a Base of
            </h1>

            <div className="hero-typing">
              <TypeAnimation
                sequence={[
                  "Personal Growth",
                  2000,
                  "A Bright Future",
                  2000,
                  "Personal Well-being",
                  2000,
                  "Confidence Building",
                  2000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className="typing-text"
              />
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-description">
              Find the perfect tutor online. Make your choice from the best
              O-levels, A-levels, and IGCSE tutors. Personalized learning that
              adapts to your needs.
            </p>

            <div className="hero-cta">
              <Link href="/hireTutor" className="cta-primary">
                <span>Find Your Tutor</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/bookACall" className="cta-secondary">
                <span>Become A Tutor</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1200+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Expert Tutors</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Subjects</span>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className={`hero-images ${isVisible ? "visible" : ""}`}>
            <div className="images-wrapper">
              {/* Main Image */}
              <div className="main-image-container">
                <div className="main-image-glow"></div>
                <div className="main-image">
                  <Image
                    src={Image1}
                    alt="Students learning with TuTurns"
                    fill
                    quality={90}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Floating Image 1 */}
              <div className="floating-image floating-image-1">
                <Image
                  src={Image2}
                  alt="Student ready for online class"
                  fill
                  quality={85}
                  sizes="200px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Floating Image 2 */}
              <div className="floating-image floating-image-2">
                <Image
                  src={Image3}
                  alt="Online tutoring session"
                  fill
                  quality={85}
                  sizes="180px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="deco-circle deco-circle-1"></div>
              <div className="deco-circle deco-circle-2"></div>
              <div className="deco-dots"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      <ExploreUs />
    </>
  );
};

export default HomePage;
