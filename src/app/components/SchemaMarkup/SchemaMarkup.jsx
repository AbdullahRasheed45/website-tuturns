// Server component — no 'use client' needed
import React from "react";

const SchemaMarkup = () => {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TuTurns",
    description:
      "TuTurns provides expert 1-on-1 online tutoring for O-Levels, A-Levels, IGCSE, IB, and SAT. Trusted by 1,200+ students across UAE and UK.",
    url: "https://www.tuturns.com",
    telephone: "+971504463928",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971504463928",
        contactType: "customer service",
        areaServed: ["AE", "GB"],
        availableLanguage: "English",
        contactOption: "TollFree",
      },
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tutoring Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "O-Level Tutoring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "A-Level Tutoring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IGCSE Tutoring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IB Tutoring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SAT / ACT Preparation" } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can I get matched with a tutor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most families are matched with a verified tutor within 24 hours depending on subject, level, and schedule.",
        },
      },
      {
        "@type": "Question",
        name: "Which curricula does TuTurns support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TuTurns covers O-Levels, A-Levels, IGCSE, IB, SAT, ACT, and a wide range of UK and UAE school subjects.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a free consultation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TuTurns offers a free initial consultation with no commitment. Call +971 50 446 3928 or WhatsApp to get started.",
        },
      },
      {
        "@type": "Question",
        name: "Are sessions online or in person?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TuTurns primarily offers flexible online 1-on-1 tutoring, allowing access to specialist tutors from anywhere.",
        },
      },
      {
        "@type": "Question",
        name: "What if my tutor is not the right fit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TuTurns will reassign a more suitable tutor at no extra cost. Student satisfaction and progress are the top priority.",
        },
      },
    ],
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "TuTurns",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mariam Al-Farsi" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "My tutor restructured everything and gave me a topic-by-topic plan. I went from a C to an A in 8 weeks.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Omar Siddiqui" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Within three months I was predicted A*A in Physics and Chemistry. The tutor knew the syllabus inside out.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;
