export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetUrl(path: string) {
  if (!path || !path.startsWith("/")) return path;
  if (BASE_PATH && path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}

export const BUSINESS_NAME = "G.I.S Contracting LLC";
export const BUSINESS_SHORT_NAME = "G.I.S Contracting";
export const PHONE_DISPLAY = "(512) 801-6132";
export const PHONE_HREF = "tel:+15128016132";
export const ADDRESS_LINE = "2612 S 3rd St";
export const ADDRESS_CITY = "Austin, TX 78704";
export const ADDRESS_FULL = "2612 S 3rd St, Austin, TX 78704";
export const INSTAGRAM_URL = "https://www.instagram.com/giscontracting/";
export const INSTAGRAM_HANDLE = "@giscontracting";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=G.I.S+Contracting+LLC+Austin+TX";
export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=G.I.S+Contracting+LLC,+2612+S+3rd+St,+Austin,+TX+78704&z=15&hl=en&output=embed";
export const GOOGLE_RATING = "4.7";
export const GOOGLE_REVIEW_COUNT = 38;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "kitchen", label: "Kitchen remodeling" },
  { value: "bathroom", label: "Bathroom renovation" },
  { value: "whole-home", label: "Whole-home remodel" },
  { value: "painting", label: "Painting & drywall" },
  { value: "exterior", label: "Roofing, siding & exteriors" },
  { value: "restoration", label: "Water damage & restoration" },
  { value: "windows", label: "Windows, doors & carpentry" },
  { value: "commercial", label: "Commercial / multi-unit" },
  { value: "other", label: "Multiple projects / not sure" },
] as const;

export const SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  SERVICE_OPTIONS.map((option) => [option.value, option.label]),
);

export const PORTFOLIO_CATEGORIES = ["kitchens", "bathrooms", "whole-home", "exteriors"] as const;

export const PORTFOLIO_CATEGORY_LABELS: Record<string, string> = {
  kitchens: "Kitchens",
  bathrooms: "Bathrooms",
  "whole-home": "Whole-Home",
  exteriors: "Exteriors",
};

export const PROJECT_ASPECTS: Record<string, string> = {
  "/assets/work/gis-kitchen-island.jpg": "aspect-[4/3]",
  "/assets/work/gis-bathroom-glass-shower.jpg": "aspect-[4/3]",
  "/assets/work/gis-bathroom-double-vanity.jpg": "aspect-[4/5]",
  "/assets/work/gis-bathroom-freestanding-tub.jpg": "aspect-[4/5]",
  "/assets/work/gis-kitchen-white-shaker.jpg": "aspect-[4/3]",
  "/assets/work/gis-bathroom-blue-tile.jpg": "aspect-[4/5]",
  "/assets/work/gis-staircase-foyer.jpg": "aspect-[4/5]",
  "/assets/work/gis-home-exterior-stone.jpg": "aspect-[4/3]",
  "/assets/work/gis-stone-entry.jpg": "aspect-[4/5]",
  "/assets/work/gis-exterior-painting.jpg": "aspect-[4/3]",
  "/assets/work/gis-kitchen-custom-build.jpg": "aspect-[4/3]",
};
