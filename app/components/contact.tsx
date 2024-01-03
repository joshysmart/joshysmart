import { Form } from "@remix-run/react";
import Confirmation from "./confirmation";

const Contact = (props: { actionData: any }) => {
  const error = props.actionData?.fieldErrors;
  const user = props.actionData?.fields;
  const success = props.actionData?.success;

  return (
    <div
      id="contact"
      className="flex flex-col py-16 pb-20 md:max-w-md md:m-auto lg:flex-row lg:m-0 lg:justify-between lg:min-w-full lg:px-8 xl:px-40"
    >
      <section className="left-section lg:w-2/5">
        <h2 className="text-pureWhite px-4 text-sm font-bold mb-8 text-center md:text-md lg:text-lg lg:text-left lg:leading-[88px]">
          Contact
        </h2>
        <p className="text-lightGray px-4 text-base font-medium text-center mb-12 md:text-mdp lg:text-left">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </section>
      <div className="right-section lg:w-2/5 relative">
        <Form
          method="post"
          className="flex flex-col px-4 text-pureWhite "
          action="/?index"
        >
          <label htmlFor="name" className="relative">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="NAME"
              className={`p-4  text-base font-medium border-b outline-none bg-transparent focus:border-lightGreen w-full ${
                error?.name && "border-red-500"
              }`}
              defaultValue={user?.name}
              required
            />
            {error?.name && (
              <span
                className="block border border-red-500 w-6 h-6 text-center rounded-full text-red-500 absolute right-4 bottom-4"
                aria-live="polite"
              >
                !
              </span>
            )}
          </label>
          <span
            className="text-right block mt-1 text-red-500"
            aria-live="polite"
          >
            {error?.name && error?.name}
          </span>
          <label htmlFor="email" className="relative">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="EMAIL"
              className={`p-4 text-base font-medium border-b pt-8 outline-none bg-transparent focus:border-lightGreen w-full ${
                error?.email && "border-red-500"
              }`}
              defaultValue={user?.email}
              required
            />
            {error?.email && (
              <span
                className="block border border-red-500 w-6 h-6 text-center rounded-full text-red-500 absolute right-4 bottom-4"
                aria-live="polite"
              >
                !
              </span>
            )}
          </label>
          <span
            className="text-right block mt-1 text-red-500"
            aria-live="polite"
          >
            {error?.email && error?.email}
          </span>
          <textarea
            name="message"
            id="message"
            placeholder="MESSAGE"
            className="p-4 text-base font-medium pt-8 outline-none border-b block mb-8 bg-transparent focus:border-lightGreen resize-none"
            rows={4}
            defaultValue={user?.message}
            required
          ></textarea>
          <button
            className="self-end border-lightGreen border-b-2 pb-3 hover:text-lightGreen tracking-[.14em]"
            type="submit"
          >
            SEND MESSAGE
          </button>
          <Confirmation success={success} user={user?.name} />
        </Form>
      </div>
    </div>
  );
};

export default Contact;

