import BrandLoader from "@/components/layouts/brand/BrandLoader";
import { useParams } from "react-router";
import SecondaryNavbar from "@/components/layouts/navbar/SecondaryNavbar";
import { useBrandById } from "@/hooks/useBrandById";
import BrandProfile from "@/components/layouts/brand/BrandProfile";
import ProductSection from "@/components/layouts/brand/BrandProductSection";
import NotFound from "./NotFound";

export default function BrandDetail() {
  const params = useParams();
  const { brand, isPending } = useBrandById(params.id as string);

  if (isPending) return <BrandLoader />;
  if (!brand) return <NotFound title="404 - Brand's Not Found" description="Oops! The brand you are looking for does not exist. It might have been moved or deleted." />;

  return (
    <section className="w-full max-w-6xl relative pt-26">
      <SecondaryNavbar />
      <BrandProfile logo={brand.logo} name={brand.name} description={brand.description} bio={brand.bio} website={brand.website} />

      <h2 className="mt-16 mb-4 font-semibold text-xl">Products ({brand.products.length})</h2>
      <ProductSection brand={brand} />
    </section>
  );
}
