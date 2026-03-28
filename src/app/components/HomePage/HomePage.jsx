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
const TestimonialsSection = dynamic(() =>
  import("../TestimonialsSection/TestimonialsSection")
);
const HomeFaq = dynamic(() => import("../HomeFaq/HomeFaq"));
const FinalContactSection = dynamic(() =>
  import("../FinalContactSection/FinalContactSection")
);

const PHONE = "971504463928";
const PHONE_DISPLAY = "+971 50 446 3928";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi TuTurns! I found you online and I'd like help finding the right tutor. Can you help me?"
);

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustLogos = [
    { label: "O-Levels" },
    { label: "A-Levels" },
    { label: "IGCSE" },
    { label: "IB" },
    { label: "SAT / ACT" },
  ];

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>

        <div className="hero-container">
          {/* ---- LEFT: Copy & CTAs ---- */}
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Trusted by <strong>1,200+</strong> Students Across UAE &amp; UK</span>
            </div>

            <h1 className="hero-title">
              Find the{" "}
              <span className="hero-title-highlight">
                Right Tutor
                <svg className="highlight-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,8 T200,6" stroke="url(#grad)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--accent)"/>
                      <stop offset="100%" stopColor="var(--accent-light)"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              &amp; Improve Your Grades
            </h1>

            <div className="hero-typing">
              <TypeAnimation
                sequence={[
                  "O-Level & A-Level Tutors",
                  2000,
                  "IGCSE Specialists",
                  2000,
                  "IB & SAT Preparation",
                  2000,
                  "1-on-1 Online Classes",
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
              Get matched with a verified expert tutor in under 24 hours.
              Personalised sessions for O-Levels, A-Levels, IGCSE and more.{" "}
              <strong>Results guaranteed or your money back.</strong>
            </p>

            {/* Primary CTAs */}
            <div className="hero-cta">
              <Link href="/hireTutor" className="cta-primary">
                <span>Find My Tutor Now</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <a href={`tel:+${PHONE}`} className="cta-phone">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                <span>Call Free Consultation</span>
              </a>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us for Quick Enquiry
            </a>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Happy Students</span>
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
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>

          {/* ---- RIGHT: Images ---- */}
          <div className={`hero-images ${isVisible ? "visible" : ""}`}>
            <div className="images-wrapper">
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
                <div className="image-badge image-badge-top">
                  <span className="badge-icon">⭐</span>
                  <div>
                    <strong>4.9/5</strong>
                    <span> Avg Rating</span>
                  </div>
                </div>
                <div className="image-badge image-badge-bottom">
                  <span className="badge-icon">⚡</span>
                  <div>
                    <strong>Matched in 24h</strong>
                    <span> Guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="floating-image floating-image-1">
                <Image src={Image2} alt="Student online class" fill quality={85} sizes="200px" style={{ objectFit: "cover" }} />
              </div>
              <div className="floating-image floating-image-2">
                <Image src={Image3} alt="Tutoring session" fill quality={85} sizes="180px" style={{ objectFit: "cover" }} />
              </div>

              <div className="deco-circle deco-circle-1"></div>
              <div className="deco-circle deco-circle-2"></div>
              <div className="deco-dots"></div>
            </div>
          </div>
        </div>

        {/* Subject trust bar */}
        <div className="hero-trust-bar">
          <span className="trust-label">Specialising in:</span>
          {trustLogos.map((s) => (
            <span key={s.label} className="trust-pill">{s.label}</span>
          ))}
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Page flow — conversion-ordered sections */}
      <ExploreUs />
      <TestimonialsSection />
      <HomeFaq />
      <FinalContactSection />
    </>
  );
};

export default HomePage;
