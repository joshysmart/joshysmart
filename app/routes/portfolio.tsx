import AboutMe from "~/component/about-me";
import Hero from "~/component/hero"
import Line from "~/component/line";
import TechStack from "~/component/tech-stack";
import NodeMailer from "nodemailer";
import { json, redirect } from "@remix-run/node";
import Header from "~/component/header";
import Footer from "~/component/footer";
import { useActionData } from "@remix-run/react";

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

const secretPass = process.env.REACT_APP_PASS
// const secretPass = process.env.DATABASE_URL

export const action = async ({request}:any) => {
  const formData = await request.formData();
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message");

  const fields = { name, email, message };

  const fieldErrors = {
    name: validateName(name),
    email: validateEmail(email),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  var transporter = NodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fifthtribe05@gmail.com',
      pass: secretPass
    }
  });
  
  var mailOptions = {
    from: email,
    to: 'fifthtribe05@gmail.com',
    subject: 'I have a job for you',
    text: `${message} from ${email}`
  };
  
  transporter.sendMail(mailOptions, function(error: any, info: { response: string; }){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  return redirect("/portfolio");
}

export default function Index() {
  const actionData = useActionData();

  return (
    <main >
      <Header />
        <Hero/>
        <Line/>
        <TechStack/>
        <AboutMe/>
      <Footer actionData={actionData}/>

    </main>
  );
}