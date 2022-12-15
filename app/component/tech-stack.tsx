import useData from "~/hooks/useData"


const TechStack = () => {
  const {techStack} = useData()
  const tech = techStack?.map((tech,i) => <section key={i} className=" mb-6 md:px-8 xl:px-0 md:mb-14">
    <section className="tech"><h2 className="text-pureWhite font-medium text-smh2 md:text-mdh2 text-center md:text-left">{tech.tech}</h2></section>
      <p className="experience text-lightGray text-base text-center font-medium md:text-left md:text-mmdp">{tech.exp}</p>
    </section>)

  return (
    <section className="tech-stack grid grid-cols-1 pb-0 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 lg:grid-rows-2 py-10 md:py-14 xl:px-40 lg:py-20">
      {tech}
      <section className="line  px-4 md:px-8 md:hidden">
        <section className=" bg-pureWhite w-full h-px "></section>
      </section>    
    </section>
  )
}

export default TechStack