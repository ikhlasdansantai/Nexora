import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDiscountPrice(price: number, discount: number) {
  const discountAmount = price * (discount / 100);
  const finalPrice = price - discountAmount;

  return parseFloat(finalPrice.toFixed(2));
}
