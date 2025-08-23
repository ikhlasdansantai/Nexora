import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, MailIcon } from "lucide-react";
import { NavLink } from "react-router";
import { toast } from "sonner";

export default function UnderConstructionActions() {
  return (
    <div className="flex flex-col gap-3">
      <Button asChild className="w-full">
        <NavLink to="/">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Home
        </NavLink>
      </Button>

      <Button variant="outline" className="w-full bg-transparent" onClick={() => toast.info("Coming soon! 🤗")}>
        <MailIcon className="w-4 h-4 mr-2" />
        Get Notified
      </Button>
    </div>
  );
}
