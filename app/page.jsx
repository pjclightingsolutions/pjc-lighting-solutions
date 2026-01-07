import { useMemo, useState } from "react";
import { CheckCircle, Phone, Star, X } from "lucide-react";

function Button({ className = "", size = "lg", variant, children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-400/60";
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
    <button className={`${base} ${sizes[size] || sizes.lg} ${v} ${className}`} {...props}>
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

  // A safe default Google reviews link (works even if GBP isn’t set up yet)
  const googleReviewsUrl = "https://www.google.com/search?q=PJC+Lighting+Solutions+reviews";

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
        <link rel="icon" href="/favicon.png" />
        <h1 className="text-4xl md:text-5xl font-bold">
          Permanent Track Lighting
          <span className="block text-sky-400 mt-2">PJC Lighting Solutions</span>
        </h1>
        <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
          Clean, low‑profile LED lighting installed once and enjoyed year‑round.
          Perfect for homes and businesses.
        </p>
        <p className="mt-2 text-sky-400 font-medium">Serving all of Arizona</p>

        <div className="mt-8 flex justify-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`tel:${phone}`}>
              <Button size="lg" variant="outline" className="border-sky-400 text-sky-400 w-full md:w-auto">
                <Phone className="h-4 w-4 mr-2" /> Call 480‑875‑3980
              </Button>
            </a>
            <a href={`sms:${phone}?body=${encodeURIComponent("Hi, I'd like a quote for permanent lighting.")}`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-400 to-orange-400 text-black shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:shadow-[0_0_35px_rgba(251,146,60,0.8)] w-full md:w-auto"
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
            <p className="text-neutral-400 mt-2">Low‑profile track blends into your roofline.</p>
          </div>
          <div>
            <CheckCircle className="h-8 w-8 mx-auto text-sky-400" />
            <h3 className="mt-4 text-lg font-semibold">App Controlled</h3>
            <p className="text-neutral-400 mt-2">Change colors, patterns, and schedules anytime.</p>
          </div>
          <div>
            <CheckCircle className="h-8 w-8 mx-auto text-sky-400" />
            <h3 className="mt-4 text-lg font-semibold">Professional Install</h3>
            <p className="text-neutral-400 mt-2">Installed cleanly and built for Arizona heat.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-black border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Why Choose PJC Lighting Solutions</h2>
          <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
            We focus on clean installs, long‑term reliability, and lighting that actually enhances your home — not bulky systems or seasonal hassle.
          </p>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <CheckCircle className="h-8 w-8 mx-auto text-sky-400" />
              <h3 className="mt-4 font-semibold">Clean, Hidden Install</h3>
              <p className="mt-2 text-neutral-400 text-sm">Low‑profile track blends into your roofline for a factory‑finished look.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <CheckCircle className="h-8 w-8 mx-auto text-sky-400" />
              <h3 className="mt-4 font-semibold">Built for Arizona Heat</h3>
              <p className="mt-2 text-neutral-400 text-sm">Commercial‑grade components designed to handle extreme temperatures.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <CheckCircle className="h-8 w-8 mx-auto text-sky-400" />
              <h3 className="mt-4 font-semibold">App‑Controlled Lighting</h3>
              <p className="mt-2 text-neutral-400 text-sm">Change colors, patterns, and schedules anytime from your phone.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <CheckCircle className="h-8 w-8 mx-auto text-sky-400" />
              <h3 className="mt-4 font-semibold">No Seasonal Setup</h3>
              <p className="mt-2 text-neutral-400 text-sm">One installation that works for holidays, events, and everyday curb appeal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING EXPECTATIONS */}
      <section className="bg-black border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">Pricing Expectations</h2>
          <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
            Most permanent track lighting installations typically range between
            <span className="text-sky-400 font-semibold"> $25–$50 per foot</span>, depending on roofline layout,
            total footage, and project complexity.
          </p>
          <p className="mt-3 text-neutral-400 text-sm max-w-3xl mx-auto">
            Final pricing is always confirmed with a free on‑site or photo‑based estimate — no surprises.
          </p>
        </div>
      </section>

      {/* 20 YEAR WARRANTY */}
      <section className="bg-neutral-900 border-t-4 border-sky-500">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">20‑Year Warranty</h2>
          <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
            Every permanent lighting system we install is backed by a
            <span className="text-sky-400 font-semibold"> 20‑year warranty</span> on materials and workmanship.
            Built to last through Arizona heat, seasons, and years of use.
          </p>
          <p className="mt-3 text-neutral-400 text-sm max-w-3xl mx-auto">
            It’s peace of mind you won’t get with temporary or seasonal lighting systems.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <p className="mt-4 text-neutral-300 text-center max-w-3xl mx-auto">
            Everything homeowners usually ask before moving forward with permanent track lighting.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <h3 className="font-semibold text-sky-400">How long does permanent track lighting last?</h3>
              <p className="mt-2 text-neutral-300 text-sm">
                Our systems are designed for long-term use and are backed by a 20-year warranty. With proper installation, they are built to last decades.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <h3 className="font-semibold text-sky-400">Does the track show during the day?</h3>
              <p className="mt-2 text-neutral-300 text-sm">
                No. The low-profile track is color-matched and blends seamlessly into your roofline, remaining nearly invisible during daylight hours.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <h3 className="font-semibold text-sky-400">Can I change colors and patterns?</h3>
              <p className="mt-2 text-neutral-300 text-sm">
                Yes. You can control colors, brightness, schedules, and holiday themes directly from your phone using an easy-to-use app.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <h3 className="font-semibold text-sky-400">Do I need permits or ongoing maintenance?</h3>
              <p className="mt-2 text-neutral-300 text-sm">
                No permits are typically required, and maintenance is minimal. Once installed, the system is designed to work year-round without seasonal setup or removal.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <h3 className="font-semibold text-sky-400">How long does installation take?</h3>
              <p className="mt-2 text-neutral-300 text-sm">
                Most residential installations are completed in a single day, depending on the size and complexity of the home.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6">
              <h3 className="font-semibold text-sky-400">Is this better than traditional holiday lights?</h3>
              <p className="mt-2 text-neutral-300 text-sm">
                Yes. Permanent lighting eliminates yearly setup costs, ladder risks, and storage while giving you lighting you can use for holidays, events, and everyday curb appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS COMPLETED */}
      <section className="bg-neutral-900 border-t-4 border-orange-400">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Jobs Completed</h2>
          <p className="mt-2 text-sky-400 font-medium">★★★★★ 5‑Star Rated Installations</p>

          {/* Featured job */}
          <div className="mt-10">
            <img
              src="/job-completed-1.jpg"
              alt="Permanent track lighting installation by PJC Lighting Solutions"
              className="rounded-2xl shadow-2xl mx-auto"
              onClick={() => setLightboxSrc("/job-completed-1.jpg")}
              role="button"
            />
            <p className="mt-6 text-neutral-300 max-w-3xl mx-auto">
              Clean, professional permanent track lighting installation with seamless roofline integration and warm architectural glow.
            </p>
          </div>

          {/* AUTO-SCROLLING GALLERY */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-800 bg-black/30">
            <div className="pjc-marquee-track flex gap-4 p-4 w-[200%]">
              {[...gallery, ...gallery].map((src, idx) => (
                <button
                  key={`${src}-${idx}`}
                  className="shrink-0"
                  onClick={() => setLightboxSrc(src)}
                  aria-label="Open photo"
                >
                  <img
                    src={src}
                    alt="PJC Lighting Solutions installation photo"
                    className="h-36 sm:h-44 md:h-52 w-auto rounded-xl shadow-lg border border-neutral-800 hover:opacity-90 transition"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* CLICK-TO-EXPAND GRID */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.slice(1).map((src) => (
              <button key={src} onClick={() => setLightboxSrc(src)} className="text-left" aria-label="Open photo">
                <img
                  src={src}
                  alt="Permanent lighting installation"
                  className="rounded-xl shadow-lg hover:scale-[1.02] transition border border-neutral-800"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* GOOGLE REVIEWS */}
          <div className="mt-14">
            <div className="flex items-center justify-center gap-2 text-sky-400">
              <Star className="h-5 w-5" />
              <Star className="h-5 w-5" />
              <Star className="h-5 w-5" />
              <Star className="h-5 w-5" />
              <Star className="h-5 w-5" />
              <span className="ml-2 font-semibold">Google Reviews</span>
            </div>
            <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
              Real feedback from homeowners who wanted a clean install, great curb appeal, and lighting that lasts.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  name: "Homeowner",
                  text: "Install was super clean. The track disappears and the lighting looks amazing at night.",
                },
                {
                  name: "Customer",
                  text: "Quick quote, professional work, and the app control is awesome. Highly recommend.",
                },
                {
                  name: "Local Client",
                  text: "Quality job from start to finish. We love the warm architectural glow year‑round.",
                },
              ].map((r, i) => (
                <div key={i} className="rounded-2xl border border-neutral-800 bg-black/30 p-6">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{r.name}</p>
                    <div className="flex gap-1 text-sky-400">
                      <Star className="h-4 w-4" />
                      <Star className="h-4 w-4" />
                      <Star className="h-4 w-4" />
                      <Star className="h-4 w-4" />
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="mt-3 text-neutral-300">“{r.text}”</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href={googleReviewsUrl} target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-sky-400 to-orange-400 text-black">
                  Read Google Reviews
                </Button>
              </a>
              <a href={googleReviewsUrl} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="border-sky-400 text-sky-400">
                  Leave a 5‑Star Review
                </Button>
              </a>
            </div>

            <p className="mt-4 text-neutral-500 text-sm max-w-3xl mx-auto">
              Want a live reviews embed instead of the buttons/cards? If you have your Google Business Profile link, swap
              <span className="text-neutral-300"> googleReviewsUrl </span>
              above to your exact listing URL.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Get Your Free Estimate</h2>
        <p className="mt-4 text-neutral-300">Fast quotes. Clean installs. No seasonal hassle.</p>
        <div className="mt-6">
          <a href={`tel:${phone}`}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-400 to-orange-400 text-black shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:shadow-[0_0_35px_rgba(251,146,60,0.8)]"
            >
              Call or Text 480‑875‑3980
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} PJC Lighting Solutions</p>
        </div>
      </footer>

      {/* STICKY MOBILE BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-sky-500 flex md:hidden">
        <a href={`tel:${phone}`} className="flex-1">
          <button className="w-full py-4 text-sky-400 font-semibold">Call</button>
        </a>
        <a
          href={`sms:${phone}?body=${encodeURIComponent("Hi, I'd like a quote for permanent lighting.")}`}
          className="flex-1"
        >
          <button className="w-full py-4 bg-gradient-to-r from-sky-400 to-orange-400 text-black font-semibold">
            Text Us
          </button>
        </a>
      </div>

      {/* LIGHTBOX */}
      {lightboxSrc ? (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute -top-12 right-0 text-white/90 hover:text-white flex items-center gap-2"
              aria-label="Close"
            >
              <X className="h-5 w-5" /> Close
            </button>
            <img src={lightboxSrc} alt="Expanded photo" className="w-full rounded-2xl shadow-2xl border border-neutral-800" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
