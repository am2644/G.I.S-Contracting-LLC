import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { assetUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About G.I.S Contracting LLC | Austin, TX",
  description:
    "Meet Tony Gomez and G.I.S Contracting LLC — a family-owned residential and commercial contractor serving Austin since 1998, rated 4.7 from 38 Google reviews.",
  openGraph: {
    title: "About G.I.S Contracting LLC | Austin, TX",
    description:
      "Meet Tony Gomez and G.I.S Contracting LLC — a family-owned residential and commercial contractor serving Austin since 1998, rated 4.7 from 38 Google reviews.",
    images: [assetUrl("/assets/work/gis-home-exterior-stone.jpg")],
  },
};

const stats = [
  { value: "1998", label: "Serving Austin since" },
  { value: "4.7", label: "Google rating" },
  { value: "38", label: "Google reviews" },
  { value: "Family-owned", label: "Residential & commercial" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h1
            className="hero-reveal max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            About G.I.S Contracting LLC
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Family-owned residential and commercial construction, built on communication and finish quality.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Meet Tony Gomez
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Tony Gomez founded G.I.S Contracting with a straightforward standard: show up,
                communicate clearly, and leave every home better than you found it.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Since 1998, G.I.S has handled kitchens, bathrooms, whole-home renovations, roofing,
                painting, and commercial work across Austin. Tony and his office manager Ann stay
                involved from the first walkthrough through the final punch list, and the crew
                protects and cleans the home along the way.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Today the company is rated 4.7 stars across 38 Google reviews, with homeowners
                consistently calling out the same strengths: clear communication, careful finish
                work, and a crew that treats the house with respect.
              </p>
            </div>

            <figure
              data-reveal
              className="relative opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
                <img
                  src={assetUrl("/assets/work/gis-stone-entry.jpg")}
                  alt="Stone entry and foyer completed by G.I.S Contracting in Austin, Texas"
                  width={825}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500">
                G.I.S Contracting · Residential &amp; Commercial · Austin, Texas
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              Family-Owned &amp; 4.7-Star Rated
            </h2>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-reveal
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <p className="font-display text-5xl text-gold">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-white/40">
            Based on G.I.S Contracting&rsquo;s Google Maps profile, November 2026.
          </p>
          <div className="mt-14 text-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Get a Quote
              <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
