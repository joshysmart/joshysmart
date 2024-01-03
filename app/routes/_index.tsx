import SGMail from "@sendgrid/mail";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useActionData } from "@remix-run/react";
import Overlay from "../components/overlay";
import { useRef } from "react";
import Hero from "../components/hero";
import Line from "../components/line";
import TechStack from "../components/tech-stack";
import AboutMe from "../components/about-me";
import Experience from "../components/experience";

const validateName = (name: string) => {
  if (name.length < 3) {
    return "Please use a valid name";
  }
};

const validateEmail = (email: string) => {
  if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return "Sorry, invalid format here";
  }
};

function badRequest(data: any) {
  return json(data, { status: 400 });
}

export async function action({ request }: ActionFunctionArgs) {
  const secretPass: any = process?.env.SMTP_PASSWORD;
  const from = process?.env.SMTP_FROM;
  const to: any = process?.env.SMTP_TO;

  const formData = await request.formData();
  const name: any = formData?.get("name");
  const email: any = formData?.get("email");
  const message = formData.get("message");

  const fields = { name, email, message };

  const fieldErrors = {
    name: validateName(name),
    email: validateEmail(email),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  SGMail.setApiKey(secretPass);

  const mailOptions: any = {
    to: to,
    from: from,
    subject: "I have a job for you",
    text: `${message} from ${email}`,
    html: `<strong>Message from ${name} ${email} \n ${message}/strong>`,
  };

  SGMail.send(mailOptions)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  return { success: true, fields };
}

export default function Index() {
  const actionData = useActionData();
  const wrapperEl = useRef(null);

  return (
    <div
      className={`wrapper relative ${actionData?.success && "overlay"}`}
      ref={wrapperEl}
    >
      <Nav />
      <main>
        <Hero />
        <Line />
        <TechStack />
        <AboutMe />
        <Experience />
      </main>
      <Footer actionData={actionData} />
      <Overlay />
    </div>
  );
}
