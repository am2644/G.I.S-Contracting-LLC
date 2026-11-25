import { PORTFOLIO_CATEGORY_LABELS } from "@/lib/site";

export type WorkProjectContent = {
  summary: string;
  overview: [string, string];
  highlights: string[];
  quote: { text: string; author: string; source: string };
  projectType: string;
};

export const WORK_PROJECT_CONTENT: Record<number, WorkProjectContent> = {
  1: {
    summary:
      "An open, light-filled kitchen with white shaker cabinetry, quartz counters, a tiled backsplash, and a large island.",
    overview: [
      "The kitchen reads as part of the living area, with a wide island separating the work zone from the room beyond. White cabinetry keeps the light moving, and the tiled backsplash and stainless appliances add contrast.",
      "Storage and work areas were planned around daily use: drawers beside the range, a built-in microwave, and a sink positioned to keep the island clear for prep and gathering.",
    ],
    highlights: [
      "White shaker cabinetry",
      "Quartz countertops and tile backsplash",
      "Large island with pendant lighting",
      "Stainless appliance package",
    ],
    quote: {
      text: "We have used them for one smaller and one large project, and will definitely engage them again. Our kitchen looks beautiful.",
      author: "Jennifer Eanes",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
  2: {
    summary:
      "A walk-in shower rebuilt with marble-look tile, a black-framed glass enclosure, and matte black hardware.",
    overview: [
      "The shower was rebuilt with large-format marble-look tile, a low curb, and a black grid enclosure that keeps the room feeling open. Matte black fixtures and a matching handle tie into the door hardware.",
      "Outside the shower, fresh paint and trim keep the bathroom bright and consistent with the rest of the home.",
    ],
    highlights: [
      "Marble-look porcelain tile",
      "Black-framed glass enclosure",
      "Matte black shower trim",
      "Updated paint and door hardware",
    ],
    quote: {
      text: "We recently had our bathroom remodeled and couldn’t be happier with the results. Mr. Gomez and his crew did an excellent job from start to finish.",
      author: "Alicia RCastillo",
      source: "Google review",
    },
    projectType: "Bathroom renovation",
  },
  3: {
    summary:
      "A floating white-oak double vanity with twin arched mirrors, marble countertops, and warm globe sconces.",
    overview: [
      "Two arched mirrors and a pair of glass globe sconces give each side of the vanity its own station. Light oak cabinetry and a white marble top keep the room warm but bright.",
      "A tall window, fresh wall finish, and large-format floor tile complete a bathroom that feels calm and easy to maintain.",
    ],
    highlights: [
      "Floating double vanity",
      "Twin arched mirrors",
      "Marble countertops and backsplash",
      "Warm layered lighting",
    ],
    quote: {
      text: "My wife and I did a remodel on two of our bathrooms, which included all new tile, a new vanity, new fixtures and we also had some new lights installed in our kitchen.",
      author: "Aaron Lazar",
      source: "Google review",
    },
    projectType: "Bathroom renovation",
  },
  4: {
    summary:
      "A freestanding tub on marble-look flooring, paired with a glass shower and grey wood-look tile walls.",
    overview: [
      "The tub sits clear of the shower, turning an ordinary bath into a room with two distinct zones. A glass enclosure keeps the shower open, while wood-look tile adds texture without darkening the space.",
      "Marble-look floors, new fixtures, and a simple plant-and-art finish make the room feel finished rather than busy.",
    ],
    highlights: [
      "Freestanding soaking tub",
      "Glass shower enclosure",
      "Wood-look wall tile",
      "Marble-look tile floors",
    ],
    quote: {
      text: "I couldn’t be happier with the bathroom remodel they did for my mother!",
      author: "Daniel Gutierrez",
      source: "Google review",
    },
    projectType: "Bathroom renovation",
  },
  5: {
    summary:
      "A compact kitchen refresh with white shaker cabinets, quartz counters, a subway-tile backsplash, and new stainless appliances.",
    overview: [
      "The existing footprint stays, but every surface gets touched: new white cabinetry and hardware, quartz counters, a subway backsplash, and a stainless range, hood, and refrigerator.",
      "New lighting and wood-look flooring brighten the work zone and connect it to the rest of the home.",
    ],
    highlights: [
      "White shaker cabinetry",
      "Quartz counters",
      "Subway-tile backsplash",
      "New stainless appliances",
    ],
    quote: {
      text: "G.I.S Contracting LLC provided outstanding service! The team was professional, responsive, and delivered high-quality work with great attention to detail.",
      author: "Zain safdar",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
  6: {
    summary:
      "A walk-in shower with blue-grey tile, built-in display niches, and added grab bars for safety without sacrificing style.",
    overview: [
      "Large blue-grey subway tile wraps the shower, with two framed niches adding color and storage. A hand shower on a slide bar and two grab bars make the space easier to use day to day.",
      "A small hexagonal floor tile adds grip and pattern underfoot, while a frameless glass panel keeps the room open.",
    ],
    highlights: [
      "Blue-grey subway tile",
      "Two decorative display niches",
      "Grab bars and hand shower",
      "Non-slip hexagonal floor tile",
    ],
    quote: {
      text: "We are grateful for G.I.S. Contracting for the great quality work that they provided us. Our master bathroom unfortunately had water damage due to a failure in our toilet wax seal. Tony from G.I.S. Contracting was very responsive.",
      author: "Ren Ruiz",
      source: "Google review",
    },
    projectType: "Bathroom renovation",
  },
  7: {
    summary:
      "A custom-home staircase with a sweeping wrought-iron railing, tiled landing, and detailed ceiling millwork.",
    overview: [
      "This staircase shows the finish work that separates a custom home from a standard build: curved iron panels, a shaped hardwood handrail, and precise trim where the landing meets the walls.",
      "Tile flooring, arched niches, and deep ceiling cove details were finished as part of the broader home build.",
    ],
    highlights: [
      "Custom curved iron railing",
      "Shaped hardwood handrail",
      "Detailed ceiling millwork",
      "Arched wall niches",
    ],
    quote: {
      text: "I have been a Real Estate Investor for over 30 years and I am a Licensed Real Estate Broker in Texas. So I have worked with countless contractors through the years, take it from someone with experience, you will NOT be disappointed.",
      author: "JRod Rodriguez",
      source: "Google review",
    },
    projectType: "Whole-home & custom build",
  },
  8: {
    summary:
      "A stone-and-stucco exterior with a clay tile roof, arched windows, and layered landscape beds.",
    overview: [
      "Stone veneer, stucco, and a tile roof come together in a Mediterranean-style elevation that holds up to Texas sun and weather.",
      "This home shows the exterior scope we handle: roofing, masonry, window detailing, and finish work coordinated under one contractor.",
    ],
    highlights: [
      "Stone veneer and stucco",
      "Clay tile roof",
      "Arched window details",
      "Landscape edging and beds",
    ],
    quote: {
      text: "GIS Contracting did a roof replacement for my house. The entire process went smoothly from start to finish in one day, sunup to sundown! Easy payment process, half down to start, balance when they’re finished at final walk thru. This company does it all, inside and out. I highly recommend them!",
      author: "Juan Austin Tx",
      source: "Google review",
    },
    projectType: "Exterior & roofing",
  },
  9: {
    summary:
      "A stone-walled entry with arched openings, a statement chandelier, and a custom iron-and-stone console.",
    overview: [
      "Interior stonework gives the entry a lodge-like warmth. Arched openings frame the hall beyond, while a chandelier and iron details set the tone for the rest of the home.",
      "The finish package includes tile flooring, built-in niches, and trim details planned together rather than added later.",
    ],
    highlights: [
      "Interior stone walls",
      "Arched passageways",
      "Custom iron console",
      "Tile flooring and trim",
    ],
    quote: {
      text: "GIS just completed my condo gut/ rebuild project in Austin. They fully built out our condo from the studs (2 Bed/2 Bath) and we are very pleased with their work! Tony and his Office Manager Ann were great to work with and they were very responsive!!",
      author: "Diane Walters",
      source: "Google review",
    },
    projectType: "Whole-home remodel",
  },
  10: {
    summary:
      "Exterior prep and painting on a covered patio, with careful protection for windows, doors, and stone.",
    overview: [
      "Exterior work is mostly preparation: masking glass, protecting stone, and treating the surfaces before a coat goes on. This crew worked through a covered patio with French doors and large windows.",
      "Fresh paint on the underside and trim brightens a shaded outdoor room and protects the wood from sun and moisture.",
    ],
    highlights: [
      "Full surface preparation",
      "Glass, stone, and trim protection",
      "Exterior paint and finish",
      "Clean job site",
    ],
    quote: {
      text: "I recently hired a GIS Contracting to patch and paint my entire home, and I couldn’t be happier with the results. From start to finish, he was professional, reliable, and clearly took pride in his work.",
      author: "Joe de la Cruz",
      source: "Google review",
    },
    projectType: "Painting & exteriors",
  },
  11: {
    summary:
      "A custom kitchen build with a large stone-look island, ceiling-height white cabinetry, and a glass-tile backsplash.",
    overview: [
      "This kitchen was built around a generous island with a dark countertop and a waterfall-style base. White cabinetry runs to the ceiling with glass-front uppers and open display niches.",
      "The work includes coordinating cabinetry, counters, tile, electrical, and trim — the parts that have to come together for a kitchen to look finished.",
    ],
    highlights: [
      "Ceiling-height custom cabinetry",
      "Dark stone-look island",
      "Glass-tile backsplash",
      "Beamed ceiling and display niches",
    ],
    quote: {
      text: "As a company specializing in residential construction, Gis delivered above and beyond. Their attention to detail, clear communication, and skilled labor make them a standout choice.",
      author: "59MBN",
      source: "Google review",
    },
    projectType: "Kitchen remodeling",
  },
};

export function getWorkProject(item: {
  id: number;
  title: string;
  category: string;
}): WorkProjectContent {
  const content = WORK_PROJECT_CONTENT[item.id];
  if (content) return content;

  const categoryLabel = PORTFOLIO_CATEGORY_LABELS[item.category] ?? "Home improvement";

  return {
    summary: `${item.title} is a recent ${categoryLabel.toLowerCase()} project completed by G.I.S Contracting LLC in Austin, TX.`,
    overview: [
      "Every project starts with a walkthrough, a clear scope, and a plan for the selections that will shape the finished space.",
      "Tony and the G.I.S crew stay involved from the first estimate through the final punch list, keeping communication direct and the work moving.",
    ],
    highlights: [
      "Owner-led planning and communication",
      "Careful protection and cleanup",
      "A final walkthrough before completion",
    ],
    quote: {
      text: "G.I.S Contracting LLC provided outstanding service! The team was professional, responsive, and delivered high-quality work with great attention to detail.",
      author: "Zain safdar",
      source: "Google review",
    },
    projectType: categoryLabel,
  };
}
