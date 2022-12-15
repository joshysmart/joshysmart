const Bookmark = (props: {tech:string[], bookmark:string}) => {
  return (
    <section className="flex flex-col items-center justify-between lg:items-start lg:w-2/5 px-4 md:px-8 lg:p-0">
      <h3 className="text-pureWhite font-bold text-sm mb-8 text-center lg:text-left leading-[40px] lg:leading-[88px]">Bookmark</h3>
      <p className="text-lightGray  text-base font-medium md:text-mdp  text-center lg:text-left ">{props.bookmark}</p>
      <p className="text-lightGreen   text-base font-medium md:text-mdp  text-center mt-4 lg:text-left">Interactive Design  / Front End Development {props.tech?.map((el:any,i:number) => <span key={i}>{el} {i < props.tech.length - 1 ? "/ " : ""}</span>)} </p>
      <a href="/portfolio/audiophile" className="text-pureWhite border-b-2 border-lightGreen pb-3 text-base font-bold hover:text-lightGreen tracking-[.14em] mt-5">VISIT WEBSITE</a>
    </section>
  )
}

export default Bookmark