"use client";
import React, { useState } from "react";
import "./find-tutor.css";
import Link from "next/link";

const PHONE_RAW = "971504463928";
const PHONE_DISPLAY = "+971 50 446 3928";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi TuTurns! I clicked your ad and want help finding the right tutor. Can you help?"
);

const subjects = [
  "Mathematics", "Physics", "Chemistry", "Biology",
  "English", "Economics", "History", "Computer Science",
  "Further Mathematics", "Other",
];

const levels = ["O-Level", "A-Level", "IGCSE", "IB", "SAT / ACT", "GCSE", "Primary", "University"];

const steps = [
  { icon: "📝", title: "Tell us your needs", desc: "Fill in the quick form below — takes under 2 minutes." },
  { icon: "🔍", title: "We match you", desc: "We find the right verified tutor for your subject and level." },
  { icon: "✅", title: "Start learning", desc: "Your first session is booked, usually within 24 hours." },
];

export default function FindTutorPage() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", level: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const msg = encodeURIComponent(
      `Hi TuTurns! I\'d like to find a tutor.\nName: ${form.name}\nPhone: ${form.phone}\nSubject: ${form.subject}\nLevel: ${form.level}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${PHONE_RAW}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="ft-page">
      {/* Minimal header for Google Ads — no distracting nav */}
      <header className="ft-header">
        <Link href="/" className="ft-logo-link">
          <span className="ft-logo-text">TuTurns</span>
        </Link>
        <a href={`tel:+${PHONE_RAW}`} className="ft-header-phone">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          {PHONE_DISPLAY}
        </a>
      </header>

      <div className="ft-container">
        {/* LEFT: Copy + trust */}
        <div className="ft-left">
          <div className="ft-badge">
            <span className="ft-badge-dot"></span>
            Trusted by 1,200+ Students • UAE &amp; UK
          </div>

          <h1 className="ft-heading">
            Find the Perfect Tutor for{" "}
            <span className="ft-heading-accent">O-Levels, A-Levels &amp; IGCSE</span>
          </h1>

          <p className="ft-subtext">
            Tell us your subject and level. We match you with a verified expert tutor — usually within <strong>24 hours</strong>. Free consultation, no commitment.
          </p>

          {/* How it works */}
          <div className="ft-steps">
            {steps.map((s, i) => (
              <div className="ft-step" key={i}>
                <div className="ft-step-icon">{s.icon}</div>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust signals */}
          <div className="ft-trust">
            <span>✔ Verified tutors</span>
            <span>✔ O-Level, A-Level, IGCSE, IB</span>
            <span>✔ Free consultation</span>
            <span>✔ Results-focused approach</span>
          </div>

          {/* Or just call */}
          <div className="ft-or-call">
            <span>Prefer to talk directly?</span>
            <a href={`tel:+${PHONE_RAW}`} className="ft-call-link">
              📞 Call {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${PHONE_RAW}?text=${WHATSAPP_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ft-wa-link"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="ft-right">
          {submitted ? (
            <div className="ft-success">
              <div className="ft-success-icon">✅</div>
              <h2>We’ve received your request!</h2>
              <p>
                Your message has been sent via WhatsApp. One of our team will confirm your tutor match shortly.
              </p>
              <a href={`tel:+${PHONE_RAW}`} className="ft-success-call">
                Call us now: {PHONE_DISPLAY}
              </a>
              <Link href="/" className="ft-success-home">Back to homepage</Link>
            </div>
          ) : (
            <form className="ft-form" onSubmit={handleSubmit} noValidate>
              <div className="ft-form-header">
                <h2>Find My Tutor</h2>
                <p>Free consultation — no payment needed to enquire</p>
              </div>

              <div className="ft-field">
                <label htmlFor="ft-name">Your name *</label>
                <input
                  id="ft-name" type="text" name="name" required
                  placeholder="e.g. Ahmed Al-Hassan"
                  value={form.name} onChange={handleChange}
                />
              </div>

              <div className="ft-field">
                <label htmlFor="ft-phone">Phone / WhatsApp *</label>
                <input
                  id="ft-phone" type="tel" name="phone" required
                  placeholder="e.g. +971 50 123 4567"
                  value={form.phone} onChange={handleChange}
                />
              </div>

              <div className="ft-field-row">
                <div className="ft-field">
                  <label htmlFor="ft-subject">Subject *</label>
                  <select id="ft-subject" name="subject" required value={form.subject} onChange={handleChange}>
                    <option value="" disabled>Select subject</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="ft-field">
                  <label htmlFor="ft-level">Level *</label>
                  <select id="ft-level" name="level" required value={form.level} onChange={handleChange}>
                    <option value="" disabled>Select level</option>
                    {levels.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <div className="ft-field">
                <label htmlFor="ft-message">Anything else? (optional)</label>
                <textarea
                  id="ft-message" name="message" rows={3}
                  placeholder="e.g. My exam is in 6 weeks, I need help with algebra and statistics"
                  value={form.message} onChange={handleChange}
                />
              </div>

              <button type="submit" className="ft-submit">
                Send via WhatsApp &amp; Find My Tutor →
              </button>

              <p className="ft-privacy">
                🔒 Your details are private and only shared with your matched tutor.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
