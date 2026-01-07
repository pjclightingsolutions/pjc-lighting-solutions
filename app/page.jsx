"use client";

import { useState } from "react";
import { Phone, Star, X, CheckCircle } from "lucide-react";

export default function Page() {
  const phone = "4808753980";
  const sms = `sms:${phone}?body=${encodeURIComponent(
    "Hi, I'd like a quote for permanent track lighting."
  )}`;

  const gallery = [
    "/job-completed-1.jpg",
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
  ];

  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <img
          src="/pjc-lighting-solutions-logo.png"
          alt="PJC Lighting Solutions"
          className="h-20 mx-auto mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold">
          Permanent Track Lighting
        </h1>
        <p className="text-sky-400 font-semibold mt-2">
          Serving all of Arizona
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${phone}`}
            className="border border-sky-400 text-sky-400 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call 480-875-3980
          </a>

          <a
            href={sms}
            className="bg-gradient-to-r from-sky-400 to-orange-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Text Us
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Clean, hidden installs",
              "Built for Arizona heat",
              "App-controlled lighting",
              "No seasonal setup",
            ].map((item) => (
              <div
                key={item}
                className="border border-neutral-800 rounded-2xl p-6"
              >
                <CheckCircle className="h-8 w-8 mx-auto text-sky-400 mb-4" />
                <p className="text-neutral-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Pricing Expectations</h2>
        <p className="mt-4 text-neutral-300">
          Most installs range{" "}
          <span className="text-sky-400 font-semibold">$25–$50 per foot</span>.
          Free estimates. No surprises.
        </p>
      </section>

      {/* WARRANTY */}
      <section className="bg-neutral-900 py-16 text-center">
        <h2 className="text-3xl font-bold">20-Year Warranty</h2>
        <p className="mt-4 text-neutral-300">
          Every system we install is backed by a{" "}
          <span className="text-sky-400 font-semibold">
            20-year warranty
          </span>{" "}
          on materials and workmanship.
        </p>
      </section>

      {/* GALLERY */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jobs Completed • ★★★★★
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img) => (
            <button
              key={img}
              onClick={() => setLightbox(img)}
              className="border border-neutral-800 rounded-xl overflow-hidden"
            >
              <img
                src={img}
                alt="PJC Lighting installation"
                className="w-full h-48 object-cover hover:opacity-90 transition"
              />
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          Get Your Free Estimate
        </h2>
        <a
          href={sms}
          className="inline-block bg-gradient-to-r from-sky-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold"
        >
          Call or Text 480-875-3980
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 text-center py-6 text-neutral-500 text-sm">
        © {new Date().getFullYear()} PJC Lighting Solutions
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white flex items-center gap-2"
            >
              <X className="h-5 w-5" />
              Close
            </button>
            <img
              src={lightbox}
              alt="Expanded"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
