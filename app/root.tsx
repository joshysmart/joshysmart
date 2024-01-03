import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "./tailwind.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => [
  {
    description:
      "Hello, my name is Joshua and i love to code. Interested in building a project together?",
    keywords:
      "remix, react, javascript, frontend mentor, portfolio, joshysmart",
    title: "Sani Joshua",
  },
  { name: "description", content: "Welcome to my portfolio!" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: any) {
  console.log(error);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <h1 className="text-pureWhite font-bold text-7xl p-6">Error</h1>
        <p className="text-pureWhite text-base mb-10 p-6">{error?.message}</p>
        <Footer actionData={undefined} />
      </body>
    </html>
  );
}
