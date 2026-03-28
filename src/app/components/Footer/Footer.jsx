"use client";
import React from "react";
import "./Footer.css";
import Link from "next/link";
import logo from "../../../../public/images/TuTurns_Logo.svg";
import Image from "next/image";

const PHONE_RAW = "971504463928";
const PHONE_DISPLAY = "+971 50 446 3928";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi TuTurns! I found you online and would like help finding the right tutor."
);

const footerLinks = {
  services: [
    { name: "Find a Tutor", href: "/hireTutor" },
    { name: "O-Level Tutoring", href: "/whoWeServe" },
    { name: "A-Level Tutoring", href: "/whoWeServe" },
    { name: "IGCSE Tutoring", href: "/whoWeServe" },
    { name: "IB Tutoring", href: "/whoWeServe" },
    { name: "SAT / ACT Prep", href: "/whoWeServe" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Become a Tutor", href: "/bookACall" },
    { name: "Who We Serve", href: "/whoWeServe" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/" },
    { name: "Terms of Service", href: "/" },
    { name: "Cookie Policy", href: "/" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${PHONE_RAW}?text=${WHATSAPP_TEXT}`,
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top CTA strip */}
      <div className="footer-cta-strip">
        <div className="footer-cta-strip-inner">
          <div className="footer-strip-copy">
            <strong>Ready to find the right tutor?</strong>
            <span>Free consultation — no commitment required.</span>
          </div>
          <div className="footer-strip-actions">
            <a href={`tel:+${PHONE_RAW}`} className="footer-strip-call">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${PHONE_RAW}?text=${WHATSAPP_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-strip-wa"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo-wrap">
              <Image src={logo} alt="TuTurns logo" height={52} style={{ width: "auto" }} />
            </Link>
            <p className="footer-tagline">
              Expert 1-on-1 online tutoring for O-Levels, A-Levels, IGCSE, IB and more.
              Trusted by 1,200+ students across UAE &amp; UK.
            </p>
            {/* Trust badges */}
            <div className="footer-trust-badges">
              <span className="footer-badge">✔ Verified Tutors</span>
              <span className="footer-badge">✔ Free Consultation</span>
              <span className="footer-badge">✔ 24h Matching</span>
            </div>
            {/* Contact block */}
            <div className="footer-contact-block">
              <a href={`tel:+${PHONE_RAW}`} className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`https://wa.me/${PHONE_RAW}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item footer-contact-wa"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
            {/* Socials */}
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="social-link"
                  aria-label={s.name}
                  target={s.name === "WhatsApp" ? "_blank" : undefined}
                  rel={s.name === "WhatsApp" ? "noopener noreferrer" : undefined}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-links-section">
            <h3 className="footer-heading">Tutoring Services</h3>
            <ul className="footer-links">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-links-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <h3 className="footer-heading">Legal</h3>
              <ul className="footer-links">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="footer-link">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} TuTurns. All rights reserved.
          </p>
          <p className="footer-bottom-tagline">
            Expert tutors for O-Levels, A-Levels, IGCSE &amp; IB • UAE &amp; UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
