import type { MetaFunction } from "@remix-run/node";
import NavProjects from "../components/navigate-project";
import PortfolioHero from "../components/portfolio-hero";
import ProjDesc from "../components/project-desc";
import StaticPreview from "../components/static-preview";
import { useParams } from "@remix-run/react";
import projects from "../data/projects";

export const meta: MetaFunction = () => [
  {
    title: "Sani Joshua - Audiophile project",
  },
];

const Project = () => {
  const params = useParams();
  if (!params.name) return null;
  const tech = projects[params.name].tech;
  const bookmark = projects[params.name].bookmark;
  const website = projects[params.name].live;
  const next = projects[params.name].next;
  const prev = projects[params.name].prev;
  const images = projects[params.name].images;

  return (
    <main className="project audiophile">
      <PortfolioHero image={images.hero} />
      <ProjDesc tech={tech} bookmark={bookmark} website={website} />
      <StaticPreview
        topImage={images["top-section"]}
        bottomImage={images["bottom-section"]}
      />
      <NavProjects next={next} prev={prev} />
    </main>
  );
};

export default Project;
