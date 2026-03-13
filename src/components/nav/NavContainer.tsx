import NavLink from "./NavLink";

export interface INavLink {
  href: string;
  label: string;
  exact?: boolean;
}

const navLinks: INavLink[] = [
  {
    href: "/",
    label: "Home",
    exact: true,
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function NavContainer() {
  return (
    <nav className="p-2 flex gap-2 text-lg">
      {navLinks.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </nav>
  );
}
