import { Outlet } from "@remix-run/react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Index() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer actionData={undefined} />
    </>
  );
}
