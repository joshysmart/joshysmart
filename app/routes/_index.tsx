import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useRef } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Overlay from "../components/overlay";
import Hero from "../components/hero";
import Line from "../components/line";
import TechStack from "../components/tech-stack";
import AboutMe from "../components/about-me";
import Experience from "../components/experience";
import { sendEmail } from "~/utils";

// Validation functions
const validateName = (name: string) => {
  if (name.length < 3) {
    return "Please use a valid name";
  }
};

const validateEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.toLowerCase())) {
    return "Sorry, invalid format here";
  }
};

function badRequest(data: any) {
  return json(data, { status: 400 });
}

// Action function
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const math = formData.get("math") as string;
  const honeypot = formData.get("_honey") as string;
  const answer = formData.get("_answer") as string;

  const fields = { name, email, message };

  const fieldErrors = {
    name: validateName(name),
    email: validateEmail(email),
    capthca:
      parseInt(answer) !== parseInt(math)
        ? "Please solve the math problem"
        : undefined,
  };

  if (honeypot) {
    return badRequest({ success: false });
  }

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  await sendEmail({ email: email, body: message, name: name });

  return { success: true, fields };
}

// Index component
export default function Index() {
  const actionData = useActionData<{
    success?: boolean;
    fieldErrors?: { name?: string; email?: string };
    fields?: { name: string; email: string; message: string };
  }>();
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
