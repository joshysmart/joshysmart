import AboutMe from "~/component/about-me";
import Hero from "~/component/hero"
import Line from "~/component/line";
import TechStack from "~/component/tech-stack";

export default function Index() {
  return (
    <main >
      <Hero/>
      <Line/>
      <TechStack/>
      <AboutMe/>
    </main>
  );
}
