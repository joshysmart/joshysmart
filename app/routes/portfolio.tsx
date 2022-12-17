import SGMail from "@sendgrid/mail"
import type { ActionArgs} from "@remix-run/node";
import { json } from "@remix-run/node";
import Nav from "~/component/nav";
import Footer from "~/component/footer";
import { Outlet, useActionData } from "@remix-run/react";
import Overlay from "~/component/overlay";
import { useRef } from "react";

const validateName = (name:string) => {
  if (name.length < 3) {
    return "Please use a valid name";
  }
};

const validateEmail = (email:string) => {
  if (!email.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {
    return "Sorry, invalid format here";
  }
};

function badRequest(data:any) {
  return json(data, { status: 400 });
}

export async function action({ request }: ActionArgs) {  
  const secretPass:any = process?.env.SMTP_PASSWORD
  const from = process?.env.SMTP_FROM
  const to:any = process?.env.SMTP_TO

  const formData = await request.formData();
  const name:any = formData?.get("name")
  const email:any = formData?.get("email")
  const message = formData.get("message");

  const fields = { name, email, message };

  const fieldErrors = {
    name: validateName(name),
    email: validateEmail(email),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  SGMail.setApiKey(secretPass)

  const mailOptions:any = {
    to: to,
    from: from,
    subject: "I have a job for you",
    text: `${message} from ${email}`,
    html: '<strong>I await your response</strong>',
  }

  SGMail.send(mailOptions).then(() => {
    console.log("Email sent")
  }).catch((error) => {
    console.error(error)
  })
      
  return {success: true, fields};
}

export default function Portfolio() {
  const actionData = useActionData();
  const wrapperEl = useRef(null)

  return (
    <div className={`wrapper relative ${actionData?.success && "overlay"}`} ref={wrapperEl}>
      <Nav />
        <main>
          <Outlet/>
        </main>
      <Footer actionData={actionData} wrapperEl={wrapperEl}/>
      <Overlay />
    </div>
  );
}