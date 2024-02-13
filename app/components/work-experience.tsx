interface WorkExperienceProps {
  jobTitle: string;
  companyName: string;
  date: string;
  responsibilities: string[];
}

const WorkExperience = ({
  jobTitle,
  companyName,
  date,
  responsibilities,
}: WorkExperienceProps) => {
  return (
    <div className="lg:max-w-2xl even:self-end odd:self-start">
      <div className="flex lg:text-mmdp items-center justify-between font-bold text-white">
        <h3 className="">
          {jobTitle}: {companyName}
        </h3>
        <p className="">{date}</p>
      </div>
      <ul className="flex flex-col gap-2 text-lightGray font-medium md:text-mmdp mt-5 lg:mt-8">
        {responsibilities.map((responsibility) => (
          <ul className="flex items-center gap-2" key={responsibility}>
            <div className="w-4 h-4 rounded bg-lightGreen" />
            <li className="w-[90%]">{responsibility}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
