import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import dynamic from "next/dynamic";
import { Lato, Inter } from "next/font/google";

const Footer = dynamic(() => import("./components/Footer/Footer"));
const AuthProvider = dynamic(() => import("./components/AuthProvider"));
const FloatingContactCTA = dynamic(() =>
  import("./components/FloatingContactCTA/FloatingContactCTA")
);

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
  title: "TuTurns | Expert O-Level, A-Level & IGCSE Tutors",
  description:
    "Find verified expert tutors for O-Levels, A-Levels, IGCSE and IB. Get matched in under 24 hours. Free consultation available. Call +971 50 446 3928.",
  manifest: "/manifest.ts",
  themeColor: "#0a4d7c",
  keywords:
    "online tutor, O-level tutor, A-level tutor, IGCSE tutor, IB tutor, tutoring UAE, tutoring UK, TuTurns",
  openGraph: {
    title: "TuTurns | Expert O-Level, A-Level & IGCSE Tutors",
    description:
      "Find verified expert tutors for O-Levels, A-Levels, IGCSE and IB. Free consultation: +971 50 446 3928",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${inter.variable}`}>
      <body className={lato.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingContactCTA />
        </AuthProvider>
      </body>
    </html>
  );
}
