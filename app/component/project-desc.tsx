import Bookmark from "./bookmark"
import ProjBg from "./project-background"

const ProjDesc = (props:{tech:string[], bookmark:string}) => {
  return (
    <section className="pt-24 pb-20">
      <Bookmark tech={props.tech} bookmark={props.bookmark}/>
      <ProjBg/>
    </section>
  )
}

export default ProjDesc