import { NavLink, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { navItems } from "@/const/static";

export default function Navbar() {
  const location = useLocation();
  return (
    <header className="absolute left-[-1px] top-[-2px] bg-background py-3 px-6">
      <nav className="flex gap-10 items-center">
        <p className="font-semibold">Nexora_</p>
        <ul className="sm:flex items-center gap-6 hidden">
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
