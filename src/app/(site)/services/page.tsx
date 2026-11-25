import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { assetUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contracting Services in Austin, TX | G.I.S Contracting LLC",
  description:
    "Kitchen and bathroom remodeling, whole-home renovations, roofing, painting, restoration, and commercial work in Austin, TX. Family-owned since 1998. Free estimates.",
  openGraph: {
    title: "Contracting Services in Austin, TX | G.I.S Contracting LLC",
    description:
      "Kitchen and bathroom remodeling, whole-home renovations, roofing, painting, restoration, and commercial work in Austin, TX. Family-owned since 1998. Free estimates.",
    images: [assetUrl("/assets/work/gis-kitchen-island.jpg")],
  },
};

const servicePoints: Record<string, string[]> = {
  kitchens: [
    "Custom and semi-custom cabinetry",
    "Quartz and stone countertops",
    "Backsplash, lighting, and appliance updates",
    "Islands, pantry storage, and layout improvements",
  ],
  bathrooms: [
    "Walk-in showers and tub replacements",
    "Vanities, tile, and waterproofing",
    "Accessibility updates and grab bars",
    "Water-damage repairs and rebuilds",
  ],
  "whole-home": [
    "Condo gut rebuilds and full renovations",
    "Custom stair, iron, and millwork details",
    "Flooring, drywall, paint, and trim",
    "Multi-trade scheduling under one contractor",
  ],
  exteriors: [
    "Roof replacement and repairs",
    "Siding, windows, and gutters",
    "Interior and exterior painting",
    "Patios, porches, and outdoor structures",
  ],
};

function ServiceList({ points }: { points: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {points.map((point) => (
        <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
          <svg className="mt-1 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true">
            <use href="#icon-check" />
          </svg>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h1
            className="hero-reveal max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            Contracting Services in Austin, TX
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Kitchen, bathroom, whole-home, exterior, and commercial work — handled from the first
            walkthrough to the final clean-up.
          </p>
        </div>
      </section>

      <section id="kitchens" className="scroll-mt-24 bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Kitchen Remodeling in Austin
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Custom cabinetry, quartz counters, tile, and lighting, planned for the way you cook
                and gather. White, warm, bold, or built-in — the layout comes first.
              </p>
              <ServiceList points={servicePoints.kitchens} />
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <img
                src={assetUrl("/assets/work/gis-kitchen-island.jpg")}
                alt="White kitchen with an island, quartz countertops, and stainless appliances in Austin"
                width="1600"
                height="1067"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bathrooms" className="scroll-mt-24 bg-mist py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out lg:order-2"
            >
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Bathroom Remodeling in Austin
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Walk-in showers, freestanding tubs, double vanities, and precise tile work — with the
                waterproofing and plumbing behind the walls done right.
              </p>
              <ServiceList points={servicePoints.bathrooms} />
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out lg:order-1"
            >
              <img
                src={assetUrl("/assets/work/gis-bathroom-freestanding-tub.jpg")}
                alt="Austin bathroom renovation with a freestanding soaking tub and glass shower"
                width="1600"
                height="2133"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="whole-home" className="scroll-mt-24 bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Whole-Home Remodels &amp; Custom Builds
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Condo gut rebuilds, full-house renovations, and custom finish work. One contractor
                coordinating the trades, the schedule, and the details.
              </p>
              <ServiceList points={servicePoints["whole-home"]} />
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <img
                src={assetUrl("/assets/work/gis-staircase-foyer.jpg")}
                alt="Custom home staircase with a curved wrought-iron railing and tiled landing in Austin"
                width="1600"
                height="1067"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="exteriors" className="scroll-mt-24 bg-mist py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out lg:order-2"
            >
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Roofing, Painting &amp; Exteriors
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Roofs, siding, windows, gutters, and paint — plus the water-damage repairs and
                rebuilds that keep an Austin home sealed and sound.
              </p>
              <ServiceList points={servicePoints.exteriors} />
            </div>
            <div
              data-reveal
              className="opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out lg:order-1"
            >
              <img
                src={assetUrl("/assets/work/gis-home-exterior-stone.jpg")}
                alt="Stone and stucco home exterior with a clay tile roof and arched windows"
                width="1600"
                height="1067"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Our Process
            </h2>
          </div>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {["Walkthrough & Estimate", "Design & Selections", "Build & Communicate", "Final Walkthrough"].map(
              (step, index) => (
                <li
                  key={step}
                  data-reveal
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                >
                  <span className="font-display text-2xl text-gold-dark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display text-xl text-ink">{step}</p>
                </li>
              ),
            )}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-28">
        <div
          data-reveal
          className="mx-auto max-w-3xl px-5 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
            Ready to Start Your Austin Project?
          </h2>
          <Link
            href="/contact#contact-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Get a Quote
            <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
