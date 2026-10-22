import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Astronaut & Flashing Neon Lights",
    image: "/images/astronaut.jpg",
    category: "Motion Design",
  },
  {
    id: 2,
    title: "Scene of Sunglasses & Headphone on Human Head",
    image: "/images/sunglasses.jpg",
    category: "Graphic Design",
    description: "NFT / Graphic Design / Art / Identity / Motion Design",
  },
  {
    id: 3,
    title: "Plaster Antique Sculpture in a Pop Art Style",
    image: "/images/sculpture.jpg",
    category: "Graphic Design",
  },
  {
    id: 4,
    title: "Big Blue Whale Shape",
    image: "/images/whale.jpg",
    category: "3D Design",
  },
  {
    id: 5,
    title: "3D Shape Illustration",
    image: "/images/shape.jpg",
    category: "Motion Design",
  },
  {
    id: 6,
    title: "Mannequin Hands Holding Phone",
    image: "/images/phone.jpg",
    category: "UI / UX",
  },
];

export default function ProjectGrid({ activeCategory, page }) {
  const filtered =
    activeCategory === "All Works"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  const shown = page === 1 ? filtered : filtered.slice().reverse();
  return shown.length ? (
    <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
      {shown.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  ) : (
    <p className="rounded-lg border border-white/10 p-8 text-center text-sm text-slate-400">
      No projects in this category yet.
    </p>
  );
}
