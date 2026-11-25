export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author: string; source: string }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  author: string;
  heroImage: string;
  heroAlt: string;
  blocks: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bathroom-remodeling-austin-showers-vanities-tile",
    title: "Bathroom Remodeling in Austin: Showers, Vanities, and the Details That Last",
    description:
      "What goes into a G.I.S Contracting bathroom remodel in Austin — walk-in showers, double vanities, waterproofing, and the review feedback that matters after the dust settles.",
    excerpt:
      "A bathroom is a small room with a lot of decisions. These are the ones that determine whether it still feels right years later.",
    date: "2026-11-24",
    dateLabel: "November 24, 2026",
    readTime: "4 min read",
    author: "G.I.S Contracting LLC",
    heroImage: "/assets/work/gis-bathroom-freestanding-tub.jpg",
    heroAlt:
      "Bathroom with a freestanding soaking tub, marble-look floor tile, and a glass shower enclosure",
    blocks: [
      {
        type: "paragraph",
        text: "Bathrooms are one of the most requested projects we take on in Austin. They are also one of the least forgiving: plumbing is hidden in the walls, waterproofing has to be right the first time, and every finish is judged up close. G.I.S Contracting has been remodeling Austin homes since 1998, and the bathrooms we build today are still guided by the same idea — get the unseen parts right, then make the room feel calm.",
      },
      { type: "heading", text: "The shower decides the room" },
      {
        type: "paragraph",
        text: "A walk-in shower changes how a bathroom feels and how it works. Removing a tub surround opens the floor plan, a low curb or curbless entry makes the room easier to use, and a glass enclosure keeps the tile on display instead of hiding it. Large-format tile reads clean, a built-in niche keeps products off the floor, and a hand shower adds flexibility for kids, pets, and aging in place.",
      },
      {
        type: "image",
        src: "/assets/work/gis-bathroom-glass-shower.jpg",
        alt: "Walk-in shower with marble-look tile, black-framed glass, and matte black fixtures",
        caption:
          "A walk-in shower with marble-look tile and a black-framed enclosure.",
      },
      { type: "heading", text: "A vanity planned for real mornings" },
      {
        type: "paragraph",
        text: "In a shared bathroom, the vanity is the morning bottleneck. A floating double vanity keeps the floor visible, which makes a small room feel larger, while twin mirrors and dedicated lighting give each person their own space. We plan drawer storage around what actually gets used daily — hair tools, towels, and the small items that otherwise end up on the counter.",
      },
      {
        type: "image",
        src: "/assets/work/gis-bathroom-double-vanity.jpg",
        alt: "Floating white-oak double vanity with arched mirrors and marble countertops",
        caption: "A floating double vanity with twin arched mirrors and layered lighting.",
      },
      {
        type: "quote",
        text: "We recently had our bathroom remodeled and couldn’t be happier with the results. Mr. Gomez and his crew did an excellent job from start to finish. They were professional, respectful of our home, and paid attention to every detail.",
        author: "Alicia RCastillo",
        source: "Google review",
      },
      { type: "heading", text: "Plan for water, not just tile" },
      {
        type: "paragraph",
        text: "Water damage is the reason many bathrooms get remodeled in the first place. A failing wax seal, a supply line, or an old shower pan can quietly damage the subfloor and framing long before it shows on the surface. During a remodel, we open the wet walls, check the substrate, and rebuild the waterproofing before any finish goes back in. It is not the part guests notice, but it is the part that keeps the room sound.",
      },
      {
        type: "quote",
        text: "We are grateful for G.I.S. Contracting for the great quality work that they provided us. Our master bathroom unfortunately had water damage due to a failure in our toilet wax seal. Tony from G.I.S. Contracting was very responsive.",
        author: "Ren Ruiz",
        source: "Google review",
      },
      {
        type: "list",
        items: [
          "Moisture checks and substrate repair before tile",
          "Sloped pans and proper waterproofing at wet walls",
          "Tile layout planned around niches, fixtures, and sightlines",
          "Ventilation and lighting sized for the room",
          "Grab bars or blocking for aging-in-place readiness",
        ],
      },
      {
        type: "paragraph",
        text: "If you are planning a bathroom remodel in Austin, call or text (512) 801-6132, or request a free estimate through our contact form.",
      },
    ],
  },
  {
    slug: "kitchen-remodeling-austin-white-cabinetry-islands",
    title: "Kitchen Remodeling in Austin: White Cabinetry, Islands, and Storage That Works",
    description:
      "A practical guide to G.I.S kitchen remodels in Austin: planning the island, choosing white cabinetry and warm finishes, and matching storage to daily routines.",
    excerpt:
      "The island sets the layout, the cabinetry sets the budget, and the storage decides whether the kitchen works on a busy Tuesday.",
    date: "2026-11-21",
    dateLabel: "November 21, 2026",
    readTime: "4 min read",
    author: "G.I.S Contracting LLC",
    heroImage: "/assets/work/gis-kitchen-island.jpg",
    heroAlt:
      "Open-plan kitchen with white shaker cabinetry, a large island, and stainless appliances",
    blocks: [
      {
        type: "paragraph",
        text: "Kitchens are the most-used room in most homes and the one where finish choices are made in the most detail. G.I.S Contracting has remodeled kitchens across Austin — white and warm, bright and custom — and the same rule applies to every one: the layout has to support how the household actually cooks, eats, and gathers.",
      },
      { type: "heading", text: "Start with the island" },
      {
        type: "paragraph",
        text: "When space allows, the island is the decision that organizes everything else. It creates a prep zone, a serving surface, and a place for people to sit without crossing the cook's path. Planning the island first also settles the sink, range, and refrigerator relationships, which is far easier than moving them later.",
      },
      {
        type: "image",
        src: "/assets/work/gis-kitchen-custom-build.jpg",
        alt: "Custom kitchen under construction with white cabinetry, a large dark island, and a glass-tile backsplash",
        caption:
          "A custom kitchen build: island, cabinetry, tile, and trim coordinated together.",
      },
      {
        type: "quote",
        text: "We have used them for one smaller and one large project, and will definitely engage them again. Our kitchen looks beautiful.",
        author: "Jennifer Eanes",
        source: "Google review",
      },
      { type: "heading", text: "White cabinetry, warmer finishes" },
      {
        type: "paragraph",
        text: "White cabinetry remains the most requested choice because it is bright, flexible, and slow to date. The trick is keeping it from feeling cold: warm wood-look floors, a tiled backsplash, brass or black hardware, and a wood detail — beams, shelves, or a hood surround — add the warmth. Quartz counters keep the palette clean, and stainless appliances add contrast.",
      },
      {
        type: "image",
        src: "/assets/work/gis-kitchen-white-shaker.jpg",
        alt: "White shaker kitchen with quartz counters, subway-tile backsplash, and stainless range",
        caption: "White shaker cabinets, quartz counters, and a subway-tile backsplash.",
      },
      {
        type: "quote",
        text: "G.I.S Contracting LLC provided outstanding service! The team was professional, responsive, and delivered high-quality work with great attention to detail.",
        author: "Zain safdar",
        source: "Google review",
      },
      { type: "heading", text: "Build storage around the routine" },
      {
        type: "paragraph",
        text: "Storage is where a kitchen succeeds or frustrates. Deep drawers beside the range, a dedicated tray and cutting-board slot, a pull-out for trash and recycling, and pantry shelving sized to the packaging people actually buy — these details cost less than premium appliances and get used far more often.",
      },
      {
        type: "list",
        items: [
          "Plan the island and work triangle before finishes",
          "Pick counters and backsplash together",
          "Use warm materials to balance white cabinetry",
          "Size storage to daily dishes, tools, and pantry items",
          "Keep a service aisle clear when the island seats guests",
        ],
      },
      {
        type: "paragraph",
        text: "Planning a kitchen remodel in Austin? Call or text (512) 801-6132, or request a free estimate and we will walk the space with you.",
      },
    ],
  },
  {
    slug: "water-damage-repair-austin-burst-pipes",
    title: "When a Pipe Bursts: Rebuilding an Austin Home After Water Damage",
    description:
      "Burst pipes and storm damage leave more behind than wet floors. How G.I.S Contracting dries out, repairs, and rebuilds water-damaged rooms in Austin.",
    excerpt:
      "Drying out is only half the job. The rebuild is what makes a flooded room feel like home again.",
    date: "2026-11-17",
    dateLabel: "November 17, 2026",
    readTime: "4 min read",
    author: "G.I.S Contracting LLC",
    heroImage: "/assets/work/gis-bathroom-blue-tile.jpg",
    heroAlt:
      "Walk-in shower rebuilt with blue-grey tile, decorative niches, and new fixtures",
    blocks: [
      {
        type: "paragraph",
        text: "Austin has seen both hard freezes and heavy storms in recent years, and both have a way of finding the weakest point in a house. A supply line lets go behind a wall, a hose bib cracks, or water pushes under a door — and days later the damage shows up in baseboards, drywall, and flooring that looked fine at first.",
      },
      { type: "heading", text: "The visible damage is the smaller part" },
      {
        type: "paragraph",
        text: "Before anything is rebuilt, the space has to be dried and checked. Water travels along framing and under flooring, so the scope is set by moisture readings, not by what the wall looks like. Only then does the rebuild list become clear: which sections of drywall and trim come out, whether cabinets can be saved, and how far the flooring needs to go.",
      },
      {
        type: "quote",
        text: "Tony and his team saved us...we had numerous burst pipes and had to turn off our water. Tony and crew worked even as the sun went down to sort us out.",
        author: "Shalini Ramanathan",
        source: "Google review",
      },
      { type: "heading", text: "Rebuilding the room, not just the hole" },
      {
        type: "paragraph",
        text: "A good restoration finish matches the rest of the house. That means replacing saturated drywall and baseboards, re-texturing so the repair disappears, and repainting full walls so there is no visible touch-up line. Doors, trim, and fixtures go back level and square, and flooring is matched or replaced as one continuous field.",
      },
      {
        type: "image",
        src: "/assets/work/gis-bathroom-glass-shower.jpg",
        alt: "Bathroom rebuilt with a new walk-in shower, tile, and black-framed glass",
        caption:
          "A bathroom rebuilt after water damage — new substrate, waterproofing, tile, and glass.",
      },
      {
        type: "quote",
        text: "Tony and his crew were fantastic. I had water damage in my bathroom and living area and they made all the repairs, fixed walls and floors. My house looks great.",
        author: "Jen W",
        source: "Google review",
      },
      { type: "heading", text: "Repair with the next storm in mind" },
      {
        type: "paragraph",
        text: "In rooms that see moisture, material choices matter. Tile and wood-look plank flooring stand up to humidity and clean up easily. Insulating exterior pipes, replacing old supply lines, and making sure shutoffs are accessible are small upgrades that reduce the chance of repeating the same repair.",
      },
      {
        type: "list",
        items: [
          "Dry-out and moisture checks before demolition",
          "Removal of saturated drywall, trim, and insulation",
          "Texture and paint blended into surrounding walls",
          "Flooring repair or replacement as one field",
          "Reset doors, fixtures, and finishing details",
        ],
      },
      {
        type: "paragraph",
        text: "If your home has taken on water, call or text (512) 801-6132. We will walk the damage with you and put together a free estimate for the rebuild.",
      },
    ],
  },
  {
    slug: "roofing-siding-windows-painting-austin-homes",
    title: "Roofs, Windows, Siding, and Paint: Protecting an Austin Home",
    description:
      "G.I.S Contracting handles the exterior as one system — roofing, siding, windows, gutters, and paint — so an Austin home stays dry, sealed, and good-looking.",
    excerpt:
      "Exterior work is mostly preparation. The roof, windows, siding, and paint only look easy when they are done in the right order.",
    date: "2026-11-12",
    dateLabel: "November 12, 2026",
    readTime: "4 min read",
    author: "G.I.S Contracting LLC",
    heroImage: "/assets/work/gis-home-exterior-stone.jpg",
    heroAlt:
      "Custom home exterior with stone veneer, stucco, arched windows, and a clay tile roof",
    blocks: [
      {
        type: "paragraph",
        text: "The exterior of a home takes the abuse that never shows up on an inspection report until it becomes a repair. G.I.S Contracting works on roofs, siding, windows, gutters, and paint — and the advantage of having one contractor coordinate them is that the details at the edges actually line up.",
      },
      { type: "heading", text: "A roof, replaced in a day" },
      {
        type: "paragraph",
        text: "Roof replacement is a logistics project as much as a construction one. Materials have to land, the crew has to be sized for the square footage, and the job has to be closed out the same day if the weather allows. A clear start time and a final walkthrough matter as much as the shingle choice.",
      },
      {
        type: "quote",
        text: "GIS Contracting did a roof replacement for my house. The entire process went smoothly from start to finish in one day, sunup to sundown! Easy payment process, half down to start, balance when they’re finished at final walk thru. This company does it all, inside and out. I highly recommend them!",
        author: "Juan Austin Tx",
        source: "Google review",
      },
      { type: "heading", text: "Siding, windows, and gutters" },
      {
        type: "paragraph",
        text: "Siding and windows change how a house looks and how it performs. Replacing failing siding puts a fresh layer between the weather and the walls; new windows cut drafts and improve the view; and gutters move water away from the foundation instead of letting it pool against the house.",
      },
      {
        type: "quote",
        text: "Tony, his son Mark, and the rest of the GIS Contracting crew did two amazing jobs for us. The were quick to schedule with, got the job done faster than I expected, and were at a great price point.",
        author: "Sean Bennett",
        source: "Google review",
      },
      {
        type: "quote",
        text: "GIS did such an awesome job fixing my house gutters. Tony gave me a quote and time line and fulfilled the job beautifully. Thank you Tony for all your help.",
        author: "Jessica Garcia- Martinez",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/gis-exterior-painting.jpg",
        alt: "Crew painting a covered patio with French doors and stone walls",
        caption:
          "Exterior painting on a covered patio: masking, prep, and a clean finish.",
      },
      { type: "heading", text: "Paint is a maintenance item" },
      {
        type: "paragraph",
        text: "Exterior paint protects the surfaces underneath as much as it changes the look. The work is in the preparation — cleaning, scraping, masking glass and stone, and priming the spots that need it. A careful paint job buys years before the next one.",
      },
      {
        type: "quote",
        text: "I recently hired a GIS Contracting to patch and paint my entire home, and I couldn’t be happier with the results. From start to finish, he was professional, reliable, and clearly took pride in his work.",
        author: "Joe de la Cruz",
        source: "Google review",
      },
      {
        type: "quote",
        text: "We've hired GIS a couple of times, for both exterior and interior house painting. Each time the results look great. We've had good experiences working with them and will use them again.",
        author: "Joy Victory",
        source: "Google review",
      },
      {
        type: "list",
        items: [
          "Roof replacement with same-day tear-off when possible",
          "Siding repair and replacement",
          "Window replacement and trim work",
          "Gutter repair and downspout routing",
          "Interior and exterior painting with proper prep",
        ],
      },
      {
        type: "paragraph",
        text: "If your home needs exterior work before the next storm season, call or text (512) 801-6132 for a free estimate.",
      },
    ],
  },
  {
    slug: "whole-home-remodel-condo-gut-custom-home-austin",
    title: "From Condo Gut Rebuilds to Custom Homes: Whole-Home Work in Austin",
    description:
      "A look at the larger scopes G.I.S Contracting handles in Austin — condo gut rebuilds, custom stair and stone details, and whole-home renovations coordinated under one contractor.",
    excerpt:
      "Whole-home work is a scheduling problem wrapped around a construction project. The finish is what everyone remembers.",
    date: "2026-11-06",
    dateLabel: "November 6, 2026",
    readTime: "5 min read",
    author: "G.I.S Contracting LLC",
    heroImage: "/assets/work/gis-staircase-foyer.jpg",
    heroAlt:
      "Custom curved staircase with a wrought-iron railing, tiled landing, and detailed ceiling millwork",
    blocks: [
      {
        type: "paragraph",
        text: "Not every project fits in a kitchen or a bathroom. G.I.S Contracting also takes on whole-home renovations, condo rebuilds, and finish work in custom homes — the projects where framing, plumbing, electrical, tile, paint, and millwork all have to land in the right order.",
      },
      { type: "heading", text: "A condo rebuilt from the studs" },
      {
        type: "paragraph",
        text: "Gut rebuilds are the most demanding version of a remodel. The home is taken back to framing, the layout is reworked, and every system is replaced or brought up to date before the finishes go in. Keeping one contractor on the scope is what keeps the decisions — and the schedule — from fragmenting across trades.",
      },
      {
        type: "quote",
        text: "GIS just completed my condo gut/ rebuild project in Austin. They fully built out our condo from the studs (2 Bed/2 Bath) and we are very pleased with their work! Tony and his Office Manager Ann were great to work with and they were very responsive!!",
        author: "Diane Walters",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/gis-stone-entry.jpg",
        alt: "Interior stone entry with arched openings, a chandelier, and a custom iron console",
        caption:
          "Interior stonework and arched openings in a whole-home finish package.",
      },
      { type: "heading", text: "Custom detail, coordinated trades" },
      {
        type: "paragraph",
        text: "The finish work is where a whole-home project earns its character: a curved iron stair railing, interior stone walls, a tile entry, ceiling cove details, and built-in niches. These are not items you can bolt on at the end — they have to be planned with framing, electrical, and millwork so everything lands square and aligned.",
      },
      {
        type: "quote",
        text: "I have been a Real Estate Investor for over 30 years and I am a Licensed Real Estate Broker in Texas. So I have worked with countless contractors through the years, take it from someone with experience, you will NOT be disappointed.",
        author: "JRod Rodriguez",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/gis-kitchen-custom-build.jpg",
        alt: "Custom kitchen with ceiling-height white cabinetry and a large dark island during installation",
        caption:
          "Custom cabinetry, counters, and trim during a whole-home build.",
      },
      { type: "heading", text: "What a whole-home scope includes" },
      {
        type: "list",
        items: [
          "Layout changes and structural coordination",
          "Plumbing, electrical, and HVAC updates",
          "Drywall, texture, paint, and trim throughout",
          "Flooring, tile, and stonework",
          "Custom cabinetry and built-ins",
          "Final punch list and walkthrough",
        ],
      },
      {
        type: "paragraph",
        text: "Every project starts with a walkthrough and an itemized estimate. If you are planning a whole-home renovation in Austin, call or text (512) 801-6132 and tell us what you have in mind.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
