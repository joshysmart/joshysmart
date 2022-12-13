import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Header from "./component/header";
import Footer from "./component/footer";

import globalStylesUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  name:"viewport",
  content: ["width=device-width","IE=edge"],
  initialScale:"1.0",
  httpEquiv:"X-UA-Compatible",
  description:
    "Hello, my name is Joshua and i love to code. Interested in building a project together?",
  keywords: "remix, react, javascript, frontend mentor, portfolio, joshysmart",
  title: "Sani Joshua",
});


export default function App() {
  return (
    <Document title="Sani Joshua">
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </Document>
  );
}

function Document({ children }:any) {
  return (
  <html lang="en">
  <head>
    <Meta />
    <Links/>
  </head>
  <body>
    <div className="wrapper">
      {children}
    </div>
  </body>
  </html>
  )
}

export function ErrorBoundary({ error }:any) {
  console.log(error);
  return (
    <Document>
      <Header />
        <h1 className="text-pureWhite font-bold text-7xl p-6">Error</h1>
        <p className="text-pureWhite text-base mb-10 p-6">{error.message}</p>
        <Footer />
    </Document>
  );
}
