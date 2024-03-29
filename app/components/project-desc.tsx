import Bookmark from "./bookmark"
import ProjBg from "./project-background"

const ProjDesc = (props:{tech:string[], bookmark:string, website:string}) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row pt-24 pb-20 md:pb-32 xl:pt-40 md:px-8 xl:px-40 lg:pb-0">
      <Bookmark tech={props.tech} bookmark={props.bookmark} website={props.website}/>
      <ProjBg/>
    </div>
  )
}

export default ProjDesc