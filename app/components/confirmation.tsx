import { Link } from "@remix-run/react";

export default function Confirmation(props: { success: any; user: any }) {
  const success = props.success;
  const user = props.user;

  return (
    <div
      className={`${!success && "open"} absolute top-0 p-4 md:p-8 left-0 z-30`}
    >
      <div className=" bg-darkGray  text-pureWhite p-4 md:p-8 w-full m-0 rounded-lg  ">
        <section className="flex flex-col items-center">
          <div className="tick"></div>
          <h3 className="text-sm font-bold text-center">Message Sent</h3>
          <p className="text-lightGray px-4 text-base font-medium text-center  md:text-mdp my-6 mb-8">{`Thank you for reaching out ${user}. Please check your email for my reponse I will love to hear more about your project`}</p>
          <Link
            to="/"
            className="bg-lightGreen outline-0 border-0 w-full p-2 font-bold text-center"
          >
            OK
          </Link>
        </section>
      </div>
    </div>
  );
}

