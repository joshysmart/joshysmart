function calculateExp(years: number) {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear - years;
}

const techStack = [
  {
    tech: "Javascript",
    exp: `${calculateExp(2017)} Years Experience`,
  },
  {
    tech: "React",
    exp: `${calculateExp(2019)} Years Experience`,
  },
  {
    tech: "Next.js",
    exp: `${calculateExp(2022)} Years Experience`,
  },
  {
    tech: "Web Design",
    exp: `${calculateExp(2017)} Years Experience`,
  },
  {
    tech: "Figma",
    exp: `${calculateExp(2021)} Years Experience`,
  },
  {
    tech: "Tailwind CSS",
    exp: `${calculateExp(2021)} Years Experience`,
  },
];

export default techStack;
