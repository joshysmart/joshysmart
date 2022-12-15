const Contact = (props:{actionData:any}) => {
  const error = props.actionData?.fieldErrors
  const user = props.actionData?.fields
  return (
    <section className="flex flex-col py-16 pb-20 md:max-w-md md:m-auto lg:flex-row lg:m-0 lg:justify-between lg:min-w-full lg:px-8 xl:px-40 lg:space-x-36">
      <div className="left-section lg:w-1/2">
        <h2 className="text-pureWhite px-4 text-sm font-bold mb-8 text-center md:text-md lg:text-lg lg:text-left lg:leading-[88px]">Contact</h2>
        <p className="text-lightGray px-4 text-base font-medium text-center mb-12 md:text-mdp lg:text-left">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
      </div>
      <div className="right-section lg:w-1/2 relative">
        <form action="/portfolio" method="post"  className="flex flex-col px-4 text-pureWhite ">
          <label htmlFor="name" className="relative">
            <input type="text" name="name"placeholder="NAME" className={`p-4  text-base font-medium border-b outline-none bg-transparent focus:border-lightGreen w-full ${error?.name && "border-red-500"}`} defaultValue={user?.name}/> 
            {error?.name && <span className="block border border-red-500 w-6 h-6 text-center rounded-full text-red-500 absolute right-4 bottom-4">!</span>}
          </label>
          <span className="text-right block mt-1 text-red-500">{error?.name && error?.name}</span>
          <label htmlFor="email" className="relative">
            <input type="email" name="email"placeholder="EMAIL" className={`p-4 text-base font-medium border-b pt-8 outline-none bg-transparent focus:border-lightGreen w-full ${error?.email && "border-red-500"}`} defaultValue={user?.email}/>
            {error?.email && <span className="block border border-red-500 w-6 h-6 text-center rounded-full text-red-500 absolute right-4 bottom-4">!</span>}
          </label>
          <span className="text-right block mt-1 text-red-500">{error?.email && error?.email}</span>
          <textarea name="message" id="" placeholder="MESSAGE" className="p-4 text-base font-medium pt-8 outline-none border-b block mb-8 bg-transparent focus:border-lightGreen resize-none" rows={4} defaultValue={user?.message}></textarea>
          <button className="self-end border-lightGreen border-b-2 pb-3 hover:text-lightGreen tracking-[.14em]">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  )
}

export default Contact