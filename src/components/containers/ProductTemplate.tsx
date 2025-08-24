import ProductActions from "@/components/layouts/product/ProductAction";
import ProductDescription from "@/components/layouts/product/ProductDescription";
import ProductFeatures from "@/components/layouts/product/ProductFeatures";
import ProductGallery from "@/components/layouts/product/ProductGallery";
import ProductPrice from "@/components/layouts/product/ProductPrice";
import ProductRating from "@/components/layouts/product/ProductRating";
import ProductTitles from "@/components/layouts/product/ProductTitles";

export default function ProductTemplate({ icon, title, price, discount, description }: { icon: string; title: string; price: number; discount: number; description: string }) {
  return (
    <>
      <ProductGallery icon={icon} />
      <div className="mt-10 sm:mt-16 lg:mt-0">
        <ProductTitles title={title} />

        <ProductRating />
        <ProductPrice price={price} discount={discount} />
        <ProductDescription description={description} />
        <ProductActions />
        <ProductFeatures />
      </div>
    </>
  );
}
