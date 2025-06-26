import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Duct Daddy Duct Cleaning",
  description: "Duct cleaning based in Kansas City, MO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${arimo.className} bg-[#E6E6E6] text-[#333333] antialiased`}
      >
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
