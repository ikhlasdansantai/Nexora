import type { ProductColorSelectorProps, Size } from "@/const/interfaces";
import { cn } from "@/lib/utils";

export default function ProductColorSelector({ color, icon, isSelected, size = "md", ...props }: ProductColorSelectorProps) {
  const borderColor = isSelected ? "border-primary-500" : "border-gray-200 hover:border-gray-300";

  const colorClasses: { [key: string]: string } = {
    blue: "from-blue-100 to-blue-200 text-blue-600",
    gray: "from-gray-100 to-gray-200 text-gray-600",
    red: "from-red-100 to-red-200 text-red-600",
    green: "from-green-100 to-green-200 text-green-600",
  };
  const selectedColor = colorClasses[color] || "";

  const sizeClasses: { [key in Size]: string } = {
    sm: "text-base",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-9xl",
  };
  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <button className={cn("aspect-square bg-white rounded-lg border overflow-hidden focus:outline-none h-full w-full", borderColor)} {...props}>
      <div className={cn("w-full h-full bg-gradient-to-br flex items-center justify-center", selectedColor)}>
        <div className={cn("font-bold", selectedSize)}>{icon}</div>
      </div>
    </button>
  );
}
