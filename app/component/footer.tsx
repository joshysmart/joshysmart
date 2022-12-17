import Contact from "./contact"
import Header from "./nav"
import Line from "./line"

const Footer = (props:{actionData:any, wrapperEl:any}) => {
  return (
    <footer className="footer flex flex-col bg-darkGray pb-14 md:pb-4">
      <Contact actionData={props.actionData} wrapperEl={props.wrapperEl}/>
      <Line/>
      <div className="pt-10 md:p-0">
        <Header/>
      </div>
    </footer>
  )
}

export default Footer