import workExperience from "../data/workExperience";
import WorkExperience from "./work-experience";

const Experience = () => {
  return (
    <div className="work-experience pb-32 px-4 md:px-8 xl:px-40">
      <h3 className="text-pureWhite font-bold text-sm md:text-md lg:text-lg mb-8 xl:p-0">
        Work Experience
      </h3>
      <div className="flex flex-col lg:gap-40 gap-20">
        {workExperience.map((work) => (
          <WorkExperience
            key={work.company}
            companyName={work.company}
            date={work.date}
            jobTitle={work.position}
            responsibilities={work.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
