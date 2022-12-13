import Contact from "./contact"
import Header from "./header"
import Line from "./line"

const Footer = () => {
  return (
    <footer className="footer flex flex-col bg-darkGray pb-14 md:pb-4">
      <Contact/>
      <Line/>
      <div className="pt-10 md:p-0">
        <Header/>
      </div>
    </footer>
  )
}

export default Footer