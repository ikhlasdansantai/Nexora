import SheetCheckout from "@/components/SheetCheckout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ProductActions() {
  return (
    <div className="actions mt-8 space-y-4">
      <SheetCheckout title="Add to cart" />
      <Button variant="secondary" className="w-full py-6 cursor-pointer rounded-2xl" onClick={() => toast.warning("This feature is not production ready 😁")}>
        Buy now
      </Button>
    </div>
  );
}
