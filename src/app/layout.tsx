import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import IconSprite from "@/components/site/IconSprite";
import { assetUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "G.I.S Contracting LLC | Kitchen, Bath & Whole-Home Remodeling in Austin, TX",
  description:
    "Family-owned residential and commercial contractor in Austin, TX. Kitchen and bathroom remodels, whole-home renovations, roofing, painting, and restoration. 4.7 stars from 38 Google reviews.",
  icons: { icon: assetUrl("/assets/gis-logo.jpg") },
  openGraph: {
    type: "website",
    title: "G.I.S Contracting LLC | Kitchen, Bath & Whole-Home Remodeling in Austin, TX",
    description:
      "Family-owned residential and commercial contractor in Austin, TX. Kitchen and bathroom remodels, whole-home renovations, roofing, painting, and restoration. 4.7 stars from 38 Google reviews.",
    images: [assetUrl("/assets/work/gis-kitchen-island.jpg")],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-white font-sans text-slate-900 antialiased">
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
