import { mockBrands } from "@/const/mock-data";

export async function getBrandById(id: string) {
  await new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, 2000)
  );

  const brand = mockBrands.find((brand) => brand.id === id);
  return brand;
}
