"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { CloseSharp, MenuSharp } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../../../../public/images/TuTurns_Logo.svg";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let Links = [
    { name: "Who We Serve", link: "/whoWeServe" },
    { name: "Become A Tutor", link: "/bookACall" },
    { name: "About", link: "/about" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" aria-label="Home">
            <Image
              className="logo-image"
              src={logo}
              alt="TuTurns logo"
              height={60}
              style={{ width: "auto" }}
              priority
            />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`hamburger-line ${open ? "rotate-45" : ""}`}></span>
          <span className={`hamburger-line ${open ? "opacity-0" : ""}`}></span>
          <span className={`hamburger-line ${open ? "-rotate-45" : ""}`}></span>
        </button>

        <div className={`navbar-menu ${open ? "navbar-menu-open" : ""}`}>
          <ul className="nav-links">
            {Links.map((link, index) => (
              <li key={link.name} className="nav-item" style={{ animationDelay: `${index * 100}ms` }}>
                <Link
                  href={link.link}
                  className={`nav-link ${activeLink === link.name ? "active" : ""}`}
                  onClick={() => {
                    setActiveLink(link.name);
                    setOpen(false);
                  }}
                >
                  {link.name}
                  <span className="nav-link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              onClick={() => {
                router.push("/hireTutor");
                setOpen(false);
              }}
              className="nav-cta-btn"
            >
              <span>Find a Tutor</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
