import { Cloud } from "lucide-react";
import { NavLink } from "@/components/NavLink";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Cloud className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">UTOPIA</span>
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground"
          >
            Feed
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
