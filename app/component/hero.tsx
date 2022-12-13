const Hero = () => {
  return (
    <section className="hero flex flex-col-reverse md:flex-row items-center xl:pr-40">
      <div className="left-section flex flex-col items-center md:items-start xl:pl-40 pt-10 md:pt-16 p-4 md:p-8 mb-20 lg:mb-56 z-10 md:pb-0 lg:pr-0" >
        <h1 className="lg:max-w-4xl text-center font-bold text-pureWhite text-4xl md:text-7xl md:text-left lg:text-8xl"><span className="md:block lg:inline">Nice to</span> <span className="md:block lg:inline">meet you! I’m</span> <span className="border-b-2 md:border-b-8 border-lightGreen">Sani Joshua</span>.</h1>
        <p className="md:max-w-md text-lightGray text-center my-6 md:pt-12 md:pb-4 text-base font-medium md:text-left md:text-lg">Based in Nigeria, I’m a front-end developer passionate about building accessible web apps that users love.</p>
        <a href="#about" className="text-pureWhite border-b-2   border-lightGreen pb-3 text-base font-bold hover:text-lightGreen tracking-[.14em]">ABOUT ME</a>
      </div>
      <div className="right-section mt-12 md:m-0">
        <div className="image"></div>image
      </div>
    </section>
  )
}

export default Hero