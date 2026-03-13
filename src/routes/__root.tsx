import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavContainer from "../components/nav/NavContainer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <NavContainer />
      <hr />
      <Outlet />
    </>
  );
}
