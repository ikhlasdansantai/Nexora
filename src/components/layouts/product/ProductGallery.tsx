import { HeartButton } from "@/components/ui/heart-icon-button";
import ProductColorSelector from "@/components/ui/product-color-generator";
import { useState } from "react";

export default function ProductGallery({ icon }: { icon: string }) {
  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <div className="flex flex-col-reverse gap-5">
      <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <ThumbExtra icon={icon} state={selectedColor} setState={setSelectedColor} />
      </div>
      <MainThumbnail state={selectedColor} icon={icon} />
    </div>
  );
}

function ThumbExtra({ icon, state, setState }: { icon: string; state: string; setState: (state: string) => void }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <ProductColorSelector color="blue" icon={icon} isSelected={state === "blue"} onClick={() => setState("blue")} />
      <ProductColorSelector color="gray" icon={icon} isSelected={state === "gray"} onClick={() => setState("gray")} />
      <ProductColorSelector color="red" icon={icon} isSelected={state === "red"} onClick={() => setState("red")} />
      <ProductColorSelector color="green" icon={icon} isSelected={state === "green"} onClick={() => setState("green")} />
    </div>
  );
}

function MainThumbnail({ icon, state }: { icon: string; state: string }) {
  return (
    <div className="w-full aspect-square">
      <div className="w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative">
          <ProductColorSelector icon={icon} color={state} size="xl" />
          <div className="absolute top-4 right-4">
            <button className="bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <HeartButton />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
