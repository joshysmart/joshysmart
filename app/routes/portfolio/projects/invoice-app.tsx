import type { MetaFunction } from "@remix-run/node"
import NavProjects from "~/component/navigate-project"
import PortfolioHero from "~/component/portfolio-hero"
import ProjDesc from "~/component/project-desc"
import StaticPreview from "~/component/static-preview"

export const meta: MetaFunction = () => ({
  title: "Sani Joshua - Invoice app project"
})


const InvoiceApp = () => {
  const tech:string[] = ["HTML", "CSS", "React", "SCSS", "JS","Prisma", "MongoDb", "Remix"]

  const bookmark = "This project required me to build a fully responsive invoice app. The challenge was to build the invoice application and get it looking as close to the design as possible. I also implemented authentication for users to manage their invoice individually. I used HTML5, along with CSS Grid and Javascript, React, Remix, Prisma for the database, and managing invoices"


  return (
    <main className="project invoice-app">
      <PortfolioHero/>
      <ProjDesc tech={tech} bookmark={bookmark} website={"https://url-shortening-api-tau.vercel.app/"}/>
      <StaticPreview />
      <NavProjects next={"projects/url-shortner"} prev={"projects/audiophile"}/>
    </main>
  )
}

export default InvoiceApp