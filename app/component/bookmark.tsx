const Bookmark = (props: {tech:string[], bookmark:string}) => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-pureWhite font-bold text-4xl md:text-7xl max-w-md  px-4 md:px-8 mb-8 text-center">Bookmark</h3>
      <p className="text-lightGray  px-4 md:px-8 text-base font-medium md:text-lg xl:max-w-3xl text-center">{props.bookmark}</p>
      <p className="text-lightGreen  px-4 md:px-8 text-base font-medium md:text-lg xl:max-w-3xl text-center mt-4">Interactive Design  / Front End Development {props.tech?.map((el:any,i:number) => <span key={i}>{el} / </span>)} </p>
      <a href="/portfolio/audiophile" className="text-pureWhite border-b-2 border-lightGreen pb-3 text-base font-bold hover:text-lightGreen tracking-[.14em] mt-5">VISIT WEBSITE</a>
    </section>
  )
}

export default Bookmark