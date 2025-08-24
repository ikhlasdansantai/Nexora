import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ShoppingCartIcon } from "lucide-react";
import { NavLink } from "react-router";

export default function ProductEmpty({ brandName }: { brandName: string }) {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
          <ShoppingCartIcon className="w-12 h-12 text-muted-foreground/60" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">No Products Yet</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          <b>{brandName} </b>
          hasn't added any products to their catalog yet. Check back later or explore other brands in the meantime.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <NavLink to="/">
            <Button variant="default" className="flex items-center gap-2 cursor-pointer w-full py-6">
              <ArrowLeftIcon className="w-4 h-4" />
              Browse Other Brands
            </Button>
          </NavLink>
          <Button variant="outline" onClick={() => window.location.reload()} className="cursor-pointer py-6">
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  );
}
