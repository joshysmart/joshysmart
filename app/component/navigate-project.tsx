const NavProjects = (props:{next:string, prev:string}) => {
  return (
    <section className="flex text-lightGray p-4 md:px-8 xl:px-40 pb-20 justify-between">
      <div className="prev border-b border-lightGreen">
        <a href={`/portfolio/${props.next}`} className="flex items-center space-x-3 border-lightGreen border-b pb-2">
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"> <path d="m 6.8535534,1 -5,5 5,5" stroke="#4EE1A0" strokeWidth="2" fill="none" fillRule="evenodd" /> </svg>
          <span>
            <span className="block font-bold">{props.prev}</span>
            <span className="block text-xs">Previous Project</span>
          </span>
        </a> 
      </div>
      <div className="next ">
        <a href={`/portfolio/${props.next}`} className="flex items-center space-x-3 border-lightGreen border-b pb-2">
          <span>
            <span className="block font-bold">{props.next}</span>
            <span className="block text-xs">Next Project</span>
          </span>
          <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#4EE1A0" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
          </a> 
      </div>
    </section>
  )
}

export default NavProjects