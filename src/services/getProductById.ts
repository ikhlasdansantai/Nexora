import { mockBrands } from "@/const/mock-data";

export async function getProductById(id: string) {
  await new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, 2000)
  );

  for (const brand of mockBrands) {
    const product = brand.products.find((p) => p.id === id);
    if (product) return product;
  }

  return null;
}
