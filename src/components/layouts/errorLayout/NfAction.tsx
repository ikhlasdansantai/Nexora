import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { NavLink } from "react-router";

export default function NotFoundAction() {
  return (
    <div className="pt-4 border-t border-border">
      <p className="text-xs text-muted-foreground mb-3">Looking for something specific?</p>
      <Button variant="ghost" size="sm" className="text-xs" asChild>
        <NavLink to="/brands">
          <SearchIcon className="w-3 h-3 mr-2" />
          Browse All Brands
        </NavLink>
      </Button>
    </div>
  );
}
