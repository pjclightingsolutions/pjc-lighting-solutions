"use client";

import { useMemo, useState } from "react";
import { CheckCircle, Phone, Star, X } from "lucide-react";

function Button({ className = "", size = "lg", variant, children, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-400/60";
  const sizes = {
    lg: "px-6 py-3 text-base",
    md: "px-4 py-2 text-sm",
  };
  const variants = {
    outline: "border border-sky-400 text-sky-400 hover:bg-sky-400/10",
    solid: "bg-gradient-to-r from-sky-400 to-orange-400 text-black",
  };
  const v = variant ? variants[variant] : variants.solid;

  return (
    <button
      className={`${base} ${sizes[size] || sizes.lg} ${v} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function PJCLightingSolutions() {
  const phone = "4808753980";

  const gallery = useMemo(
    () => [
      "/job-completed-1.jpg",
      "/gallery-1.jpg",
      "/gallery-2.jpg",
      "/gallery-3.jpg",
      "/gallery-4.jpg",
      "/gallery-5.jpg",
      "/gallery-6.jpg",
    ],
    []
  );

  const [lightboxSrc, setLightboxSrc] = useState(null);

  // Replace this later with your real Google Business Profile reviews link
  const googleReviewsUrl =
    "https://www.google.com/search?q=PJC+Lighting+Solutions+reviews";

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Minimal CSS for marquee */}
      <style>{`
        @keyframes pjc-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .pjc-marquee-track {
          animation: pjc-marquee 22s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .pjc-marquee-track { animation: none; }
        }
      `}</style>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-center items-center">
        <img
          src="/pjc-lighting-solutions-logo.png"
          alt="PJC Lighting Solutions Logo"
          className="h-20 md:h-24"
        />
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Permanent Track Lighting
          <span className="block text-sky-400 mt-2">PJC Lighting Solutions</span>
        </h1>

        <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
          Clean, low-profile LED lighting installed once and enjoyed year-round.
          Perfect for homes and businesses.
        </p>

        <p className="mt-2 text-sky-400 font-medium">Serving all of Arizona</p>

        <div className="mt-8 flex justify-center">
          <div className="flex flex-col md:flex-row gap-4 justify-center w-full md:w-auto">
            <a href={`tel:${phone}`} className="w-full md:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full md:w-auto"
              >
                <Phone className="h-4 w-4 mr-2" /> Call 480-875-3980
              </Button>
            </a>

            <a
              href={`sms:${phone}?body=${encodeURIComponent(
                "Hi, I'd like a quote for permanent lighting."
              )}`}
              className="w-full md:w-auto"
            >
              <Button
                size="lg"
                className="shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:shadow-[0_0_35px_rgba(251,146,60,0.8)] w-full md:w-auto"
              >
                Text Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-neutral-900 border-t-4 border-sky-500">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <CheckCircle className="h-8 w-8 mx-auto text-sky-400" />
            <h3 className="mt-4 text-lg font-semibold">Permanent & Hidden</h3>
            <p className="text-neutral-400 mt-2">
              Low-profile track blends into your roofline.
            </p>
          </div>

          <div>
            <CheckCircle className="h-8 w-8 mx
