import "dotenv/config";
import { prisma } from "../src/lib/db";

const projects = [
  {
    id: 1,
    title: "Open-Concept White Kitchen",
    category: "kitchens",
    imageUrl: "/assets/work/gis-kitchen-island.jpg",
  },
  {
    id: 2,
    title: "Glass-Enclosed Marble Shower",
    category: "bathrooms",
    imageUrl: "/assets/work/gis-bathroom-glass-shower.jpg",
  },
  {
    id: 3,
    title: "Warm Wood Double Vanity",
    category: "bathrooms",
    imageUrl: "/assets/work/gis-bathroom-double-vanity.jpg",
  },
  {
    id: 4,
    title: "Freestanding Tub & Tile Shower",
    category: "bathrooms",
    imageUrl: "/assets/work/gis-bathroom-freestanding-tub.jpg",
  },
  {
    id: 5,
    title: "White Shaker Kitchen Refresh",
    category: "kitchens",
    imageUrl: "/assets/work/gis-kitchen-white-shaker.jpg",
  },
  {
    id: 6,
    title: "Blue Tile Accessible Shower",
    category: "bathrooms",
    imageUrl: "/assets/work/gis-bathroom-blue-tile.jpg",
  },
  {
    id: 7,
    title: "Curved Staircase & Iron Railing",
    category: "whole-home",
    imageUrl: "/assets/work/gis-staircase-foyer.jpg",
  },
  {
    id: 8,
    title: "Stone Home & Tile Roof",
    category: "exteriors",
    imageUrl: "/assets/work/gis-home-exterior-stone.jpg",
  },
  {
    id: 9,
    title: "Stone Entry & Foyer",
    category: "whole-home",
    imageUrl: "/assets/work/gis-stone-entry.jpg",
  },
  {
    id: 10,
    title: "Exterior Painting & Patio",
    category: "exteriors",
    imageUrl: "/assets/work/gis-exterior-painting.jpg",
  },
  {
    id: 11,
    title: "Custom Kitchen Build",
    category: "kitchens",
    imageUrl: "/assets/work/gis-kitchen-custom-build.jpg",
  },
];

async function main() {
  const base = new Date("2026-11-24T12:00:00Z").getTime();

  for (const [index, project] of projects.entries()) {
    const createdAt = new Date(base - index * 60_000);

    await prisma.portfolioItem.upsert({
      where: { id: project.id },
      update: {
        title: project.title,
        category: project.category,
        imageUrl: project.imageUrl,
        createdAt,
      },
      create: {
        ...project,
        createdAt,
      },
    });
  }

  console.log(`Seeded ${projects.length} portfolio items.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
