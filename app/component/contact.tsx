const Contact = () => {
  return (
    <section className="flex flex-col py-16 pb-20 md:max-w-md md:m-auto lg:flex-row lg:m-0 lg:justify-between lg:min-w-full lg:px-8 xl:px-40 lg:space-x-36">
      <div className="left-section lg:w-1/2">
        <h3 className="text-pureWhite px-4 text-4xl font-bold mb-8 text-center md:text-7xl lg:text-left">Contact</h3>
        <p className="text-lightGray px-4 text-base font-medium text-center mb-12 md:text-lg lg:text-left">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
      </div>
      <div className="right-section lg:w-1/2">
        <form method="post" className="flex flex-col px-4 text-pureWhite ">
          <input type="text" name="name"placeholder="NAME" className="p-4  text-base font-medium border-b outline-none bg-transparent focus:border-lightGreen"/>
          <input type="email" name="email"placeholder="EMAIL" className="p-4 text-base font-medium border-b pt-8 outline-none bg-transparent focus:border-lightGreen"/>
          <textarea name="message" id="" placeholder="MESSAGE" className="p-4 text-base font-medium pt-8 outline-none border-b block mb-8 bg-transparent focus:border-lightGreen resize-none" rows={4}></textarea>
          <button className="self-end border-lightGreen border-b-2 pb-3 hover:text-lightGreen tracking-[.14em]">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  )
}

export default Contact