import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { navItems } from "@/const/static";

export default function SecondaryNavbar() {
  return (
    <header className="fixed left-0 top-6 right-0 z-20">
      <nav className="max-w-7xl mx-auto">
        <ul className="inline-flex items-center gap-6 bg-secondary rounded-lg py-3 px-6 ml-8">
          {navItems.map(({ href, label }) => (
            <Button key={label} variant={`${location.pathname === href ? "default" : "ghost"}`} asChild>
              <NavLink to={href}>{label}</NavLink>
            </Button>
          ))}
        </ul>
      </nav>
    </header>
  );
}
