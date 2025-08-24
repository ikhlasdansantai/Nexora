import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import ProductLogoPlaceholder from "./BrandProductLogo";
import type { ProductProps } from "@/const/interfaces";

export default function ProductItem({ products }: { products: ProductProps[] }) {
  return (
    <>
      {products.map((product: ProductProps, i) => (
        <NavLink to={`product/${product.id}`} key={i} className="w-full group cursor-pointer relative z-10">
          <Card className="border-0 shadow-none h-full cursor-pointer p-0 bg-transparent">
            <CardHeader className="p-0 relative group-hover:cursor-pointer">
              <ProductLogoPlaceholder emoji={product.icon} />
              <span className="flex items-center absolute bottom-0 right-0 size-14 rounded-md rounded-bl-none rounded-tr-none bg-background">
                <figure className="p-2 bg-amber-200 rounded-full m-auto -rotate-45 group-hover:rotate-0 transition-transform duration-400">
                  <ArrowRight className="size-6" />
                </figure>
              </span>
            </CardHeader>
            <CardContent className="p-0 -mt-4">
              <p className="text-2xl">{product.title}</p>
              <p>USD ${product.price}</p>
            </CardContent>
          </Card>
        </NavLink>
      ))}
    </>
  );
}
