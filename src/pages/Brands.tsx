import BrandLoader from "@/components/layouts/brand/BrandLoader";
import BrandItem from "@/components/layouts/brands/BrandItem";
import Navbar from "@/components/layouts/navbar/main";
import { Badge } from "@/components/ui/badge";
import { useBrands } from "@/hooks/useBrands";
import NotFound from "./NotFound";

export default function BrandsPage() {
  const { brands, isPending, error } = useBrands();

  if (error) return <p>An error occurred while fetching the data. Please try again later.</p>;
  if (isPending) return <BrandLoader />;
  if (!brands) return <NotFound title="404 - Brands's Not Found" description="Oops! The brands you are looking for does not exist. It might have been moved or deleted." />;

  return (
    <main>
      <section className="hero__section mx-auto relative px-8 sm:px-24 pt-28 pb-24 bg-primary/65 rounded-lg flex items-center">
        <div className="titles text-center w-full mx-auto">
          <Navbar />
          <Badge variant="secondary">Brands</Badge>
          <h1
            className="font-semibold text-3xl sm:text-5xl text-center
          text-[rgb(13, 12, 34)] md:w-1/2 mx-auto sm:leading-14 my-4"
          >
            Find the Brand That Fits Your Style
          </h1>
          <p className="mt-2.5">All the creativity, all the quality right here in one place.</p>
        </div>
      </section>

      <section className="mt-10 sm:mt-20">
        <BrandItem data={brands} />
      </section>
    </main>
  );
}
