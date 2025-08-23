import { mockBrands } from "@/const/mock-data";

export async function getBrands() {
  await new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, 1)
  );
  return mockBrands;
}
