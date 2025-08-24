import { ShieldIcon, TruckIcon } from "lucide-react";

export default function ProductFeatures() {
  return (
    <div className="mt-10 border-t border-gray-200 pt-8">
      <div className="box__input flex items-center flex-wrap gap-10 gap-y-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <TruckIcon className="w-4 h-4" />
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <ShieldIcon className="w-4 h-4" />
          <span>1 year manufacturer warranty</span>
        </div>
      </div>
    </div>
  );
}
