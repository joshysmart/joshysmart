import type { MetaFunction } from "@remix-run/node"
import NavProjects from "~/component/navigate-project"
import PortfolioHero from "~/component/portfolio-hero"
import ProjDesc from "~/component/project-desc"
import StaticPreview from "~/component/static-preview"

export const meta: MetaFunction = () => ({
  title: "Sani Joshua - Audiophile project"
})

const Audiophile = () => {
  const tech:string[] = ["HTML", "CSS", "React", "SCSS", "JS","Prisma", "MongoDb", "Remix"]
  const bookmark = "This project required me to build an e-comerce app which is a fully responsive multi page e-commerce website with interactive elements and forms. I took it up a notch by building it as a full stack application that allows users to be authenticated and authorised before adding items to the cart"
  return (
    <main className="project audiophile">
      <PortfolioHero/>
      <ProjDesc tech={tech} bookmark={bookmark} website={"https://audiophile-ecommerce-website-self.vercel.app/"}/>
      <StaticPreview />
      <NavProjects next={"projects/invoice-app"} prev={"projects/url-shortner"}/>
    </main>
  )
}

export default Audiophile