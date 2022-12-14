import type { MetaFunction } from "@remix-run/node"
import NavProjects from "~/component/navigate-project"
import PortfolioHero from "~/component/portfolio-hero"
import ProjDesc from "~/component/project-desc"
import StaticPreview from "~/component/static-preview"

export const meta: MetaFunction = () => ({
  title: "Sani Joshua - URL shortner project"
})

const bookmark = "This project required me to build a fully responsive url shortner based on the designs provided. I used the shrtcode API to create shortened URLs and displayed them on the page where it can be copied to the cliboard. It was built using React, HTML5, along with CSS Grid, Sass, and Javascript for the areas that required interactivity, such as the input section"


const URLShortner =  () => {
  const tech:string[] = ["HTML", "CSS", "React", "SCSS", "JS"]
  return (
    <main className="project url-shortner">
      <PortfolioHero/>
      <ProjDesc tech={tech} bookmark={bookmark}/>
      <StaticPreview />
      <NavProjects next={"projects/audiophile"}  prev={"projects/invoice-app"}/>
    </main>
  )
}

export default URLShortner