import { Link } from "@tanstack/react-router";
import { INavLink } from "./NavContainer";

export default function NavLink({
  href,
  label,
  exact = false,
}: Readonly<INavLink>) {
  return (
    <Link
      to={href}
      activeProps={{
        className: "font-bold",
      }}
      activeOptions={{ exact }}
    >
      {label}
    </Link>
  );
}
