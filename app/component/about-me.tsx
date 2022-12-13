const AboutMe = () => {
  return (
    <section className="flex flex-col py-36  space-y-6 md:space-y-8 md:pt-0 xl:px-40 xl:flex-row xl:justify-between " id="about">
      <div className="left-section xl:-mb-4">
        <h3 className="text-pureWhite font-bold text-4xl md:text-7xl max-w-md  px-4 md:px-8 mb-8">About Me</h3>
        <p className="text-lightGray  px-4 md:px-8 text-base font-medium md:text-lg xl:max-w-3xl">
        My name is Sani Joshua, I am a Junior full-stack developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean Javascript. When writing Javascript I work with React but i can adapt to whatever tools are required. I am based in Nigeria, but i am open to working remotely  and have experience with remote teams. When i am not coding, you’ll find me outdoors. I love being out i nature, listening to music or watching a movie. I’d love you to check out my work.
        </p>
      </div>
      <div className="right-section px-4 md:px-8 xl:self-end">
        <a href="/portfolio/audiophile" className="text-pureWhite border-b-2 border-lightGreen pb-3 text-base font-bold hover:text-lightGreen tracking-[.14em]">GO TO MY PORTFOLIO</a>
      </div>
    </section>
  )
}

export default AboutMe