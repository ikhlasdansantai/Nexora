import "@/App.css";
import { Badge } from "@/components/ui/badge";
import BrandsSection from "@/components/sections/Brands";
import Navbar from "@/components/layouts/navbar/main";

function App() {
  return (
    <div className="bg-background">
      <div className="mx-auto relative px-8 sm:px-24 py-28 bg-primary/65 rounded-lg flex items-center">
        <div className="titles text-left w-full">
          <Navbar />
          <Badge variant="secondary">Powered By React & Typescript</Badge>
          <h1
            className="font-semibold text-3xl sm:text-5xl text-left
          text-[rgb(13, 12, 34)] sm:max-w-[15ch] sm:leading-14 my-4"
          >
            Discover Our Top Level Brands
          </h1>
          <p className="mt-2.5">Explore a curated collection of high-quality products from top-tier brands, all in one place.</p>
        </div>
      </div>

      <BrandsSection />
    </div>
  );
}

export default App;
