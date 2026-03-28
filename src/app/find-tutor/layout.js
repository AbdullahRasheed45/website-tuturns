import "../globals.css";
import { Lato, Inter } from "next/font/google";
import SchemaMarkup from "../components/SchemaMarkup/SchemaMarkup";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Find a Tutor | TuTurns — O-Level, A-Level & IGCSE Specialists",
  description:
    "Get matched with a verified expert tutor for O-Levels, A-Levels, IGCSE or IB in under 24 hours. Free consultation. Call +971 50 446 3928.",
  robots: { index: false, follow: false },
};

export default function FindTutorLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${inter.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className={lato.className}>
        {/* No Navbar, no Footer, no FloatingCTA — pure conversion layout */}
        {children}
      </body>
    </html>
  );
}
