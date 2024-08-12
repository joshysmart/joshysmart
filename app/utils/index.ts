import nodemailer from "nodemailer";

export const sendEmail = async (email: {
  email: string;
  body: string;
  name: string;
}) => {
  // Create a SMTP transporter object
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_FROM,
      pass: process.env.SMTP_PASS,
    },
  });

  // Message object
  const message = {
    from: `Sender Name <${process.env.SMTP_FROM}>`,
    to: `Recipient <${process.env.SMTP_TO}>`,
    subject: "I have a job for you 🚀",
    text: `${email.body} from ${email.email}`,
    html: `<strong>Message from ${email.name} ${email.email} \n ${email.body}</strong>`,
  };

  try {
    const info = await transporter.sendMail(message);
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err: any) {
    console.error("Error occurred. " + err.message);
  }
};

export const getMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = Math.random() > 0.5 ? "+" : "-";

  const question = `${num1} ${operation} ${num2}`;
  const answer = operation === "+" ? num1 + num2 : num1 - num2;

  return {
    question,
    answer,
  };
};
