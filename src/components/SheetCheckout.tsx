import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleCheckIcon } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { VolumeControl } from "./ui/checkout-price-control";

export default function SheetCheckout({ title }: { title: string }) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="w-full" asChild>
        <Button className="py-6 cursor-pointer rounded-2xl">{title}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Your Cart <span className="bg-secondary rounded-full p-1 ml-2">1</span>
          </SheetTitle>
          <SheetDescription className="mt-1.5">This is a placeholder for the checkout feature. It is currently non-functional and is for demonstration purposes only -root.</SheetDescription>

          <CheckOutItem />
        </SheetHeader>
        <SheetFooter className="border-t space-y-4">
          <div className="price__info flex justify-between font-semibold">
            <p>Subtotal</p>
            <p>$200.00</p>
          </div>

          <Button
            type="submit"
            className="py-7 cursor-pointer"
            onClick={() => {
              setSheetOpen(false);
              toast(<ActionSuccess />);
            }}
          >
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function CheckOutItem() {
  return (
    <div className="flex items-center gap-6 w-full mt-4">
      <p className="text-4xl p-3 bg-secondary rounded-lg">🥽</p>

      <div className="titles w-full">
        <p>Vintage Kacamata Renang</p>
        <p className="text-sm text-muted-foreground ">Warna Biru</p>
        <div className="actions mt-1.5">
          <VolumeControl />
        </div>
      </div>
    </div>
  );
}

function ActionSuccess() {
  return (
    <div className="bg-background z-50 max-w-[400px] rounded-md p-4">
      <div className="flex gap-2">
        <div className="flex grow gap-3">
          <CircleCheckIcon className="mt-0.5 shrink-0 text-emerald-500" aria-hidden="true" />
          <div className="flex grow flex-col gap-3">
            <div className="space-y-1">
              <p className="font-semibold">Order Successfully Processed!</p>
              <p className="text-muted-foreground text-sm">Thank you for your purchase. We will process your order shortly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
