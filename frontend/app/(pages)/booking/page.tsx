"use client";

import CTA from "@/app/components/CTA";
import FAQs from "@/app/components/pages/landing/FAQs";
import ReviewSection from "@/app/components/pages/landing/ReviewSection";
import ServiceArea from "@/app/components/pages/landing/ServiceArea";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaCalendarDays } from "react-icons/fa6";

declare global {
  interface Window {
    HCPWidget?: {
      openModal: () => void;
    };
  }
}

export default function BookingPage() {
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://online-booking.housecallpro.com/script.js?token=127343b956e24e13a52da46f4500936b&orgName=Duct-Daddy";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (pathname === "/booking" && typeof window.HCPWidget !== "undefined") {
        window.HCPWidget.openModal();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  });

  const handleClick = () => {
    if (typeof window.HCPWidget !== "undefined") {
      window.HCPWidget.openModal();
    }
  };

  return (
    <>
    <main className="pt-20 mb-36">
      <header className="px-6 py-20 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center sm:text-5xl">Online Booking</h2>
        <p className="mt-4 text-center max-w-xl mx-auto">
          Schedule an appointment with Duct Daddy Duct Cleaning.
        </p>
        <button
          data-token="127343b956e24e13a52da46f4500936b"
          data-orgname="Duct-Daddy"
          onClick={handleClick}
          className="flex items-center gap-x-3 mt-12 bg-[#0080DB] text-[#E6E6E6] py-3 px-6 font-semibold rounded-md hover:bg-[hsl(205,100%,33%)] active:bg-[hsl(205,100%,23%)]"
        >
          <FaCalendarDays className="w-4 h-4" />
          Book appointment
        </button>
      </header>
    </main>
    <ReviewSection />
    <ServiceArea />
    <FAQs />
    <CTA />
    </>
  )
}