import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Brand } from "@/const/interfaces";
import { NavLink } from "react-router";

export default function BrandItem({ data }: { data: Brand[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 gap-y-12">
      {data.map((brand) => (
        <NavLink key={brand.id} to={`/brand/${brand.id}`}>
          <Card className="border-0 shadow-none h-full cursor-pointer group p-0">
            <CardHeader className="relative bg-secondary py-10">
              <div className="flex items-center rounded-t-lg p-12">
                <img src={brand.logo || "/placeholder.png"} alt={`${brand.name} logo`} className="block aspect-square m-auto  object-contain w-1/2 group-hover:scale-105 transition-transform duration-300" />
              </div>

              <span className="flex items-center absolute bottom-0 right-0 size-14 rounded-md rounded-bl-none rounded-tr-none bg-background">
                <figure className="p-2 bg-amber-200 rounded-full m-auto -rotate-45 group-hover:rotate-0 transition-transform duration-400">
                  <ArrowRight className="size-6" />
                </figure>
              </span>
            </CardHeader>
            <CardContent className="p-0 pl-2 -mt-4">
              <p className="text-2xl">{brand.name}</p>
              <p className="text-muted-foreground text-sm">Est. {brand.founded}</p>
            </CardContent>
          </Card>
        </NavLink>
      ))}
    </div>
  );
}
