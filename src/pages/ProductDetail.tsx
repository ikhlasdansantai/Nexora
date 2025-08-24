import SecondaryNavbar from "@/components/layouts/navbar/SecondaryNavbar";
import { Button } from "@/components/ui/button";
import { useBrandById } from "@/hooks/useBrandById";
import { useProductById } from "@/hooks/useProdcutById";
import { ArrowLeftIcon } from "lucide-react";
import { NavLink, useParams } from "react-router";
import ProductTemplate from "@/components/containers/ProductTemplate";
import ProductDetailLoader from "@/components/layouts/product/ProductDetailLoader";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { brandId, productId } = useParams();
  const { product, isPending, error } = useProductById(productId as string);
  const { brand } = useBrandById(brandId as string);

  if (isPending) return <ProductDetailLoader />;
  if (error) return <p>An error occurred while fetching the data. Please try again later.</p>;
  if (!product) return <NotFound title="404 - Product's Not Found" description="Oops! The product you are looking for does not exist. It might have been moved or deleted." />;

  const { price, title, icon, description, discount } = product;
  return (
    <section className="relative pt-20">
      <SecondaryNavbar />

      <Button variant="ghost" className="cursor-pointer" asChild>
        <NavLink to={`/brand/${brandId}`}>
          <ArrowLeftIcon />
          Back to {brand?.name} products
        </NavLink>
      </Button>

      <div
        className="lg:grid lg:grid-cols-2 lg:gap-x-10 lg:items-start w-full mt-4
      "
      >
        <ProductTemplate icon={icon} title={title} price={price} discount={discount} description={description} />
      </div>
    </section>
  );
}
