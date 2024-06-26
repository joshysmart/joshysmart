import { Link } from "@remix-run/react";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col py-32  space-y-6 md:space-y-8 md:pt-0 xl:px-40 xl:flex-row xl:justify-between lg:pb-44"
      id="about"
    >
      <section className="left-section xl:-mb-4">
        <h3 className="text-pureWhite font-bold text-sm md:text-md lg:text-lg  px-4 md:px-8 mb-8 xl:p-0">
          About Me
        </h3>
        <p className="text-lightGray  px-4 md:px-8 text-base font-medium md:text-mdp xl:max-w-2xl xl:p-0">
          My name is Sani Joshua, a mentor, freelancer, and full-stack/mobile
          developer. I am actively seeking opportunities to bring ideas to life
          through code. My expertise lies in crafting modern, accessible
          websites and mobile apps, employing contemporary CSS techniques, and
          writing clean JavaScript. While my preferred JavaScript framework is
          React/Expo, I am adaptable to using any necessary tools. Located in
          Nigeria, I am open to remote work and freelance projects, and I have
          previous experience collaborating with remote and on-site teams.
          Outside of coding, I enjoy teaching, reading, and listening to music.
          Feel free to explore my portfolio to see my projects.
        </p>
      </section>
      <div className="right-section px-4 md:px-8 xl:self-end xl:p-0">
        <Link
          to="/projects/audiophile"
          className="text-pureWhite border-b-2 border-lightGreen pb-3 text-base font-bold hover:text-lightGreen tracking-[.14em]"
          aria-label="my portfolio"
        >
          GO TO MY PORTFOLIO
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
