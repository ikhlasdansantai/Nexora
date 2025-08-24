import { useBrands } from "@/hooks/useBrands";
import BrandsMain from "../layouts/brands/BrandsSection";
import BrandError from "../layouts/brands/BrandError";
import BrandsLoader from "../layouts/brands/BrandsLoader";

export default function BrandsSection() {
  const { brands, isPending, error } = useBrands();

  if (error) return <BrandError />;
  if (isPending) return <BrandsLoader />;
  if (!brands) return <p>Tidak ada data</p>;

  return (
    <section className="mt-10">
      <BrandsMain />
    </section>
  );
}
