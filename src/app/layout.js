import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import dynamic from "next/dynamic";
import { Lato, Inter } from "next/font/google";

const Footer = dynamic(() => import("./components/Footer/Footer"));
const AuthProvider = dynamic(() => import("./components/AuthProvider"));

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
  title: "TuTurns | A Tutoring Solution",
  description:
    "TuTurns offers comprehensive tutoring services for O/A Level, GCSE, and IGCSE boards. Achieve academic success with our experienced tutors.",
  manifest: "/manifest.ts",
  themeColor: "#0a4d7c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${inter.variable}`}>
      <body className={lato.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
