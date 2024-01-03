import invoiceAppHero from "../../public/assets/images/invoice-hero.webp";
import invoiceAppTop from "../../public/assets/images/invoice-one.webp";
import invoiceAppBottom from "../../public/assets/images/invoice-two.webp";
import urlShortnerHero from "../../public/assets/images/url-shortner-one.webp";
import urlShortnerBottom from "../../public/assets/images/url-shortner-two.webp";
import audiophileHero from "../../public/assets/images/audiophile-hero.webp";
import audiophileTop from "../../public/assets/images/audiophile-one.webp";
import audiophileBottom from "../../public/assets/images/audiophile-two.webp";

const projects: {
  [key: string]: {
    tech: string[];
    bookmark: string;
    live: string;
    prev: string;
    next: string;
    images: {
      hero: string;
      "top-section": string;
      "bottom-section": string;
    };
  };
} = {
  audiophile: {
    tech: ["HTML", "CSS", "React", "SCSS", "JS", "Prisma", "MongoDb", "Remix"],
    bookmark:
      "This project required me to build an e-comerce app which is a fully responsive multi page e-commerce website with interactive elements and forms. I took it up a notch by building it as a full stack application that allows users to be authenticated and authorised before adding items to the cart",
    live: "https://audiophile-ecommerce.vercel.app/",
    next: "projects/invoice-app",
    prev: "projects/url-shortner",
    images: {
      hero: audiophileHero,
      "top-section": audiophileTop,
      "bottom-section": audiophileBottom,
    },
  },
  "invoice-app": {
    tech: ["HTML", "CSS", "React", "SCSS", "JS", "Prisma", "MongoDb", "Remix"],
    bookmark:
      "This project required me to build a fully responsive invoice app. The challenge was to build the invoice application and get it looking as close to the design as possible. I also implemented authentication for users to manage their invoice individually. I used HTML5, along with CSS Grid and Javascript, React, Remix, Prisma for the database, and managing invoices",
    live: "https://invoice-app-ten.vercel.app/",
    prev: "projects/audiophile",
    next: "projects/url-shortner",
    images: {
      hero: invoiceAppHero,
      "top-section": invoiceAppTop,
      "bottom-section": invoiceAppBottom,
    },
  },
  "url-shortner": {
    tech: ["HTML", "CSS", "React", "SCSS", "JS"],
    bookmark:
      "This project required me to build a fully responsive url shortner based on the designs provided. I used the shrtcode API to create shortened URLs and displayed them on the page where it can be copied to the cliboard. It was built using React, HTML5, along with CSS Grid, Sass, and Javascript for the areas that required interactivity, such as the input section",
    live: "https://url-shortening-api-tau.vercel.app/",
    prev: "projects/invoice-app",
    next: "projects/audiophile",
    images: {
      hero: urlShortnerHero,
      "top-section": urlShortnerHero,
      "bottom-section": urlShortnerBottom,
    },
  },
};

export default projects;
