import { Button } from "@/components/ui/button";
import type { BrandProfileProps } from "@/const/interfaces";
import { EarthIcon } from "lucide-react";

export default function BrandProfile({ logo, name, description, bio, website }: BrandProfileProps) {
  return (
    <>
      <figure className="size-20 aspect-square object-cover flex items-center bg-accent rounded-lg p-3">
        <img src={`${logo || "/placeholder.png"}  `} alt="logo-placeholder" className="max-w-full block" />
      </figure>
      <p className="text-lg sm:text-2xl mt-4">{name}</p>
      <p className="text-3xl sm:text-4xl font-bold my-3.5 leading-[1.45]">{description}</p>
      <p>{bio}</p>

      <Button className="flex items-center gap-3 mt-3.5 !p-0 cursor-pointer" variant="link">
        <EarthIcon />
        {website}
      </Button>
    </>
  );
}
