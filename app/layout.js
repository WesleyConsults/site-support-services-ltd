import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Site Support Services Limited | Management, Catering & Logistics",
  description: "Site Support Services Limited provides reliable management, catering, logistics, manpower, facility, and operational support services to clients across Ghana’s Oil & Gas, Construction, Mining, Hospitality, and industrial sectors in Takoradi.",
  keywords: "Catering, Logistics, Camp Management, Manpower supply, Equipment rental, Takoradi, Ghana, Oil and Gas support services",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
