import { Link } from "@remix-run/react";

const NavProjects = (props: { next: string; prev: string }) => {
  const next = props.next.split("/")[1];
  const prev = props.prev.split("/")[1];
  return (
    <div className="flex text-lightGray p-4 md:px-8 xl:px-40 pb-20 justify-between">
      <div className="prev border-b border-lightGreen">
        <Link
          to={`/${props.prev}`}
          className="flex items-center space-x-3 border-lightGreen border-b pb-2"
        >
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            {" "}
            <path
              d="m 6.8535534,1 -5,5 5,5"
              stroke="#4EE1A0"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />{" "}
          </svg>
          <span>
            <span className="block font-bold">{prev}</span>
            <span className="block text-xs">Previous Project</span>
          </span>
        </Link>
      </div>
      <div className="next ">
        <Link
          to={`/${props.next}`}
          className="flex items-center space-x-3 border-lightGreen border-b pb-2"
        >
          <span>
            <span className="block font-bold">{next}</span>
            <span className="block text-xs">Next Project</span>
          </span>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.322 1l5 5-5 5"
              stroke="#4EE1A0"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NavProjects;

