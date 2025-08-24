import type { ProductPriceProps } from "@/const/interfaces";
import { getDiscountPrice } from "@/lib/utils";

export default function ProductPrice({ price, discount }: ProductPriceProps) {
  return (
    <div className="mt-6">
      <IsProductDiscount price={price} discount={discount} />
    </div>
  );
}

function IsProductDiscount({ price, discount }: ProductPriceProps) {
  return (
    <div className="flex items-center space-x-3">
      {discount >= 10 ? (
        <>
          <span className="text-3xl font-bold text-gray-900">${getDiscountPrice(price, discount)}</span>
          <span className="text-xl text-gray-500 line-through">${price}</span>
          <span className="bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded">{discount}% OFF</span>
        </>
      ) : (
        <span className="text-3xl font-bold text-gray-900">${price}</span>
      )}
    </div>
  );
}
