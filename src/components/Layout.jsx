import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
// The <Outlet> component is a placeholder within a parent route's component that tells React Router where to render the child routes. It acts like a dynamic container that changes its content based on the current URL.//
