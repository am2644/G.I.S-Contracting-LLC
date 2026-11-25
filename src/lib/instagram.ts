import { INSTAGRAM_URL } from "@/lib/site";

export type InstagramPost = {
  id: string;
  href: string;
  image: string;
  alt: string;
  caption: string;
  type: "Post" | "Reel";
};

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "gis-bath-patterned-tile",
    href: INSTAGRAM_URL,
    image: "/assets/instagram/gis-bath-patterned-tile.jpg",
    alt: "Bathroom with a patterned tile floor and a glass walk-in shower with white tile",
    caption:
      "A patterned floor, a glass walk-in shower, and clean white tile: small details that change how a bathroom feels.",
    type: "Post",
  },
  {
    id: "gis-kitchen-hex-backsplash",
    href: INSTAGRAM_URL,
    image: "/assets/instagram/gis-kitchen-hex-backsplash.jpg",
    alt: "White kitchen with a dark hexagon tile backsplash and professional stainless range",
    caption:
      "White cabinetry, a statement backsplash, and pro-grade appliances — a kitchen built for daily use.",
    type: "Post",
  },
  {
    id: "gis-bath-navy-vanity",
    href: INSTAGRAM_URL,
    image: "/assets/instagram/gis-bath-navy-vanity.jpg",
    alt: "Bathroom with a navy vanity, brass hardware, and a walk-in tiled shower",
    caption:
      "Navy cabinetry and brass details warm up a bright, fully tiled bathroom renovation.",
    type: "Post",
  },
  {
    id: "gis-bath-freestanding-tub",
    href: INSTAGRAM_URL,
    image: "/assets/instagram/gis-bath-freestanding-tub.jpg",
    alt: "Bathroom with a freestanding tub, herringbone tile shower, and black wainscoting",
    caption:
      "Herringbone tile, a freestanding tub, and quiet finishes make this bath a room to slow down in.",
    type: "Post",
  },
  {
    id: "gis-kitchen-waterfall-island",
    href: INSTAGRAM_URL,
    image: "/assets/instagram/gis-kitchen-waterfall-island.jpg",
    alt: "Kitchen with dark green cabinetry, a waterfall marble island, and brass pendant lights",
    caption:
      "A waterfall island and warm brass details give this kitchen its character.",
    type: "Post",
  },
  {
    id: "gis-kitchen-wood-beams",
    href: INSTAGRAM_URL,
    image: "/assets/instagram/gis-kitchen-wood-beams.jpg",
    alt: "White kitchen with wood ceiling beams, open shelving, and a stainless range",
    caption:
      "Warm wood beams and open shelving soften an all-white kitchen without giving up brightness.",
    type: "Post",
  },
];
