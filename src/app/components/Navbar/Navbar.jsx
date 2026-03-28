"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../../public/images/TuTurns_Logo.svg";
import Image from "next/image";

const PHONE = "+971504463928";
const PHONE_DISPLAY = "+971 50 446 3928";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Links = [
    { name: "Who We Serve", link: "/whoWeServe" },
    { name: "About Us", link: "/about" },
    { name: "Become A Tutor", link: "/bookACall" },
  ];

  return (
    <>
      {/* Top announcement bar — visible on all pages, great for Google Ads message match */}
      <div className="navbar-topbar">
        <span className="topbar-text">
          📞 Free Consultation Available —&nbsp;
          <a href={`tel:${PHONE}`} className="topbar-phone">{PHONE_DISPLAY}</a>
          &nbsp;· Expert O-Level, A-Level & IGCSE Tutors
        </span>
      </div>

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link href="/" aria-label="Home">
              <Image
                className="logo-image"
                src={logo}
                alt="TuTurns logo"
                height={52}
                style={{ width: "auto" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className="nav-links-desktop">
            {Links.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className={`nav-link ${activeLink === link.name ? "active" : ""}`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  <span className="nav-link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right CTAs */}
          <div className="nav-actions-desktop">
            <a href={`tel:${PHONE}`} className="nav-phone-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {PHONE_DISPLAY}
            </a>
            <button
              onClick={() => router.push("/hireTutor")}
              className="nav-cta-btn"
            >
              <span>Find a Tutor</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`hamburger-line ${open ? "rotate-45" : ""}`}></span>
            <span className={`hamburger-line ${open ? "opacity-0" : ""}`}></span>
            <span className={`hamburger-line ${open ? "-rotate-45" : ""}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="navbar-mobile-menu">
            <ul className="nav-links-mobile">
              {Links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="nav-link-mobile"
                    onClick={() => { setActiveLink(link.name); setOpen(false); }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-cta-group">
              <a href={`tel:${PHONE}`} className="mobile-phone-cta">
                📞 Call Us: {PHONE_DISPLAY}
              </a>
              <button
                className="nav-cta-btn mobile-find-tutor"
                onClick={() => { router.push("/hireTutor"); setOpen(false); }}
              >
                Find a Tutor →
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
