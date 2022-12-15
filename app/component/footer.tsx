import Contact from "./contact"
import Header from "./header"
import Line from "./line"

const Footer = (props:{actionData:any}) => {
  return (
    <footer className="footer flex flex-col bg-darkGray pb-14 md:pb-4">
      <Contact actionData={props.actionData}/>
      <Line/>
      <section className="pt-10 md:p-0">
        <Header/>
      </section>
    </footer>
  )
}

export default Footer