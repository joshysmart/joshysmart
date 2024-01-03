const Hero = () => {
  return (
    <div className="hero flex flex-col-reverse md:flex-row items-center xl:pr-40">
      <section className="left-section flex flex-col items-center md:items-start xl:pl-40 pt-10 md:pt-16 p-4 md:p-8 mb-20 lg:pt-20 lg:mb-56 z-10 md:pb-0 lg:pr-0">
        <h1 className="lg:max-w-3xl text-center font-bold text-pureWhite text-sm md:text-md md:text-left lg:text-lg tracking[-1.13636px] md:tracking-[-2.5px] leading-[40px] md:leading-[72px] lg:leading-[88px]">
          <span className="md:block lg:inline">Nice to</span>{" "}
          <span className="md:block lg:inline">meet you! I’m</span>{" "}
          <span className="border-b-2 md:border-b-8 border-lightGreen">
            Sani Joshua
          </span>
          .
        </h1>
        <p className="md:max-w-md text-lightGray text-center my-6 md:pt-12 md:pb-4 text-base font-medium md:text-left md:text-mmdp">
          Based in Nigeria, I’m a full-stack developer passionate about building
          accessible, user friendly web applications
        </p>
        <a
          href="#about"
          className="text-pureWhite border-b-2   border-lightGreen pb-3 text-base font-bold hover:text-lightGreen tracking-[.14em]"
        >
          ABOUT ME
        </a>
      </section>
      <div className="right-section mt-12 md:m-0">
        <div className="image" />
      </div>
    </div>
  );
};

export default Hero;

